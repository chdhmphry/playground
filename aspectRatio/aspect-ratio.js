AspectRatio.prototype = {
	resizeVideo: function(){
		var element = this.element;
		var eleProperties = {};
		getSize();
		$(window).on("resize", getSize);
		
		function getSize(){
			setSize("reset");
			eleProperties.w = element.width();
			eleProperties.h = element.height();
			if((eleProperties.w/16*9) > eleProperties.h){
				eleProperties.h = eleProperties.w/16*9;
			} else{
				eleProperties.w = eleProperties.h/9*16;
			}
			setSize();
		}
		function setSize(method){
			if(method === "reset"){
				element.css({
					"height":"",
					"width":""
				});
			} else{
				element.css({
					"height":eleProperties.h+"px",
					"width":eleProperties.w+"px"
				});
			}
		}
	}
};
function AspectRatio(element){
	this.element = element;
}



$(".js-aspect-ratio").each(function(){
	var video = new AspectRatio($(this));
	video.resizeVideo();
});



