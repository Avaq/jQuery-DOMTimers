# jQuery DOMTimers (version 0.1 alpha)

## Introduction

A tiny addition to jQuery. A few simple methods for creating Deferreds that resolve on certain DOM changes.

## But why?!

This is part of my personal project to turn every asynchronous task in JavaScript into a jQuery.Deferred.
This would make my life as a JavaScript programmer that much easier. It would allow for code like this:

```js
//The function that uses data returned from the ajax request to the server to render a page.
function renderPage(data){
  
  //Do some rendering. This is done asynchronously by the browser.
  $('body').html('<p>' + data.message + '</p>');

  //Return a deferred that resolves when the rendering is done.
  return $.DOMRendered();

}

//Load the page after both the AJAX request has completed, and the DOM is ready.
$.when($.ajax('my/url.json'), $.DOMReady()).done(function(ajax, domready){
  
  //Render the page using the first result from the ajax Deferred and alert the user when we're all done.
  renderPage(ajax[0]).done(function(){
    alert('Page has loaded and rendered!');
  });

});
```

# **WARNING: None if the following is implemented yet!**

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