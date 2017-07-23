# d3-foo

[Margin conventions](https://bl.ocks.org/mbostock/3019563) for d3-selection.

## Installing

### npm
```bash
npm install d3-marcon
```
### CDN
```html
<script src="https://unpkg.com/d3-marcon/build/d3-marcon.min.js"></script>
```
### Host locally
Download the source from this repo's [build directory](https://github.com/HarryStevens/d3-marcon/tree/master/build).
```html
<script src="path/to/d3-marcon.min.js"></script>
```

## API Reference

<a href="#marcon" name="marcon">#</a> <b>marcon</b>([<i>options</i>])

Returns an object you can use for implementing the margin conventions.

```js
var setup = d3.marcon();

var svg = setup.svg;
```

### Options
| Option  | Data Type | Default  | Description                                       |
|---------|-----------|----------|---------------------------------------------------|
| top     | number    | `0`      | The visualization's top margin.                   |
| bottom  | number    | `0`      | The visualization's bottom margin.                |
| left    | number    | `0`      | The visualization's left margin.                  |
| right   | number    | `0`      | The visualization's right margin.                 |
| width   | number    | `900`    | The visualization's width.                        |
| height  | number    | `600`    | The visualization's height.                       |
| element | string    | `"body"` | The element on which to append the visualization. |