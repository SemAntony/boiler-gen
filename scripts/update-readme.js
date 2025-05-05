#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pkg from '../package.json' with { type: 'json' };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const readmePath = path.resolve(__dirname, '../README.md');
let readme = fs.readFileSync(readmePath, 'utf8');

const newVersionLine = `version: ${pkg.version}`;
readme = readme.replace(/version: \d+\.\d+\.\d+/i, newVersionLine);

fs.writeFileSync(readmePath, readme);
console.log(`✅ README.md updated to version ${pkg.version}`);
