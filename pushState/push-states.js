
function pushState(){
	
	var contentContain = $("#content");
	$("a[data-push-link]").click(function(event){
		console.log("Fetching");
		var link = $(this).attr("href");
		event.preventDefault();
		window.history.pushState("object or string", "Title", "/"+link);
		contentContain.load(link);
		eval(document.getElementById("runscript"));
		console.log("Fetched");
	});
	
}
pushState();