'use strict';

angular.module('publication').component('publication', {
    templateUrl: 'app/publication.template.html',
    // todo: move the filters selected + function to a service
    controller: ['$scope', 'loadjsonService', 'otherService', function publicationController ($scope, loadjsonService, otherService) {
        var self = this;
        self.otherService = otherService;

        loadjsonService.then(function(ret) {
            self.pubs = ret.pubs;
        });
        
        self.addFilter = function(key) {
            otherService.addKey(key);
        }
    }]
});