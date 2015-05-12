htmlGenerator();

function htmlGenerator(){
		var finalArrangement = {elements:[], elemNum:0};
		var addbtns = $("*[data-js-hook='add-display-btn']");
		var display = $("div[data-js-hook='display-content']");
		DisplayBtn.prototype = {
				addDisplay: function(){
						this.text = prompt("What would you like your "+this.name+" to say?", "");
						if(this.text !== false){
							this.order = finalArrangement.elements.length;
							this.element = $("<div class='editable-content'><"+this.tag+">"+this.text+"</"+this.tag+"></div>");
							display.append(this.element);
							return this.editText();
						}
				},
				editText: function(){
					this.element.on("click", function(){
						clickedProcess();
					});
					function clickedProcess(){
							var newText = prompt("What would you like your "+this.name+" to say?", this.text);
							this.text = newText;
							console.log(this.text);
							$(this.element).html("<"+this.tag+">"+"edited"+"</"+this.tag+">");
							console.log(this.text);
					}
				}
		};
		function DisplayBtn(btn, tag, name){
				this.btn = btn;
				this.tag = tag;
				this.name = name;
				this.text = "";
		}
		addbtns.each(function(){
				var obj = $(this);
				var btn = new DisplayBtn(obj, obj.attr("data-DB-tag"), obj.attr("data-DB-name"));
				btn.btn.on("click", function(){
						btn.addDisplay();
				});
		});
}