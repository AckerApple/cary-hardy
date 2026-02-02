import { promises as fs } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')
const previewDir = path.resolve(projectRoot, 'preview')

async function copyDir(src: string, dest: string) {
  await fs.mkdir(dest, { recursive: true })
  const entries = await fs.readdir(src, { withFileTypes: true })
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name)
    const destPath = path.join(dest, entry.name)
    
    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath)
    } else {
      await fs.copyFile(srcPath, destPath)
    }
  }
}

async function setupPreviewAndBuild() {
  console.log('🔨 Setting up preview build...')
  
  // Ensure preview directory exists
  await fs.mkdir(previewDir, { recursive: true })
  
  // Copy source HTML files and static assets to preview
  await fs.copyFile(path.join(projectRoot, 'index.src.html'), path.join(previewDir, 'index.src.html'))
  await fs.copyFile(path.join(projectRoot, 'admin.src.html'), path.join(previewDir, 'admin.src.html'))
  await fs.mkdir(path.join(previewDir, 'admin'), { recursive: true })
  try {
    await fs.copyFile(
      path.join(projectRoot, 'admin', 'user.src.html'),
      path.join(previewDir, 'admin', 'user.src.html')
    )
  } catch {
    // File doesn't exist, skip
  }
  await fs.copyFile(path.join(projectRoot, 'wrap.html'), path.join(previewDir, 'wrap.html'))
  
  // Copy CSS and other static files
  const staticFiles = ['bounce-in.css', 'crawl-text.css', 'document.css', 'spin.css', 
                       'cary-hardy-meetup.ics', '404.html', 'CNAME', 'meetup.html']
  
  for (const file of staticFiles) {
    const src = path.join(projectRoot, file)
    try {
      await fs.access(src)
      await fs.copyFile(src, path.join(previewDir, file))
    } catch {
      // File doesn't exist, skip
    }
  }
  
  // Copy assets/media
  await fs.mkdir(path.join(previewDir, 'assets'), { recursive: true })
  await copyDir(path.join(projectRoot, 'assets', 'media'), path.join(previewDir, 'assets', 'media'))
  
  // Copy taggedjs
  await copyDir(path.join(projectRoot, 'taggedjs'), path.join(previewDir, 'taggedjs'))
  
  console.log('✅ Preview directory prepared')
}

setupPreviewAndBuild().catch(console.error)
