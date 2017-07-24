# d3-marcon

[Margin conventions](https://bl.ocks.org/mbostock/3019563) for [d3-selection](https://github.com/d3/d3-selection).

## Installing
If you use NPM, `npm install d3-marcon`. Otherwise, download the [latest release](https://github.com/HarryStevens/d3-marcon/tree/master/build).
You can also load directly from [unpkg](https://unpkg.com/d3-marcon/build/d3-marcon.min.js). You may use the entire [D3.js library](https://d3js.org/) or, at a minimum, [d3-selection](https://github.com/d3/d3-selection).
```html
<script src="https://d3js.org/d3-selection.v1.min.js"></script>
<script src="https://unpkg.com/d3-marcon/build/d3-marcon.min.js"></script>
<script>

var m = d3.marcon()
		.top(10)
		.bottom(10)
		.left(10)
		.right(10);

m.render();

m.svg().append("rect")
		.attr("width", m.innerWidth())
		.attr("height", m.innerHeight())
		.style("fill", "steelblue");

</script>
```

![image](https://github.com/HarryStevens/d3-marcon/blob/master/img/marcon.png "margin convention")

[A live example on bl.ocks.org](https://bl.ocks.org/HarryStevens/de1069536e00256d7aa82299fac0f3d5).

## API Reference

<a href="#marcon" name="marcon">#</a> d3.<b>marcon</b>([<i>options</i>])

Constructs a visualization generator, or <b>viz</b>, on which you can set and get the dimensions and margins, and append an `svg` element with a nested `g` to a DOM element.

<a href="#marcon_element" name="marcon_element">#</a> viz.<b>element</b>([<i>element</i>])

Selects a DOM element to append the viz to. Defaults to `"body"`.

<a href="#marcon_top" name="marcon_top">#</a> viz.<b>top</b>([<i>margin</i>])

Set or get the viz's top margin. Defaults to `0`.

<a href="#marcon_right" name="marcon_right">#</a> viz.<b>right</b>([<i>margin</i>])

Set or get the viz's right margin. Defaults to `0`.

<a href="#marcon_bottom" name="marcon_bottom">#</a> viz.<b>bottom</b>([<i>margin</i>])

Set or get the viz's bottom margin. Defaults to `0`.

<a href="#marcon_left" name="marcon_left">#</a> viz.<b>left</b>([<i>margin</i>])

Set or get the viz's left margin. Defaults to `0`.

<a href="#marcon_width" name="marcon_height">#</a> viz.<b>width</b>()

Set or get the viz's width. Defaults to `900`.

<a href="#marcon_height" name="marcon_height">#</a> viz.<b>height</b>()

Set or get the viz's height. Defaults to `600`.

<a href="#marcon_innerWidth" name="marcon_innerWidth">#</a> viz.<b>innerWidth</b>()

Get the viz's innerWidth, which is equal to `width - left - right`.

<a href="#marcon_innerHeight" name="marcon_innerHeight">#</a> viz.<b>innerHeight</b>()

Get the viz's innerHeight, which is equal to `height - top - bottom`.

<a href="#marcon_render" name="marcon_render">#</a> viz.<b>render</b>()

Render to viz to the DOM.

<a href="#marcon_svg" name="marcon_svg">#</a> viz.<b>svg</b>()

Get the `svg` element that contains the viz. Returns `undefined` if the viz has not yet been rendered.