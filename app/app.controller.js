'use strict';

angular.module('websiteApp').controller('websiteController', ['$scope', '$location', 'loadjsonService', 'otherService', function($scope, $location, loadjsonService, otherService) {
    $scope.keysCloud = [];
    var allKeys = [];

    $scope.otherService = otherService;
    $scope.location = $location

    $scope.$watch('location.search().key', function() {
         $scope.otherService.addKey($location.search().key);
    });

    function onlyUnique(value, index, self) { 
        return self.indexOf(value) === index;
    }

    function countKey(key, Keys) {
        var c = 0;
        Keys.forEach(function(item) {
            if (item == key) {
                c++;
            }
        });
        return c;
    }

    // todo: handle empty keywords
    loadjsonService.then(function (ret) {
        ret.pubs.forEach(
            function (pubGroup) {
                pubGroup.pubs.forEach(function (pub) {
                    pub.keywords.forEach(
                        function (key) {
                            allKeys.push(key);
                        }
                    );
                });             
            }
        );
        
        $scope.keysCloud = [];

        allKeys.filter(onlyUnique).forEach(
            function(uniqueKey) {
                // todo: different weights with countKey(uniqueKey, allKeys, 0)
                $scope.keysCloud.push({text: uniqueKey, weight: 10, link: "#!/?key="+uniqueKey});
            }
        );
    });
}]);


