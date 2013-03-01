# jQuery DOMTimers (version 1.0.0)

## Introduction

Adds two functions to the jQuery library: $.DOMReady() - Returns a Deferred that resolves
when the DOM is ready. $.DOMRendered() - Returns a Deferred that resolves when the DOM has
finished rendering the HTML.

## Why?!

This is part of my personal project to turn every asynchronous task in JavaScript into a
jQuery.Deferred. It would make my, and your life as a JavaScript programmer that much easier.

 - [jQuery.DOMTimers](https://github.com/Avaq/jQuery-DOMTimers) - Deferred for DOM timing events.
 - [jQuery.Postpone](https://github.com/Avaq/jQuery-Postpone) - Deferred for setTimeout and setInterval.

This plug-in allows for code like this:

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

## Download

 - [latest-stable.zip](https://github.com/Avaq/jQuery-Postpone/zipball/stable) (recommended)
 - [latest-development-build.zip](https://github.com/Avaq/jQuery-Postpone/zipball/master)

See [all available downloads](https://github.com/Avaq/jQuery-Postpone/tags).

## jQuery methods

### jQuery.DOMReady()

Returns a `Deferred.promise()` that resolves as soon as the DOM has loaded. After the DOM
has loaded, additional calls to this method return the same `Deferred.promise()` object.

### jQuery.DOMRendered()

Each call to this method creates new promise objects that each resolve as soon as the DOM
has finished rendering.

## License

Copyright (c) 2012-2013 Avaq, https://github.com/Avaq

jQuery DOMTimers is licensed under the MIT license. The license is included as
[LICENSE](https://github.com/Avaq/jQuery-DOMTimers/blob/master/LICENSE) in this directory.
