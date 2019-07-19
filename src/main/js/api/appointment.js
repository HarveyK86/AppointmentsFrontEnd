/* global $ */
define(["cache", "http"], function(cache, http) {
  var self = {
    config: {
      base: "https://ucr04ejes6.execute-api.eu-west-1.amazonaws.com/staging/appointments",
      read_all: "",
      create: "/create",
      read: "/read/{0}",
      update: "/update/{0}",
      delete: "/delete/{0}"
    }
  };
  var inst = $.extend(self, {
    init: function() {
      // do nothing
    },
    read_all: function(callback) {
      cache.get(self.config.base + self.config.read_all, callback);
    },
    create: function(appointment, callback) {
      http.post(self.config.base + self.config.create, appointment, callback);
    },
    read: function(id, callback) {
      cache.get(self.config.base + self.config.read.format(id), callback);
    },
    update: function(id, appointment, callback) {
      http.put(self.config.base + self.config.update.format(id), appointment, callback);
    },
    delete: function(id, callback) {
      http.delete(self.config.base + self.config.delete.format(id), callback);
    }
  });
  inst.init();
  return inst;
});
