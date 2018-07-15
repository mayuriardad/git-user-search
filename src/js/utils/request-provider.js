import $ from 'jquery';
import _ from 'lodash';
function Request() {
}

var _request = function (param) {
  return new Promise(function (resolve){
    var successHandler = function (data) {
      resolve(data);
    };
    var errorHandler = function (error) {
      resolve(error.responseJSON);
    };
    var params = _.extend({
      success: successHandler,
      error: errorHandler,
    }, param);
    $.ajax(params);
  });
};

var _doGet = function (url, data, authHeader='') {
  var param = {
    data: data,
    url: url,
    method: "GET",
    headers: authHeader
  };
  return _request(param);
};

var _doPost = function (url, data, authHeader) {
  var param = {
    data: JSON.stringify(data),
    url: url,
    method: "POST",
    headers: authHeader
  };
  return _request(param);
};

var _doPut = function (url, data, authData) {
  var param = {
    data: JSON.stringify(data),
    url: url,
    method: "PUT",
    headers: authData
  };
  return _request(param);
};

var _doDelete = function (url, data) {
  var param = {
    data: JSON.stringify(data),
    url: url,
    method: "DELETE",   
  };
  return _request(param);
};

var _doUpload = function (url, data) {
  var param = {
    data: data,
    url: url,
    method: "POST",
    processData: false,
    contentType: false,
  };
  return _request(param);
};

Request.prototype.save = function (url, data, authData) {
  return _doPost(url, data, authData);
};

Request.prototype.fetch = function (url, data, authData) {
  return _doGet(url, data, authData);
};
Request.prototype.upload = function (url, data) {
  return _doUpload(url, data);
};

Request.prototype.update = function (url, data, authData) {
  return _doPut(url, data, authData);
};

Request.prototype.delete = function (url, data) {
  return _doDelete(url, data);
};

var request = new Request();

export default request;
