(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('d3-selection')) :
  typeof define === 'function' && define.amd ? define(['exports', 'd3-selection'], factory) :
  (factory((global.d3 = global.d3 || {}),global.d3));
}(this, function (exports,d3Selection) { 'use strict';

  function marcon() {

    var instance = {};
    var top = 10,
      bottom = 0,
      left = 0,
      right = 0,
      width = 900,
      height = 600,
      element = "body",
      innerWidth = width - left - right, 
      innerHeight = height - top - bottom, 
      svg;

    instance.top = function(d) {
      if (!arguments.length) return top;
      top = d;
      return instance;
    };

    instance.left = function(d) {
      if (!arguments.length) return left;
      left = d;
      return instance;
    };

    instance.right = function(d) {
      if (!arguments.length) return right;
      right = d;
      return instance;
    };

    instance.bottom = function(d) {
      if (!arguments.length) return bottom;
      bottom = d;
      return instance;
    };

    instance.width = function(d) {
      if (!arguments.length) return width;
      width = d;
      return instance;
    };

    instance.height = function(d) {
      if (!arguments.length) return height;
      height = d;
      return instance;
    };

    instance.element = function(d) {
      if (!arguments.length) return element;
      element = d;
      return instance;
    };

    instance.innerWidth = function() {
      return instance.width() - instance.left() - instance.right();
    };

    instance.innerHeight = function() {
      return instance.height() - instance.top() - instance.bottom();
    };

    instance.svg = function() {
      return svg;
    };

    instance.render = function() {
      svg = d3Selection.select(element)
        .append("svg")
        .attr("width", instance.innerWidth() + instance.left() + instance.right())
        .attr("height", instance.innerHeight() + instance.top() + instance.bottom())
        .append("g")
        .attr("transform", "translate(" + left + ", " + top + ")");
    }

    return instance;

  };

  exports.marcon = marcon;

  Object.defineProperty(exports, '__esModule', { value: true });

}));