import { emptyDir }      from 'fs-extra'
import { fileURLToPath } from 'url'

import {
  dirname as getDirname,
  join as joinPath,
} from 'path'

export default async function emptyDistDir() {

  const __dirname = getDirname(fileURLToPath(import.meta.url))
  const distPath = joinPath(__dirname, `../dist`)

  await emptyDir(distPath)

}
