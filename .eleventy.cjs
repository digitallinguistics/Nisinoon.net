/* eslint-env commonjs */

const createMarkdownParser = require(`markdown-it`)
const less                 = require(`less`)
const markdownAnchors      = require(`markdown-it-anchor`)
const markdownAttributes   = require(`markdown-it-attrs`)

const lessOptions = {
  paths: [
    `src/layouts/main/styles`,
    `src/pages`,
  ],
}

const markdownParser = createMarkdownParser({
  html:        true,
  quotes:      `“”‘’`,
  typographer: true,
})
.use(markdownAttributes)
.use(markdownAnchors)

function convertLESS(input, cb) {
  return less.render(input, lessOptions)
  .then(({ css }) => {
    if (typeof cb === `function`) return cb(null, css)
    return css
  })
}

module.exports = function configureEleventy(config) {

  config.addNunjucksAsyncFilter(`css`, convertLESS)
  config.addLiquidFilter(`css`, convertLESS)
  config.addPassthroughCopy(`src/images`)
  config.addPassthroughCopy(`src/fonts`)
  config.setLibrary(`md`, markdownParser)

  return {
    dir: {
      data:     `data`,
      includes: `partials`,
      input:    `src`,
      layouts:  `layouts`,
      output:   `dist`,
    },
    templateFormats: [`md`, `njk`],
  }

}
