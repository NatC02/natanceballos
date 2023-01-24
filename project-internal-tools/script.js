const fs = require("fs");
const cheerio = require("cheerio");

const attributeOrder = ["id", "class", "role", "aria-*", "custom-attribute"];

const formatAttributes = (node) => {
  const attributes = Array.from(node.attribs);
  attributes.sort((a, b) => {
    const indexA = attributeOrder.indexOf(Object.keys(a)[0]);
    const indexB = attributeOrder.indexOf(Object.keys(b)[0]);
    if (indexA === indexB) {
      return Object.keys(a)[0].localeCompare(Object.keys(b)[0]);
    }
    return indexA - indexB;
  });
  node.attribs = attributes.reduce((acc, attribute) => {
    const key = Object.keys(attribute)[0];
    acc[key] = attribute[key];
    return acc;
  }, {});
};

const formatBodyAttributes = (file) => {
  fs.readFile(file, "utf-8", (err, data) => {
    if (err) throw err;
    const $ = cheerio.load(data);
    formatAttributes($("body").get(0));
    $("body").children().each((i, elem) => formatAttributes(elem));
    fs.writeFile(file, $.html(), (writeErr) => {
      if (writeErr) throw writeErr;
      console.log(`${file} has been updated with sorted attributes`);
    });
  });
};

const file = process.argv[2];
if (!file) {
  console.log("Please provide a file name as an argument");
  process.exit(1);
}

formatBodyAttributes(file);
