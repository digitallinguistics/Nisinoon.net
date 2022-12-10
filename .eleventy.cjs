const createMarkdownParser = require(`markdown-it`)

const markdownParser = createMarkdownParser({
  html       : true,
  quotes     : `“”‘’`,
  typographer: true,
})

module.exports = function(config) {

  config.addPassthroughCopy(`src/images`)
  config.setLibrary(`md`, markdownParser)

  return {
    dir: {
      data    : `data`,
      includes: `partials`,
      input   : `src`,
      layouts : `layouts`,
      output  : `dist`,
    },
    templateFormats: [`md`, `njk`],
  }

}