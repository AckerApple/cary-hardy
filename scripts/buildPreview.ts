import fs from 'fs-extra'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')
const previewDir = path.resolve(projectRoot, 'preview')

async function setupPreviewAndBuild() {
  console.log('🔨 Setting up preview build...')
  
  // Ensure preview directory exists and has necessary files
  await fs.ensureDir(previewDir)
  
  // Copy source HTML files and static assets to preview
  await fs.copy(path.join(projectRoot, 'index.src.html'), path.join(previewDir, 'index.src.html'))
  await fs.copy(path.join(projectRoot, 'admin.src.html'), path.join(previewDir, 'admin.src.html'))
  await fs.copy(path.join(projectRoot, 'wrap.html'), path.join(previewDir, 'wrap.html'))
  
  // Copy CSS and other static files
  const staticFiles = ['bounce-in.css', 'crawl-text.css', 'document.css', 'spin.css', 
                       'cary-hardy-meetup.ics', '404.html', 'CNAME', 'meetup.html']
  
  for (const file of staticFiles) {
    const src = path.join(projectRoot, file)
    if (await fs.pathExists(src)) {
      await fs.copy(src, path.join(previewDir, file))
    }
  }
  
  // Copy assets/media
  await fs.copy(path.join(projectRoot, 'assets', 'media'), path.join(previewDir, 'assets', 'media'))
  
  // Copy taggedjs
  await fs.copy(path.join(projectRoot, 'taggedjs'), path.join(previewDir, 'taggedjs'))
  
  console.log('✅ Preview directory prepared')
}

setupPreviewAndBuild().catch(console.error)