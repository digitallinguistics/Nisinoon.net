module.exports = function(config) {

  config.addPassthroughCopy(`src/images`)

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