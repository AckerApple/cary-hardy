import { run } from './bundleScript'
import webpack from 'webpack'
import webpackConfig from '../webpack.preview.config.js'

// Create a compiler instance with the preview configuration
const compiler = webpack(webpackConfig as any)

run(compiler)