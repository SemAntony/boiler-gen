#!/usr/bin/env node
import {run} from 'plop';
import {fileURLToPath} from 'url';
import {dirname, resolve} from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
process.chdir(resolve(__dirname, '..'));

run({
    configPath: resolve(__dirname, '../plopfile.js'),
});
