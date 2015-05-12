AspectRatio.prototype = {
	findAdjustments: function(){
		// parent reference
		var parent = this;
		// get element's actual dimensions
		var width = parent.element.offsetWidth,
				height = parent.element.offsetHeight;
		// get element's base dimensions
		var rW = width/parent.ratio[0],
				rH = height/parent.ratio[1];
		// Get element's dominate value, either height or width
		var dominateValue = rH > rW ? "height" : "width";
		// return object
		return {
			dominate: dominateValue, 
			height: Math.round(rH*parent.ratio[0])+"px", 
			width: Math.round(rW*parent.ratio[1])+"px"
		};
	},
	applyAdjustments: function(adjustments){
	// parent reference
	var parent = this;
		if(adjustments.dominate == "height"){
			return parent.element.style.width = adjustments.height;
		} else{
			return parent.element.style.height = adjustments.width;
		}
	}
};
function AspectRatio(element){
	this.element = element;
	// get desired ratio element
	this.ratio = this.element.getAttribute("data-ratio") || "16:9";
	this.ratio = this.ratio.split(":");
	this.applyAdjustments(this.findAdjustments());
}

// Make all elements that have data-ratio attribute an AspectRatio child.
for(var i = 0, elements = document.querySelectorAll("*[data-ratio]"), x = elements.length; i < x; i++){new AspectRatio(elements[i]);}
