htmlGenerator();
function htmlGenerator(){
		var entries = [];
		var addbtns = $("*[data-js-hook='add-display-btn']");
		var display = $("div[data-js-hook='display-content']");
		
		// Display Button
		DisplayBtn.prototype = {
			createEntry: function(){
				var text = prompt("What would you like your "+this.name+" to say?", "");
				if(text != false || text != null){
					console.log(text);
					var entry = entries.push({type: this.name, tag: this.tag, text: text});
				}
				console.log(entries);
				createDisplays();
			},
		};
		function DisplayBtn(btn, tag, name){
				this.btn = btn;
				this.tag = tag;
				this.name = name;
		};
		addbtns.each(function(){
				var obj = $(this);
				var btn = new DisplayBtn(obj, obj.attr("data-DB-tag"), obj.attr("data-DB-name"));
				btn.btn.on("click", function(){
						btn.createEntry();
				});
		});
		// Display Element themselves
		DisplayElement.prototype = {
			entryOptions: function(parentObject){
				this.optionCtn = $("<div class='entry-options'>"+"</div>");
				this.editBtn = $("<button class='edit-entry'>"+"Edit"+"</button>");
				this.deleteBtn = $("<button class='delete-entry'>"+"Delete"+"</button>");
				this.optionCtn.append(this.editBtn);
				this.optionCtn.append(this.deleteBtn);
				this.element.append(this.optionCtn);
				
				this.editBtn.on("click", function(){
					editEntry();
				});
				this.deleteBtn.on("click", function(){
					deleteEntry();
				});
				
				function editEntry(){
					parentObject.text = prompt("What would you like your "+name+" to say?", parentObject.text);
					createDisplays();
				}
				function deleteEntry(){
					var count = 0;
					for(var i = 0; i < entries.length; i++){
						var obj = entries[i];
						if(obj.text === parentObject.text){
							entries.splice(count,1);
						}
						count++;
					}
					createDisplays();
				}
			}
		};
		function DisplayElement(element){
			this.element = element;
		}
		function createDisplays(){
			display.html("");
			for(var i = 0; i < entries.length; i++){
				var obj = entries[i];
				obj.displayElement = new DisplayElement($("<div class='editable-content'><"+obj.tag+">"+obj.text+"</"+obj.tag+"></div>"));
				obj.displayElement.entryOptions(obj);
				display.append(obj.displayElement.element);
			}
		}
}