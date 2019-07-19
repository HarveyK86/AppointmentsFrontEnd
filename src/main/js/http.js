/* global $ */
define([], function() {
  var self = {
    config: {
      // nothing
    }
  };
  var inst = $.extend(self, {
    init: function() {
      // do nothing
    },
    options: function(url, callback) {
      self.ajax("OPTIONS", url, null, callback);
    },
    get: function(url, callback) {
      self.ajax("GET", url, null, callback);
    },
    post: function(url, body, callback) {
      self.ajax("POST", url, body, callback);
    },
    put: function(url, body, callback) {
      self.ajax("PUT", url, body, callback);
    },
    delete: function(url, callback) {
      self.ajax("DELETE", url, null, callback);
    },
    ajax: function(type, url, body, callback) {
      var data = {
        type: type,
        url: url,
        success: callback
      };
      if (body) {
        data["data"] = JSON.stringify(body);
      }
      $.ajax(data);
    }
  });
  inst.init();
  return inst;
});
