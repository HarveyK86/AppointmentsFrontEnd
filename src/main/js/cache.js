/* global $ */
define(["http"], function(http) {
  var self = {
    config: {
      pending: "pending",
      interval: 100
    }
  };
  var inst = $.extend(self, {
    init: function() {
      self.config.cache = {
        // nothing
      };
    },
    get: function(url, callback) {
      if (self.config.cache[url]) {
        if (self.config.cache[url] === self.config.pending) {
          var interval = setInterval(function() {
            if (self.config.cache[url] != self.config.pending) {
              clearInterval(interval);
              callback(self.config.cache[url]);
            }
          }, self.config.interval);
        } else {
          callback(self.config.cache[url]);
        }
      } else {
        self.config.cache[url] = self.config.pending;
        http.get(url, function(response) {
          self.config.cache[url] = response;
          callback(response);
        });
      }
    }
  });
  inst.init();
  return inst;
});
