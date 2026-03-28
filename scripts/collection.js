const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = process.cwd();
const INPUT_PATH = path.join(ROOT, 'open-webui', 'openapi.json');
const OUTPUT_PATH = path.join(ROOT, 'open-webui', 'collection.json');

try {
  if (!fs.existsSync(INPUT_PATH)) {
    throw new Error('openapi.json not found. Run openapi.js first.');
  }

  console.log('Converting OpenAPI to Postman collection...');

  execSync(
    `npx openapi-to-postmanv2 -s ${INPUT_PATH} -o ${OUTPUT_PATH} --pretty`,
    { stdio: 'inherit' }
  );

  console.log(`✅ Collection saved to ${OUTPUT_PATH}`);
} catch (error) {
  console.error('❌ Conversion failed:', error.message);
  process.exit(1);
}