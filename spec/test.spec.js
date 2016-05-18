describe ("NotesApplication", function(){
	it("should accept two argument" function(){
		expect(this.author("")).toBe(false);
		expect(this.notelist([])).toBeUndefined();
	});
	it("should save Notescontent" function(){
		expect(NotesApplication.prototype.hasOwnProperty("Notescontent")).toBeUndefined;
	});
	it("should display notelist" function(){
		expect(NotesApplication.prototype.hasOwnProperty("listNotes")).toBeUndefined;
	});
	
}