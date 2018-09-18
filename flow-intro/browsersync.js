#!/usr/bin/env node
// browser-sync start --no-open --no-ui --server --files index.html --files styles.css
const browserSync = require('browser-sync');
const bs = browserSync({
  open: false,
  ui: false,
  server: true,
  files: [
    "index.html",
    "styles.css",
    {
      match: ["slides.md"],
      fn: (event, file) => {
        bs.sockets.emit('reload:' + file);
      }
    }
  ]
});
