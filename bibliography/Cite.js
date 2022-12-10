import Cite                 from 'citation-js'
import { fileURLToPath }    from 'url'
import { readFile }         from 'fs/promises'

import {
  dirname as getDirname,
  join as joinPath,
} from 'path'

const __filename    = fileURLToPath(import.meta.url)
const __dirname     = getDirname(__filename)
const cslPath       = joinPath(__dirname, `linguistics.csl`)
const styleTemplate = await readFile(cslPath, `utf8`)
const styleName     = `ling`
const config        = Cite.plugins.config.get(`@csl`)

config.templates.add(styleName, styleTemplate)

export default Cite
