// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

function changeName(e){
	$model.set("lastName", "Petroff");
}

function close(e){
	$.root.close();
}
