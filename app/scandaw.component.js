'use strict';

angular.module('scandaw').component('scandaw', {
    templateUrl: 'app/scandaw.template.html',
    controller: ['$sce', 'loadjsonService', function scandawController($sce, loadjsonService) {
        var self = this;

        loadjsonService.then(function(ret) {
            self.scandawgroups = ret.scandaws;
        });

        self.renderHtml = function(i,j) {
            return $sce.trustAsHtml(self.scandawgroups[i].scandaws[j].description);
        };

    }]
});