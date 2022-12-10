import { expect }   from 'chai'
import { readFile } from 'fs/promises'

describe(`LICENSE`, function() {

  it(`should have the correct year`, async function() {

    const license    = await readFile(`LICENSE.md`, `utf8`)
    const yearRegExp = /2018–(?<year>\d{4})/u

    const { groups: { year } } = yearRegExp.exec(license)
    const currentYear = new Date().getUTCFullYear()

    expect(year).to.equal(String(currentYear))

  })


})
