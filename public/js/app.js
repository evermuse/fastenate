'use strict';

/*jslint browser: true*/
/*global $, jQuery, alert*/

var fastenateModule = (function() {

  var module = {

    addHeader : _addHeader,
    init : _init

  };

  function _addHeader() {

    var header = document.createElement('header');
    document.body.appendChild(header);

  }

  function _init() {

    _addHeader();

  }

  return module;

})();

//function to render functionality

document.addEventListener('DOMContentLoaded', function() {

  fastenateModule.init();

});