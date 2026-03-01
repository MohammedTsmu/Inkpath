/* ============================================================
   Inkpath — Version Sync Script
   Reads version from package.json and writes js/version.js
   
   Usage:  node scripts/sync-version.js
   Auto:   Runs before `npm start`, `npm run build:*`, and `npm version`
   ============================================================ */

const fs = require('fs');
const path = require('path');

const pkgPath = path.join(__dirname, '..', 'package.json');
const versionPath = path.join(__dirname, '..', 'js', 'version.js');

const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

const content = `/* ============================================================
   Inkpath — Version Config (auto-synced with package.json)
   Update the version here and it propagates everywhere.
   ============================================================ */

const APP_CONFIG = {
    name: '${pkg.name.charAt(0).toUpperCase() + pkg.name.slice(1)}',
    version: '${pkg.version}',
    tagline: 'Print your path to productivity.',
    copyright: 'Take control of your time, on paper.'
};
`;

fs.writeFileSync(versionPath, content, 'utf8');
console.log(`✓ Synced version to ${pkg.version} in js/version.js`);
