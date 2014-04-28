Experigen.initialize = function () {
	
    var tests = [];
	var num = this.resource("num");
	var test_length = num.length;
	

	for(var i = 3; i <= test_length; i += 1) {
	    tests = tests.concat(num.subset("num",i.toString()));
	}
	
	tests = tests.pairWith("view","stimulus.ejs").shuffle();
    tests[0].view = "warmup.ejs";
	tests[1].view = "warmup.ejs";
	tests[2].view = "warmup.ejs";

	this.addStaticScreen("intro.ejs");
	this.addBlock(tests);
	this.addStaticScreen("demographic.ejs");
	this.addStaticScreen("finalthanks.ejs");

}
