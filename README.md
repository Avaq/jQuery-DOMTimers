# jQuery DOMTimers (version 0.1 alpha)

## Introduction

A tiny addition to jQuery. A few simple methods for creating Deferreds that resolve on certain DOM changes.

**WARNING: None if the following is implemented yet!**

## jQuery methods

### jQuery.DOMReady()

Returns a `Deffered.promise()` that resolves as soon as the DOM has loaded. After the DOM has loaded, additional
calls to this method return the same `Deffered.promise()` object.

### jQuery.DOMRendered()

Each call to this method creates new promise objects that each resolve as soon as the DOM has finished rendering.

## Todo
 
- Everything.

## License

Copyright (c) 2012 Avaq, https://github.com/Avaq