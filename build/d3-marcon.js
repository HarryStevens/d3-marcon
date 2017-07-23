(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('d3-selection')) :
  typeof define === 'function' && define.amd ? define(['exports', 'd3-selection'], factory) :
  (factory((global.d3 = global.d3 || {}),global.d3));
}(this, function (exports,d3Selection) { 'use strict';

  function marcon(options) {
    // defaults
    if (!options) options = {};
    var defaults = {
    	top: 0,
    	bottom: 0,
    	left: 0,
    	right: 0,
    	width: 900,
    	height: 600,
    	element: "body"
    }
    Object.keys(defaults).forEach(function(option){
    	if (!options[option]) options[option] = defaults[option];
    });

    var margin = {top: options.top, bottom: options.bottom, left: options.left, right: options.right},
  		width = options.width - margin.left - margin.right,
  		height = options.height - margin.top - margin.bottom,
  		svg = d3Selection.select(options.element).append("svg")
  				.attr("width", width + margin.left + margin.right)
  				.attr("height", height + margin.top + margin.bottom)
  			.append("g")
  				.attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

  	return {
  		margin: margin,
  		width: width,
  		height: height,
  		svg: svg
  	};

  };

  exports.marcon = marcon;

  Object.defineProperty(exports, '__esModule', { value: true });

}));