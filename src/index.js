'use strict';

let templates = require('./templates.js'),
    template;

template = templates.render('main.html');

$('#main').html(template);
