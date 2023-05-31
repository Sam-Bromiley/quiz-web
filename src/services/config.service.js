angular.module('app').factory('ConfigService', [function() {

    var service = {};

    service.apiBase = 'http://quiz-api-sagb-env.eba-uwcsxev2.eu-west-2.elasticbeanstalk.com/quiz/';

    return service;
}]);