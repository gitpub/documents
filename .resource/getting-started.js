$(function() {
    ko.applyBindings({
        hostname: location.hostname,
        userName: ko.observable(null),
        repositoryName: ko.observable(null)
    });
});
