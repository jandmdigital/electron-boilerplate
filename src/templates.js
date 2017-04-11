'use strict';

let nunjucks = require('nunjucks'),
    path = require('path');

nunjucks.configure(path.join(__dirname, 'templates'), { autoescape: true, cache: false });

module.exports = {
   render: function(templateName) {
      return nunjucks.render(templateName);
   },
};
