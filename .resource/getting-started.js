$(function() {
    ko.applyBindings({
        hostname: location.hostname,
        user: ko.observable(null),
        repository: ko.observable(null),
        authToken: ko.observable(null),
        twoStepAuth: ko.observable(false)
    });

    $('input').keypress(function(e) {
        if (e.keyCode === 13) {
            $(this).blur().parent().next().find('input').focus();
        }
    });

});
