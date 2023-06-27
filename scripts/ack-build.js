import path from 'path'
import fs from 'fs'

const config = process.argv.find(arg => arg.includes('.json'))
const configFilePath = path.join(process.cwd(), config)

run()

const isWatch = process.argv.find(arg => arg.includes('--watch'))
if ( isWatch ) {
  const configFile = getConfigFile()
  console.log('📄 File 👀 watch mode on...')
  // Watch for changes using fs.watch
  fs.watch(configFile.compilerOptions.baseDir, { recursive: true }, async (eventType, filename) => {
    console.log(`📄 ${filename} changed. Rebuilding...`)
    await run()
  });
}

function getConfigFile() {
  const configFileString = fs.readFileSync(configFilePath).toString()
  return JSON.parse(configFileString)
}

async function run() {
  const configFile = getConfigFile()
  
  const baseDir = configFile.compilerOptions.baseDir
  const outDir = configFile.compilerOptions.outDir
  
  const templatePath = path.join(process.cwd(), baseDir, configFile.compilerOptions.wrapFile)
  const templateString = fs.readFileSync(templatePath).toString()
    const appFilePath = configFile.compilerOptions.appFile
  
  const appFullFilePath = path.join(process.cwd(), baseDir, configFile.compilerOptions.appFile)
  
  // overrides for browser items
  global.HTMLElement = class {}
  
  const appFile = (await import(appFullFilePath)).default
  const appFileSrcPath = path.join(appFilePath,'../')
  const outPath = path.join(process.cwd(), outDir)
  
  // copy all files first
  const srcFolder = path.join(process.cwd(), baseDir)
  const targetFolder = path.join(process.cwd(), outDir)
  copyFolderSync(srcFolder, targetFolder)

  function getRelativePath(filePath) {
    return path.join(process.cwd(), baseDir, appFileSrcPath, filePath)
  }

  function readRelativeFile(filePath) {
    const fullFilePath = getRelativePath(filePath)
    return fs.readFileSync(fullFilePath).toString()
  }
  
  function wrapTemplateByPath(filePath) {
    const someFileString = readRelativeFile(filePath)
    const fileTemplateString = `<template>${someFileString}</template>` // wrap in template so content is dynamic/interpolate-able
    const concatFileString = templateString.replace('%TEMPLATE%', fileTemplateString)
  
    return concatFileString.replace(/<\/head>/g,`
      <script type="module">
        import app from './${configFile.compilerOptions.appFile}'
        app()
      </script></head>
    `)
  }

  appFile.config.routes.forEach(route => {
    const injectedFileString = wrapTemplateByPath(route.template)
    const writePath = getRelativeOutPath(route.template)
    fs.writeFileSync(writePath, injectedFileString)
  })

  function getRelativeOutPath(filePath) {
    return path.join(outPath, filePath)
  }

  // write the index.html as defaultTemplate
  const defaultTemplatePath = appFile.config.defaultTemplate
  const defaultWrapped = wrapTemplateByPath(defaultTemplatePath)
  const writePath = getRelativeOutPath('index.html')
  fs.writeFileSync(writePath, defaultWrapped)
  
  console.log('✅ 🔨 Files rebuilt')
}




function copyFolderSync(source, target) {
  // Create the target folder if it doesn't exist
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target);
  }

  // Copy all files and subfolders recursively
  fs.readdirSync(source).forEach(file => {
    const sourcePath = path.join(source, file);
    const targetPath = path.join(target, file);

    if (fs.lstatSync(sourcePath).isDirectory()) {
      copyFolderSync(sourcePath, targetPath);
    } else {
      fs.copyFileSync(sourcePath, targetPath);
    }
  })
}