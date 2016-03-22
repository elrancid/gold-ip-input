(function(global) {
  'use strict';

  function validateInternetProtocol (input) {
    return /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(input);
  };

  global.InternetProtocolValidator = {
    validate: validateInternetProtocol
  };
})(this);
