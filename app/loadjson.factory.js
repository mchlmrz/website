'use strict';

angular.module('loadjson').factory('loadjsonService', ['$http', '$q', function loadjsonFactory($http, $q) {
        var loadedJson = [];

        return $q(function(resolve,reject) {
            $http.get('app/publications.json').then(function(response) {
                loadedJson.pubs = response.data;

                $http.get('app/scandaws.json').then(function(response) {
                    loadedJson.scandaws = response.data;

                    resolve(loadedJson);
                 })

            })
        });
            
    }]
);