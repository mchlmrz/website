'use strict';

angular.module('other').factory('otherService', [function otherFactory() {
    var keys = '';

    var addKey = function(key) {
        // keys.push(key);
        keys = key;
    };

    var getKeys = function() {
        return keys;
    };

    var resetKeys = function() {
        keys = [];
    };

    var removeKey = function(key) {
        // keys.splice(keys.indexOf(key), 1);
        keys = '';
    };
    
    return {
        addKey: addKey,
        removeKey: removeKey,
        getKeys: getKeys,
        resetKeys: resetKeys,
        keys: keys
    };               
}]);