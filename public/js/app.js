'use strict';

/*jslint browser: true*/
/*global $, jQuery, alert*/

var fastenateModule = (function() {

  var module = {

    addHeader : _addHeader,
    addNav : _addNav,
    addContent :_addContent,
    renderModules : _renderModules,
    init : _init

  };

  function _addHeader() {

    //create header

    var header = document.createElement('header');
    document.body.appendChild(header);

    //add logo

    var logo = document.createElement('img');
    logo.src = '../assets/logo.svg';
    header.appendChild(logo);

    //add plus button

    var plus = document.createElement('button');
    plus.id = 'plusButton';
    header.appendChild(plus);

  }

  function _addNav(arr) {

    //add nav

    var nav = document.createElement('nav');
    document.body.appendChild(nav);

    //add nav ul & li elements

    var navUl = document.createElement('ul');
    navUl.className = 'navUl';
    nav.appendChild(navUl);

    for (var i = 0; i < arr.length; i++) {

      var navLi = document.createElement('li');
      navLi.className = 'navLi';
      navLi.innerHTML = arr[i];
      navUl.appendChild(navLi);

    }

  }

  function _addContent() {

    //add main content section

    var mainContent = document.createElement('section');
    mainContent.id = 'mainContent';
    document.body.appendChild(mainContent);

    $.ajax({

      url : '../api/my_boards.json'

    })
    .done(function(data) {

      console.log(data);

      _renderModules(data, mainContent);

    });

  }

  function _renderModules(data, mainContent) {

    for (var i = 0; i < data.data.children.length; i++) {

      console.log(mainContent);

      var module = document.createElement('div');
      module.className = 'small-12 small-centered medium-6 columns';

      var moduleHeading = document.createElement('h2');
      moduleHeading.innerHTML = data.data.children[i].data.title;
      module.appendChild(moduleHeading);

      mainContent.appendChild(module);

    }

  }

  function _init() {

    _addHeader();

    _addNav(['RANDOM', 'MY BOARDS', 'GET THE APP']);

    _addContent();

  }

  return module;

})();

//function to render functionality

document.addEventListener('DOMContentLoaded', function() {

  fastenateModule.init();

});