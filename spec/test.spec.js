describe ('NotesApplication', function(){

	it('it should add notecontent to noteslist', function(){
		var note_content = "";
		Book = new NotesApplication();
		expect(Book.NotesContent).toIncrement(Book.noteslist);
	});

	it('not null', function(){
		var NotesContent = function(){
			service.NotesContent(null);
		}
		expect(NotesContent).not.toBe(null);
	});
	
	it('not null', function(){
		var listNotes = function(){
			service.listNotes(null);
		}
		expect(listNotes).not.toBe(null);
	});

	it('not null', function(){
		var get = function(){
			service.get(null);
		}
		expect(get).not.toBe(null);
	});

	it('not null', function(){
		var search = function(){
			service.onSearch(null);
		}
		expect(search).not.toBe(null);
	});
	
	
	
});