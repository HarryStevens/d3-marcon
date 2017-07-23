# d3-marcon

[Margin conventions](https://bl.ocks.org/mbostock/3019563) for [d3-selection](https://github.com/d3/d3-selection).

[A live example on bl.ocks.org](https://bl.ocks.org/HarryStevens/de1069536e00256d7aa82299fac0f3d5).

## Installing
If you use NPM, `npm install d3-marcon`. Otherwise, download the [latest release](https://github.com/HarryStevens/d3-marcon/tree/master/build).
You can also load directly from [unpkg](https://unpkg.com/d3-marcon/build/d3-marcon.min.js). You may use the entire [D3.js library](https://d3js.org/) or, at a minimum, d3-selection.
```html
<script src="https://d3js.org/d3-selection.v1.min.js"></script>
<script src="https://unpkg.com/d3-marcon/build/d3-marcon.min.js"></script>
<script>

var setup = d3.marcon(),
	margin = setup.margin,
	height = setup.height,
	width = setup.width,
	svg = setup.svg;

</script>
```

## API Reference

<a href="#marcon" name="marcon">#</a> d3.<b>marcon</b>([<i>options</i>])

Returns an object with four properties:
- *margin* is an object with four additional numerical properties: *top*, *bottom*, *left*, and *right*.
- *width* is a number representing the width of the visualization.
- *height* is a number representing the height of the visualization.
- *svg* is a D3 selection of the svg element the contains the visualization.

### Options
You can pass up to seven options to customize the return object.

| Option  | Data Type | Default  | Description                                       |
|---------|-----------|----------|---------------------------------------------------|
| top     | number    | `0`      | The visualization's top margin.                   |
| bottom  | number    | `0`      | The visualization's bottom margin.                |
| left    | number    | `0`      | The visualization's left margin.                  |
| right   | number    | `0`      | The visualization's right margin.                 |
| width   | number    | `900`    | The visualization's width.                        |
| height  | number    | `600`    | The visualization's height.                       |
| element | string    | `"body"` | The element on which to append the visualization. |