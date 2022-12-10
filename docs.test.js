import { expect }        from 'chai'
import { fileURLToPath } from 'url'
import { readFile }      from 'fs/promises'

import {
  dirname as getDirname,
  join as joinPath,
} from 'path'

describe(`LICENSE`, function() {

  it(`should have the correct year`, async function() {

    const __dirname   = getDirname(fileURLToPath(import.meta.url))
    const licensePath = joinPath(__dirname, `LICENSE.md`)
    const license     = await readFile(licensePath, `utf8`)
    const yearRegExp  = /2018–(?<year>\d{4})/u

    const { groups: { year } } = yearRegExp.exec(license)
    const currentYear = new Date().getUTCFullYear()

    expect(year).to.equal(String(currentYear))

  })


})
