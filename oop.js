//this is my oop assignment
function NotesApplication(){
	var Notes = new NotesApplication(author, noteslist);
	this.author = author;
	this.notelist = [];

	NotesApplication.prototype = {
		constructor: NotesApplication, 
		NotesContent:function (content)
		this.notelist.push(content)
	}

}