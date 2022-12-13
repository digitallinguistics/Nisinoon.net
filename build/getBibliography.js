// Retrives the Nisinoon bibliography from the Zotero API as BibTeX data and saves it to `/bibliography/bibliography.bib`.

import { fileURLToPath } from 'url'
import { outputFile }    from 'fs-extra'
import parseLinkHeader   from 'parse-link-header'
import ProgressBar       from 'progress'

import {
  dirname as getDirname,
  join as joinPath,
} from 'path'

const baseURL       = `https://api.zotero.org`
const versionHeader = `Zotero-API-Version`
const apiVersion    = 3
const groupID       = `4815618`

const url = `${ baseURL }/groups/${ groupID }/items`

let progressBar

async function makeRequest(bibtex = ``, start) {

  const query = new URLSearchParams({
    format: `bibtex`,
    limit:  100,
    start,
  })

  const res = await fetch(`${ url }?${ query }`, {
    headers: {
      [versionHeader]: apiVersion,
    },
  })

  if (res.status !== 200) throw new Error(res.message)

  const total = Number(res.headers.get(`Total-Results`))

  progressBar ??= new ProgressBar(`:bar`, {
    curr: 100,
    total,
  })

  const data = await res.text()

  bibtex += data

  const linkHeader = res.headers.get(`Link`)
  const { next }   = parseLinkHeader(linkHeader)

  if (next) {
    progressBar.tick(Number(next.start) - start)
    bibtex += await makeRequest(bibtex, next.start)
  } else {
    console.info(`\n`)
  }

  return bibtex

}

async function writeFile(bibtex) {
  const __dirname = getDirname(fileURLToPath(import.meta.url))
  const filePath  = joinPath(__dirname, `../bibliography/bibliography.bib`)
  await outputFile(filePath, bibtex)
}

export default async function getBibliography() {
  const bibtex = await makeRequest()
  await writeFile(bibtex)
}
