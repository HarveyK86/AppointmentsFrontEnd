/* global requirejs */
requirejs(["api/appointment"], function(appointment_api) {
  if (!String.prototype.format) {
    String.prototype.format = function() {
      var args = arguments;
      return this.replace(/{(\d+)}/g, function(match, number) { 
        return typeof args[number] != 'undefined' ? args[number] : match;
      });
    };
  }
  var appointment = {
    date: "2019-07-18 16:31",
    description: "Lorem Ipsum"
  };
  var delete_response = function(response) {
    console.log("delete response", response);
  };
  var update_response = function(response) {
    console.log("update response", response);
    appointment_api.delete(response.id, delete_response);
  };
  var read_response = function(response) {
    console.log("read response", response);
    appointment.description = "Lorem Ipsum (Updated)";
    appointment_api.update(response.id, appointment, update_response);
  };
  var create_response = function(response) {
    console.log("create response", response);
    appointment_api.read(response.id, read_response);
  };
  var read_all_response = function(response) {
    console.log("read_all response", response);
    appointment_api.create(appointment, create_response);
  };
  appointment_api.read_all(read_all_response);
});
