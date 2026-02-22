const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "../vlsi_physical_design_web/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "../vlsi_physical_design_web/main.css": "main.css" });
  eleventyConfig.addPassthroughCopy({ "../vlsi_physical_design_web/main.js": "main.js" });
  eleventyConfig.addPassthroughCopy({ "../vlsi_physical_design_web/carousel.js": "carousel.js" });
  eleventyConfig.addPassthroughCopy({ "../vlsi_physical_design_web/robots.txt": "robots.txt" });
  eleventyConfig.addPassthroughCopy({ "../vlsi_physical_design_web/BingSiteAuth.xml": "BingSiteAuth.xml" });
  eleventyConfig.addPassthroughCopy({ "../vlsi_physical_design_web/search-data.json": "search-data.json" });

  eleventyConfig.addFilter("date", (dateObj, format = "yyyy-LL-dd") => {
    if (!dateObj) return "";
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(format);
  });

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      data: "_data",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"],
  };
};
