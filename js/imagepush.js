"use strict"

import $ from "jquery";

// const { JSDOM } = require("jsdom");
// const { window } = new JSDOM("");
// const $ = require("jquery")(window);

var apikey = "61884d7afc71545b0f5e05ad";
$.ajaxPrefilter(function(options) {
    if (!options.beforeSend) {
        options.beforeSend = function(xhr) {
            xhr.setRequestHeader('x-apikey', apikey);
        }
    }
});

var formData = new FormData();
var files = $('#photo')[0].files;
// Loop through each of the selected files.
for (var i = 0; i < files.length; i++) {
    var file = files[i];
    var name = files[0].name;
    // Add the file to the request.
    formData.append('image', file, file.name);
}

$.ajax({
    "data": formData,
    "url": "https://users-a042.restdb.io/media",
    "method": "POST",
    "contentType": false,
}).done(function(response) {
    console.log(ids)
});