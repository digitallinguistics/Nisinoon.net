import { copy }          from 'fs-extra'
import { fileURLToPath } from 'url'
import prince            from 'prince'

import {
  dirname as getDirname,
  join as joinPath,
} from 'path'

const __dirname = getDirname(fileURLToPath(import.meta.url))
const htmlPath  = joinPath(__dirname, `../dist/bibliography/index.html`)
const pdfPath   = joinPath(__dirname, `../bibliography/bibliography.pdf`)
const distPath  = joinPath(__dirname, `../dist/bibliography/bibliography.pdf`)

function copyPDF() {
  return copy(pdfPath, distPath)
}

function generatePDF() {
  return prince()
  .inputs(htmlPath)
  .output(pdfPath)
  .execute()
}

export default async function buildPDF() {

  // I can't get the PDF generation step to work in GitHub Actions.
  // Instead, generate the PDF during local builds,
  // then copy the PDF into /dist on CI.
  if (!process.env.GITHUB_ACTIONS) await generatePDF()

  await copyPDF()

}
