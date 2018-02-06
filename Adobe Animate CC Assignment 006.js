(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



// stage content:
(lib.AdobeAnimateCCAssignment006 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7D1E57").s().p("ABIAaIg6gVQhUgegkAbQAggcA3gCQBEgCA7A1QgGAGgLAAQgIAAgLgDg");
	this.shape.setTransform(299.2,240.8,1.971,1.971);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQAVQgIgIAAgNQAAgMAIgIQAGgJAKAAQAKAAAIAJQAHAIAAAMQAAAMgHAJQgIAJgKAAQgKAAgGgJg");
	this.shape_1.setTransform(285,175.1,1.971,1.971);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRAVQgHgJAAgMQAAgMAHgIQAIgJAJAAQAKAAAIAJQAHAIAAAMQAAANgHAIQgIAJgKAAQgJAAgIgJg");
	this.shape_2.setTransform(308.1,175.1,1.971,1.971);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#010202").s().p("AgnAwQgQgUAAgcQAAgbAQgUQAQgUAXAAQAXAAARAUQAQAUAAAbQAAAcgQAUQgRAUgXAAQgWAAgRgUg");
	this.shape_3.setTransform(307.3,186,1.971,1.971);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#010202").s().p("AgnAwQgQgUAAgcQAAgbAQgUQAQgUAXAAQAXAAARAUQAQAUAAAbQAAAcgQAUQgRAUgXAAQgWAAgRgUg");
	this.shape_4.setTransform(286.1,186,1.971,1.971);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2DFFBF").s().p("AiOCsQg7hHAAhlQAAhkA7hHQA7hIBTAAQBUAAA7BIQA7BHAABkQAABlg7BHQg7BIhUAAQhTAAg7hIg");
	this.shape_5.setTransform(331.3,175.5,1.971,1.971);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2DFFBF").s().p("AiOCsQg7hHAAhlQAAhkA7hHQA8hIBSAAQBUAAA7BIQA7BHAABkQAABlg7BHQg7BIhUAAQhSAAg8hIg");
	this.shape_6.setTransform(262.1,175.5,1.971,1.971);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0D9EB2").s().p("AiOCsQg7hHAAhlQAAhkA7hHQA7hIBTAAQBUAAA7BIQA7BHAABkQAABlg7BHQg7BIhUAAQhTAAg7hIg");
	this.shape_7.setTransform(331.3,186,1.971,1.971);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0D9EB2").s().p("AiOCsQg7hHAAhlQAAhkA7hHQA8hIBSAAQBUAAA7BIQA7BHAABkQAABlg7BHQg7BIhUAAQhSAAg8hIg");
	this.shape_8.setTransform(262.1,186,1.971,1.971);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FFEE64","#8C5D23","#454545","#000BB4"],[0,0.412,0.604,1],-31.6,54.9,31.7,-54.8).s().p("AAdItQgXgXgugXQgsgXgNgPQgiAxg1AcIhdAnQg4AYgjAkQguAwgfBYQgYh7BDhpQAlg5BshiQhzAAh0gUQhtgXgmgFQg9gIggAWQgjAZgdBQQAFkSDuARQBBAEBnAfQBSAZAFgIQhFhFhRihQhXivgnikQgbh5AShyQAVh4BChOQBJhWB1gSQCEgVCqBDQE3hsCXBrQCBBagBDkQAADEhZDeQhVDUhoBWQAygUBMAIQAsAFBdAWQBXAWAmADQA+AEAggaQghBRiAASQgsAGhJABIhzABQAqARAkAdQAUARAjAhQBBA4ByAAQhPA6hPABQg9ABhJgiQhQgsgmgTQhBgfguAFQA3BMgiByQgfBnhdBkQAXjThThQg");
	this.shape_9.setTransform(294.9,198.2,1.971,1.971);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#741B51").s().p("AAdItQgXgXgugYQgsgWgNgPQgiAxg1AcIhdAnQg4AYgjAkQguAwgfBYQgYh7BDhpQAlg5BshiQhzAAh0gUQhtgXgmgFQg9gIggAWQgjAZgdBQQAFkSDuARQBBAEBnAfQBSAYAFgHQhFhGhRihQhXiugnilQgbh4AShyQAVh4BChOQBJhWB1gSQCEgVCqBDQE3htCXBrQCBBbgBDjQAADFhZDeQhVDUhoBWQAygUBMAIQAtAEBcAXQBXAVAmADQA+AFAggaQggBRiBASQgsAGhJABIhzABQAqARAkAdQAUARAjAhQBBA4ByAAQhPA6hPABQg9ABhJgiQhQgsgmgTQhBgfguAFQA3BMgiByQgfBnhdBkQAXjThThQg");
	this.shape_10.setTransform(294.9,201.7,1.971,1.971);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Background
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F5F5F5").s().p("AgLBhQgEg7gLgLQgLgLg7gEQg3gFABgDQAAgEA0gJQA4gLALgLQAMgLAKg4QAKg1ADABQAEgBAGA2QAHA5AKAKQALAKA4AHQA1AGAAADQABAEg2AIQg5AKgLAMQgMALgKA5QgIA1gCAAIgBABQgDAAgFg3g");
	this.shape_11.setTransform(29.7,201.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F5F5F5").s().p("AgSChQgIhigSgSQgSgShigIQhbgIABgFQAAgGBXgQQBdgRASgTQATgSAShcQAQhYAGAAQAGAAAKBYQALBeASARQARASBeAKQBYALAAAFQAAAGhZAOQhfARgTATQgTATgPBeQgOBZgFAAIAAAAQgGAAgHhag");
	this.shape_12.setTransform(59.2,167.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F5F5F5").s().p("AgOB8QgGhMgOgOQgNgOhMgGQhGgGABgEQAAgEBDgMQBHgNAPgPQAOgOAOhHQAMhDAEgBQAFAAAIBEQAIBJAOANQANAOBJAIQBEAIgBAEQAAAFhEALQhJAMgPAPQgOAOgMBJQgLBEgEAAIAAABQgEAAgGhGg");
	this.shape_13.setTransform(503.6,-1.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F5F5F5").s().p("AgSCeQgIhggSgSQgRgShhgHQhZgIAAgGQABgFBVgQQBcgRASgSQASgTAShbQAQhVAFgBQAHAAAKBXQALBdARARQARASBdAKQBXAKAAAFQgBAGhXAOQheAQgSATQgTATgQBdQgNBXgFABIAAAAQgGAAgHhag");
	this.shape_14.setTransform(450.6,16.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#868686").s().p("AgvAwQgUgUAAgcQAAgbAUgUQAUgUAbAAQAcAAAUAUQAUAUAAAbQAAAcgUAUQgUAUgcAAQgbAAgUgUg");
	this.shape_15.setTransform(107.7,56.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#868686").s().p("AhaBcQgmgnAAg1QAAg1AmglQAmgnA0AAQA2AAAmAnQAlAlAAA1QAAA1glAnQgmAmg2gBQg0ABgmgmg");
	this.shape_16.setTransform(64,106.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C5C5C5").s().p("Ag5BHQgegeAAgpQAAgpAegdQAegeAoAAQAsAAAfAhQgZBYgxBPIgBABQgoAAgegeg");
	this.shape_17.setTransform(85.7,55.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#868686").s().p("AAYhTQAaAdAAAmQAAApgdAdQgcAegqAAQAxhPAYhYg");
	this.shape_18.setTransform(92.1,56.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B1B1B1").s().p("Am4JeQi0h2hajEQBWBABmAhQBoAjBwAAQC2AACchbQCZhXBciXQAxhPAZhYQAahbAAhgQAAiFgyh6Qgvh2hYheQDlBJCPDBQCTDFAAD3QAACWg7CLQg4CFhnBnQhnBniGA5QiKA6iXAAQjeAAi5h5g");
	this.shape_19.setTransform(59.4,55.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C5C5C5").s().p("AhXBYQglgkAAg0QAAgyAlgmQAkgkAzAAQA0AAAkAkQAlAmAAAyQAAA0glAkQgkAlg0AAQgzAAgkglg");
	this.shape_20.setTransform(30.3,42.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C5C5C5").s().p("Ag+A/QgagaAAglQAAgkAagaQAagaAkAAQAlAAAaAaQAaAaAAAkQAAAlgaAaQgaAaglAAQgkAAgagag");
	this.shape_21.setTransform(44.1,17.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D9D9D9").s().p("AlCIuQhlghhWhAQhDiSAAijQAAiYA6iJQA5iGBnhnQBnhnCFg4QCKg7CXAAQB1AABtAjQBYBeAvB2QAxB6AACFQAABfgaBbQgZBZgwBPQhcCXiZBXQidBbi2AAQhvAAhpgjg");
	this.shape_22.setTransform(39.3,38.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFA709").s().p("AjnE/Qhfg+gvhnQBeBFB2AAQBgAABSgwQBQguAxhPQAZgqANgtQAOgxAAgyQAAhGgahAQgZg+gugyQB4AnBMBlQBNBoAACCQAAChhzBzQhyBziiAAQh1AAhhhAg");
	this.shape_23.setTransform(525.2,383.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#FF0000","#FFFF00","#00FF00","#00FFFF","#0000FF","#FF00FF","#FF0000"],[0,0.165,0.365,0.498,0.667,0.831,1],-30.4,0,30.4,0).s().p("AkMDzQgjhOAAhVQAAihBzhzQBzhzChAAQA9AAA6ATQAuAxAZA+QAaBAAABGQAAAxgOAxQgNAugZAqQgxBQhRAtQhTAwheAAQh2AAhfhFg");
	this.shape_24.setTransform(514.7,375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(256.6,179.5,581.1,442.7);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#0D9EB2",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;