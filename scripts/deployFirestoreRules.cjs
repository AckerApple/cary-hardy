#!/usr/bin/env node

const { spawnSync } = require('node:child_process')
const { readFileSync } = require('node:fs')
const { resolve } = require('node:path')

const mode = process.argv[2] === 'deploy' ? 'deploy' : 'check'
const rulesPath = resolve(process.cwd(), 'firestore.rules')
const rules = readFileSync(rulesPath, 'utf8')
const placeholderText = 'This default is intentionally locked down'

if (mode === 'deploy' && rules.includes(placeholderText)) {
  console.error('Refusing to deploy placeholder Firestore rules.')
  console.error('Paste the current production rules into firestore.rules first.')
  process.exit(1)
}

const args = ['deploy', '--only', 'firestore:rules', '--project', 'cardy-hardy']
if (mode === 'check') {
  args.push('--dry-run')
}

const result = spawnSync('firebase', args, {
  stdio: 'inherit',
  shell: process.platform === 'win32',
})

process.exit(result.status || 0)
