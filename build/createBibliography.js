import Citer             from '../bibliography/Cite.js'
import { fileURLToPath } from 'url'
import fs                from 'fs-extra'

import {
  dirname as getDirname,
  join as joinPath,
} from 'path'

const { readFile, outputFile } = fs

const __dirname  = getDirname(fileURLToPath(import.meta.url))

export default async function createBibliography() {

  const bibtexPath = joinPath(__dirname, `../bibliography/bibliography.bib`)
  const bibtex     = await readFile(bibtexPath, `utf8`)

  const citer = new Citer(bibtex, {
    forceType:     `@biblatex/text`,
    generateGraph: false,
  })

  citer.sort()

  function adjustHTML(id, raw) {
    return raw
    .trim()
    .replace(/<div.+?>(.+)<\/div>/u, `<li id='${ id }'>$1</li>`)                                        // replace <div> with <li>
    .replace(/<i>(.+)<\/i>/u, `<cite class=cite>$1</cite>`)                                             // replace <i> with <cite>
    .replace(/\(doi:(?<doi>.+?)\)(?<end> |$)/u, `doi:<a href=https://doi.org/$<doi>>$<doi></a>.$<end>`) // replace DOI with link
    .replace(/\((?<link>http.+?)\)/u, `(<a href=$<link>>view file</a>)`)                                // replace full link with text link
  }

  const htmlEntries = citer.format(`bibliography`, {
    asEntryArray: true,
    format:       `html`,
    template:     `ling`,
  })
  .map(([id, raw]) => adjustHTML(id, raw))
  .join(`\n`)

  const htmlPath = joinPath(__dirname, `../src/pages/Bibliography/entries.html`)

  const html = `<ul class=references-list>\n${ htmlEntries }\n</ul>`

  await outputFile(htmlPath, html, `utf8`)

}
