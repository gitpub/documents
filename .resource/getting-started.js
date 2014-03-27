$(function() {
    ko.applyBindings({
        hostname: location.hostname,
        user: ko.observable(null),
        repository: ko.observable(null)
    });
    $('input').keypress(function(e) {
        if (e.keyCode === 13) {
            $(this).blur().parent().next().find('input').focus();
        }
    })
});
