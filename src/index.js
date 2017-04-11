'use strict';

let nunjucks = require('nunjucks'),
    template;

template = nunjucks.render('/templates/main.html');
console.log(template);
$('#main').html(template);
