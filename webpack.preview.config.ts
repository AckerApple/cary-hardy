import * as path from 'path'
import { fileURLToPath } from 'url'
import baseConfig from './webpack.config.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Clone the base config and modify the output path
const previewConfig = {
  ...baseConfig,
  output: {
    ...baseConfig.output,
    path: path.resolve(__dirname, 'preview', 'assets')
  }
}

export default previewConfig