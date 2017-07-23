var tape = require("tape"),
	jsdom = require("jsdom"),
  d3 = require("../");

var { JSDOM } = jsdom;
var dom = new JSDOM("<!DOCTYPE html><html><body></body></html>");
global.document = dom.window.document;


tape("marcon() returns a magrin convention and selections svg ang g elements", function(test) {
  
  var setup = d3.marcon();
	test.equal(setup.margin.top, 0);
  test.end();

});