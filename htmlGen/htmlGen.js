var HTMLGenerator = function(){
	var createBtn = $(".JS-add-element");
	var safeCrackerForm = {
		html: $(".JS-form-body"),
		json: $(".JS-form-json")
	};
	var popOverCtn = $(".JS-add-pop-over");
	var popOverExitBtn = $(".JS-add-pop-over-exit");
	var popOverCreateBtn = $(".JS-add-pop-over-create");
	var elementType = $(".js-add-type");
	var elementContent = $(".js-add-content");
	var displayElement = $(".JS-display-element");
	var postInfo = {
		title: "",
		elements: [],
		elementTypes: [],
		html: ""
	};
	function elementTypes(name, startTag, endTag){
				postInfo.elementTypes.push({name: name, startTag: startTag, endTag: endTag});
	}
	elementTypes("Paragraph", "<p>", "</p>");
	elementTypes("Large Header", "<h2>", "</h2>");
	elementTypes("Blue Header", "<h3>", "</h3>");
	elementTypes("Small Header", "<h4>", "</h4>");
	elementTypes("HTML Code", "<pre class='code-block'><code class='language-markup'>", "</code></pre>");
	elementTypes("CSS Code", "<pre class='code-block'><code class='language-css'>", "</code></pre>");
	elementTypes("JS Code", "<pre class='code-block'><code class='language-javascript'>", "</code></pre>");

	createBtn.on("click", function(){
		createPopOver();
	});
	 
	function createPopOver(){;
		var popOverCtn = $("<div class='pop-up-ctn'>"+"</div>");
		var popOver = $("<div class='add-pop-up'>"+"</div>");
		var types = [];
		
		// Appending top titles
		popOver.append("<h2 class='APU-title'>Add New Element</h2><h4 class='APU-subtitle'>Element Type</h4>");
		
		var elementDropDown = $("<div class='drop-down JS-drop-down js-add-type'>"+"</div>");
		createDropDown();
		popOver.append(elementDropDown);
		//Append parent elements
		popOverCtn.append(popOver);
		$("body").append(popOverCtn);
		
		function createDropDown(){
			for(var i = 0; i < postInfo.elementTypes.length; i++){
				var type = postInfo.elementTypes[i];	
				var typeBtn = $("<button>"+type.name+"</button>");
				var parentObj = {name: type.name, element: typeBtn};
				types.push(parentObj);
				elementDropDown.append(typeBtn);
			}
		}
	}
}
HTMLGenerator();