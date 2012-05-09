window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());

(function($) {
  $.fn.hideLabels = function() {
    this.each(function() {
      $(this).siblings("input").focus(function() {
        return $(this).prev().hide();
      });
      $(this).siblings("input").blur(function() {
        if (!this.value) {
          return $(this).prev().show();
        }
      });
      $(this).siblings("input").each(function() {
        if (this.value) {
          return $(this).prev().hide();
        }
      });
    });
  };
})(jQuery);