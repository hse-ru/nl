Experigen.initialize = function () {
	
    var tests = [];
	var items = this.resource("items");
//	var test_length = items.length;
	
	
	tests = tests.pairWith("view","stimulus.ejs");
//    tests[0].view = "warmup.ejs";

	this.addStaticScreen("intro.ejs");
	this.addStaticScreen("getgoing.ejs")
	this.addBlock(tests);
	this.addStaticScreen("demographic.ejs");
	this.addStaticScreen("finalthanks.ejs");
}
