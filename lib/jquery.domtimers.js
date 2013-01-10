/**
* @fileOverview jQuery DOMTimers
* Copyright (c) 2012 Aldwin "Avaq" Vlasblom, https://github.com/Avaq
* Licensed under the MIT license (/LICENSE)
*
* @author Aldwin "Avaq" Vlasblom <aldwin.vlasblom@gmail.com>, https://github.com/Avaq
* @version 0.2 beta
* @homepage https://github.com/Avaq/jQuery-Postpone
*/

;(function($){
  
  //Create the DOMRady deferred.
  var D = $.Deferred()
    , P = D.promise();
  
  //Bind the DOMReady event.
  $(function(){
    D.resolve();
  });
  
  //Extend jQuery.
  $.extend({
    
    //The DOMReady method returns the DOMReady promise object.
    DOMReady: function(){
      return P;
    },
    
    //The DOMRendered method creates its own unique Deferred per call and returns its promise object.
    DOMRendered: function(){
      
      //Create the DOMRendered deferred.
      var D = $.Deferred()
        , P = D.promise();
      
      //Bind the DOMRendered "event"... >.<
      setTimeout(function(){
        D.resolve();
      }, 0);
      
      //Return the promise object.
      return P;
      
    }
    
  })
  
})(jQuery, undefined);
