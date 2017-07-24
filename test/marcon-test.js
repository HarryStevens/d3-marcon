var tape = require("tape"),
	jsdom = require("jsdom"),
  marcon = require("../");

var { JSDOM } = jsdom;
var dom = new JSDOM("<!DOCTYPE html><html><body></body></html>");
global.document = dom.window.document;


tape("marcon() returns a margin convention and allows rendering of svg and g elements", function(test) {
  
  var setup = marcon.marcon();
	test.equal(setup.width(), 900);
	setup.left(50);
	test.equal(setup.innerWidth(), 850);
	test.equal(setup.svg(), undefined)
	setup.render();
	test.equal(setup.svg().constructor.name, "Selection");
	test.equal(setup.element(), "body");

	test.end()

});