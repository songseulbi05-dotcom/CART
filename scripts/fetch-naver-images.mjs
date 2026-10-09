#!/usr/bin/env node
// 네이버 쇼핑 검색 API로 실제 상품 이미지 URL을 가져와 js/data.js 의
// PRODUCT_IMAGES 블록을 자동으로 채워 넣는 스크립트.
//
// 이미지 파일 자체는 절대 다운로드/저장하지 않고, 네이버가 호스팅하는
// 이미지 주소(URL)만 저장합니다 — 화면에서는 그 주소를 그대로
// <img src="..."> 로 불러와 보여줍니다 (hotlink).
//
// 사용법:
//   1. https://developers.naver.com/apps/#/register 에서 애플리케이션 등록
//      (사용 API: "검색" 선택)
//   2. 프로젝트 루트에 .env 파일 생성:
//        NAVER_CLIENT_ID=발급받은_클라이언트_ID
//        NAVER_CLIENT_SECRET=발급받은_클라이언트_시크릿
//   3. 실행:
//        node scripts/fetch-naver-images.mjs

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

function loadEnv() {
  const envPath = path.join(ROOT, '.env');
  if (!fs.existsSync(envPath)) {
    console.error('[오류] .env 파일이 없습니다. 프로젝트 루트에 .env 파일을 만들고 아래 내용을 넣어주세요:\n');
    console.error('  NAVER_CLIENT_ID=발급받은_클라이언트_ID');
    console.error('  NAVER_CLIENT_SECRET=발급받은_클라이언트_시크릿\n');
    console.error('API 키는 https://developers.naver.com/apps/#/register 에서 무료로 발급받을 수 있습니다.');
    process.exit(1);
  }
  const env = {};
  for (const line of fs.readFileSync(envPath, 'utf-8').split('\n')) {
    const m = line.match(/^\s*([\w.-]+)\s*=\s*(.*?)\s*$/);
    if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
  return env;
}

const env = loadEnv();
const CLIENT_ID = env.NAVER_CLIENT_ID;
const CLIENT_SECRET = env.NAVER_CLIENT_SECRET;

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error('[오류] .env 에서 NAVER_CLIENT_ID / NAVER_CLIENT_SECRET 을 찾지 못했습니다.');
  process.exit(1);
}

const dataJsPath = path.join(ROOT, 'js', 'data.js');
const dataJs = fs.readFileSync(dataJsPath, 'utf-8');

// js/data.js 의 PRODUCTS 배열 범위 안에서만 { id, name } 쌍을 뽑아낸다.
// (CATEGORIES 배열도 id/name 필드를 쓰므로 전체 파일에서 찾으면 안 됨)
const productsStart = dataJs.indexOf('const PRODUCTS = [');
const productsEnd = dataJs.indexOf('\n];', productsStart);
if (productsStart === -1 || productsEnd === -1) {
  console.error('[오류] js/data.js 에서 PRODUCTS 배열을 찾지 못했습니다.');
  process.exit(1);
}
const productsSrc = dataJs.slice(productsStart, productsEnd);

const productRe = /id:\s*'([^']+)',\s*name:\s*'([^']+)'/g;
const products = [];
let m;
while ((m = productRe.exec(productsSrc))) {
  products.push({ id: m[1], name: m[2] });
}

if (products.length === 0) {
  console.error('[오류] js/data.js 의 PRODUCTS 배열에서 상품 목록(id, name)을 찾지 못했습니다.');
  process.exit(1);
}

async function searchImage(query) {
  const url = `https://openapi.naver.com/v1/search/shop.json?query=${encodeURIComponent(query)}&display=1`;
  const res = await fetch(url, {
    headers: {
      'X-Naver-Client-Id': CLIENT_ID,
      'X-Naver-Client-Secret': CLIENT_SECRET,
    },
  });
  if (!res.ok) {
    throw new Error(`HTTP ${res.status}: ${await res.text()}`);
  }
  const json = await res.json();
  const first = json.items && json.items[0];
  return first ? first.image : null;
}

const results = {};
let okCount = 0;

for (const p of products) {
  try {
    const image = await searchImage(p.name);
    if (image) {
      results[p.id] = image;
      okCount++;
      console.log(`  ✓ ${p.name}`);
    } else {
      console.log(`  ✗ ${p.name} (검색 결과 없음)`);
    }
  } catch (e) {
    console.log(`  ✗ ${p.name} (${e.message})`);
  }
  // 네이버 API 호출 속도 제한을 피하기 위한 짧은 간격
  await new Promise((r) => setTimeout(r, 150));
}

const block = `const PRODUCT_IMAGES = ${JSON.stringify(results, null, 2)};`;
const updated = dataJs.replace(/const PRODUCT_IMAGES = \{[\s\S]*?\};/, block);

if (updated === dataJs) {
  console.error('\n[오류] js/data.js 에서 PRODUCT_IMAGES 블록을 찾지 못해 갱신하지 못했습니다.');
  process.exit(1);
}

fs.writeFileSync(dataJsPath, updated);
console.log(`\n완료: ${okCount}/${products.length}개 상품의 이미지 URL을 js/data.js 에 저장했습니다.`);
