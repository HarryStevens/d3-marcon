import {select} from "d3-selection";

export default function(options) {
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
		svg = select(options.element).append("svg")
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