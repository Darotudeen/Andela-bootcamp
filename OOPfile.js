//this is my oop assignment
function NotesApplication(author, noteslist){
	this.author = author;
	this.noteslist = [];
};

NotesApplication.prototype = {
	constructor: NotesApplication,
	create:function (note_content){
		var note_content = "";
		this.noteslist.push(note_content);
		console.log (this.noteslist);
	};
	
	listNotes :function(){
		var Note_ID = this.noteslist[j];
		if(this.noteslist.length>0){
			for(j = 0; j<this.noteslist.length; j++){
				console.log("Note_ID: " + Note_ID );
				console.log("note_content: " + this.noteslist);
				console.log("By Author: " + this.author); 
			};
		else{
			console.log("no ID found");
		}
		};
		

	};

	get: function(Note_ID){
		return this.noteslist.join(',');
	};

	search:function(search_text){
		var str = this.noteslist;
		var n = str.search(search_text);
	};

	deletes: function(Note_ID){
		delete this.noteslist[Note_ID];
	};

	edit: function(Note_ID, new_content){
		this.noteslist[Note_ID] = new_content;
	}

}

	

