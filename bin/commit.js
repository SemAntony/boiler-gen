#!/usr/bin/env node
import {execSync} from 'child_process';
import readline from 'readline';

// Get a list of staged files
let changes = '';
try {
    changes = execSync('git diff --name-only --cached').toString();
} catch (error) {
    console.error('❌ Failed to get staged changes:', error.message);
    process.exit(1);
}

// Define commit message rules based on which files were changed
const rules = [
    {pattern: /^lib\//m, message: 'feat: update core library files'},
    {pattern: /^test\//m, message: 'test: update or add tests'},
    {pattern: /^templates\//m, message: 'chore: update component templates'},
    {pattern: /fix|bug/i, message: 'fix: bug fixes'},
];

let defaultMessage = 'chore: general commit';
for (const rule of rules) {
    if (rule.pattern.test(changes)) {
        defaultMessage = rule.message;
        break;
    }
}

// Show the suggested commit message
console.log(`\n💬 Suggested commit message: "${defaultMessage}"`);

// Ask the user to accept or override the message
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('📝 Enter a commit message (or press Enter to use the suggested one): ', (input) => {
    const message = input.trim() || defaultMessage;

    try {
        execSync(`git commit -m "${message}"`, {stdio: 'inherit'});
        console.log(`✅ Commit successful: ${message}`);
    } catch (error) {
        console.error('❌ Commit failed:', error.message);
    }

    rl.close();
});
