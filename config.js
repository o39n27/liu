var CONFIG = {
  // your website's title
  document_title: "dys电子书",

  // index page
  index: "README.md",

  // sidebar file
  sidebar_file: "mulu.md",

  // where the docs are actually stored on github - so you can edit
  base_url: "https://github.com/o39n27/liu/edit/gh-pages",
};

// **************************
// DON'T EDIT FOLLOWING CODES
// **************************

addConfig(ditto, CONFIG);

function addConfig(obj, conf) {
  Object.keys(conf).forEach(function (key) {
    obj[key] = conf[key];
  });
}

