/* eslint-env commonjs */

const createMarkdownParser = require(`markdown-it`)
const less                 = require(`less`)

const lessOptions = {
  paths: [
    `src/classes`,
    `src/layouts/main`,
    `src/pages`,
  ],
}

const markdownParser = createMarkdownParser({
  html:        true,
  quotes:      `“”‘’`,
  typographer: true,
})

function convertLESS(input, cb) {
  less.render(input, lessOptions)
  .then(({ css }) => cb(null, css))
}

module.exports = function configureEleventy(config) {

  config.addNunjucksAsyncFilter(`css`, convertLESS)
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
