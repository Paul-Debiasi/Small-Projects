jqDragMe = $("#drag-me");

var findX = false;



$("#drag-me").on("mousedown", function (e) {
	if{e.curretTarget === true} {

	}
    // $(e.currentTarget).off("mousedown", fn);
});

$('.pretty').on('mousedown', function fn(e) {
    console.log(e.currentTarget.id);
    $(e.currentTarget).off('mousedown', fn);
});