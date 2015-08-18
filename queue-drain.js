var queue = require("./queue.js");
var q = queue(1);
var j = 0;

add_tasks();

setTimeout(function () {
    q.drain();
    add_tasks();

    setTimeout(function () {
	q.drain();
	add_tasks();

	setTimeout(function () {
	    q.drain();
	}, 5000);
    }, 5000);
}, 5000);

function add_tasks () {
    for (var i = 0; i < 1000; i++) {
	q.defer(function (cb) { console.log(j); j++; setTimeout(cb, 1000); });
    }
}
