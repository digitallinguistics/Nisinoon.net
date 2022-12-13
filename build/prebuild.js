import createBibliography from './createBibliography.js'
import emptyDistDir       from './emptyDistDir.js'
import getBibliography    from './getBibliography.js'

if (process.env.GITHUB_ACTIONS) await getBibliography()
await createBibliography()
await emptyDistDir()
