//this is my oop assignment
function NotesApplication(author, noteslist){
	this.author = author;
	this.noteslist = [];
}

NotesApplication.prototype = {
	constructor: NotesApplication,
	NotesContent:function (note_content){
		this.noteslist.push(note_content)
	},
	
	listNotes :function(){
		var Note_ID = this.noteslist[j];
		if(this.noteslist.length>0){
			for(j = 0; j<this.noteslist.length; j++){
				console.log("Note_ID: " + Note_ID );
				console.log(note_content);
				console.log("By Author: " + this.author); 
			}
		}
		

	},

	get: function(Note_ID){
		return this.noteslist.join(',');
	}



	
}

	

