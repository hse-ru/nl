Experigen.initialize = function () {
	
    var tests = [];
	var items = this.resource("items");	
	
	tests = items.pairWith("view","stimulus.ejs");

	this.addStaticScreen("intro.ejs");
///	this.addStaticScreen("warmup.ejs");
	this.addStaticScreen("getgoing.ejs")
	this.addBlock(tests);
	this.addStaticScreen("demographic.ejs");
	this.addStaticScreen("finalthanks.ejs");
}
