import { fileURLToPath } from 'url'
import prince            from 'prince'

import {
  dirname as getDirname,
  join as joinPath,
} from 'path'

const __dirname = getDirname(fileURLToPath(import.meta.url))
const htmlPath  = joinPath(__dirname, `../dist/bibliography/index.html`)
const pdfPath   = joinPath(__dirname, `../dist/bibliography/test.pdf`)

export default function generatePDF() {
  return prince()
  .inputs(htmlPath)
  .output(pdfPath)
  .execute()
}

await generatePDF()
