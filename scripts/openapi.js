require('dotenv').config({ quiet: true });

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const BASE_URL = `http://localhost:${process.env.OPEN_WEBUI_PORT}`;

const ROOT = process.cwd();
const OUTPUT_DIR = path.join(ROOT, 'open-webui');
const OPENAPI_PATH = path.join(OUTPUT_DIR, 'openapi.json');

try {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  console.log(`Fetching OpenAPI from ${BASE_URL}...`);

  const raw = execSync(`curl -f -s ${BASE_URL}/openapi.json`).toString();

  const parsed = JSON.parse(raw);

  fs.writeFileSync(OPENAPI_PATH, JSON.stringify(parsed, null, 2));

  if (!fs.existsSync(OPENAPI_PATH)) {
    throw new Error('OpenAPI file not created');
  }

  console.log(`✅ OpenAPI saved to ${OPENAPI_PATH}`);
} catch (error) {
  console.error('❌ Failed to fetch OpenAPI:', error.message);
  process.exit(1);
}
