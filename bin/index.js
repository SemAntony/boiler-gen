#!/usr/bin/env node
import { run } from 'plop';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Правильный путь к plopfile.js (в корне проекта)
const plopfilePath = resolve(__dirname, '../plopfile.js');

// Запускаем Plop с этим файлом
run({
    configPath: plopfilePath
});
