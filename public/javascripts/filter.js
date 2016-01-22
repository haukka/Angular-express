angular.module('app.unsafefilter', []).filter('unsafe', function($sce) {
    return function(val) {
	if (val.length > 1 && val.length > 70)
	    return $sce.trustAsHtml(val + "...");
	else if (val.length > 1 && val.length < 70)
	    return $sce.trustAsHtml(val);
	else
	    return $sce.trustAsHtml("Pas de description.");
    };
});

angular.module('app.filter', []).filter('timeString', function() {
    return function(seconds) {
	var hour = Math.floor(((seconds/86400)%1)*24);
	var min = Math.floor(((seconds/3600)%1)*60);
	var sec = Math.round(((seconds/60)%1)*60);
	if (hour > 0)
	    return (hour > 9 ? hour : '0' + hour) + ':' + (min > 9 ? min : '0'+ min) + ':' + (sec > 9 ? sec : '0' + sec);
	else
	    return (min > 9 ? min : '0'+ min) + ':' +(sec > 9 ? sec : '0' + sec);
    };
});
