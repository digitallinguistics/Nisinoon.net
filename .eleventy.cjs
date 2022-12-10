module.exports = function(config) {

  return {
    dir: {
      data   : `data`,
      input  : `src`,
      layouts: `layouts`,
      output : `dist`,
    },
    templateFormats: [`md`, `njk`],
  }

}