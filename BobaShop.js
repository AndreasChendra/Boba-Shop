(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.CheeseDrink = function() {
	this.initialize(img.CheeseDrink);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,306,577);


(lib.Click = function() {
	this.initialize(img.Click);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,380,148);


(lib.GreenDrink = function() {
	this.initialize(img.GreenDrink);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,357,616);


(lib.Information = function() {
	this.initialize(img.Information);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,199,227);


(lib.Motion = function() {
	this.initialize(img.Motion);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1500,1125);


(lib.NextButton = function() {
	this.initialize(img.NextButton);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,994,972);


(lib.Open = function() {
	this.initialize(img.Open);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,626,626);


(lib.Opening = function() {
	this.initialize(img.Opening);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,900,1360);


(lib.TaroDrink = function() {
	this.initialize(img.TaroDrink);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,379,623);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.an_Video = function(options) {
	this._element = new $.an.Video(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.Tween46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF00FF").ss(1,1,1).p("ANhAAQAAFnj9D9Qj9D9lnAAQllAAj+j9Qj9j9AAlnQAAllD9j+QD+j9FlAAQFnAAD9D9QD9D+AAFlg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF00FF").s().p("ApjJkQj9j9AAlnQAAllD9j+QD9j9FmAAQFmAAD9D9QD+D+AAFlQAAFnj+D9Qj9D9lmAAQlmAAj9j9g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.5,-87.5,175,175);


(lib.Tween45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF00FF").ss(1,1,1).p("ANhAAQAAFnj9D8Qj9D+lnAAQllAAj+j+Qj9j8AAlnQAAlmD9j9QD+j9FlAAQFnAAD9D9QD9D9AAFmg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF00FF").s().p("ApjJjQj9j9AAlmQAAlmD9j9QD+j9FlAAQFnAAD9D9QD9D9AAFmQAAFmj9D9Qj9D+lnAAQllAAj+j+g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.5,-87.5,175,175);


(lib.Tween44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF00").s().p("AkDKKQh5hBgxhkQgzhlAAipIAAqaQAAh1gMgcQgLgdgegRQgdgRhQABIAAgmIKEAAIAAAmIggAAQhIAAgbARQgbAQgMAdQgLAdAAB0IAAKaQAAC2AaA8QAYA7A6AnQA6AnBXAAQBlAABIgxQBHgyAkhXQAjhYAAjYIAAorQAAhbgSgnQgQgngcgPQgpgXhMAAIAAgmIGwAAIAAAmIgaAAQg0AAgjAXQgjAXgPAuQgMAgAABTIAAIFQAADvgdBqQgdBrhwBaQhxBYjBABQiigBhYgug");
	this.shape.setTransform(142,118.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66FF00").s().p("AoEHJQiRjFAAkNQAAkvC9jKQC9jKEUAMQEpgMC7DJQC6DKAAEvQgBECiKDFQi5EFlPAAQlQAAi4j5gAkAnBQhJCcAAElQAAFcBwCmQBOB1CMAAQBfAAA/gzQBShAAsiMQAtiOAAjjQAAkNgtiFQgviHhGg3QhIg3hdAAQiqAAhZC/g");
	this.shape_1.setTransform(0.3,117.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66FF00").s().p("AldKoIAAglIBCAAQA3AAAggUQAYgPAOgiQAKgYAAhnIAAkQIkmpHQhXisgkgeQgkgfg8gBIAAgmIJWAAIAAAmIgaAAQg3AAgVARQgWARAAATQAAAkBKCRIDgHCIDhmZQBUiXAAgxQAAgbgYgSQgggZhTgFIAAgmIF9AAIAAAmQg+AJghAeQguAqhkC8IkOHsIAAFIQAABqAKAaQAKAZAeAVQAeASAyAAIBGAAIAAAlg");
	this.shape_2.setTransform(-141.6,117.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66FF00").s().p("ABJKpIAAglQA9gHATgPQARgPAAgWQAAgqhUh0IkemJIguArIAAFzQAABqALAaQALAaAgAUQAfASBFAAIAAAlIp1AAIAAglIApAAQA2AAAhgWQAYgOANgiQAKgYAAhmIAAt/QAAhogKgaQgKgagegTQgggUg0AAIgpAAIAAglIJtAAIAAAlQhAAAghAUQgYAOgOAhQgLAZAABnIAAGoIHOmZQBhhVAAgzQAAgmgogWQgUgLhQgDIAAglIHnAAIAAAlQhCAFgkAVQgmAUiGB2IluE/IG3JWQBdB/BDAtQAxAgA2ABIAAAlg");
	this.shape_3.setTransform(275.2,-114.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FF00").s().p("AHCK4ItLxsIAANgQAAB2AyApQAxApA/AAIAeAAIAAAlIm7AAIAAglQBngBAoguQApgtAAhsIAAvAIgbgkQgng1gfgSQgegRg5gCIAAglIG7AAIJmNLIAApIQAAh6gggsQgsg6hoACIAAglIGcAAIAAAlQhPAMgbARQgbASgPAoQgQAnAABgIAARsg");
	this.shape_4.setTransform(129.8,-113);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#66FF00").s().p("AA7K3IAAglIAZAAQBIAAAegXQAUgQAAgeQAAgSgFgTQgCgJgahCIhCiqIm4AAIg0CEQgaBDAAArQAAA5AqAbQAZAQBhAJIAAAlImfAAIAAglQBEgLArgyQArgyBAicIG9w9IARAAIHCRbQBBCfApApQAgAfA5AGIAAAlgAktDpIF4AAIi4nUg");
	this.shape_5.setTransform(-5.7,-116);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#66FF00").s().p("AAtKpIAAglIAoAAQA3AAAggWQAYgOAOgiQAKgYAAhmIAAmmIm3AAIAAGmQAABoALAaQAKAaAfAVQAeATA1AAIApAAIAAAlIqMAAIAAglIApAAQA3AAAhgWQAYgOAMgiQALgYAAhmIAAt/QAAhogLgaQgKgagegTQgfgUg1AAIgpAAIAAglIKMAAIAAAlIgpAAQg2AAgiAVQgYAOgNAiQgKAYAABmIAAGCIG3AAIAAmCQAAhogKgaQgKgagfgTQgfgUg1AAIgoAAIAAglIKLAAIAAAlIgoAAQg4AAggAVQgYAOgOAiQgKAYAABmIAAN/QAABoAKAaQALAaAfAVQAfATA1AAIAoAAIAAAlg");
	this.shape_6.setTransform(-146.5,-114.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#66FF00").s().p("AlGKpIAAglIApAAQA2AAAhgWQAYgOAOgiQAKgYAAhmIAAwZIhaAAQh+AAg5A6QhRBRgUCXIgjAAIAAlwIRfAAIAAFwIggAAQgeh/gkg4Qgkg4g+ghQgjgShYAAIhdAAIAAQZQAABoALAaQALAaAeAVQAfATA2AAIApAAIAAAlg");
	this.shape_7.setTransform(-282.9,-114.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-349.5,-233.8,699,467.6);


(lib.Tween43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF00").s().p("AkDKKQh5hBgxhkQgzhlAAipIAAqaQAAh1gMgcQgLgdgegRQgdgRhQABIAAgmIKEAAIAAAmIggAAQhIAAgbARQgbAQgMAdQgLAdAAB0IAAKaQAAC2AaA8QAYA7A6AnQA6AnBXAAQBlAABIgxQBHgyAkhXQAjhYAAjYIAAorQAAhbgSgnQgQgngcgPQgpgXhMAAIAAgmIGwAAIAAAmIgaAAQg0AAgjAXQgjAXgPAuQgMAgAABTIAAIFQAADvgdBqQgdBrhwBaQhxBYjBABQiigBhYgug");
	this.shape.setTransform(142,118.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66FF00").s().p("AoEHJQiRjFAAkNQAAkvC9jKQC9jKEUAMQEpgMC7DJQC6DKAAEvQgBECiKDFQi5EFlPAAQlQAAi4j5gAkAnBQhJCcAAElQAAFcBwCmQBOB1CMAAQBfAAA/gzQBShAAsiMQAtiOAAjjQAAkNgtiFQgviHhGg3QhIg3hdAAQiqAAhZC/g");
	this.shape_1.setTransform(0.3,117.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66FF00").s().p("AldKoIAAglIBCAAQA3AAAggUQAYgPAOgiQAKgYAAhnIAAkQIkmpHQhXisgkgeQgkgfg8gBIAAgmIJWAAIAAAmIgaAAQg3AAgVARQgWARAAATQAAAkBKCRIDgHCIDhmZQBUiXAAgxQAAgbgYgSQgggZhTgFIAAgmIF9AAIAAAmQg+AJghAeQguAqhkC8IkOHsIAAFIQAABqAKAaQAKAZAeAVQAeASAyAAIBGAAIAAAlg");
	this.shape_2.setTransform(-141.6,117.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66FF00").s().p("ABJKpIAAglQA9gHATgPQARgPAAgWQAAgqhUh0IkemJIguArIAAFzQAABqALAaQALAaAgAUQAfASBFAAIAAAlIp1AAIAAglIApAAQA2AAAhgWQAYgOANgiQAKgYAAhmIAAt/QAAhogKgaQgKgagegTQgggUg0AAIgpAAIAAglIJtAAIAAAlQhAAAghAUQgYAOgOAhQgLAZAABnIAAGoIHOmZQBhhVAAgzQAAgmgogWQgUgLhQgDIAAglIHnAAIAAAlQhCAFgkAVQgmAUiGB2IluE/IG3JWQBdB/BDAtQAxAgA2ABIAAAlg");
	this.shape_3.setTransform(275.2,-114.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FF00").s().p("AHCK4ItLxsIAANgQAAB2AyApQAxApA/AAIAeAAIAAAlIm7AAIAAglQBngBAoguQApgtAAhsIAAvAIgbgkQgng1gfgSQgegRg5gCIAAglIG7AAIJmNLIAApIQAAh6gggsQgsg6hoACIAAglIGcAAIAAAlQhPAMgbARQgbASgPAoQgQAnAABgIAARsg");
	this.shape_4.setTransform(129.8,-113);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#66FF00").s().p("AA7K3IAAglIAZAAQBIAAAegXQAUgQAAgeQAAgSgFgTQgCgJgahCIhCiqIm4AAIg0CEQgaBDAAArQAAA5AqAbQAZAQBhAJIAAAlImfAAIAAglQBEgLArgyQArgyBAicIG9w9IARAAIHCRbQBBCfApApQAgAfA5AGIAAAlgAktDpIF4AAIi4nUg");
	this.shape_5.setTransform(-5.7,-116);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#66FF00").s().p("AAtKpIAAglIAoAAQA3AAAggWQAYgOAOgiQAKgYAAhmIAAmmIm3AAIAAGmQAABoALAaQAKAaAfAVQAeATA1AAIApAAIAAAlIqMAAIAAglIApAAQA3AAAhgWQAYgOAMgiQALgYAAhmIAAt/QAAhogLgaQgKgagegTQgfgUg1AAIgpAAIAAglIKMAAIAAAlIgpAAQg2AAgiAVQgYAOgNAiQgKAYAABmIAAGCIG3AAIAAmCQAAhogKgaQgKgagfgTQgfgUg1AAIgoAAIAAglIKLAAIAAAlIgoAAQg4AAggAVQgYAOgOAiQgKAYAABmIAAN/QAABoAKAaQALAaAfAVQAfATA1AAIAoAAIAAAlg");
	this.shape_6.setTransform(-146.5,-114.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#66FF00").s().p("AlGKpIAAglIApAAQA2AAAhgWQAYgOAOgiQAKgYAAhmIAAwZIhaAAQh+AAg5A6QhRBRgUCXIgjAAIAAlwIRfAAIAAFwIggAAQgeh/gkg4Qgkg4g+ghQgjgShYAAIhdAAIAAQZQAABoALAaQALAaAeAVQAfATA2AAIApAAIAAAlg");
	this.shape_7.setTransform(-282.9,-114.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-349.5,-233.8,699,467.6);


(lib.Tween37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZATIAAglIAzAAIAAAlg");
	this.shape.setTransform(219.1,54.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhjBXQgXgQAAgZQAAgOAJgMQAJgMAOgHQAPgGASgEQANgDAbgCQA2gFAagGIAAgJQAAgUgMgJQgSgLghAAQggAAgQAIQgPAJgHAUIgsgEQAGgVAOgNQANgNAagGQAbgHAiAAQAiAAAVAGQAVAFALAJQAKAJAEAOQACAIAAAXIAAArQAAAuADAMQADANAIALIgvAAQgHgLgCgNQgaAPgXAHQgWAGgaAAQgtAAgYgPgAgKAMQgcADgLAEQgNADgFAIQgHAHAAAIQAAAOAOAIQAOAJAaAAQAZAAAVgIQAUgJAKgOQAHgLAAgWIAAgMQgZAHgwAFg");
	this.shape_1.setTransform(194.8,46.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhSBMQgigaAAgxQAAgfAPgYQAOgYAegLQAdgMAiAAQArAAAcAQQAcAQAIAeIgtAFQgGgUgQgKQgQgKgXAAQghAAgVASQgWASAAAmQAAAnAVASQAVASAgAAQAbAAARgMQASgMAFgZIAtAEQgHAigeATQgfATgsAAQg2AAghgag");
	this.shape_2.setTransform(165.8,46.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhaBMQgjgbAAgxQAAg1AqgbQAigVAxAAQA4AAAiAaQAkAbgBAuQAAAlgPAWQgQAVgdAMQgdAMgkAAQg3AAgjgagAg3g3QgWASgBAlQABAmAWASQAXATAgAAQAiAAAWgTQAXgTAAglQAAgkgXgTQgWgTgiAAQggAAgXATg");
	this.shape_3.setTransform(135.1,46.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgWCHIAAjDIAsAAIAADDgAgWhgIAAgmIAsAAIAAAmg");
	this.shape_4.setTransform(112.5,43.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhzCKIAAkOIApAAIAAAZQAPgPASgHQATgHAZgBQAiABAaANQAbAMANAYQANAXAAAcQAAAegOAXQgPAYgcANQgcANgfAAQgWAAgSgHQgSgHgMgLIAABggAg0hbQgWAUAAAmQAAAkAVATQAVARAeABQAdAAAWgTQAVgSAAgnQAAgmgVgSQgVgTgcAAQgdABgXATg");
	this.shape_5.setTransform(90.5,50.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhjBXQgYgQABgZQgBgOAKgMQAJgMAOgHQAPgGASgEQANgDAbgCQA2gFAagGIAAgJQAAgUgMgJQgSgLghAAQggAAgPAIQgQAJgHAUIgtgEQAHgVAOgNQAOgNAZgGQAbgHAiAAQAhAAAWAGQAVAFALAJQAKAJAEAOQACAIAAAXIAAArQAAAuADAMQADANAJALIgwAAQgHgLgCgNQgaAPgXAHQgWAGgaAAQgtAAgYgPgAgKAMQgcADgLAEQgNADgFAIQgHAHAAAIQAAAOAOAIQANAJAbAAQAZAAAVgIQAUgJAKgOQAHgLAAgWIAAgMQgZAHgwAFg");
	this.shape_6.setTransform(58.3,46.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYCHIAAjtIh6AAIAAggIElAAIAAAgIh7AAIAADtg");
	this.shape_7.setTransform(25.8,43.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AglCJIAAipIgoAAIAAgZIAoAAIAAgVQAAgUAEgKQAHgMARgIQAPgIAeAAQATAAAXADIgHAdQgOgCgMAAQgVAAgJAGQgIAHAAASIAAASIA0AAIAAAZIg0AAIAACpg");
	this.shape_8.setTransform(-15.6,42.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhZBMQgkgbAAgxQAAg1AqgbQAjgVAwAAQA3AAAjAaQAkAbAAAuQgBAlgPAWQgPAVgeAMQgeAMgjAAQg3AAgigagAg3g3QgWASgBAlQABAmAWASQAWATAhAAQAiAAAWgTQAXgTAAglQAAgkgXgTQgWgTgiAAQghAAgWATg");
	this.shape_9.setTransform(-41,46.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhYBMQgjgbABgvQgBgxAjgbQAjgbA2AAQA3AAAhAaQAjAbgBAwIAAAIIjGAAQACAhAXARQAWARAhAAQAZAAARgKQARgJALgVIAvAEQgLAegeARQgeAQgvAAQg6AAgigagAgxg7QgWAQgCAZICVAAQgEgZgNgMQgWgTgjAAQgeAAgVAPg");
	this.shape_10.setTransform(-89.3,46.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag7B8QgbgNgOgXQgPgXAAgeQAAgdANgXQAOgYAagNQAbgMAhAAQAXAAATAHQATAIAMAMIAAhhIAtAAIAAENIgqAAIAAgZQgZAdgxAAQggAAgbgNgAgwgVQgUASAAAmQAAAmAVASQAWATAdAAQAdAAAVgSQAVgSAAgkQAAgngVgTQgVgTgfAAQgeAAgUASg");
	this.shape_11.setTransform(-121.5,43.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhjBXQgYgQAAgZQAAgOAKgMQAIgMAPgHQAPgGASgEQANgDAbgCQA2gFAagGIAAgJQABgUgNgJQgSgLghAAQggAAgPAIQgQAJgHAUIgtgEQAHgVAOgNQAOgNAZgGQAbgHAiAAQAhAAAWAGQAWAFAJAJQALAJAEAOQACAIAAAXIAAArQAAAuADAMQADANAJALIgwAAQgHgLgCgNQgaAPgXAHQgWAGgaAAQgtAAgYgPgAgKAMQgcADgLAEQgMADgGAIQgHAHAAAIQAAAOAOAIQANAJAbAAQAZAAAVgIQAUgJAKgOQAHgLAAgWIAAgMQgYAHgxAFg");
	this.shape_12.setTransform(-151.9,46.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ACJBkIAAh7QgBgTgEgJQgFgIgLgGQgMgGgPABQgdgBgSAOQgTAOAAAeIAABxIgsAAIAAh+QAAgWgLgLQgLgMgZABQgUAAgQAHQgQAIgIANQgHAPAAAbIAABkIguAAIAAjDIApAAIAAAcQANgOAVgJQAVgJAaAAQAeAAATAJQASAJAIAQQAggiAzAAQAoAAAVAQQAVAQABAiIAACFg");
	this.shape_13.setTransform(-190.2,46.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAdAwIgNgzIAAgsIA0AAIAAAsIgMAzgAg2AwIgNgzIAAgsIA0AAIAAAsIgLAzg");
	this.shape_14.setTransform(263.4,-8.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhLBWQgcgQgHgfIAtgFQADAUASAKQARALAeAAQAfAAAPgJQAQgKAAgMQAAgLgOgHQgJgEglgHQgxgJgTgGQgUgHgKgMQgKgMAAgOQAAgNAJgLQAIgLAOgIQAKgFATgEQASgEAVAAQAeAAAYAGQAYAHALALQAMAMAEATIgsAEQgDgPgPgJQgOgIgaAAQgfAAgOAHQgNAIAAAKQAAAHAGAFQAFAFAMAEIAnAIQAwAJAUAHQATAEAKAMQALALAAARQAAARgNAPQgNAOgZAIQgZAIggAAQgzAAgbgQg");
	this.shape_15.setTransform(238.5,3.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgWCHIAAkNIAtAAIAAENg");
	this.shape_16.setTransform(217.3,0.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhIBkIAAjDIApAAIAAAeQAQgVANgGQAMgHAQAAQAXAAAYAKIgQAgQgQgIgRAAQgPAAgLAHQgMAGgFAMQgHARAAAWIAABlg");
	this.shape_17.setTransform(202.6,3.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhjBXQgYgQABgZQgBgOAKgMQAJgMAOgHQAPgGASgEQANgDAbgCQA2gFAagGIAAgJQAAgUgMgJQgSgLghAAQggAAgPAIQgQAJgHAUIgtgEQAHgVAOgNQAOgNAZgGQAbgHAiAAQAhAAAWAGQAVAFALAJQAKAJAEAOQACAIAAAXIAAArQAAAuADAMQADANAIALIgvAAQgHgLgCgNQgaAPgXAHQgWAGgaAAQgtAAgYgPgAgKAMQgcADgLAEQgNADgFAIQgHAHAAAIQAAAOAOAIQANAJAbAAQAZAAAVgIQAUgJAKgOQAHgLAAgWIAAgMQgZAHgwAFg");
	this.shape_18.setTransform(174.9,3.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhYBMQgigbAAgvQAAgxAigbQAjgbA3AAQA2AAAhAaQAjAbgBAwIAAAIIjHAAQADAhAXARQAWARAgAAQAaAAARgKQASgJAKgVIAvAEQgLAegeARQgeAQgvAAQg5AAgjgagAgxg7QgWAQgCAZICVAAQgDgZgPgMQgWgTgiAAQgeAAgVAPg");
	this.shape_19.setTransform(143.6,3.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhzCJIAAkNIApAAIAAAaQAPgQASgHQATgIAZAAQAiAAAaAOQAbAMANAYQANAXAAAcQAAAegOAYQgPAXgcANQgcANgfAAQgWAAgSgHQgSgHgMgLIAABfgAg0haQgWATAAAmQAAAlAVARQAVASAeAAQAdAAAWgSQAVgTAAgmQAAgmgVgSQgVgSgcgBQgdAAgXAVg");
	this.shape_20.setTransform(113,7.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAdAwIgNgzIAAgsIA0AAIAAAsIgMAzgAg2AwIgNgzIAAgsIA0AAIAAAsIgLAzg");
	this.shape_21.setTransform(86.2,-8.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("ABACHIAAh8QAAgYgPgLQgPgMgbAAQgTABgSAHQgSAIgHANQgIAMAAAXIAABrIgtAAIAAkNIAtAAIAABhQAggbAvAAQAeAAAWAJQAWAIAKAPQAJAQAAAbIAAB8g");
	this.shape_22.setTransform(43.1,0.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgHCAQgNgGgGgJQgFgKAAgeIAAhvIghAAIAAgaIAhAAIAAgwIAsgUIAABEIAtAAIAAAaIgtAAIAABxQAAAOADAFQACAEAGACQAEACALAAIATgBIAHAdQgTADgPAAQgZAAgNgFg");
	this.shape_23.setTransform(19.3,0.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgVCHIAAjDIAsAAIAADDgAgVhgIAAgmIAsAAIAAAmg");
	this.shape_24.setTransform(3.5,0.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AA1BiIgrh0IgKgiIg1CWIgwAAIhSjDIAvAAIArBwIAQAqIAOgoIAqhyIAuAAIAoBxIANAlIAQgmIAuhwIAsAAIhUDDg");
	this.shape_25.setTransform(-23.6,3.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag7B8QgbgNgOgXQgPgXAAgeQAAgdANgXQAOgYAagNQAbgMAhAAQAXAAATAHQATAIAMAMIAAhhIAtAAIAAENIgqAAIAAgZQgZAdgxAAQggAAgbgNgAgwgVQgUASAAAmQAAAmAVASQAWATAdAAQAdAAAVgSQAVgSAAgkQAAgngVgTQgVgTgfAAQgeAAgUASg");
	this.shape_26.setTransform(-77,0.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhYBMQgigbAAgvQAAgxAigbQAjgbA3AAQA1AAAjAaQAhAbAAAwIAAAIIjHAAQADAhAXARQAWARAgAAQAaAAARgKQASgJAKgVIAvAEQgLAegeARQgeAQgvAAQg6AAgigagAgyg7QgVAQgCAZICUAAQgCgZgPgMQgWgTgiAAQgeAAgWAPg");
	this.shape_27.setTransform(-107.4,3.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgWCHIAAkNIAtAAIAAENg");
	this.shape_28.setTransform(-130.2,0.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhzCJIAAkNIApAAIAAAaQAPgQASgHQATgIAZAAQAiAAAaAOQAbAMANAYQANAXAAAcQAAAegOAYQgPAXgcANQgcANgfAAQgWAAgSgHQgSgHgMgLIAABfgAg0haQgWATAAAmQAAAlAVARQAVASAeAAQAdAAAWgSQAVgTAAgmQAAgmgVgSQgVgSgcgBQgdAAgXAVg");
	this.shape_29.setTransform(-152,7.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Ag8BdQgVgHgKgJQgKgLgEgOQgDgKAAgVIAAh4IAuAAIAABrQAAAaADAKQAEAMAOAIQAOAHAUABQATgBASgHQASgIAIgNQAHgOAAgYIAAhoIAuAAIAADDIgpAAIAAgdQgfAhg1AAQgYAAgUgHg");
	this.shape_30.setTransform(-184.2,4.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhZBMQgjgbAAgxQAAg1ApgbQAigVAyAAQA2AAAkAaQAiAbABAuQAAAlgPAWQgQAVgeAMQgeAMgiAAQg4AAgigagAg3g3QgXASABAlQgBAmAXASQAXATAhAAQAhAAAXgTQAWgTAAglQAAgkgWgTQgXgTghAAQghAAgXATg");
	this.shape_31.setTransform(-215.4,3.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AhSBMQgigaAAgxQAAgfAPgYQAOgYAegLQAdgMAiAAQArAAAcAQQAcAQAIAeIgtAFQgGgUgQgKQgQgKgXAAQghAAgVASQgWASAAAmQAAAnAVASQAVASAgAAQAbAAARgMQASgMAFgZIAtAEQgHAigeATQgfATgsAAQg2AAghgag");
	this.shape_32.setTransform(-244.5,3.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AA3CHIhXhkIghAXIAABNIgtAAIAAkNIAtAAIAACZIBqhOIA8AAIhmBHIBwB7g");
	this.shape_33.setTransform(434.8,-42.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AA/BkIAAh2QAAgVgFgJQgFgKgOgHQgNgFgSgBQgcAAgWAOQgUANgBAmIAABqIgtAAIAAjCIApAAIAAAbQAdggA3AAQAZAAAUAGQAUAHAKAKQALALAEAOQACAIAAAXIAAB4g");
	this.shape_34.setTransform(403.3,-39.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgWCHIAAjCIAsAAIAADCgAgWhgIAAgmIAsAAIAAAmg");
	this.shape_35.setTransform(380.6,-42.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AhIBkIAAjCIApAAIAAAdQAQgVANgHQAMgGAQAAQAXAAAYAKIgQAgQgQgIgRAAQgPAAgLAHQgMAGgFAMQgHASAAAUIAABmg");
	this.shape_36.setTransform(365.7,-39.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("Ag7B8QgbgNgOgXQgPgXAAgeQAAgdANgXQAOgYAagNQAbgMAhAAQAXAAATAHQATAIAMAMIAAhhIAtAAIAAENIgqAAIAAgZQgZAdgxAAQggAAgbgNgAgwgVQgUASAAAmQAAAmAVASQAWATAdAAQAdAAAVgSQAVgSAAgkQAAgngVgTQgVgTgfAAQgeAAgUASg");
	this.shape_37.setTransform(337.1,-42.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AhjBXQgXgQAAgZQgBgOAKgMQAJgMAOgHQAPgGASgEQANgDAbgCQA2gFAagGIAAgJQAAgUgNgJQgRgLghAAQggAAgPAIQgQAJgHAUIgsgEQAGgVAOgNQANgNAagGQAbgHAhAAQAjAAAVAGQAVAFALAJQAKAJAEAOQACAIAAAXIAAArQAAAuADAMQADANAIALIgvAAQgHgLgCgNQgaAPgXAHQgWAGgaAAQgtAAgYgPgAgKAMQgcADgLAEQgNADgFAIQgHAHAAAIQAAAOAOAIQAOAJAaAAQAZAAAVgIQAUgJAKgOQAHgLAAgWIAAgMQgZAHgwAFg");
	this.shape_38.setTransform(289.7,-39);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AhYBMQgigbAAgvQAAgxAigbQAjgbA3AAQA1AAAjAaQAhAbAAAwIAAAIIjHAAQADAhAXARQAWARAgAAQAaAAARgKQASgJAKgVIAvAEQgLAegeARQgeAQgvAAQg6AAgigagAgxg7QgWAQgCAZICUAAQgCgZgPgMQgWgTgiAAQgeAAgVAPg");
	this.shape_39.setTransform(258.4,-39);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgGCAQgOgGgFgJQgGgKAAgeIAAhvIgiAAIAAgaIAiAAIAAgwIAsgUIAABEIAtAAIAAAaIgtAAIAABxQAAAOACAFQADAEAFACQAGACAKAAIATgBIAHAdQgTADgPAAQgZAAgMgFg");
	this.shape_40.setTransform(234.7,-42.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AA3CHIhXhkIghAXIAABNIgtAAIAAkNIAtAAIAACZIBqhOIA8AAIhmBHIBwB7g");
	this.shape_41.setTransform(196.4,-42.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgWCHIAAkNIAtAAIAAENg");
	this.shape_42.setTransform(173.4,-42.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgVCHIAAjCIAsAAIAADCgAgVhgIAAgmIAsAAIAAAmg");
	this.shape_43.setTransform(159.5,-42.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("ACIBkIAAh6QABgUgFgJQgEgJgMgFQgLgGgQAAQgcAAgTAOQgTAOAAAfIAABwIgsAAIAAh+QAAgWgMgLQgKgMgaAAQgTAAgQAIQgRAHgGAPQgIAOAAAaIAABlIgtAAIAAjCIAoAAIAAAbQANgPAVgIQAUgJAbAAQAeAAAUAJQARAJAIAQQAggiAzAAQAoAAAVAQQAWAQgBAiIAACFg");
	this.shape_44.setTransform(129.7,-39.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AglCJIAAipIgoAAIAAgZIAoAAIAAgVQAAgUAEgKQAHgMARgIQAPgIAeAAQATAAAXADIgHAdQgOgCgMAAQgVAAgJAGQgIAHAAASIAAASIA0AAIAAAZIg0AAIAACpg");
	this.shape_45.setTransform(82.5,-43);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AhaBMQgigbAAgxQAAg1ApgbQAigVAyAAQA3AAAjAaQAiAbAAAuQAAAlgOAWQgRAVgdAMQgeAMgiAAQg4AAgjgagAg3g3QgXASABAlQgBAmAXASQAWATAiAAQAhAAAXgTQAWgTAAglQAAgkgWgTQgXgTghAAQgiAAgWATg");
	this.shape_46.setTransform(57.2,-39);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AhYBMQgigbgBgvQABgxAigbQAjgbA3AAQA1AAAjAaQAhAbABAwIgBAIIjHAAQADAhAWARQAXARAgAAQAZAAASgKQARgJALgVIAvAEQgLAegeARQgeAQgvAAQg6AAgigagAgyg7QgVAQgCAZICUAAQgDgZgOgMQgVgTgjAAQgeAAgWAPg");
	this.shape_47.setTransform(8.9,-39);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AhzCJIAAkNIApAAIAAAZQAPgOASgIQATgHAZAAQAigBAaANQAbANANAYQANAXAAAcQAAAegOAXQgPAZgcAMQgcANgfAAQgWAAgSgHQgSgHgMgLIAABfgAg0haQgWATAAAmQAAAlAVARQAVATAegBQAdAAAWgSQAVgSAAgnQAAglgVgTQgVgSgcAAQgdgBgXAVg");
	this.shape_48.setTransform(-21.7,-35.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AhiCGIgFggQAPADALAAQAPAAAJgEQAJgDAGgHQAEgFAKgUIAEgHIhmjDIAxAAIA4BwQALAWAHAXQAIgWALgWIA5hxIAuAAIhmDGQgRAfgIANQgMAQgQAIQgPAIgWgBQgNAAgQgDg");
	this.shape_49.setTransform(-52,-35);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgHCAQgNgGgGgJQgFgKAAgeIAAhvIghAAIAAgaIAhAAIAAgwIAsgUIAABEIAuAAIAAAaIguAAIAABxQAAAOADAFQACAEAGACQAEACALAAIAUgBIAGAdQgTADgPAAQgZAAgNgFg");
	this.shape_50.setTransform(-74.6,-42.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AhiBXQgZgQAAgZQAAgOAKgMQAIgMAPgHQAPgGASgEQANgDAbgCQA2gFAagGIAAgJQABgUgNgJQgSgLghAAQggAAgPAIQgQAJgHAUIgtgEQAHgVANgNQAOgNAbgGQAagHAiAAQAiAAAVAGQAVAFAKAJQALAJAEAOQACAIAAAXIAAArQAAAuADAMQADANAJALIgwAAQgHgLgCgNQgZAPgYAHQgWAGgbAAQgsAAgXgPgAgKAMQgcADgMAEQgMADgGAIQgGAHAAAIQAAAOAOAIQAOAJAaAAQAaAAAUgIQAUgJAKgOQAHgLAAgWIAAgMQgYAHgxAFg");
	this.shape_51.setTransform(-116.1,-39);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AhLBWQgcgQgHgfIAtgFQADAUASAKQARALAeAAQAfAAAPgJQAQgKAAgMQAAgLgOgHQgJgEglgHQgxgJgTgGQgUgHgKgMQgKgMAAgOQAAgNAJgLQAIgLAOgIQAKgFATgEQASgEAVAAQAeAAAYAGQAYAHALALQAMAMAEATIgsAEQgDgPgPgJQgOgIgaAAQgfAAgOAHQgNAIAAAKQAAAHAGAFQAFAFAMAEIAnAIQAwAJAUAHQATAEAKAMQALALAAARQAAARgNAPQgNAOgZAIQgZAIggAAQgzAAgbgQg");
	this.shape_52.setTransform(-163,-39);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgWCHIAAjCIAsAAIAADCgAgWhgIAAgmIAsAAIAAAmg");
	this.shape_53.setTransform(-184.1,-42.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AhjBXQgYgQABgZQgBgOAKgMQAJgMAOgHQAPgGASgEQANgDAbgCQA2gFAagGIAAgJQAAgUgMgJQgSgLghAAQggAAgPAIQgQAJgHAUIgtgEQAHgVAOgNQAOgNAZgGQAbgHAiAAQAhAAAWAGQAVAFALAJQAKAJAEAOQACAIAAAXIAAArQAAAuADAMQADANAIALIgvAAQgHgLgCgNQgaAPgXAHQgWAGgaAAQgtAAgYgPgAgKAMQgcADgLAEQgNADgFAIQgHAHAAAIQAAAOAOAIQANAJAbAAQAZAAAVgIQAUgJAKgOQAHgLAAgWIAAgMQgZAHgwAFg");
	this.shape_54.setTransform(-223.8,-39);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AhJBsIAAAZIgqAAIAAkNIAtAAIAABgQAdgaAsAAQAZAAAWAHQAWAHAOANQAOAOAIASQAIASAAAVQAAAygiAcQgiAbgwAAQguAAgbgdgAg0gUQgWATAAAiQABAkANAPQAVAaAkAAQAeAAAVgTQAWgTAAglQAAgmgVgSQgVgSgdAAQgdAAgWATg");
	this.shape_55.setTransform(-254.3,-42.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AhZBMQgkgbABgxQAAg1ApgbQAigVAyAAQA2AAAkAaQAiAbABAuQAAAlgQAWQgPAVgeAMQgeAMgiAAQg4AAgigagAg3g3QgXASAAAlQAAAmAXASQAWATAiAAQAhAAAWgTQAXgTAAglQAAgkgXgTQgWgTghAAQgiAAgWATg");
	this.shape_56.setTransform(-286.4,-39);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AiLCHIAAkNICLAAQAqAAAZAIQAaAJAPAQQAOARAAATQAAASgNAPQgNAPgaAKQAiAGASARQARARAAAYQABASgLARQgMAQgQAJQgPAJgZAEQgZAFgjAAgAhZBnIBaAAIAigBQARgDALgFQALgEAHgLQAIgJAAgNQAAgPgKgLQgLgMgTgEQgTgFgiABIhVAAgAhZgVIBQAAQAfAAAOgCQATgFAJgJQAJgKAAgOQABgNgKgLQgIgJgRgFQgQgDgnAAIhJAAg");
	this.shape_57.setTransform(-320,-42.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AhIBkIAAjCIApAAIAAAdQAQgVANgHQAMgGAQAAQAXAAAYAKIgQAgQgQgIgRAAQgPAAgLAHQgMAGgFAMQgHASAAAUIAABmg");
	this.shape_58.setTransform(-363.9,-39.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("Ag8BeQgVgIgKgJQgKgLgEgOQgDgJAAgWIAAh4IAuAAIAABrQAAAbADAIQAEANAOAIQAOAIAUgBQATABASgIQASgIAIgNQAHgNAAgZIAAhoIAuAAIAADCIgpAAIAAgcQgfAhg1AAQgYAAgUgGg");
	this.shape_59.setTransform(-391.6,-38.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AhdB5QgpgSgVggQgVggAAgjQAAhDAxglQAygnBNAAQA0AAApASQAoASAXAgQAVAgAAAoQAAApgXAgQgWAhgrAQQgpARgwAAQg0AAgpgTgAhYhSQgmAaAAA8QABAxAjAcQAkAcA2AAQA3AAAkgcQAjgcABg1QgBgggPgYQgPgZgdgNQgegOgkAAQgzAAgmAag");
	this.shape_60.setTransform(-428.4,-42.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-449.7,-64.2,899.5,129.5);


(lib.Tween28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5920E").s().p("AhSDmQgTgqAAhBQAAgmAHggQAIgfAMgTQAMgSAPgKQALgHAWgGQAtgNAVgRIAAgYQAAg1gKgWQgPgegbAAQgbAAgMAWQgNAWgGA2IglgLQAFg4AMghQALgiAWgSQAWgTAbAAQAdAAASAQQARAQAJAXQAIAYADAkQACAXAAA6IAAB0QAAB7ADAgQACAhAHAdIgnAAQgGgbgCglQgVAqgTARQgSARgWAAQglAAgUgpgAgIAhQgXAHgKAKQgKAKgFATQgFASAAAYQAAAiALAYQAMAXAWABQAUAAARgXQARgWAIgmQAGgfAAg5IAAggQgUATgoAOg");
	this.shape.setTransform(178.1,9.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5920E").s().p("AhIDKQgdhHAAh+QAAiCAdhJQAdhIAsAAQAtAAAcBHQAcBHAACAIAAAXIikAAQACBVASAtQATAuAaAAQAWAAAOgZQAOgaAJg3IAnALQgJBPgZAtQgZArgnAAQgvAAgchFgAgpidQgSApgCBEIB7AAQgChCgMggQgRg0gdAAQgZAAgSApg");
	this.shape_1.setTransform(152.2,9.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F5920E").s().p("AgUFmIAAp3IhlAAIAAhUIDyAAIAABUIhlAAIAAJ3g");
	this.shape_2.setTransform(125.2,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F5920E").s().p("AgSFmIAAoGIAlAAIAAIGgAgSkAIAAhlIAlAAIAABlg");
	this.shape_3.setTransform(91.1,-0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F5920E").s().p("AhSDmQgTgqAAhBQAAgmAHggQAIgfAMgTQAMgSAPgKQALgHAWgGQAtgNAVgRIAAgYQAAg1gKgWQgPgegbAAQgbAAgMAWQgNAWgGA2IglgLQAFg4AMghQALgiAWgSQAWgTAbAAQAdAAASAQQARAQAJAXQAIAYADAkQACAXAAA6IAAB0QAAB7ADAgQACAhAHAdIgnAAQgGgbgCglQgVAqgTARQgSARgWAAQglAAgUgpgAgIAhQgXAHgKAKQgKAKgFATQgFASAAAYQAAAiALAYQAMAXAWABQAUAAARgXQARgWAIgmQAGgfAAg5IAAggQgUATgoAOg");
	this.shape_4.setTransform(72.2,9.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F5920E").s().p("AA1FmIAAlJQAAhAgMgfQgMgegXAAQgPAAgPAVQgPAUgGAiQgHAjAAA8IAAEcIglAAIAArLIAlAAIAAEBQAahHAoAAQAZAAARAWQATAXAIAoQAHAoAABLIAAFJg");
	this.shape_5.setTransform(46.3,-0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F5920E").s().p("AgTFmIAAp3IhmAAIAAhUIDyAAIAABUIhlAAIAAJ3g");
	this.shape_6.setTransform(19.3,-0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F5920E").s().p("AhJDKQgdhHAAh+QAAiCAdhJQAdhIAuAAQAsAAAcBHQAcBHABCAIgBAXIilAAQADBVATAtQASAuAbAAQAUAAAPgZQAPgaAIg3IAnALQgJBPgZAtQgZArgmAAQgwAAgdhFgAgoidQgSApgCBEIB6AAQgChCgLggQgSg0gdAAQgZAAgRApg");
	this.shape_7.setTransform(-22,9.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F5920E").s().p("Ag+DlQgXgqgGhSIAlgOQADA1APAbQAOAcAZAAQAaAAAMgYQANgZAAgiQAAgegLgRQgIgLgfgSQgogZgQgQQgQgTgIgeQgJggAAgmQAAgjAHgdQAHgeAMgUQAIgPAQgKQAPgLARAAQAZAAAUASQAUARAJAeQAJAfAEAxIglANQgCgogMgXQgMgWgVgBQgaABgLATQgLAVAAAbQAAARAEANQAFAPAKAJQAFAEAbASQAoAZAQAQQAPAOAJAfQAJAeAAAtQAAAsgLAnQgLAngUAVQgVAVgaAAQgqAAgXgqg");
	this.shape_8.setTransform(-46.9,9.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F5920E").s().p("AhIDKQgdhHAAh+QAAiCAdhJQAdhIAsAAQAtAAAcBHQAcBHAACAIAAAXIikAAQACBVASAtQATAuAaAAQAWAAAOgZQAOgaAKg3IAmALQgJBPgZAtQgZArgnAAQgvAAgchFgAgpidQgSApgCBEIB8AAQgDhCgMggQgRg0gdAAQgZAAgSApg");
	this.shape_9.setTransform(-71.6,9.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F5920E").s().p("AhJDKQgdhHAAh+QAAiCAdhJQAehIAtAAQAsAAAcBHQAcBHAACAIAAAXIikAAQABBVAUAtQASAuAaAAQAWAAAOgZQAPgaAJg3IAmALQgJBPgZAtQgZArgnAAQgvAAgdhFgAgpidQgRApgCBEIB7AAQgDhCgMggQgSg0gcAAQgZAAgSApg");
	this.shape_10.setTransform(-97.5,9.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F5920E").s().p("AA1FmIAAlJQAAhAgMgfQgMgegXAAQgPAAgPAVQgPAUgGAiQgHAjAAA8IAAEcIglAAIAArLIAlAAIAAEBQAbhHAnAAQAZAAARAWQATAXAIAoQAHAoABBLIAAFJg");
	this.shape_11.setTransform(-123.4,-0.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F5920E").s().p("AhHFEQgfgwgRhZQgQhZAAhnQAAhvAShTQAThTAigrQAhgsAoAAQAuAAAfA3QAgA3AMBjIgoAVQgKhNgVgkQgUgkgfAAQgiAAgYAnQgYAogJBDQgKBCAABHQAABaALBFQAMBEAYAhQAYAiAbAAQAiAAAYgtQAYgvAIhaIAoAYQgNB1ghA9QggA9gxAAQgwAAgfgug");
	this.shape_12.setTransform(-152.6,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-169.2,-57.3,362.4,115.8);


(lib.Tween27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5920E").s().p("AhSDmQgTgqAAhBQAAgmAHggQAIgfAMgTQAMgSAPgKQALgHAWgGQAtgNAVgRIAAgYQAAg1gKgWQgPgegbAAQgbAAgMAWQgNAWgGA2IglgLQAFg4AMghQALgiAWgSQAWgTAbAAQAdAAASAQQARAQAJAXQAIAYADAkQACAXAAA6IAAB0QAAB7ADAgQACAhAHAdIgnAAQgGgbgCglQgVAqgTARQgSARgWAAQglAAgUgpgAgIAhQgXAHgKAKQgKAKgFATQgFASAAAYQAAAiALAYQAMAXAWABQAUAAARgXQARgWAIgmQAGgfAAg5IAAggQgUATgoAOg");
	this.shape.setTransform(178.1,9.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5920E").s().p("AhIDKQgdhHAAh+QAAiCAdhJQAdhIAsAAQAtAAAcBHQAcBHAACAIAAAXIikAAQACBVASAtQATAuAaAAQAWAAAOgZQAOgaAJg3IAnALQgJBPgZAtQgZArgnAAQgvAAgchFgAgpidQgSApgCBEIB7AAQgChCgMggQgRg0gdAAQgZAAgSApg");
	this.shape_1.setTransform(152.2,9.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F5920E").s().p("AgUFmIAAp3IhlAAIAAhUIDyAAIAABUIhlAAIAAJ3g");
	this.shape_2.setTransform(125.2,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F5920E").s().p("AgSFmIAAoGIAlAAIAAIGgAgSkAIAAhlIAlAAIAABlg");
	this.shape_3.setTransform(91.1,-0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F5920E").s().p("AhSDmQgTgqAAhBQAAgmAHggQAIgfAMgTQAMgSAPgKQALgHAWgGQAtgNAVgRIAAgYQAAg1gKgWQgPgegbAAQgbAAgMAWQgNAWgGA2IglgLQAFg4AMghQALgiAWgSQAWgTAbAAQAdAAASAQQARAQAJAXQAIAYADAkQACAXAAA6IAAB0QAAB7ADAgQACAhAHAdIgnAAQgGgbgCglQgVAqgTARQgSARgWAAQglAAgUgpgAgIAhQgXAHgKAKQgKAKgFATQgFASAAAYQAAAiALAYQAMAXAWABQAUAAARgXQARgWAIgmQAGgfAAg5IAAggQgUATgoAOg");
	this.shape_4.setTransform(72.2,9.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F5920E").s().p("AA1FmIAAlJQAAhAgMgfQgMgegXAAQgPAAgPAVQgPAUgGAiQgHAjAAA8IAAEcIglAAIAArLIAlAAIAAEBQAahHAoAAQAZAAARAWQATAXAIAoQAHAoAABLIAAFJg");
	this.shape_5.setTransform(46.3,-0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F5920E").s().p("AgTFmIAAp3IhmAAIAAhUIDyAAIAABUIhlAAIAAJ3g");
	this.shape_6.setTransform(19.3,-0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F5920E").s().p("AhJDKQgdhHAAh+QAAiCAdhJQAdhIAuAAQAsAAAcBHQAcBHABCAIgBAXIilAAQADBVATAtQASAuAbAAQAUAAAPgZQAPgaAIg3IAnALQgJBPgZAtQgZArgmAAQgwAAgdhFgAgoidQgSApgCBEIB6AAQgChCgLggQgSg0gdAAQgZAAgRApg");
	this.shape_7.setTransform(-22,9.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F5920E").s().p("Ag+DlQgXgqgGhSIAlgOQADA1APAbQAOAcAZAAQAaAAAMgYQANgZAAgiQAAgegLgRQgIgLgfgSQgogZgQgQQgQgTgIgeQgJggAAgmQAAgjAHgdQAHgeAMgUQAIgPAQgKQAPgLARAAQAZAAAUASQAUARAJAeQAJAfAEAxIglANQgCgogMgXQgMgWgVgBQgaABgLATQgLAVAAAbQAAARAEANQAFAPAKAJQAFAEAbASQAoAZAQAQQAPAOAJAfQAJAeAAAtQAAAsgLAnQgLAngUAVQgVAVgaAAQgqAAgXgqg");
	this.shape_8.setTransform(-46.9,9.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F5920E").s().p("AhIDKQgdhHAAh+QAAiCAdhJQAdhIAsAAQAtAAAcBHQAcBHAACAIAAAXIikAAQACBVASAtQATAuAaAAQAWAAAOgZQAOgaAKg3IAmALQgJBPgZAtQgZArgnAAQgvAAgchFgAgpidQgSApgCBEIB8AAQgDhCgMggQgRg0gdAAQgZAAgSApg");
	this.shape_9.setTransform(-71.6,9.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F5920E").s().p("AhJDKQgdhHAAh+QAAiCAdhJQAehIAtAAQAsAAAcBHQAcBHAACAIAAAXIikAAQABBVAUAtQASAuAaAAQAWAAAOgZQAPgaAJg3IAmALQgJBPgZAtQgZArgnAAQgvAAgdhFgAgpidQgRApgCBEIB7AAQgDhCgMggQgSg0gcAAQgZAAgSApg");
	this.shape_10.setTransform(-97.5,9.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F5920E").s().p("AA1FmIAAlJQAAhAgMgfQgMgegXAAQgPAAgPAVQgPAUgGAiQgHAjAAA8IAAEcIglAAIAArLIAlAAIAAEBQAbhHAnAAQAZAAARAWQATAXAIAoQAHAoABBLIAAFJg");
	this.shape_11.setTransform(-123.4,-0.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F5920E").s().p("AhHFEQgfgwgRhZQgQhZAAhnQAAhvAShTQAThTAigrQAhgsAoAAQAuAAAfA3QAgA3AMBjIgoAVQgKhNgVgkQgUgkgfAAQgiAAgYAnQgYAogJBDQgKBCAABHQAABaALBFQAMBEAYAhQAYAiAbAAQAiAAAYgtQAYgvAIhaIAoAYQgNB1ghA9QggA9gxAAQgwAAgfgug");
	this.shape_12.setTransform(-152.6,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-169.2,-57.3,362.4,115.8);


(lib.Tween26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CheeseDrink();
	this.instance.parent = this;
	this.instance.setTransform(-64.7,-109.7,0.423,0.38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.7,-109.7,129.4,219.4);


(lib.Tween25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CheeseDrink();
	this.instance.parent = this;
	this.instance.setTransform(-64.7,-109.7,0.423,0.38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.7,-109.7,129.4,219.4);


(lib.Tween24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CheeseDrink();
	this.instance.parent = this;
	this.instance.setTransform(-64.7,-109.7,0.423,0.38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.7,-109.7,129.4,219.4);


(lib.Tween23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CheeseDrink();
	this.instance.parent = this;
	this.instance.setTransform(-64.7,-109.7,0.423,0.38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.7,-109.7,129.4,219.4);


(lib.Tween22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AhRDmQgTgqAAhBQAAgmAHggQAIgfALgTQANgSAOgKQALgHAXgGQAsgNAUgRIABgYQAAg1gLgWQgOgegbAAQgbAAgMAWQgNAWgFA2IglgLQAFg4AMghQALgiAVgSQAWgTAbAAQAcAAASAQQASAQAIAXQAIAYADAkQACAXAAA6IAAB0QAAB7ADAgQACAhAHAdIgnAAQgGgbgBglQgVAqgTARQgSARgWAAQglAAgTgpgAgIAhQgXAHgJAKQgKAKgGATQgEASAAAYQAAAiALAYQALAXAWABQAVAAAQgXQARgWAIgmQAFgfAAg5IAAggQgTATgoAOg");
	this.shape.setTransform(153.9,9.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("AhIDKQgchHAAh+QAAiCAchJQAdhIAsAAQAsAAAcBHQAcBHAACAIAAAXIijAAQACBVATAtQASAuAbAAQAUAAAPgZQAOgaAJg3IAmALQgJBPgZAtQgYArgnAAQgvAAgchFgAgoidQgSApgCBEIB6AAQgDhCgLggQgSg0gcAAQgZAAgRApg");
	this.shape_1.setTransform(128.3,9.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FF00").s().p("AgTFmIAAp3IhkAAIAAhUIDvAAIAABUIhkAAIAAJ3g");
	this.shape_2.setTransform(101.6,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF00").s().p("AgSFmIAAoGIAlAAIAAIGgAgSkAIAAhlIAlAAIAABlg");
	this.shape_3.setTransform(67.8,-0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FF00").s().p("AhQDmQgUgqAAhBQAAgmAHggQAIgfALgTQANgSAOgKQALgHAXgGQArgNAVgRIABgYQAAg1gLgWQgOgegbAAQgaAAgNAWQgMAWgHA2IgkgLQAFg4AMghQALgiAWgSQAVgTAbAAQAcAAASAQQARAQAJAXQAIAYADAkQACAXABA6IAAB0QAAB7ACAgQACAhAHAdIgnAAQgFgbgCglQgVAqgTARQgSARgWAAQgkAAgTgpgAgIAhQgXAHgJAKQgKAKgGATQgEASAAAYQAAAiALAYQALAXAWABQAVAAAQgXQARgWAIgmQAFgfAAg5IAAggQgTATgoAOg");
	this.shape_4.setTransform(49.2,9.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00FF00").s().p("AA0FmIAAlJQAAhAgMgfQgMgegWAAQgQAAgOAVQgPAUgGAiQgHAjAAA8IAAEcIglAAIAArLIAlAAIAAEBQAbhHAnAAQAYAAASAWQASAXAHAoQAJAogBBLIAAFJg");
	this.shape_5.setTransform(23.6,-0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00FF00").s().p("AgTFmIAAp3IhkAAIAAhUIDvAAIAABUIhkAAIAAJ3g");
	this.shape_6.setTransform(-3.2,-0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00FF00").s().p("AA0EJIAAk6QAAg2gEgaQgFgbgLgQQgLgQgPAAQgXAAgRAkQgRAjAABkIAAEaIglAAIAAoFIAhAAIAABJQAYhVAtAAQAUAAARARQAQARAJAbQAIAbADAmQACAYAAA9IAAE+g");
	this.shape_7.setTransform(-44,8.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00FF00").s().p("AhIDKQgchHAAh+QAAiCAchJQAdhIAsAAQAsAAAcBHQAcBHAACAIAAAXIijAAQACBVATAtQASAuAbAAQAUAAAPgZQAOgaAJg3IAmALQgJBPgZAtQgYArgnAAQgvAAgchFgAgoidQgSApgCBEIB6AAQgDhCgLggQgSg0gcAAQgZAAgRApg");
	this.shape_8.setTransform(-69.8,9.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00FF00").s().p("AhIDKQgchHAAh+QAAiCAchJQAdhIAsAAQAsAAAcBHQAcBHAACAIAAAXIijAAQACBVATAtQASAuAbAAQAUAAAPgZQAOgaAJg3IAmALQgJBPgZAtQgYArgnAAQgvAAgchFgAgoidQgSApgCBEIB6AAQgDhCgLggQgSg0gcAAQgZAAgRApg");
	this.shape_9.setTransform(-95.4,9.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00FF00").s().p("Ag7EJIAAoFIAiAAIAABOQANg3ALgRQAJgSANAAQATAAAUAcIgNBSQgOgTgOAAQgMAAgIARQgKARgEAfQgHAvAAA4IAAEOg");
	this.shape_10.setTransform(-114.6,8.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00FF00").s().p("AhBFGQglgugThWQgShVAAhqQAAhnAShaQAThbAjgsQAigsAtAAQAhAAAaAaQAbAYAPAtQAPAtAIBIIgkAYQgHg3gKgfQgLgfgSgTQgTgTgXAAQgbAAgUAUQgUAUgMAgQgMAggHAnQgMBCAABOQAABfAOBAQAOBBAbAfQAaAfAdAAQAbAAAYgXQAZgZANgbIAAiFIhZAAIAAhTICAAAIAAEJQgdA3ggAdQgfAbghAAQgsAAgkgsg");
	this.shape_11.setTransform(-142.1,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159.2,-57.3,328.1,115.8);


(lib.Tween21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AhRDmQgTgqAAhBQAAgmAHggQAIgfALgTQANgSAOgKQALgHAXgGQAsgNAUgRIABgYQAAg1gLgWQgOgegbAAQgbAAgMAWQgNAWgFA2IglgLQAFg4AMghQALgiAVgSQAWgTAbAAQAcAAASAQQASAQAIAXQAIAYADAkQACAXAAA6IAAB0QAAB7ADAgQACAhAHAdIgnAAQgGgbgBglQgVAqgTARQgSARgWAAQglAAgTgpgAgIAhQgXAHgJAKQgKAKgGATQgEASAAAYQAAAiALAYQALAXAWABQAVAAAQgXQARgWAIgmQAFgfAAg5IAAggQgTATgoAOg");
	this.shape.setTransform(153.9,9.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("AhIDKQgchHAAh+QAAiCAchJQAdhIAsAAQAsAAAcBHQAcBHAACAIAAAXIijAAQACBVATAtQASAuAbAAQAUAAAPgZQAOgaAJg3IAmALQgJBPgZAtQgYArgnAAQgvAAgchFgAgoidQgSApgCBEIB6AAQgDhCgLggQgSg0gcAAQgZAAgRApg");
	this.shape_1.setTransform(128.3,9.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FF00").s().p("AgTFmIAAp3IhkAAIAAhUIDvAAIAABUIhkAAIAAJ3g");
	this.shape_2.setTransform(101.6,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF00").s().p("AgSFmIAAoGIAlAAIAAIGgAgSkAIAAhlIAlAAIAABlg");
	this.shape_3.setTransform(67.8,-0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FF00").s().p("AhQDmQgUgqAAhBQAAgmAHggQAIgfALgTQANgSAOgKQALgHAXgGQArgNAVgRIABgYQAAg1gLgWQgOgegbAAQgaAAgNAWQgMAWgHA2IgkgLQAFg4AMghQALgiAWgSQAVgTAbAAQAcAAASAQQARAQAJAXQAIAYADAkQACAXABA6IAAB0QAAB7ACAgQACAhAHAdIgnAAQgFgbgCglQgVAqgTARQgSARgWAAQgkAAgTgpgAgIAhQgXAHgJAKQgKAKgGATQgEASAAAYQAAAiALAYQALAXAWABQAVAAAQgXQARgWAIgmQAFgfAAg5IAAggQgTATgoAOg");
	this.shape_4.setTransform(49.2,9.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00FF00").s().p("AA0FmIAAlJQAAhAgMgfQgMgegWAAQgQAAgOAVQgPAUgGAiQgHAjAAA8IAAEcIglAAIAArLIAlAAIAAEBQAbhHAnAAQAYAAASAWQASAXAHAoQAJAogBBLIAAFJg");
	this.shape_5.setTransform(23.6,-0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00FF00").s().p("AgTFmIAAp3IhkAAIAAhUIDvAAIAABUIhkAAIAAJ3g");
	this.shape_6.setTransform(-3.2,-0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00FF00").s().p("AA0EJIAAk6QAAg2gEgaQgFgbgLgQQgLgQgPAAQgXAAgRAkQgRAjAABkIAAEaIglAAIAAoFIAhAAIAABJQAYhVAtAAQAUAAARARQAQARAJAbQAIAbADAmQACAYAAA9IAAE+g");
	this.shape_7.setTransform(-44,8.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00FF00").s().p("AhIDKQgchHAAh+QAAiCAchJQAdhIAsAAQAsAAAcBHQAcBHAACAIAAAXIijAAQACBVATAtQASAuAbAAQAUAAAPgZQAOgaAJg3IAmALQgJBPgZAtQgYArgnAAQgvAAgchFgAgoidQgSApgCBEIB6AAQgDhCgLggQgSg0gcAAQgZAAgRApg");
	this.shape_8.setTransform(-69.8,9.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00FF00").s().p("AhIDKQgchHAAh+QAAiCAchJQAdhIAsAAQAsAAAcBHQAcBHAACAIAAAXIijAAQACBVATAtQASAuAbAAQAUAAAPgZQAOgaAJg3IAmALQgJBPgZAtQgYArgnAAQgvAAgchFgAgoidQgSApgCBEIB6AAQgDhCgLggQgSg0gcAAQgZAAgRApg");
	this.shape_9.setTransform(-95.4,9.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00FF00").s().p("Ag7EJIAAoFIAiAAIAABOQANg3ALgRQAJgSANAAQATAAAUAcIgNBSQgOgTgOAAQgMAAgIARQgKARgEAfQgHAvAAA4IAAEOg");
	this.shape_10.setTransform(-114.6,8.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00FF00").s().p("AhBFGQglgugThWQgShVAAhqQAAhnAShaQAThbAjgsQAigsAtAAQAhAAAaAaQAbAYAPAtQAPAtAIBIIgkAYQgHg3gKgfQgLgfgSgTQgTgTgXAAQgbAAgUAUQgUAUgMAgQgMAggHAnQgMBCAABOQAABfAOBAQAOBBAbAfQAaAfAdAAQAbAAAYgXQAZgZANgbIAAiFIhZAAIAAhTICAAAIAAEJQgdA3ggAdQgfAbghAAQgsAAgkgsg");
	this.shape_11.setTransform(-142.1,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159.2,-57.3,328.1,115.8);


(lib.Tween20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.GreenDrink();
	this.instance.parent = this;
	this.instance.setTransform(-74,-116.7,0.415,0.379);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-116.7,148.1,233.4);


(lib.Tween19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.GreenDrink();
	this.instance.parent = this;
	this.instance.setTransform(-74,-116.7,0.415,0.379);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-116.7,148.1,233.4);


(lib.Tween18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.GreenDrink();
	this.instance.parent = this;
	this.instance.setTransform(-74,-116.7,0.415,0.379);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-116.7,148.1,233.4);


(lib.Tween17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.GreenDrink();
	this.instance.parent = this;
	this.instance.setTransform(-74,-116.7,0.415,0.379);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-116.7,148.1,233.4);


(lib.Tween16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990099").s().p("AhQDmQgUgqAAhBQAAgmAHggQAHgfAMgTQANgSAOgKQALgHAWgGQAtgNAUgRIABgYQAAg1gLgWQgOgegbAAQgaAAgNAWQgMAWgHA2IgkgLQAFg4AMghQALgiAWgSQAVgTAbAAQAcAAASAQQARAQAJAXQAIAYADAkQACAXABA6IAAB0QAAB7ACAgQACAhAHAdIgnAAQgFgbgCglQgVAqgTARQgSARgWAAQgkAAgTgpgAgIAhQgXAHgKAKQgJAKgGATQgEASAAAYQAAAiALAYQALAXAWABQAVAAAQgXQARgWAIgmQAFgfAAg5IAAggQgTATgoAOg");
	this.shape.setTransform(144.6,9.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990099").s().p("AhIDKQgchHAAh+QAAiCAchJQAdhIAsAAQAsAAAcBHQAcBHAACAIAAAXIijAAQACBVATAtQASAuAbAAQAUAAAPgZQAOgaAJg3IAmALQgJBPgZAtQgYArgnAAQgvAAgchFgAgoidQgSApgCBEIB6AAQgDhCgLggQgSg0gcAAQgZAAgRApg");
	this.shape_1.setTransform(118.9,9.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990099").s().p("AgTFmIAAp3IhkAAIAAhUIDvAAIAABUIhkAAIAAJ3g");
	this.shape_2.setTransform(92.3,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#990099").s().p("AhIDKQgchHAAh+QAAiCAchJQAdhIAsAAQAsAAAcBHQAcBHAACAIAAAXIijAAQACBVATAtQASAuAbAAQAUAAAPgZQAOgaAJg3IAmALQgJBPgZAtQgYArgnAAQgvAAgchFgAgoidQgSApgCBEIB6AAQgDhCgLggQgSg0gcAAQgZAAgRApg");
	this.shape_3.setTransform(51.4,9.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#990099").s().p("AgSFmIAArLIAlAAIAALLg");
	this.shape_4.setTransform(32.7,-0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#990099").s().p("Ag7EfIAABBIgjAAIAArLIAlAAIAAEAQAYhGAjAAQAVAAASAUQASATAMAjQALAiAHAyQAGAwAAA4QAACFgbBJQgcBJgnAAQgmAAgWhNgAgqg2QgSAxAABeQAABdALAqQARBEAeAAQAYAAASgyQARgyAAhkQAAhkgRgwQgRgxgXAAQgYAAgSAzg");
	this.shape_5.setTransform(14.8,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#990099").s().p("Ag7EfIAABBIgjAAIAArLIAlAAIAAEAQAYhGAjAAQAVAAASAUQASATAMAjQALAiAHAyQAGAwAAA4QAACFgbBJQgcBJgnAAQgmAAgWhNgAgqg2QgSAxAABeQAABdALAqQARBEAeAAQAYAAASgyQARgyAAhkQAAhkgRgwQgRgxgXAAQgYAAgSAzg");
	this.shape_6.setTransform(-10.9,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#990099").s().p("AgxD3QgRgRgIgaQgJgbgDgnQgCgaAAg4IAAlAIAmAAIAAEeQAABGABAYQAEAiAMAUQALAUARgBQAPAAAPgTQAPgVAGgiQAGgkAAhCIAAkVIAlAAIAAIFIghAAIAAhLQgaBXgrAAQgUAAgQgSg");
	this.shape_7.setTransform(-37.2,9.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#990099").s().p("AhxFmIAArLIBxAAQAiAAAVAWQAVAWAMAtQAMAtAAAxQAAAugKAoQgLApgWAZQAcATAPAtQAOAuAAA/QAAAygJArQgIArgNAXQgOAYgUAMQgUAMgdAAgAhKERIBLAAQAUABAIgEQAOgFAIgOQAKgOAGgaQAGgbAAghQAAgogJgeQgIgegQgMQgQgMgbABIhHAAgAhKg4IBCAAQAaAAAMgIQAPgLAHgZQAIgZAAglQABgkgIgbQgHgbgOgKQgNgLggAAIg9AAg");
	this.shape_8.setTransform(-64.7,-0.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#990099").s().p("AhKDKQgchHAAiDQAAiPAihFQAcg6AoAAQAtAAAdBGQAdBGAAB8QAABjgMA5QgNA6gZAgQgYAfgdAAQgtAAgdhFgAguiTQgSAwAABjQAABkASAyQATAxAbAAQAcAAASgyQASgxABhmQgBhggSgxQgSgygcAAQgbAAgTAyg");
	this.shape_9.setTransform(-107.1,9.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#990099").s().p("Ag7EJIAAoFIAiAAIAABOQANg3ALgRQAJgSANAAQATAAAUAcIgNBSQgOgTgOAAQgMAAgIARQgKARgEAfQgHAvAAA4IAAEOg");
	this.shape_10.setTransform(-126.3,8.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#990099").s().p("AhRDmQgTgqAAhBQAAgmAHggQAIgfALgTQAMgSAPgKQALgHAXgGQAsgNAUgRIABgYQAAg1gLgWQgOgegbAAQgbAAgMAWQgMAWgGA2IglgLQAFg4AMghQALgiAVgSQAWgTAcAAQAbAAASAQQASAQAIAXQAIAYADAkQACAXAAA6IAAB0QAAB7ADAgQACAhAHAdIgnAAQgGgbgBglQgVAqgTARQgSARgWAAQgkAAgUgpgAgIAhQgXAHgJAKQgKAKgGATQgEASAAAYQgBAiAMAYQALAXAWABQAVAAAQgXQARgWAHgmQAHgfgBg5IAAggQgTATgoAOg");
	this.shape_11.setTransform(-149,9.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#990099").s().p("AgTFmIAAp3IhkAAIAAhUIDvAAIAABUIhkAAIAAJ3g");
	this.shape_12.setTransform(-175.7,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-189.5,-57.3,349.1,115.8);


(lib.Tween15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990099").s().p("AhQDmQgUgqAAhBQAAgmAHggQAHgfAMgTQANgSAOgKQALgHAWgGQAtgNAUgRIABgYQAAg1gLgWQgOgegbAAQgaAAgNAWQgMAWgHA2IgkgLQAFg4AMghQALgiAWgSQAVgTAbAAQAcAAASAQQARAQAJAXQAIAYADAkQACAXABA6IAAB0QAAB7ACAgQACAhAHAdIgnAAQgFgbgCglQgVAqgTARQgSARgWAAQgkAAgTgpgAgIAhQgXAHgKAKQgJAKgGATQgEASAAAYQAAAiALAYQALAXAWABQAVAAAQgXQARgWAIgmQAFgfAAg5IAAggQgTATgoAOg");
	this.shape.setTransform(144.6,9.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990099").s().p("AhIDKQgchHAAh+QAAiCAchJQAdhIAsAAQAsAAAcBHQAcBHAACAIAAAXIijAAQACBVATAtQASAuAbAAQAUAAAPgZQAOgaAJg3IAmALQgJBPgZAtQgYArgnAAQgvAAgchFgAgoidQgSApgCBEIB6AAQgDhCgLggQgSg0gcAAQgZAAgRApg");
	this.shape_1.setTransform(118.9,9.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990099").s().p("AgTFmIAAp3IhkAAIAAhUIDvAAIAABUIhkAAIAAJ3g");
	this.shape_2.setTransform(92.3,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#990099").s().p("AhIDKQgchHAAh+QAAiCAchJQAdhIAsAAQAsAAAcBHQAcBHAACAIAAAXIijAAQACBVATAtQASAuAbAAQAUAAAPgZQAOgaAJg3IAmALQgJBPgZAtQgYArgnAAQgvAAgchFgAgoidQgSApgCBEIB6AAQgDhCgLggQgSg0gcAAQgZAAgRApg");
	this.shape_3.setTransform(51.4,9.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#990099").s().p("AgSFmIAArLIAlAAIAALLg");
	this.shape_4.setTransform(32.7,-0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#990099").s().p("Ag7EfIAABBIgjAAIAArLIAlAAIAAEAQAYhGAjAAQAVAAASAUQASATAMAjQALAiAHAyQAGAwAAA4QAACFgbBJQgcBJgnAAQgmAAgWhNgAgqg2QgSAxAABeQAABdALAqQARBEAeAAQAYAAASgyQARgyAAhkQAAhkgRgwQgRgxgXAAQgYAAgSAzg");
	this.shape_5.setTransform(14.8,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#990099").s().p("Ag7EfIAABBIgjAAIAArLIAlAAIAAEAQAYhGAjAAQAVAAASAUQASATAMAjQALAiAHAyQAGAwAAA4QAACFgbBJQgcBJgnAAQgmAAgWhNgAgqg2QgSAxAABeQAABdALAqQARBEAeAAQAYAAASgyQARgyAAhkQAAhkgRgwQgRgxgXAAQgYAAgSAzg");
	this.shape_6.setTransform(-10.9,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#990099").s().p("AgxD3QgRgRgIgaQgJgbgDgnQgCgaAAg4IAAlAIAmAAIAAEeQAABGABAYQAEAiAMAUQALAUARgBQAPAAAPgTQAPgVAGgiQAGgkAAhCIAAkVIAlAAIAAIFIghAAIAAhLQgaBXgrAAQgUAAgQgSg");
	this.shape_7.setTransform(-37.2,9.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#990099").s().p("AhxFmIAArLIBxAAQAiAAAVAWQAVAWAMAtQAMAtAAAxQAAAugKAoQgLApgWAZQAcATAPAtQAOAuAAA/QAAAygJArQgIArgNAXQgOAYgUAMQgUAMgdAAgAhKERIBLAAQAUABAIgEQAOgFAIgOQAKgOAGgaQAGgbAAghQAAgogJgeQgIgegQgMQgQgMgbABIhHAAgAhKg4IBCAAQAaAAAMgIQAPgLAHgZQAIgZAAglQABgkgIgbQgHgbgOgKQgNgLggAAIg9AAg");
	this.shape_8.setTransform(-64.7,-0.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#990099").s().p("AhKDKQgchHAAiDQAAiPAihFQAcg6AoAAQAtAAAdBGQAdBGAAB8QAABjgMA5QgNA6gZAgQgYAfgdAAQgtAAgdhFgAguiTQgSAwAABjQAABkASAyQATAxAbAAQAcAAASgyQASgxABhmQgBhggSgxQgSgygcAAQgbAAgTAyg");
	this.shape_9.setTransform(-107.1,9.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#990099").s().p("Ag7EJIAAoFIAiAAIAABOQANg3ALgRQAJgSANAAQATAAAUAcIgNBSQgOgTgOAAQgMAAgIARQgKARgEAfQgHAvAAA4IAAEOg");
	this.shape_10.setTransform(-126.3,8.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#990099").s().p("AhRDmQgTgqAAhBQAAgmAHggQAIgfALgTQAMgSAPgKQALgHAXgGQAsgNAUgRIABgYQAAg1gLgWQgOgegbAAQgbAAgMAWQgMAWgGA2IglgLQAFg4AMghQALgiAVgSQAWgTAcAAQAbAAASAQQASAQAIAXQAIAYADAkQACAXAAA6IAAB0QAAB7ADAgQACAhAHAdIgnAAQgGgbgBglQgVAqgTARQgSARgWAAQgkAAgUgpgAgIAhQgXAHgJAKQgKAKgGATQgEASAAAYQgBAiAMAYQALAXAWABQAVAAAQgXQARgWAHgmQAHgfgBg5IAAggQgTATgoAOg");
	this.shape_11.setTransform(-149,9.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#990099").s().p("AgTFmIAAp3IhkAAIAAhUIDvAAIAABUIhkAAIAAJ3g");
	this.shape_12.setTransform(-175.7,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-189.5,-57.3,349.1,115.8);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.TaroDrink();
	this.instance.parent = this;
	this.instance.setTransform(-78.2,-123.4,0.413,0.396);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.2,-123.4,156.4,246.8);


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.TaroDrink();
	this.instance.parent = this;
	this.instance.setTransform(-78.2,-123.4,0.413,0.396);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.2,-123.4,156.4,246.8);


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.TaroDrink();
	this.instance.parent = this;
	this.instance.setTransform(-78.2,-123.4,0.413,0.396);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.2,-123.4,156.4,246.8);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.TaroDrink();
	this.instance.parent = this;
	this.instance.setTransform(-78.2,-123.4,0.413,0.396);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.2,-123.4,156.4,246.8);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Open();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,626,626), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Motion();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.238,0.211);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,356.4,237.3), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF00FF").ss(0.1,0,1).p("Ego8genMBR5AAAQGeAAElEkQElElAAGfIAAd/QAAGfklEkQklElmeAAMhR5AAAQmfAAklklQkkkkAAmfIAA9/QAAmfEkklQElkkGfAAg");
	this.shape.setTransform(362.1,196);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF00FF").s().p("Ego8AeoQmfAAklklQkkkkAAmfIAA9/QAAmfEkklQElkkGfAAMBR5AAAQGeAAElEkQElElAAGfIAAd/QAAGfklEkQklElmeAAg");
	this.shape_1.setTransform(362.1,196);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-1,-1,726.2,394.1), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkSDeQhNhfABiDQAAiTBkhiQBkhjCSAGQCegGBjBiQBiBiABCUQgBB9hJBfQhhB/izAAQiyAAhih5gAiIjaQgmBMAACOQAACpA8BRQApA5BKAAQAyAAAigZQArgfAXhEQAYhFAAhuQABiDgZhBQgYhBgmgbQgmgbgxAAQhaAAgwBdg");
	this.shape.setTransform(311.1,58.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AksFLIAAgSIAWAAQAdAAASgKQAMgHAHgRQAGgLAAgzIAAmyQAAgsgDgLQgFgRgNgJQgTgOggAAIgWAAIAAgSIIpAAIAADEIgSAAQgOhIgaggQgagfgvgOQgbgJhLAAIhEAAIAAENIAOAAQA9AAAdgnQAdgnAHhOIASAAIAAFaIgSAAQgGg5gTgkQgSgkgagMQgXgNgwAAIAAC6QABA4AFAMQADAMAOAIQAMAHAbABIAoAAQBdAAA4grQA4grAYhZIASAAIgdDTg");
	this.shape_1.setTransform(232.4,58);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AlNFLIAAgSIAXAAQAdAAAPgJQAPgJAHgQQAFgKAAg0IAAmyQAAgzgGgMQgFgNgQgKQgQgJgcAAIgXAAIAAgSIEpAAQB1AABJAgQBYAnAuBQQAuBRgBBkQAABGgWA7QgWA6gkAnQgkAmguAXQgvAYhDAMQgeAGg/AAgAhQklIAAIEQAAApAEAJQAEAKAJAFQAOAHAYAAQBRAAArg4QA6hLABieQgBh+gohNQggg7gxgWQgigPhNAAIgFAAg");
	this.shape_2.setTransform(157.8,58);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AisFLIAAgSIAWAAQAdAAARgKQANgHAHgRQAFgLAAgzIAAmyQAAgzgFgMQgFgNgRgKQgQgJgcAAIgWAAIAAgSIFZAAIAAASIgWAAQgdAAgRAKQgNAHgHARQgGAMABAxIAAGyQAAA0AFAMQAGANARAKQAPAJAcAAIAWAAIAAASg");
	this.shape_3.setTransform(98.5,58);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQFTIjkoOQgphfgOgRQgOgQgmgEIAAgSIE9AAIAAASIgKAAQgsAAgPAKQgLAIAAANQAAAKADAMQAFALAWA1ICMFIICDkkQAXg2AGgRQAFgTAAgNQAAgOgIgLQgIgLgOgGQgWgJgiABIAAgSIDZAAIAAASQgkAFgcAhQgVAZgoBaIjjH5g");
	this.shape_4.setTransform(38,58.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,357,114.8), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACZFLIjckuIgtAAIAAC6QAAA1AHAOQAHAOARAJQARAIAvAAIAAASIlfAAIAAgSQAwAAARgIQAQgJAIgOQAGgOAAg1IAAmtQAAg1gGgOQgIgOgRgJQgRgIgvAAIAAgSIE/AAQB7AAA6AQQA6ARAkAtQAlAtAAA7QAABKg3AwQgjAdg/APIClDgQAhAsANALQAVAOAbACIAAASgAhwgFIAdAAQBGAAAigLQAjgOAUgfQAUgiAAgzQAAhMgkglQglgkhRAAIg2AAg");
	this.shape.setTransform(369.4,65.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ak3FLIAAgSIAXAAQAeAAASgKQANgHAHgRQAFgLABgzIAAmyQgBgsgCgLQgFgRgOgJQgTgOghAAIgXAAIAAgSII9AAIAADEIgTAAQgOhIgbggQgbgegwgPQgdgJhNAAIhHAAIAAENIAOAAQBAAAAegnQAdgnAIhOIATAAIAAFaIgTAAQgGg5gTgkQgUgkgagMQgYgNgyAAIAAC6QAAA4AGAMQAEAMANAIQANAHAcABIAqAAQBgAAA6grQA6grAZhZIATAAIgfDTg");
	this.shape_1.setTransform(289.6,65.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AizFLIAAgSIAXAAQAdAAATgKQANgHAHgRQAGgLAAgzIAAn9IgyAAQhFAAgfAdQgsAngMBJIgTAAIAAizIJnAAIAACzIgSAAQgQg+gUgbQgUgbgigQQgTgJgwAAIg0AAIAAH9QAAA0AHAMQAFANARAKQARAJAdAAIAXAAIAAASg");
	this.shape_2.setTransform(216.5,65.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AD4FTInQomIAAGjQAAA6AbAUQAcATAiAAIARAAIAAASIj0AAIAAgSQA5AAAWgWQAXgWgBg1IAAnSIgPgRQgVgbgRgIQgQgJggAAIAAgSID0AAIFSGZIAAkbQAAg8gSgVQgZgcg5ABIAAgSIDjAAIAAASQgsAFgPAIQgPAJgHATQgJAUAAAvIAAImg");
	this.shape_3.setTransform(138.9,66);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ak3FLIAAgSIAWAAQAeAAATgKQANgHAHgRQAGgLAAgzIAAmyQAAgsgDgLQgFgRgOgJQgTgOgiAAIgWAAIAAgSII9AAIAADEIgTAAQgOhIgbggQgbgegwgPQgdgJhNAAIhHAAIAAENIAOAAQBAAAAegnQAdgnAIhOIATAAIAAFaIgTAAQgGg5gTgkQgUgkgagMQgYgNgyAAIAAC6QAAA4AGAMQAEAMANAIQAOAHAbABIAqAAQBgAAA6grQA6grAZhZIATAAIgfDTg");
	this.shape_4.setTransform(60.9,65.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(0.1,0,1).p("EghqgKgMBDVAAAIAAVBMhDVAAAg");
	this.shape_5.setTransform(215.5,67.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("A/VIgIAAw/MA+rAAAIAAQ/g");
	this.shape_6.setTransform(216,67.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("EghqAKgIAA1AMBDVAAAIAAVAgA/PIjMA+qAAAIAAw/Mg+qAAAg");
	this.shape_7.setTransform(215.5,67.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-1,-1,433,136.5), null);


(lib.PlayBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmIm2IMRG2IsRG3g");
	this.shape.setTransform(39.3,43.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag7BjIAAgFIALAAQAJAAAGgDQAEgCACgFQACgEAAgPIAAgoIgzhUQgPgZgGgEQgGgFgKAAIAAgFIBnAAIAAAFIgFAAQgJAAgEADQgEACAAADQAAAFANAVIAmBBIAng7QAOgWAAgHQAAgEgEgDQgFgDgPgBIAAgFIBCAAIAAAFQgKABgGAFQgIAGgRAbIgvBHIAAAwQAAAQACADQABAEAGADQAFADAIAAIAMAAIAAAFg");
	this.shape_1.setTransform(79.5,110.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAKBlIAAgFIAFAAQAMAAAFgDQAEgDgBgEIgBgGIgEgLIgMgYIhKAAIgKATQgEAKAAAGQAAAIAHAEQAFADAQABIAAAFIhHAAIAAgFQALgCAIgHQAHgHALgXIBMidIADAAIBOChQALAYAHAGQAFAEALABIAAAFgAgzAiIBAAAIgfhEg");
	this.shape_2.setTransform(53.8,110.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhjBjIAAgFIAHAAQAKAAAGgDQAEgCACgFQACgEAAgPIAAiBQAAgQgCgDQgCgEgFgDQgFgDgKAAIgHAAIAAgFIByAAIAAAFIgJAAQgJAAgFADQgEACgDAFQgCAEAAAPIAAB9QAAAPACAFQACAEAGACQAEABAOAAIASAAQARAAAMgFQALgGAJgMQAIgMAHgXIAHAAIgIBFg");
	this.shape_3.setTransform(28.8,110.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhZBjIAAgFQAOAAAGgDQAFgCACgEQACgEAAgRIAAiAQAAgQgCgEQgCgEgFgCQgGgDgOAAIAAgFIBcAAQAvAAAUAPQAUAPAAAXQAAATgNAOQgNANgXAFQgPADgkAAIAAA3QAAARACAEQACAEAGACQAEADAPAAIAAAFgAgKgBIAIAAQATAAAKgKQAKgLAAgWQAAgWgKgLQgKgKgUAAIgHAAg");
	this.shape_4.setTransform(6,110.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,78.7,87.9);


(lib.NextMenu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Next
	this.instance = new lib.NextButton();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.187,0.165);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgzBjIAAgFIAGAAQAJAAAFgDQAEgCACgFQACgEAAgPIAAiYIgPAAQgUAAgJAJQgMALgEAWIgFAAIAAg1ICxAAIAAA1IgFAAQgFgSgGgIQgFgIgKgFQgGgDgOAAIgPAAIAACYQAAAQACADQACAEAFADQAFADAIAAIAHAAIAAAFg");
	this.shape.setTransform(126.3,-15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAKBjIAAgFQALgBADgDQAEgCAAgEIgBgFIgKgQIgcgrIgfAlQgNARAAAGQAAAEADAEQAEADAHACQADABAJAAIAAAFIhMAAIAAgFQANgCAHgFQAKgHASgVIAngwIgyhKIgPgUQgEgFgDgCQgEgCgHgBIAAgFIBjAAIAAAFIgFAAQgJAAgDADQgEACAAAFIABAFIALAPIAXAmIAVgaQAQgUAAgHQAAgEgCgEQgCgDgFgCQgEgCgJAAIAAgFIBJAAIAAAFQgIAAgGACQgFACgGAGIgTAVIgmAuIA3BQQAOAUAGAFQAFAEAIABIAAAFg");
	this.shape_1.setTransform(103.5,-15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhZBjIAAgFIAGAAQAJAAAFgDQAEgCACgFQACgEAAgPIAAiBIgBgRQgBgFgEgDQgGgEgKAAIgGAAIAAgFIClAAIAAA6IgGAAQgEgVgHgKQgIgJgOgEQgIgDgXAAIgUAAIAABRIAEAAQASAAAJgMQAIgMADgXIAFAAIAABnIgFAAQgCgRgGgLQgFgLgIgDQgHgEgOAAIAAA4QAAAQACAEQABAEAEACQAEACAHAAIAMAAQAcAAARgNQARgNAHgaIAFAAIgJA/g");
	this.shape_2.setTransform(80.3,-15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABIBmIiGilIAAB+QAAARAIAFQAIAHAKAAIAFAAIAAAFIhHAAIAAgFQARgBAGgGQAHgHAAgPIAAiMIgEgFQgHgIgFgDQgEgCgKAAIAAgGIBHAAIBhB6IAAhUQAAgRgFgHQgHgIgRAAIAAgGIBCAAIAAAGQgNACgEACQgEADgDAFQgCAGAAAOIAAClg");
	this.shape_3.setTransform(57.7,-14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,186.3,160.3);


(lib.GoBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Click();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,380,148);


(lib.BackButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAMBjIAAgFQAJgBADgCQAEgCAAgEQAAgGgOgRIgtg5IgHAGIAAA2QAAAQABAEQADADAEADQAGADALAAIAAAFIhlAAIAAgFIAHAAQAJAAAEgDQAEgCADgFQABgEAAgPIAAiBQAAgQgBgDQgCgEgFgDQgFgDgIAAIgHAAIAAgFIBjAAIAAAFQgKAAgGADQgDACgDAFQgBAEAAAPIAAA9IBIg7QAQgNAAgHQAAgGgHgDQgDgCgMAAIAAgFIBNAAIAAAFQgKABgGADQgGADgWARIg6AvIBHBWQAOATALAGQAIAFAIAAIAAAFg");
	this.shape.setTransform(99.1,61.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgpBbQgZgNgNgYQgOgXAAgbQAAgcAPgZQAOgaAagOQAZgOAbAAQAWAAAXAJQANAFAEAAQAEAAAEgDQAEgDAAgIIAGAAIAABFIgGAAQgGgbgRgOQgSgPgXAAQgSAAgOALQgQALgHARQgKAWAAAbQAAAaAIAWQAGAWAOALQAOALAWAAQATAAAQgIQAQgIARgUIAAARQgRARgSAIQgSAIgYAAQgfAAgYgNg");
	this.shape_1.setTransform(73.9,61.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAJBlIAAgFIAEAAQAMAAAEgDQAEgDAAgEIgBgGIgFgLIgKgYIhGAAIgIATQgEAKAAAGQAAAIAHAEQAEADAQABIAAAFIhDAAIAAgFQALgCAHgHQAHgHAKgXIBGidIACAAIBIChQAKAYAHAGQAFAEAKABIAAAFgAgvAiIA7AAIgdhEg");
	this.shape_2.setTransform(50.5,61.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhbBjIAAgFQAOAAAFgDQAFgCACgEQACgEAAgRIAAiAQAAgQgCgEQgCgEgFgCQgFgDgOAAIAAgFIBfAAQAhAAAPAGQAOAGAJAMQAHAMABAOQAAAOgLALQgLALgaAHQAdAGALAJQARANAAAVQAAAXgSAPQgXARgqAAgAgRBBIAAAHQAAAIAEAEQAEAEAIAAQALAAAKgFQAJgFAFgKQAGgKAAgMQAAgOgHgLQgGgLgLgEQgLgFgWAAgAgRgJQAUAAAKgFQAKgEAFgJQAGgIgBgOQABgNgGgIQgFgJgKgEQgJgEgVAAg");
	this.shape_3.setTransform(27.5,61.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#414142").ss(1,1,1).p("AJ3AAQAAEGi5C4Qi4C5kGAAQkFAAi5i5Qi4i4AAkGQAAkFC4i5QC5i4EFAAQEGAAC4C4QC5C5AAEFg");
	this.shape_4.setTransform(63.1,63.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#414142").s().p("Am+G+Qi4i5AAkFQAAkEC4i6QC6i4EEAAQEFAAC5C4QC5C6AAEEQAAEFi5C5Qi5C5kFAAQkEAAi6i5g");
	this.shape_5.setTransform(63.1,63.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,128.2,128.2);


(lib.___Camera___ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween37("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(446.7,64.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-3,0,899.5,129.5), null);


(lib.EnterBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(215.5,67.3,1,1,0,0,0,215.5,67.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,431.1,134.6);


// stage content:
(lib.BobaShop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_39 = function() {
		this.stop()
		
		var isPaused = true;
		
		function EnterButton() {
			this.gotoAndPlay(85)
		}
		
		createjs.Sound.registerSound("Assets/Click.mp3", "Click")
		
		function mulaiSuara() {
			if(isPaused) {
				mainSound = createjs.Sound.play("Click")
				isPaused = false;
			}
		}
		
		this.EnterBtn.addEventListener("click", EnterButton.bind(this))
		
		this.EnterBtn.addEventListener("click", mulaiSuara.bind(this))
		this.gotoAndPlay(45)
	}
	this.frame_83 = function() {
		this.gotoAndPlay(45)
	}
	this.frame_121 = function() {
		this.stop()
		
		var isPaused = true;
		
		function NextMenu() {
			this.gotoAndPlay(123)
		}
		
		createjs.Sound.registerSound("Assets/Click.mp3", "Click")
		
		function mulaiSuara() {
			if(isPaused) {
				mainSound = createjs.Sound.play("Click")
				isPaused = false;
			}
		}
		
		this.NextBtn.addEventListener("click", NextMenu.bind(this))
		
		this.NextBtn.addEventListener("click", mulaiSuara.bind(this))
	}
	this.frame_302 = function() {
		this.stop()
		
		var isPaused = true;
		
		function PlayButton() {
			this.gotoAndPlay(304)
		}
		
		createjs.Sound.registerSound("Assets/Click.mp3", "Click")
		
		function mulaiSuara() {
			if(isPaused) {
				mainSound = createjs.Sound.play("Click")
				isPaused = false;
			}
		}
		
		this.PlayBtn.addEventListener("click", PlayButton.bind(this))
		
		this.PlayBtn.addEventListener("click", mulaiSuara.bind(this))
		function HyperLink() {
			window.open("https://maylidimitri20.wixsite.com/bobashop");
		}
		
		this.GoBtn.addEventListener("click", HyperLink.bind(this));
	}
	this.frame_322 = function() {
		this.stop()
		
		function BackButton() {
			this.gotoAndStop(303)
		}
		
		function SkipVideo() {
			this.gotoAndPlay(324)
		}
		
		this.BackBtn.addEventListener("click", BackButton.bind(this))
		
		this.Skip.addEventListener("click", SkipVideo.bind(this))
	}
	this.frame_404 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(44).call(this.frame_83).wait(38).call(this.frame_121).wait(181).call(this.frame_302).wait(20).call(this.frame_322).wait(82).call(this.frame_404).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.parent = this;
	this.___camera___instance.setTransform(809.2,369.4,1,1,0,0,0,1.3,1);
	this.___camera___instance.depth = 0;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(303).to({regX:1.5,regY:1.2},0).to({regX:1.3,regY:1,scaleX:0.15,scaleY:0.15,y:369.3},17).to({_off:true},1).wait(84));

	// EnterButton
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(679.7,871.3,1,1,0,0,0,215.5,67.3);

	this.EnterBtn = new lib.EnterBtn();
	this.EnterBtn.name = "EnterBtn";
	this.EnterBtn.parent = this;
	this.EnterBtn.setTransform(933.8,525.7,1,1,0,0,0,215.5,67.3);
	this.EnterBtn._off = true;
	new cjs.ButtonHelper(this.EnterBtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:933.8,y:525.7},39).wait(366));
	this.timeline.addTween(cjs.Tween.get(this.EnterBtn).to({_off:false},39).wait(44).to({_off:true},1).wait(321));

	// Closing
	this.instance_1 = new lib.Tween43("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-372.6,31.3);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween44("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(784.2,292.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},323).to({state:[{t:this.instance_2}]},41).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(323).to({_off:false},0).to({_off:true,guide:{path:[-372.5,31.4,-217.9,11.5,-64.7,27.8,73.2,42.6,160.5,127.8,191.6,158.1,212.2,208.2,282.5,315.7,344.5,417.6,408.7,523.2,495.6,608.8,531.2,643.9,588.2,660.2,606.9,665.6,620.2,676.3,896.2,676.3,1172.3,676.3,1292.4,620.3,1352.4,506.3,1411.9,393.3,1417.7,228.3,1420,162.6,1404.4,116.2,1404.4,84.2,1404.4,52.2,1237.8,14.5,1118.5,101.7,1100.8,114.6,1080.3,124.2,960.3,208.2,840.3,292.2,812.2,292.2,784.2,292.2]}},41).wait(41));

	// Motion
	this.instance_3 = new lib.Tween45("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-234.4,898.1);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween46("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(1714.7,832.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},365).to({state:[{t:this.instance_4}]},39).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(365).to({_off:false},0).to({_off:true,guide:{path:[-234.4,898,-262.8,817.9,-230.8,748.5,-218.2,721.1,-198.1,697.6,-168.1,662.4,-128.1,638.1,-104.3,623.6,-78.2,615.5,-69.8,612.9,-60.5,611.9,-29.2,611.9,2.1,611.9,20.7,631.5,39.2,651,39.2,667.7,39.2,684.3,51,685.3,51.4,686,51.4,695.9,51.4,705.8,82.8,654.9,113.9,611.1,122.3,599.2,142.8,602.2,148.7,602.2,154.6,602.2,164.4,652.1,174.1,701.9,174.1,695.1,174.1,688.2,212.4,631.3,259.8,595,266.3,590,274.5,594.7,328.8,625.7,322.7,692.1,350.2,665.8,379.3,627,414.5,580,461,617,477,629.8,485.9,648.6,485.9,663.5,485.9,678.4,531.4,639.3,575.7,605.7,587.4,596.8,604.3,598,619,606.9,633.6,615.8,644.4,635.4,655.1,654.9,655.1,669.6,655.1,684.3,661,684.3,666.8,684.3,698.1,646.2,729.4,608,780.1,580.3,836.2,590.1,847.2,592,856.4,598.2,876.9,643.2,897.4,688.2,941.7,614.9,1011.3,570.9,1026.7,561.2,1046,563,1053.9,568.9,1061.7,574.8,1082.2,639.3,1102.7,703.8,1136,638.3,1169.2,572.8,1190.7,572.8,1212.2,572.8,1221,578.7,1229.8,584.6,1240.6,634.5,1251.3,684.3,1249.4,660.8,1262.7,620.3,1285.4,551.5,1353.5,570.3,1364.5,573.5,1370.6,574.8,1425.3,603.1,1443.8,659.9,1450.2,679.6,1454.6,699.9,1480.1,638.3,1505.5,576.7,1517.7,573.5,1530.8,575.2,1556.2,578.3,1575.9,598.2,1645.3,715.6,1714.7,832.9]}},39).wait(1));

	// Video
	this.BackBtn = new lib.BackButton();
	this.BackBtn.name = "BackBtn";
	this.BackBtn.parent = this;
	this.BackBtn.setTransform(1430.3,85.5,1,1,0,0,0,63.1,63.1);
	new cjs.ButtonHelper(this.BackBtn, 0, 1, 1);

	this.Skip = new lib.NextMenu();
	this.Skip.name = "Skip";
	this.Skip.parent = this;
	this.Skip.setTransform(1389.3,627.4,0.595,0.58);
	new cjs.ButtonHelper(this.Skip, 0, 1, 1);

	this.instance_5 = new lib.an_Video({'id': 'instance_5', 'src':'videos/BobaVideo.mp4', 'autoplay':true, 'controls':true, 'muted':false, 'loop':true, 'poster':'images/', 'preload':true, 'class':'video'});

	this.instance_5.setTransform(696.4,361.9,3.175,2.131,0,0,0,200.4,150.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.Skip},{t:this.BackBtn}]},322).to({state:[]},1).wait(82));

	// PlayButton
	this.PlayBtn = new lib.PlayBtn();
	this.PlayBtn.name = "PlayBtn";
	this.PlayBtn.parent = this;
	this.PlayBtn.setTransform(1884.8,169.1,1,1,0,0,0,39.3,43.9);
	this.PlayBtn._off = true;
	new cjs.ButtonHelper(this.PlayBtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.PlayBtn).wait(283).to({_off:false},0).to({regY:44,scaleX:0.73,scaleY:0.78,x:1488.6,y:150},19).to({_off:true},19).wait(84));

	// TextVideo
	this.instance_6 = new lib.Symbol5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1579.7,-470.5,1,1,0,0,0,178.5,57.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(283).to({_off:false},0).to({regX:178.6,scaleX:0.65,scaleY:0.66,x:1433.6,y:58.4},19).to({_off:true},19).wait(84));

	// HyperLink
	this.GoBtn = new lib.GoBtn();
	this.GoBtn.name = "GoBtn";
	this.GoBtn.parent = this;
	this.GoBtn.setTransform(1394.2,855.9,0.609,0.485,0,0,0,190,74);
	this.GoBtn._off = true;
	new cjs.ButtonHelper(this.GoBtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.GoBtn).wait(283).to({_off:false},0).to({x:1413.6,y:684.5},19).to({_off:true},19).wait(84));

	// ShapeText
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.1,0,1).p("A3UujMAupAAAQGCAAERERQERERAAGBIAAAAQAAGCkRERQkRERmCAAMgupAAAQmCAAkRkRQkRkRAAmCIAAAAQAAmBERkRQERkRGCAAg");
	this.shape.setTransform(970.7,-126.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A3UOkQmCAAkRkRQkRkRAAmCIAAAAQAAmBERkRQERkRGCAAMAupAAAQGCAAERERQERERAAGBIAAAAQAAGCkRERQkRERmCAAg");
	this.shape_1.setTransform(970.7,-126.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(242,242,242,0.949)").ss(0.1,0,1).p("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AQBRABBXQACCog2CTQgkBhg8BWQgOAVgQATQgOARgOARQgXAagaAaQgbAagbAYQgFAEgGAFQgSAQgSAQQg0Arg5AiQg+AnhEAcQgJADgIADQgBAAAAAAQAAAAgBABQgCAAgDABIhgAVQg4AJg7ACQgSABgTAAIg3AAIgSAAIlFAAIgOgBIhCAAQgNAAgMAAIhMAAQgHAAgGAAIgcAAQgKAAgKAAQgtAAgvgBQgGAAgGAAIgRAAIgIAAQgGAAgFAAIg1AAIgFAAIgEAAQgOAAgOAAQgQAAgRAAIgxAAQgIgBgIAAQgJAAgJABIgaAAQgOAAgOAAIiMABQiEAAiFAAIgSAAQgUAAgVAAIhkAAQgIgBgHAAQh+AAh/gCIgLAAIhMAAIgJAAIgNgBAlLuIIBMAAICfABIClABQADAAACAAQADAAADAAIAkAAQAjABAjABILCABQBGABBFAAQC5AAC3ABQARAAAQAAQAGABAHAAIAEAAQAEAAADAAQAJABAJABQAzADAxAKQAoAHAnALQB/AmBvBMIAEABQAcAVAcAWQABABABABQABABABABQAFAEAGAFQABABABABQACACACACQACABABABQADACADADIBOBGQAoAoAhAqQACACAAABQACABABACQAAAAABABQADAEACADQABABAAABQAJAKAIALQABACABABQABACABABQABACABACQABABABACQABABABACIBNCKQACAFACAFQABABAAABQA1CQAAClQAAAYgBAYQgHCPgwB/QhACqiLCLQgCACgBABQgCACgCACQgEAEgFAEQgKAKgKAJQgDADgDADQgCACgCABQgRAQgSAOQgEADgDADQgCABgCACQgHAFgHAFQgOALgOAJQgDACgCABQgFAEgFADQgCABgBABQgFADgEADQgCABgCABQgCACgCABQgCABgCABQgHAFgHAEQgCABgCACQgEACgDABQgCACgCABQgBAAgCABIhtAzQgKADgLAEQgBAAgBABQhUAdhcAKQgBABgCAAQgEAAgDABAlhuAIAvABQCrADCpABQBaAABZABQB1AAB1AAQCWAACWAAQCEgBCCgBQAgAAAfgBICOAAQBcAABbAAQBhABBaASQABAAACABQAHABAGABQAJACAJADQBWAYBOAqQAkAQAjATIALAFQALAHAKAHIATANIA5AnQAGAEAFAEQABABACABQAAAAABABIACACIABAAQAAABACABQAFAFAFAFIAOANQAHAGAHAHQABABABABQA9A9AvBEQAAABABABQACADADADIAOATQAFAJAFAIQAcArAWAtQArBYAVBhQAGAYADAZQAOBKAABOQABCegvCLQgUA7gdA4QgbAzgiAwQgOAUgQAUQgOARgPAQQgTAVgVAUQgOAPgQAOQgxApg0AhIgwAaQgWANgXAMQgIAEgIADQgBABgCABQg4Abg7ARQgDABgCABQgCAAgCABQgCAAgBABQgCAAgCABQhcAZhkAFQgRABgRABQgBAAgBAAQgBAAgBAAQgWABgWAAQgjAAgjAAIlbAAIhOAAQgfgBgfAAQgMAAgMAAIhJAAQgJAAgKAAAo5uCIAqABICuABQDKAADIAAQIAABH/ACAo+uKQAEAAAFAAIAIAAQABAAABAAQACAAACAAIA4AAQALAAALAAIFQAAQAhAAAhAAQAVAAAWAAIA+AAQAhAAAgAAIAsAAQAFAAAFAAIAEAAIANAAAnOuJIAKAAIBiABAnauJQACAAABAAQACAAABAAQAIAAAIAAAnUuJIAGAAQBqAABqAAAnvuKIAVABAo1uKQAuAAAuAAAqUuKQAKABALAAIClAAArBuJQAYABAZAAArBuJQAhAAAhAAAsBuKIBtAAQAxAAAxAAAubuFICLADIDXAAILzgCAtQuKIBYAAAs5uCIApAAAv7uIIE6gBAs5uCQCVABCVAAAy3uHIAIAAQABAAAAAAIAIAAICIgBQAKAAAKAAIAPAAAy/uHQAIAAAIAAA2suGQATgBATAAQBkAABjAAQAEAAAEAAAy/uHQAEAAAEAAAyuuJQAoAAAoAAQAqAAAqABA1+uJIADAAA2OuIQADAAACAAQAuAAAtgBA16uJQAPgBAPAAA2JuJQAGAAAFAAA0ouJQADAAAEAAA0ouJQAbAAAaAAA08uJIAUAAAz9uIIA+ABA68tbQA3gSA5gMQACAAACAAQADgBADAAQACgBADAAQAGgBAHgBQAHgBAGgBQAHgBAHgBQALgCALgBQAFAAAFgBQAGAAAFgBQAogDApAAQANAAAOAAA45t4QAFgBAEAAA49t3QADAAADgBQASgCASgCQAAAAABAAA4Ht9QACAAACgBQAUgBATgBA4Ht9QABAAAAAAQA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AQqNtIgIAAIjqAAASuNjQh9AAh8AAI0QAAAJyNrQgdgBgfAAAPdNmIpOACEAjIgFQQADAGACAGQADAFACAGEAjMgFGQADAGADAHIAbBQQACAFABAFQAXBiAABrQAADxhuDDQg7BohaBbQhZBZhlA6EAjQgDeIACAOQAKAsAFAuQAAAFABAFIACAUQACAjAAAlQAABugYBlQg3Dpi1C0QhfBfhtA8Qh0BDiEAcQgEAAgDAAQgDABgDAAIhRAGQgGAAgHAAQgCAAgDAAIgHAAIhlACEAjigByQAAADAAADEAjhgB2IABAEQABARACARIAAAMQACAYAAAYQAAAGAAAGQAACCghB1Qg8DTinCnQizCzjnA3QgVAEgWADQgrAJgtAEQgcACgcAAQkxABkxABEAjEgEJQAGAVAGAWEAjEgEJQAHAcAHAdAc5r4QAEADAEADQABAAABABQBcA2BRBOQAHAHAHAHQACACACACQABACACACQACABABABQARATAQASIAeAkQAFAGAFAGQADAEADAEAdIr4IAbALQAqAcAnAjQABABABABQACABACACAe2qsQABAAABABQACACADACAepq2QAHAFAGAFAdnrsIA+AbQAvAkArArQCNCOBACuAdtr+QAjAXAhAbIAvATIAZAKQALAKAKAKQAOANANANQACACACACQDEDGAwEEQAPBTAABZQAAATgBAUQgCAugGAtQgOBhgbBNQgNAngRAkQgNAbgPAaQg8BnhaBaQgtAsgwAlQgYAUgYASQhRA8hYAmQhmAshxARQhAAJhEABQgyAAgmAAQg0ABgzAAInXgEIiRAAQgbAAgaAAQitACiwABQj8ABj+AAQjOAAjMAAQhngBhmAAIlbgDQgOAAgNgBQgJAAgJABAdwrdQA7AqA1A1QAHAHAHAHQAEAEADAEQACACACACQACADADACQABACABABQACABABACQADAEAEADQAEAFAEAFQADADADAEQABABACACQADADACAEQACABABACQACADADADQADADACAEQACACACACQABADACACICQEVAfVqQQALAKAKAKQAhAhAdAjQAoAwAfA0QB3DBAFDvQABAOAAAPQgCFukFEDQhbBZhnA7QhcA0hlAcIgKACQgHACgIABQgxAMg0AGIgHABQgMABgLAAQgTACgSACAZ8trIADACQB/AiBvBJAZutuQAHACAHABAZxttQAGABAFABAZutuQABABACAAAS+t9QBggCBggBIAhAAIAGAAQAOABAPABQA/AHA7APQALACALAEQCEAgByBKAXSuAQAGABAHAAQAeADAdAGQC2AgCXBqACduKQJ7AAJ5ACQAdAAAcABQAPABAPACQAKAAAKABAW6uGQAlACAjAEQACABACAAQAcAEAdAFQAXADAYAFAXquEQAKABALABQA5AHA2ANAXduFQAGABAHAAAbzshQAKAFAKAGAbosmQAGADAFACEAhHgIMQAGAHAFAHQBbCEAjCcAWfNrQgHAAgHAAQgzAAgzABAXdNmQgLABgKABQgUACgTABAXANhQgFAAgGAAQgEAAgDAAAXDNpQggADgiABAX+NiQgFABgFABIgQABAX7NjQgcAEgcACAajM+IhBAQAcRMVQgEACgEABAcRMVQgGADgFACQgIAEgJADQgBABgBAAQgCABgBAAQgRAHgSAGQgMAFgMAEQgCAAgCABQgCAAgBABQgFABgGACAbFMzQgIADgIADQgCAAgDABQgGACgHACAaxM6QhXAehfALAZYNQQgsAMguAGAcZMRIgIAEEAjkgBYQAAAEABAEAWdNrQgXABgXABAV5uHIBBABAiMNsQkUAAkTAAAa1NLQiMAzihACIlrADQiLACiLACAJ2OHIjegCQkYACkWACQjgABjfAAQiTAAiUgBQAAAAgBABA1eOGQgagBgZAAQgDAAgDAAQgNgBgOgBQgGAAgHgBQgEAAgDAAIiQgjA1eOGQgKAAgLAAQgSAAgSgBQj5gEjHh7AzYOHQgXAAgWAAIhZgB");
	this.shape_2.setTransform(993.6,-88.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("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");
	this.shape_3.setTransform(993.6,-88.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(228,228,228,0.894)").ss(0.1,0,1).p("Egg7gFoQAAAAAAgBQA+h0BmhkQAlgjAngfQABAAABgBQADgDADgDIAWgPQARgNASgLQA8gnBBgbQAFgCAEgCQAVgJAWgGQAXgJAXgGQBJgVBRgHQAhgCAiABQABAAABAAQACAAADAAQBdAABUAEINCARQCiAEChACQBcACBdABQBtAABuAAQCNAACMAAQB6gCB5gDQC8gBC7gGIAygBQAhgBAfACQAFAAAGABQABAAACAAQAFAAAFABQABAAACAAQACAAACAAQACAAABAAIEmBUQACABACABQAAAAABAAQAWARAXATQAVASAUAUQABABABABQAHAHAHAGQD1D2ABFaQAAFaj0D2QjMDNkTAiQgBAAgBAAQgBAAAAAAIgDAAQgeACgeAAQgMAAgMAAQgEAAgDAAIgGAAIjjAFQgGAAgGABIrQACIj/gCIsLACIi+gBInNgHQgFgBgFAAQgCAAgCAAQgCAAgBgBQgIgBgJgBIgkgHQgGgBgGgCQgFgBgEgBIj4hrQgEgCgEgDQgHgFgHgFQgFgDgEgDQgFgDgEgDQg7gsg3g4Qg9g/guhGQg5hWghhdQgMgigKgiQgWhSgHhZQgBgXAAgYIAAgBQAAgDAAgCQAAgCAAgCIAijZQACgJADgIQADgJAEgIQARgnAVglQAnhGA1g/IBBhoQAIgIAJgJIADgDQACgBABgCQAEgEAEgDEggpgEtIAEgGICCjRQAbgfAdgeQAvgtAygmQAzglA2gcQBWguBfgXQAGgCAGgBICOgVQACAAACAAQADAAACAAIAGAAQAZgBAaAAQArAAAqAAQAdAAAbAAQA1AAA0gDILCANQDVgFDSgDQDFgCDFAAQB6AAB8ABQBgABBiACQAxACAxAAQBcABBdABQBVABBVABQBkABBcAUQA5ANA2AUQAAABABAAQAkAVAiAZQAAAAAAAAQAIAFAHAEIBlBDQAKAJALAIQAIAHAIAHQANAMANAMQABABABABIBLBSQADADACADQAAAAAAAAQBwCrAQDSQAEAsAAAvQgBB7gfBuQg5DHieCeQihCgjLA3QgbAEgcACQgdACgeABIgqABIgLAAQg0AGg2ABIjkABQgHAAgGAAIlEAGQgdAAgeABQgZAAgaABQAAAAgBAAQg2AAg2ABEggtgEfQACgHACgHEggsgEiQACgFABgGEggxgERQACgHACgHQAAgCABgBEghqgD7QATg4Acg1A8MLfQh2g7hmhjQjhjcgakvQgCggAAghIAAgCQACh7AghvQA4jECZifQACgCACgCIAJgJQAAAAABAAQCIiJCog9QCchEC4AAQBFAABEAAIAFAAQAEAAAEAAIHNAAIA2AAIDmAAQDngBDnAAQAKAAAJAAIByABIBPACIB9ABIB9ACIBfACIEAACQAuAAAtAAQDQAADQABQBAABA8AIA9WKoQhKgwhDhDQj2j0gBlYIAAgBQABlUDrjyEghfAE5QhDiVgDitIAAgUQAAgEAAgEQAAgBAAgCIAAgFQABlZD1j1QCCiACdg9Egh8ADhQgihpgGh0IgBgpEgh8ADhQgUhRgHhVQgBgXAAgXIAAAAQACiMAsh8QA2jSCkimQCDiEChg+QAMgFANgEQABgBACgBQAagIAagIQATgFATgEQABAAABAAQAEgBAEgBICCgRQANAAAOgBQAGAAAHgBQAPAAAQAAQAJgBALABQAAgBABABQAFgBAFAAIAegCQAIAAAHAAEggvAFHQhMijAAjBIAAAAQAAizBAiYA/1G+QiOjNgDkFIAAgJQAAh1AchpEghZAFKQgPgegNgfQgwhzgMiDQgDghAAgjIAAgCQAFlZD5j1QACgBACgCQABgCACgCQBPhLBYg0QAbgPAbgNQAggOAigLQAAAAABAAQALgEAKgEQCEguCYAAQAdAAAeAAAsrMZIlugEQgfAAgfAAQifAAiJgxQing6iGiDQgSgRgQgRQgWgYgUgYQiqjfAAkkIAAgBQAGlZD6j1QAMgLAMgMQA8g2BBgpQB6hNCOgeEggvAFHQgMgegJgeQgihxAAh/IAAgFQAAimA5iPEghhAE0IgGgQQgKgfgJgfQgBgDgBgCEghfAE6QAAgBAAAAQgBgDgBgCEghdAE+QgBgDgBgCEghdAE+QgBgCgBgCQgBgDgBgDEghCAFzQgDgFgDgFQgJgPgIgQIgEgMA/9GwIgxhmQgBgBAAgCEghCAFzQgQgcgNgdAxetrQAKAAALABIDeAEID3AFIAFAAIAFAAINdgEICDABQAFAAAFAAIAyAAQEGACEEACQCvAACvABQAFAAAFAAQAAAAABAAQAVAAAVACQACAAADAAQABAAACAAIACAAIABAAIAjgBQAKAAAKAAIABAAQAvAAAtAFQAGABAGAAQACABABAAQAVACAUAEQABAAACABQAAAAABAAQAEABAFAAIAEADIAfAOICcBJQBXA2BOBOQCLCNA8CtQACAEABADIAjBfQAHAXAGAZQAAABAAABQAWBggBBoQgBB8gfBuQgbBDgnA+QgHAKgGAKQgOATgPATQgNAQgNAQQgXAZgYAYQgaAZgaAXIgTAPQgDADgDACQgBABAAAAQgbAagcAXQgyApg1AhQg5Ajg8AaQgBAAAAABQgDABgEACQiMA4iiADIlWAHQijAFikACQgCAAgBAAQg8ABg8ABQikADioACQjvADjzAAQjFAAjDgCQizgBixgDQitgCirgFQgFAAgEAAIgIgCQiPgNh/g5QgJgFgIgEQglgKgjgOQgVgIgVgJQgIgEgIgEQgFgCgEgCQgBgBAAAAQgFgDgEgDIhBgxQglgfgkgkQhAhDgwhJQgshFgehKAxYtfIASAAQAKAAALAAQEoABEoAAIAMAAIAkABICsADQChAFCgABQBVACBVABQBwABBwAAQCQAACOgBQB9gCB8gCQALAAALAAQAOAAAOAAIBdgCQAEAAAFAAIAGAAIAAAAQBNAABOABQBRAABMAOQAQADAQADQArANAqATIBVAqQAEADAFADQA5AWA2AeQAgASAeAVQAMAJAMAJQAAAAABAAQABACACABQAQAOAPAPQAfAgAaAhQAoAwAfA0QAgAvAYAyQAoBTASBbQAFAXAEAYQANBFABBKQADCNgmB8QgSA9gdA4QgZA0giAwQgOAUgPASQgNARgPAPQgSAUgTATQgEADgEAEQgGAFgFAEIhFAwQgBABgBABQg4Akg9AbQgEABgDACQgpARgqAMQgyAPg0AIQgGABgFABQg4APg8AIA07tpIADAAQBegBBegBQAPAAAPAAQBrgBBrgBID/gBQAqAAAqgBIBfABQAEAAAFAAIA1AAQAagBAbAAQABAAACAAIA+ABIA9gBICRgBQBQABBPAAQA7AAA7AAAxGtuQAJAAAJAAQBWAABWABAzltuQAOAAANAAQATAAATAAIBeAAQCugCCuAAAzltuQAgAAAhAAAzKtuQA5ABAzACA02tfIAUAAQADAAACAAIAzAAQANAAAMAAIB5AAIHpgCICOADAp0thIAKAAICVADArTtwQAGAAAGgBArTtwQAfAAAfAAQAwAAAwABAr9txQAKABAJAAIAXAAA7SsfQAPgIAPgGQAdgLAdgIQAggJAhgGIBDgKQAFgBAFgBA9OqAQACgCADgCQAOgLAOgKA/lpnQB+h6CVg+A1EtpQABAAAAAAQAEAAAEAAA1LtoQADgBAEAAQABAAABAAQADAAAEAAA1LtoQAEgBAEAAQABAAAAAAIAcgEQADAAAEAAQAAAAABAAQAIgBAIAAQAGgBAGABIAdAAA2EteQATgBATAAQAKAAAKAAQAKAAAKAAA1PttQAIAAAJAAQAQAAAPAAQAIgBAIAAQAFgBAGAAA2PtlQABAAAAAAQABAAABAAQAEgBAFgBIAbgDQAIgBAJgBQAEAAAEgBA2PtlQACAAABAAQAlgEAlAAA3CteIAigFQAGgBAHAAQACgBACAAQAGgBAGgBA2FteQAAAAABAAQABgBABAAIABAAIA2gJA2JteIAEAAIAAAAIBPgBA2JteQACAAADAAA23tdQAOgBANAAQADAAADAAIANAAA21teQAOAAAPgBIAWAAA2ZtjQAFgBAFgBA2ZtjQAGgBAFgBQAlgEAlAAA1MsyQACAAABAAA3WtbQAEgBAEAAQAGgBAGgBA3WtbQAEgBADAAQABAAAAAAIAGgBQAJAAAJgBA30tZQALgBANgBQAHgBAGAAQAGgBAHgBA24tdQABAAAAAAQABgBAAAAIABAAIAcgFA3BtbQAEgBAFgBQABAAABgBA3BtbQAFgBAFgBA3ItdQAIAAAIAAA3LtZIAKgCA8KqxICrh0QARgIARgHQAWgIAWgIQAXgHAXgIQAMgDAMgDQAggEAigBA4VtNQAGgBAHgCIAygLA5ss1QArgOAsgKQAlgHAlgFEgilgAtQAHlPDwjvQCPiPCzg7Egg7gFpQA+iQB2h4QCjikDPg4A6Ps4QAqgNAsgKA+kIwQgWgagTgbQgBgCgBgBIgcgqQgFgHgEgHQgBgBAAgBQgEgHgEgHA/0HAQgFgIgEgIA/rHOQgFgIgFgIA2BtfIIWgHIG1gHIBQAAQAdAAAdAAIA6AAQABABABgBIAYABQAKAAAJAAIDbADIAJABIA3AAIAoAAIADAAQAQAAARAAQBGgCBFAAQACAAACAAQABgBACABQAEgBADAAIBrgBQAKAAALAAQAygBAzgBIBkAAQAGgBAGABIB/AAQAmgBAlAAIATAAIDCABIAyABIAzABIByABQAhAAAhABQAdAAAdACIABAAQAZACAZADQAjAEAiAHQAvAKAtAQQBRAcBLAtIAsAVIB1A4QAcAXAbAZQA+A8AtBDQAgAvAZAzQAjBLARBSQAGAWAEAXQAPBMACBSQADCtg6CVQgCAFgBAEQg8DGifCcQgPAOgPAOQAAAAgBAAQggAegjAaQhNA4hWAlQhgAphsAPQg+AJg/ABQgwAAgkAAQgyABgyABIoFgKA0ettQAqAAAqgBAF2tkIADAAQAEAAADAAARstXQAHAAAIAAARktuIAwACAmxtdQDnABDmABQICABIAACQAsABArAAAQvtuIA1AAQB1AAB0ABQAcAAAbACQAWABAVADQA/AHA7AQQAFAAAFABAMatoIB/ACICyABICSAAQA9AAA6AIQACAAADAAAMPtuQCpABCpAAAF5tkIIggCAjYtsIAIAAIALAAAjQtsQA2AAA1AAQDJABDJABAlHttIAlgBIAwABAlHttQAOAAANAAAlKttQACAAABAAAmYtuQAnAAAnABAlmttIAcAAAlgtvQA+AAA9AAAExtqQAFgBAFAAAAatpQAYABAZAAQAFAAAGAAAAatpIAFABAAWtpIAEAAAB+toQA7ACA6ABAhUtwIBUgCAE+tuQBxgBBxABABytxQF+AAF9ACAE0tqQBzAABzAAAfMntQADADACADQACACABACIASAXQACADACAEQABABACACQAAABABABQBsC2AEDgQAAANAAAOQgDFbj6D1QhWBVhjA3QhRAthaAaQgzAPg2AIQgBAAgBAAQgKABgKABQAAgBgBABQgOABgPACQgJAAgIABQgBAAgBAAQgIAAgJAAQAAAAgBAAQgOABgOABQgBAAgBAAQgIABgIAAQg5gBg6AAIivAAQgTABgSAAIgcAAIhQAAQgOAAgOAAQgrAAgrgBQgKgBgKAAIghAAIggAAQgWABgVAAQgCAAgDAAIgHAAQgNAAgNAAQiVAAiVABIgOAAQgPAAgPAAIgUAAQgKAAgLAAQhdABheABIh3AAQgOAAgOAAIgyAAQjGAAjDgBIiDgBQghgBghAAIhxgCQgrAAgrAAQhrgBhrAAAfRnnQABACACACAWDtoIAhAAQAGABAFAAQFSAJDxD2QC5C9AtD5QAOBPAABUQAAASAAATQgCAtgFAqQgMBcgZBJQgMAkgQAiQgMAagOAZQg6BhhXBVQgyAxg3AoAYmtRQABAAADABQAGACAHACQB8AjBrBJQBEAvA+A+QC0C2AwDsQARBUABBcQAADuhxC+Qg2BchPBQQhoBph7A9Qg7AdhAAUQgJACgKADIgzAIQgyALgzAFQgCAAgBAAQgXADgXADQgBAAAAAAQgFAAgFAAIgJAAQgCAAgBAAQgYACgYAAAWztIQA8APA5AXAVEtcQAIAAAIgBIADAAQA/AJA9ASQCdAkCFBgQAWAQAVASQAgAaAeAeQARASAQARQC4DNAaEKQACAkAAAmQAABogXBfQg0DcirCrQgDACgDADQgUAUgUASQgqAkgtAeQgjAXgkAUQiUBNivANQgCAAgCAAQgBAAgBAAIhUACIgNAAAUltfQAQABAPACQA5AGA2AOARLtlICdADQAeABAeACAVatdQBcAHBVAZQChAvCFBxQABABACABQAMALAMALQACADADACIAQAQQBABBAwBIAUGtrIB8ADAZ9r4QAEADAEACQAgAUAfAXQAEACAEACQAIAEAHAFAbFrIQADACAEACQA6AqA0A1QBkBlA8B2QBYCtABDPQAAAOAAAOQgCBqgZBhQgIAfgLAeQg/CliJCGQhRBPhbA2QhkA6hyAcQguAMgxAGQgKAAgKAAQkzACkzACIgOAAAbArKQACABADABAcsqhQADACACACQANAMANAMQADACADADAcsqhQAEADAEADQAOAMANANQAyAlAuAuQAmAmAgAoQAEAGAFAFQACAEADADIBZCTQABADABADQAtCDAACVQAAAYgBAWQgGCLgwB7Qg9CdiACCQiKCLiqA9QgyATg1ALAWSteQDfAgCvCSIAMALEAhcgE8QABADABACQAAABAAAAQACADABADAR7tXQBlgCBkgDAnhtxIB+ACAqJtuQBqABBpAAAeKJeQgEADgDADQgFAEgFAEAZ5MaQgFABgEABQgGACgGABIi0AWQgDAAgEAAQgDAAgEAAQgEAAgDAAIh6AAIgqAAIj1AAIgggBQgOAAgOAAAZ5MaQgFABgFACQgGABgFABAeJKaIkQCAAVMMgIgCAAIhdACQjCAAjDAAI2MgGAVWMgIgKAAAVcMuQgQACgQABAU7MxQgTAAgTABQg9AAg+ABAUdMzQgTABgTABAVzMwQgGAAgHABQgFAAgGAAAVzMwQgHABgHAAQgiADgiABAWXMrIgkAFAV9MtQgQAAgRABAPKM1IgggBAQEMnQgEAAgDABIgFAAQgEAAgEAAAQCM1Ig4AAIj0AAImLABQiNAAiOAAQgUAAgUAAAIfMyQgCAAgCAAIgKAAQgFAAgFAAQgbAAgbgBQgBAAgBAAQgBAAgBAAQglAAglgBIlFgEIqpAAIgvAAIgUAAIj8AAIiVACIgrABQgfAAgfABQgCAAgDAAQhFgBhGAAQgugBgtgEQgOgCgNgCQgkgDgigFQgBgBgBAAQgDgBgEAAIgHgCQhCgQg+gaQgBgBgBAAQhDgdg9gpQgTgNgTgOQghgYgfgdQgLgJgKgKQgHgIgIgHQg4g5gsg+AHFMyQgBgBgBABQgCAAgBAAQhNABhOABQgGAAgHAAAHNMxQgEAAgEABAHNMxQgGAAgEABAIRMyQgmAAgmAAALyM0QgOAAgOABALyM0QgoAAgoAAQgdgBgdAAAPrMzQh2AAh2AAQgPgBgOAAAJcMzQgLAAgLAAQgTgBgUAAAKzMyQg6gBg7gBAI9MwQgHgBgHAAIkHgFAKTMyQg6AAg6AAAKaNpIkPgEQkHAGkEADQjSADjRAAQiJAAiKgCQhtgBhvgCQhDgChDgBQg9gBg9AAQgegBgegCQgJgBgKAAIjCg6QgwgIgtgNQgBAAgBgBQgRgIgQgJQgGgDgHgEQgEgCgEgDQhTgehLgxANaM0IhoAAADYM0IjzAAQgDAAgDAAIhHAAQgjgBgkAAQh3gBh3gDIgogBIiOgBIgYgBAFLM2IhfgCAHAMyQhVgBhVAAIrbgDAqaMsIhIgCAsOMaIgdgBArxMaIgdAAIpWgBQguAAgsgFQgFgBgFgBArxMaIg6gBAoeMdIgLgBIjIgCAoeMdIgGgBIgFAAApTMtIhbgBAt8MxQgXAAgXAAQhLgChKgBQhZgChYgCIgsAAIhUAAQgfgBgfgDQhFgJhBgUQgpgLgngOQiBgvhvhdQgZgZgXgbQgHgHgGgGQiPiQg8iyA2zMXQgGgBgFgCQgBAAAAAAQh9gNhvgvQgBAAAAgBQgvgUgrgaQhUgyhKhHA2zMpQgCAAgCAAIgygJQgFgBgGgBQgEgBgFgBA3pMgQgGgBgHgCQi8ggiahzQgBAAAAAAQgEgEgEgDIgWgVQgEgFgFgFQgZgUgXgXQgMgKgKgLQhShUg2hdA0cMxQgNAAgMABQgzABgzAAQgnABglgDQgegDgegEIiAgnIhPgXIgOgEQgGgFgFgDQgGgEgEgDA0MMqIgQAAA0CMqIgKAAQg3gCg0gHQhjgChagWIhwgtQgDgCgEgCQgFgDgFgCIg9gkQgggVgfgYQglgdgjgjQgEgEgFgEQgCgCgDgDQhshtg8iBAzwMqQgJAAgJAAA0cMxQgRAAgRAAQg8AAg5gIQiLgFh6gtIiLhlQgFgEgEgEQgEgDgFgEA1wMqIgjAAQgQAAgQgBA8ALoQgGgFgGgEA6kLcQgEgDgEgCQgFgCgEgCA9NKKQg0gngwgwQhZhag4hmA9DKSQgFgEgFgEAytMwQg4ABg3AAAuqMsIlGgCArJM0QkqgBkpgCAugMpIliABAhoM0QlSAAlRgBAApMoIpHgL");
	this.shape_4.setTransform(1016.5,-50.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("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");
	this.shape_5.setTransform(1016.5,-50.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(215,215,215,0.843)").ss(0.1,0,1).p("A4esXQABAAACgBQAogNAqgIQAAAAABAAIABAAQAagIAcgGQACgBADAAQAJAAAJAAIAYgBIABAAQADgBAEgBIA1gLQAdgDAeAAQANAAANAAQAUgDAVgDQAAAAABAAIAFAAQADgBADAAQACAAACAAA4msTQAEgCAEgCQAHgDAIgDIBYgcIAAAAQABAAABAAQAEgBAFgBIA9gNQAEAAAEgBQADAAACAAQAGgBAHgBQATgDAUgBQAIgBAJAAQAVgBAVgBQAFAAAEAAQAAAAABAAQAhAAAhgBQAfAAAfAAQAOgBAPAAIBpAAQA9gBA8gBIDKgBQAfAAAfAAIDhgBIBlADQAkAAAkAAQCQgBCPAAQAYAAAZAAIEcAGIACAAIBkADIAhAAIAHAAIA+ABIDIAFIBQABID2AGQAcAAAbADQABAAAAAAQAJgBAJABQAQAAAPAAQARADARADQANgBAOAAIAAAAQAJgBAJAAIAggBQC+AkCYB/QAIAHAJAHQAaAWAZAYQAAAAAAABQADACAEACIBdBPQAFAFAFAFQAlAkAeAmQA2BEAlBLQAAAAAAAAQAXAuAQAxQAKAhAIAjQAVBcgBBjQgCBngXBdQgaA7gkA3QgNATgOASQgMAPgNAPQgWAXgXAXQgZAYgZAVQgVASgVARQgGAFgGAGQgeAcgfAaQgvAngzAgQgrAbguAWQgOAGgOAHQiEA3iYAFIlCAKQiXAGiYAFIgCAAQg8ABg7ACQicAEifADQjjAEjpAAQi8AAi5gCQiqgDiogEQijgDiigHQjzgIi+iHQgHgDgGgDQh2g4hlhiQjWjQgbkdQgCgeAAgfIAAgCQADh0AfhpQAjh6BMhrIBLheQAKgMAMgMQADgDADgDQCGiHCmg5QAagJAbgGQAAgBABAAQAcgHAegFIBBgJQAIgBAIgBA4msTQAFgDAGgCQAGgCAGgDA5PsdQAGgCAGgCA6MsIQAKgFAKgFQCbhGC3AAQBnAABlAAQABAAABAAIADAAQADAAAEAAIAHAAQABAAABAAIHjABA6MsIQAegMAfgJQAjgKAkgHA5brwIACgBQAEgCAEgCICIg4A5brwQAFgDAFgCA6DpwQAAAAABAAQAAgBABAAIAAgBQACgCADgCIBghPQADgDADgCQAEgDADgCIDthtQABAAABAAIAAAAQAEgCAEAAQAjgJAlgGQBMgBBLgBQAbAAAbgBQADAAADABIDEAGIGpgJIA0gBQAmABAmABQAKAAAKAAQACAAACAAIBCABQAigBAhABQAFAAAEAAIATAAQAKAAAJAAQDHABDIABA6DpwQABgBABAAA6KppQADgEAEgDA6KppQAEgEAEgDQApgdAsgXQBSgrBbgWQBCgQBHgFQALgBAMAAQAYgBAZABQApAAApAAQAbAAAaAAQAxgBAygCIKZARQDIgGDDgEQC4gEC3AAQBxAAB0ACQBZACBcADQAuABAvACQBXABBZACQBQABBSACQBeAABYAUQACABACAAQAgAHAfAKQAbATAbAVQAAAAAAABQARANAQAOQATARATATQDnDoAAFGQABFGjlDoQi5C7j3AlQgcACgcAAQjGAAjHAAIy/gIIndgNIidAAQgeAAgdABQiXAAiCgtQieg2iAh6QgQgPgPgQQgVgWgTgYQigjUAAkVIAAgBQAAgKABgJQAAgDAAgDQAAgDAAgDQABgNABgNQAAgDABgEgA4WrKQALgEALgDQAVgIAWgGQBDgUBMgGQAhgBAjAAQAFAAAGAAQBSACBKAEIMSAaQCXAHCZACQBWACBZACQBoABBpAAQCGAACFgBQB0gCBzgEQCxgDCwgIIAvgCQC/gGCeBJA7bpeQBUg/BegmQAKgEAJgDIAAAAA4crFQADgDADgCQAEgDADgCA5ZrxIAzgiA/yEqQgTgigQgkQguhugNh6QgCggAAgiIAAgBQAHlFDsjmQACgCACgBQADgDADgDQACgCABgBQBchWBqg0A/4jsQAxjTCiikQACgCACgBQADgEADgDQACgCACgBQABgCACgBIBFguQA4guA+giA/JlSQA6iUB4h5QAPgQAPgOQAGgFAFgFQACgCACgBQABgBABgCQACgBABgBQAFgEAFgFQAEgEAFgDQABgBACgBQAAgBABAAQA3gtA8ghA/JlSQA7hqBfhbQApgnArggQAKgKAKgKQB4hzCQg5QAUgIAVgHQAUgHAUgFQACgBABAAIACgBQABAAABAAQACgBADgBQAEgBAEgBEgg8gA8IgBgIQADlFDnjmQB2h0COg6Egg8gA8QAHk7DijgQCKiJCrg3A+hkUQAQgnAWgmQA4hiBWhUQAzgyA3gnA7OqiIBzhOA/Ao0QAGgHAHgHQCGiIChg+A/4jsQAUg1Abgx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AdgBA2Ss7QADAAACgBQADgBAEAAA23s5QABAAAAAAIABAAQAUgCAUgBA3Hs3QAJgCAIAAQAFgBAFgBA3HstQArgJAugDQASgCASgBA3IstQAbgIAbgGA23s5QASgBATgBA1ns7QADgBADgBA5CsiQCEgyCaAAQAuAAAuAAAxVtYQB2AAB1ACAkAtUICWAEAi2tQQB4ACB2ADQCUADCSADIHOgCAnRtUQBagBBbAAIAaABAqgtXQAQAAAQABQBWAABVACAqRtTQCAABCBAAQBKABBKAAAmBtYQCcgBCdABAJ7tMIAnAAQAfAAAfABQAUAAAUAAQASAAATAAQDEACDDABQBOAABIAOIBkACQAHAAAHABQAFAAAGABAIftNQAuAAAuABAJktMQAMAAALAAAHotNQALgBALABAGatQQAbgBAaAAQBOgBBOgCAhXtQIEUAGICIgEQAEAAAFAAICaABQAfAAAfAAAFFtOQADAAADAAQACAAABAAQAlgBAlgBAAGtYQG9gBG7AEAZGqcQAFABAEADQABAAABAAICrBzQAFAFAFAFQABAAAAABQADACACACIACACQACACACABQABABABABIA0A3QADADAEAEIAAABQBhCbAOC9AYUrDQACAAADABAaLqRIABAAQApAWAnAbQAEADAEADQAGAGAGAGQAdAeAaAfQApAzAfA2QADAFADAFQAfAsAWAwQAlBNAQBWQAFAWADAVQANBCACBFQAECAgfByQgRA5gZA1QAAABAAABQgZA0ghAwQgNASgOASQgNAQgOAOQgMANgMANQgdAWgeATQg5Akg8AbQgFACgGADQgpARgsAMQhjAmhvALIgEAAQgCAAgDAAQgEABgEAAIgIAAQgCAAgCABQgZADgaADQgCAAgCAAIgpACQgHAAgHAAQgCAAAAABQgFAAgDAAIgJAAQhTAAhSgBAaLqRQAAAAAAAAQApAWAnAbQAEACAFADQADADAEACAaAqXQAFADAGADQADACADADAWus4QAHAAAGABQAAAAABAAQDQAyCiClQCKCMA4CwAVQshQAEABAEABQCoAjCLBrAVQshQAEABAEABQCoAiCLBsAVytLIAaABQFFAJDmDuQCuC1AqDrQAOBMAABQQAAASgBARQgBAqgEAoQgLBXgXBFQgLAigOAgQgMAZgNAXQg3BchTBQQg4A1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");
	this.shape_6.setTransform(1039.5,-13);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("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");
	this.shape_7.setTransform(1039.5,-13);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(201,201,201,0.788)").ss(0.1,0,1).p("A/ThMQAJkmDTjRQADgDACgCQATgTAUgRQAGgFAGgFQBwhcCFgoQApgSArgMIABAAQAOgBAPAAIAJAAIAAAAQADgBADAAIBDgCIAAAAQACgBADgBIAOgEQAZgIAagFQALAAALgBQAHAAAGAAQAjAAAhgBQAygBAxAAQAOgBANAAQAaAAAagBQADAAADABIAQABQABAAACAAICIAGIEOANIDDAJIAGAAICCAGQCOAKCPADQBLADBNACQBlACBmAAQCDAACAgDQBwgCBvgFQA3gBA3gDQAaABAaAAQA3ABA0AHQAJABAJACQAEABAEABQAEAAAFABID/BqQACABACABQABABACABQAFAEAFAEQAGAEAGAEQAIAGAIAHQAIAGAIAHIAAAAQAdAYAbAbQABABAAABQACABACACQAEAEADAEQACABABACQACABABACQACACABABQADADADADQABACABABQACABABACQAFAFAEAGQABABACABQABACABABQAEAFAEAFQAIAGAHAHIAqAqQADADADADQAEAEADAEIAbAhQAHAJAHAKQAcApAUAtQAjBIANBRQAEATAEAUQAMA+ADBAQAGBzgaBnQg2B8hmBoQhxBziLA5QhgAnhtALQgBAAgCAAQgLABgLABQgHAAgIAAQgEAAgEABQgJAAgJAAQgWAAgWABIgBAAQgXAEgXADQAAAAgBAAQgKABgKACQgCAAgCAAQg1AAg0gBIgIAAIgWAAQAAAAgBAAIgDAAQgGAAgGABIg8AAQgPAAgPABQgCgBgDABQgCAAgCAAQgBAAgCAAQgzAAg0ABA+EjgQAsjRCeiiQACgBABgBQABgBABgBQACgDACgCQABgBABAAQACgDACgBQABgBABgBQADgDACgCQABgBABgBQABgBABgBQAlgiAmgcQACgBABgBQABgBACgBQAcgUAdgRQACgBABgBIBAghQAFgCAFgCQApgSArgMQABgBABAAQAFgBAEgBICLgZQAIAAAHgBQAUgBAUAAQAPgBAOAAQACAAABAAIAVgCQAEAAAEAAQABAAABAAIABAAQAagCAdABQAJAAAJABIABAAQAIAAAHAAQABAAAAAAQACAAABAAQABAAABAAA9UlAQABgEACgEICHjhQARgTARgSQAFgEAEgEQACgDACgCQAOgNANgMQADgDADgCQADgDA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JQCvCxAjDrIAAAAQAJA6AAA+QAAACAAADQAAACAAACQAAACAAACQAAACAAACQAAAEAAADQAAACAAACQAAACAAACQAAABgBACQAAACAAACQAAACAAABQAAACAAACQAAACgBACIghBrQgPBOgfBHAy9sXQAEgCAEgBIBrAAQA2AAA2ABQFVABFUACQABAAABAAIAEAAAwes5QABgBACAAQABAAABAAQACAAABAAQACAAACgBQACAAACAAQACAAABAAQADAAACAAQAVgCAWgBQCZAACUABIAfAAQARAAAQAAIAtgBAwOs5QADAAACAAIABAAQAEAAADAAIAEAAIBoAAIDngEAwOs5QAHAAAGAAAwIs5QAFAAAGAAAw1s3QAHAAAGgBQAPgBAOAAQA1ACAvADQABAAAAAAQADAAACABAwIs5QA0ACAuADQAVAAATAAQARgBAQAAQAHAAAHAAQAIAAAJAAQAHAAAIAAICHgCQAEAAAFAAQACAAABAAIAygBICLgBQAOgBAOAAQArABArABIBngDIAEAAQAZAAAaAAQCJgBCIAAQAEAAAEAAQEbAAEZADQAJAAAIAAQACAAABAAQATAAATAAQBfgBBaAAIAXgBA4OsBIAFgCQADgBACgBQAjgIAlgFIAkgEQARgBARgBQABgBACAAQAEgBAFgBA4JsDQACgBADgBQAIgDAIgDA5IrvQAdgKAdgIQAogLAqgGA3Tr2QAFgCAEgCQABAAAAAAQApgMAqgIQATgGAUgFQADgBADAAIAAAAQAHgCAGgCA1zsZIAAAAQALgBALAAIAUAAQAHgCAGgCA1/sLQAFgCAEgBIBYgKQAHgBAGAAA2YsWQASgCATgBA0esYQAHgBAHAAA+KEOQgBgBgBgBQgWgogTgqQgshngNhyQgDgfAAgfIAAgBQAKkxDgjYQBZhUBlg0A/ThMIgBgOQADkxDajYQBqhoB/g2Ajis8IBvgDAjis8IATABIC7AHIAFAAAkCs7IAggBAmjs2QBXAABWABQCQAECMAEQAPABAQAAIDgAHQAFAAAFAAIGjgDIADAAIEmAJQAgAAAeAEQABAAABAAQASAAASAAQAFAAAEAAIABAAQAbAFAZAHQAgAIAeAKQAFABAFABAnDs6QBfgBBeAAAk0s/IBSADAqHs9QAOAAAOABQBUABBUABAqHs9QAMAAANAAAqPs9IAIAAApqs4QBjABBiABAFmswQADgBACAAQAFAAAEAAAFrsxQABAAACAAQA8ABA9ABIDrAHAGRsyQA0gCAzgBQBNgCBKgCAgUs0IAHAAQC8ACC8ABAgzs/IB1ADIFPAKAEsslIADAAQAEAAACAAIArABQDlAEDfADQAUAAATAAQB4ABB2ABAEsslQAFAAAEAAAElslQADAAAEAAAkzsWQCTABCSABQHGAEHEAFQBTAABUABQA0gCA0gCQAcAFAbAIQBNAXBGAnQAkAVAiAaIADAAQACABACAAIAAABQAbATAZAVQBjArBWBLICcFvQAAACAAACIAAABQABABAAABQAEAlAAAnQAAACAAADQABAHgBAHQgBBsgcBiQgzCwiNCMQh5B4iWA2QgNAAgNABIgwACQg0ASg4ALAn4sfIMkgGASLsOQAKgBAIAAQAZgCAYgBQATADATAEQAJABAIACQAKACAJACQAPAEAPAFQCKApBxBeQABABACABQAgAbAfAgQACACACADQAZAaAXAbQAqA1AfA6QBTCbAAC8QAAAMAAANQgGE0jjDZQhOBLhZAwQgwAbgzATQgGAAgGABQg6AUg+ALQgdAFgeACQgZABgZAAATUr+QADABAEAAIABABQA/AWA6AjQAoAVAlAbQBCASA9AeQAnATAlAXQACABACABIAGAFQBDAsA8A7QAiAiAdAkQAsA3AgA9QAcBkAABxQAAAVgBAUQgCA6gLA3IguCVQgJAkgNAiQgHASgHASQgBAAAAABQgCADgCADATOsSQAYgCAYgBAKSs5QEUADEUAFQAyABAvAGQAxAHAvANARpsbQA0ABAxAIAUssvIBHADQExAMDXDiQCkCsAnDgQANBIAABLQAAASAAAPQgBAogEAmQgJBSgUBAQgKAggOAfQgKAXgNAWQg0BWhPBLIh+BiQgCACgCABQgDACgDACIitBNQgCABgCABQgEABgEABQgwANgyAIQg1AIg5ABQgHAAgHAAIkKgBIgNABQgFAAgFAAIg9AAALVsoIEPACQBFAAA/ALAWeqUQACABACABQBDASA8AdQAoATAkAXQACABACABAQ7sbQApAEAnAJAQss5IEAAKAYpp7QAEADAEAEQAGAFAFAFIAbAaQACACABABQAKAKAJAKIAAAAQA5A+AoBEIABABQADADADAEAYpp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");
	this.shape_8.setTransform(1062.4,24.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("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");
	this.shape_9.setTransform(1062.4,24.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(188,188,188,0.737)").ss(0.1,0,1).p("A9qheQAKkQDGjCQACgDADgCQACgCADgCQAEgFAFgEQAEgEAEgDQACgCABgCQATgQATgPQADgCACgBQACgCACgBQAGgFAFgEQAEgCAEgDQABgBABgBQACgBABgBQAFgDAEgDQAEgCAEgDQACgBACgBQAIgGAJgFQBJgrBSgXA2FryQAjgFAjgBIAQgBQAEgBADgBICKgcQABAAACAAQAHgBAHgBQAGAAAFAAQASgCATAAQAegBAdgBQAvgBAuAAIAHAAQAHgBAIAAA2FryQAlgEAnAAIAEAAQACgBADgBQABAAAAgBIAAAAQAEgBADgBA37rbQAagHAagGQAhgHAhgDA3OrlQAEgBADgCQCBg4CXABQBRAABRAAQAHAAAIgBQABAAACAAQAYgBAbABQAMAAANABQAAAAABAAQAAAAABAAQABAAABAAQAEAAAEAAQAGAAAHAAQBHgBBGgBQBEgBBDgBIAXAAQALAAALAAQBRABBPADQAdAAAcABQAAAAABAAQA3ACA2ACQAEAAAFAAIAIAAQACAAABAAQA1ABA1AAQAUAAATAAICzACQAGAAAGAAIACAAQACAAABAAQCMACCLACQAGAAAGAAIAMAAQABAAABAAQAFAAAEgBICDgFQAFAAAFAAQBFgDBEgCQAUgBAUAAQA8gBA6gBIAyABQABAAABAAQBlABBlACQAAAAABAAIACAAQAcABAcABQAXAAAXACQATABATADIAJAAIB8AHQEdAODJDXQCYCjAlDUQAMBEAABHQAAAQAAAQQgBAlgDAkQgIBMgRA8QgJAegMAcQgKAWgMAVQgyBRhLBGQgBAAgBABQgBABAAAAQgCACgCACQgBAAgBABQgBABgBABIhzBWQgIAFgJAFQAAABAAAAQgWAXgYAXQgpAngsAeQhDAvhJAdQhSAihdALQg1AGg2ABQgpAAgfABQgqABgqADImzgXIgFAAIgBAAIAAAAIjSgKQjXAOjQAHQinAHilAAQhrAAhvgEQhXgEhbgFQg3gDg5gDQgygCg0gCQgaAAgZgDQiBgKh2g1Qg9gcg3gnQhWgIhKgcIAAAAQgEgCgFgCQgZgJgXgKQhqgxhahVQjBi2gdj5QgBgbAAgcIAAgCQAFhlAdheQAsiZB0iBQASgVAUgUQCCiDCkgwQB8g+CSgKQAdgCAeAAQCsAACmAAQASAAATAAIE7AAIEKgBIA1ABIADAAIABAAIA5ADIAEAAIAIABIDOAKIAFAAIAFABA16rbQAEgCADgBQAegOAggKIApgBIABAAQAHgCAGgCIBfgDQASgHATgFQABgBABAAIARgFQAFgBAFgCIABAAIAAAAQAHAAAHAAQA5gBA5gCQAVAAAUAAQAxgCAwgBIABAAQAQACAQACIBVAFIEfgLIBBgDA16rbQADgCADgBQABAAAAAAQAngLAogGIABAAIAAAAQABgBAAAAQApgGAqgBQAGgBAFAAIAPAAQABAAACAAQACAAACAAQACAAADAAIA6AAQAWAAAVAAIAAAAQABAAABgBA3OrlQAkgIAlgFAzLr3QAEgBADAAAzPr3IAEAAIAVgBIANAAAy2r4QABAAAAAAQALgDALgDIB8gFQAfgKAggHQAEgBAEgBQAagFAbgDIAAAAQABgBAAAAIAAAAQACAAABAAQAhgEAigCQBwABBuABA3zoZQAbgfAfgdQACgCACgCQACgBABgCQBthlCCgyQAHgDAGgCA0wr4QABAAAAgBIAwgCIABAAQANgDANgDIBOgNQAcgEAdgBAz/r7QANgDAOgDA0Mr3QAHgCAGgCA0fp2IAAAAQA0gPA7gEQAcgBAfACQAPAAAPABQAfgEAhAAQAVgBAWABQAmABAkAAQAYAAAYgBQAsgBArgEIJGAdQCugLCngHQCdgGCcAAQBfAABjADQBNAEBQAEQApADApACQBNADBQADQBHACBKACQBIABBEAOQAEADAEADIAXAWQABABACABQACACACACQADAEAEADQDKDMABEfQACEejIDMQiaCcjKAmQgJABgKAAQiuAAivAAItNgKIgIgBInIgXIiNAAQgaAAgbAAQiIAAhzgmQiNgthwhmQgPgNgNgOQgTgTgRgUQiNi/AAj5IAAAAQACgqAGgnQAEgTADgSQABgCAAgCICdkxQAEgFADgEIABAAQAUgNAWgKQBKgmBRgSQAogKApgEQA8ACA3AGIKvArQCFAMCGAEQBNADBQADQBdACBfAAQB5AAB3gDQBogDBmgGQCcgFCagOIAqgDQCIgIB1AmQAIADAIADQAOANANAOQBUBWAzBjQBMCVADCsQAAANAAAMQAABXgRBQQgHAbgJAZQg5CIh1BvQg1Axg5AlQg+AohDAaQAAAAAAAAIgKABIiVAJQi5AQi7AHQgFAAgFAAQgCAAgBAAA0jrvQAAgBABAAQALgEAMgDIA8AAA01rpQAJgEAIgCQAMgEAMgEA01rpQAJgDAJgDQArgHAtgBA4IrUQAGgEAHgDA4IrUQAcgKAegHAumsfQACAAACABQAFAAAFAAIBGAFAunseQABgBAAAAAulseQABAAACAAQCUAACUABQBjgBBigBQBCgBBBgBIACAAIBygEAunseQABgBABABQAHAAAGAAAutsfQADAAADABAutsfQADAAAEAAAu+seQADAAADAAQAJAAAIAAAxnsQQAGgBAFgCQAEgBAEAAIAWgFQAKgBAJgCQAFAAAEgBQABAAABAAQABAAABAAQAIgBAJgBQAkAAAkABAxcsTQAEgBAEAAAxEr4QABAAABgBIABAAQAPgFAPgFIFHgNIEUARIABAAILBgHQAfABAeABQDVAFDNADQB1ABB0ABQAAAAABAAQAZAAAZABIABAAQAFAAAGAAQBHABBBANQAjAGAhAKQB9AmBoBVQAjAdAhAjQALALAKAMQBMAuBCBCQAhAgAcAiQAhAqAbAtQABACABADIAiBFQACAFACAGQADAGACAGIAOAnQAEAQAFAQQACAKACAKQASBSgCBZQgBBAgMA8QgCAFgDAEIgPAbQgCADgCADQgLARgMAQQgMANgMANQgTAVgWAUQgWAVgXATIhFA2QgCABgDACIAAAAQgIAGgIAGQgyAgg1AbIgsASQgDABgDABQgDABgCABIhCAUQgGABgFACQAAAAAAAAQhfAohrALQgWACgWABQgJAAgIABQgCAAgCAAIAAAAQgpABgpABIAAAAQgPAAgOAAQgQABgQAAQiMADiMADQgBAAgBAAQgCgBgDAAIhIgFQgEAAgDAAIgGgBIgBAAQhWAEhYAEQgBAAgBAAQgcABgcACQgBAAAAAAQgWgBgWgBQgbgBgagBQgVgBgVAAQgigCgigCIkOgLIoyAAIh1gFIjgAAQgCAAgCAAIhcgMQgGgBgHgBIAAAAQgGgBgGgCIhQgXQhSgehKgzQgVgPgUgQQgKgIgKgIQgjgfghgjQgyg3gmg8QgvhMgchOQgKgdgKgdQgUhDgKhKQgBgUAAgVQAEhCAPg9QALgXANgXQAzhYBOhKQA+g8BFgpQAFgFAEgFIA/g8QADgDAEgDQBlhWB2gsgAxEr4QBIAABIABQFcABFaADIB+AIQCDAMCHAEQBGADBKADQBfACBhAAQB8AAB5gDQBqgDBogFQADgBADAAIBOgDQAFgBAGAAQAAAAABAAQABAAABAAQAVgBAWgBQANADAMAEQAMACALACQAAAAABAAQAFABAGABIE2CQQAMAJALAKQAQAPAQAQQABABABABQABABACACQACADADADQACABABABQABACABABQAYAZAUAbQAGAIAGAJQARAWAPAYQAAABABABQABABAAABQABABAAABQBIB4ARCOQAAABAAABQABAZAAAaQgBBWgTBOQgtC2iPCNQhXBWhmAxQiCA/iaADQg+AMhBABIooAFIgBAAIoRgbIgGAAIgGgBAprsjQA2gBA1gBAp6sdQBfABBeABQBcAABcABAtRsZQBrgCBsgCAxBr5IJ5gGAh+siIAGABAiAsiQABAAABAAQA9AAA9AAAiEsiIAGAAAi9slIAbgBQAbAAAaAAQABAAABAAIBnAEIACAAQAlAAAnAAQEKAAEHADQAoAAAoABQDlADDjAGQAvABAsAHQA4AHA0AQQACAAACAAQAUABATACQDXASCiCUQAzAtAlA1QAZAlATApQAbA9AKBEQAFARADASQAPA/AFBEQAAACAAADQAAAGAAAHQABADAAADQAAADAAADQAAACAAACQAAABAAACQAAACAAADQAAABAAACQAAAEAAAEQAAACAAACQAAACAAACQAAACAAABQAAACAAACQAAABAAACQAAABAAACQAAAEgBAFQAAABAAABQAAACAAADQAAACAAADQgBAEAAAEQAAADAAAEQgEAqgKAqQAAABAAABIgyCMQgCAFgDAEQgCAFgDAEAkwshQBYgBBYAAAj2smQAqAAAqAAAhrsmQA0gBAzABQGogBGlAGAj6saQCJAFCEAGQB1AFByAEIFrgEIACAAIEBADQAEAAAEAAQACAAACAAQAGAAAFAAQAEAAAEAAQABAAABAAQAuACAsAIQAJACAJACQAkAHAjAMIABAAQAAAAAAAAQADABADABIAHACQAKAEAKAEQAGAAAGACAj+rzQBuABBtACQGoAEGmAHQBmABBmABQACAAABAAQACAAABAAQACAAABAAABYsXIAIABIABAAIDTAIQAngDAngCQAAAAABAAQABAAACAAIAEAAQAGAAAFgBAFusUQAIAAAIABAFusUIAEABIAQAAABWsXQCMACCMABAgCsiIFwAOABKsXQAHAAAHAAAl7seIBJgDAnHr/IDJAMAJnsKIEeAMQAfABAeADAQ9rmQADABADABAQ9rmIAAAAQAKgBAJAAIA5gEQAWgCAWgCIAAAAQASgBARgCIAigCQACgBACAAQACAAACAAQAQgBAPAAQANAAAMAAQCiAzCBCFQCICLAtCzQAVBWAABfQAAATgBAUQgHCMg4B5QgLA0gUAwQgWA2ggAyQgLARgNAQQgCACgCACAQ8rmQABAAAAAAAQtrlQAAAAABAAQAHgBAIAAAQtrlQAIgBAHAAAP1riQAHgBAHAAIAzAEQAJAAAIABQABAAAAABQALABAMACIBbArQAGAEAGAEQABABACAAQA1AeAwAoQAHABAHACQBAAPA7AZIBCAhQACABACACIABAAQABABACABAQBrjQAWgBAWgBAPDr6QA2AGA0APAP2r5QAkAHAjAMQAJgBAKAAATYsVIAHAAATWsVQACAAAAAAQBKAKBDAYQCWA1B4B7QCrCuAcDpIAAABQAGAtAAAwQAADjh4CwQglA2gwAxQhNBPhZAyIgBABQg8AhhBAVQhhAfhsACQgYAAgXABQgSAAgTAAQgEABgEAAQghADgjAAQgGAAgHAAQgLABgLABQg3AAg5gBQgHAAgHAAAS6qvQAHAFAIAEQAvAeAsAmQAEADAEADARIrdQBCAUA8AiQAxAeAtAnIAAAAQAFABAFABQAWASAWAUQBjAjBVBFQAOALANAMQACABABACQABABACABQABABABABQANAMALAMQBEB+AJCXARKsdICMAIARHsdICRAIAGMsTQCJACCJACQCrACCrACQBmABBbAbAQ2rfQAJAAAJACAGDsTIDiAJA0fp2QBlhWB2gsAxvr4IAugBAc6isQADAHACAGAc2i2QACAFACAFAX9oRQACABACABIAKAGQAOAPANARQArA3AfA8QAMAPAKAPQAaAmATApQAfBDALBMQAEASADASQANA5AEA9QAGBmgUBbQgyBrhYBbQhmBph8A2QgEAAgEABIhzAQIgHABIgBAAIgNAAIhTAGIgLAAIgKABAX5oUQACABADACQAuA3AhA+QATATAQATQBICPgCCpQAAAMAAALQgIEijXDKQhKBGhUAuQggARggAO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");
	this.shape_10.setTransform(1085.3,62.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("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hIgCgBIAAAAIAAAAIgLgDQiNgthwhmQgPgNgNgOQgTgTgRgUQiNi/AAj5IAAAAQACgqAHgnIAGglIABgEICdkxIidExIgBAEIgGAlQgHAngCAqIAAAAQAAD5CNC/QARAUATATQANAOAPANQBwBmCNAtIALADIAAAAIAAAAIACABQBsAhB+ABIABAAIAAAAIABAAIACAAIA1AAICNAAIHJAXIAFABIvdgMQhSgehKgzQgVgPgUgQIgUgQQgjgfghgjQgyg3gmg8QgvhMgchOIgUg6QgUhDgKhKIgBgpQAEhCAPg9QAmiiByiCQAagfAfgdIAEgEIADgDQBthlCCgyIANgFIANAAIA6AAIArAAIAAAAIACgBIABAAIAegKIh8AFIAlgMIACgBIARgFIgRAFIgCABIglAMIhfADIAagGIBOgNQAcgEAegBQgeABgcAEIhOANIgbAGIgvACIAGgCICKgcIADAAIAPgCIAKAAIAlgCIA7gCIg7ACIglACIgKAAIgPACIgDAAIiKAcIgGACIgBAAIABAAIAvgCIgMAEIgqABIAFgCIABgBIAHgCIgHACIgQABQgjABgjAFQghADghAHIAEgCIAAAAIADgBQB9g0CSAAIABAAIABAAICiAAIiiAAIgBAAIgBAAQiSAAh9A0IgDABIAAAAIgEACQgaAGgaAHQB8g+CSgKQAdgCAeAAIFSAAQgiACghAEQAhgEAigCIAlAAIE7AAIhrACIBrgCIELgBIA0ABIADAAIABAAIgBAAIgDAAIg0gBIBTAAIgbABIA5ADIg5gDIAbgBIA1AAIACAAIBnAEIACAAIgCAAIhngEIBnAAQGogBGlAGIAyABIACAAIDKADIABAAIACAAIA4ACIAuACIAnAEIAIAAIB8AHQEdAODJDXQCYCjAlDUQAMBEAABHIAAAgQgBAlgDAkQgIBMgRA8QgJAegMAcQgKAWgMAVQgyBRhLBGIgCABIgBABIgEAEIgCABIgCACIhzBWIgRAKIARgKIgRALIAAgBIgTALIhUAmIioApICogpIBUgmIATgLIAAABIgTAKIATgKQgWAXgYAXQgpAngsAeQhDAvhJAdQhSAihdALQg1AGg2ABIhIABIhUAEgAAzKRQB8AAB8gCIEVgBIkVABIhEgBIBEABQh8ACh8AAIgRgBICSgBIiSABIARABgAPZKP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");
	this.shape_11.setTransform(1085.3,62.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(174,174,174,0.682)").ss(0.1,0,1).p("ANEsGQAjAAAiAAIB3AAIFDAWQEIAQC7DMQCOCaAhDIQAMBAAABDQAAAPAAAPQAAAigCAiQgIBIgPA3QgHAcgLAaQgJAVgLAUQgxBKhGBBQgFAEgFAEQgBACgCABQgDADgDADIiCBZQgEACgFADIAAAAQgfAmgmAjQgnAjgqAdQg/ArhFAbQhOAfhXAJQgyAGgzABQgnAAgdABQgnACgoADIgtAAIl0gdQg3AEg4ADQiBAIiHAHQi/AHjHAAQiiAAibgEQiRgFiMgHQiHgIiDgNQjngSisigQgUgGgTgIQgWgIgWgJQhjgthVhQQi3iogejoQgBgZAAgaIAAgCQAGheAchYQApiIBkh2QAXgcAagaQAEgEAEgEQABgCACgBQADgDACgDQACgBABgBQABgBACgCQABgBACgBQABgCABgBQACgBABgBQABgBABgBQACgCABgBQABgBABgBQACgBABgBQACgCACgBQABgBACgBQARgPASgOQACgBABAAQABgBABgBQADgCACgCQADgBACgCQABgBACgBQABgBABAAQACgCACgBQAGgEAFgDQADgCADgCQAtgcAwgUIBAgWQAEgBAFgBQAAAAABAAIAAAAQAQgFARgDQAJgCAJgCIAAAAQAHgDAHgDQBpguB4gGQAUgBAUAAQBkAABkABQAPAAAPAAQAKAAAJAAQACAAABAAQAfAAAfABQABAAABAAQAFAAAFAAQBxAABwABQACAAABAAQA8ABA8AAIBFgDIABAAIAfgCIACAAIB/gGIAPgBQAkAAAkAAQBLgBBKABQGlgBGfAIQB+ACB9AEQAVAAAWACQBjAJBYAiIAAAAQAKABAJAAIEIBWQAqAaAmAjQAwAoAgAwQAYAiARAmQAYA5AIA+QAEAQADARQAPA6AFA/QABAEAAAGQABAGAAAGQAAAFAAAEQABANAAAMIhJEfQgCAEgDAEQgBACgBACIgDAFQgKAPgLAQQgLAMgLAMQgTATgUATQgVATgWASQgqAkgrAdQgGAEgGAEQgpAagrAXIhAAbQgCAAgCABQAAAAgBAAQgnAOgqAJQhcAqhpALQgdADgcABQgEAAgEAAQgbAGgbAFQgBAAAAAAQgYABgXAAIAAAAQgBAAgBABQgfACggAAQgMAAgLAAQgNAAgNAAQgFAAgFAAIgHAAQgBAAgBAAQgBAAgCAAQgBAAgCAAQgPgBgQgBQgmgBglgDQghgCgggEIgSgBQhaAFheAGIgaABQgGAAgGABQgCAAgCAAIghACQgHAAgGAAQgOAAgOAAQgJgBgJAAQgBAAAAAAQgZgCgZgBQgZgBgYgCQgXAAgYgCQgBAAgBAAQgbgBgbgDIj8gNIn3AAIhigFIiYAAIkFAAIgTAAIggAAQgGgCgFgBQgCgBgCAAIhggmQgGgDgGgEQgHgDgHgEIhXg5QgogfglgmQgUgVgSgVQiXi1gCjyIAAgHQAAgCAAgCQAAgCAAgBQAAgCAAgCIAGhWQABgGABgGQABgFAAgFIB5kcQACgCACgCQACgCABgCQAFgGAEgFQAVgbAYgYQBZhbBqgzQAWgLAXgIQAGgDAGgCQBUgeBegHQASgBARgBQArgBAqgBQABAAAAAAQABAAAAAAQAHgBAIgBQAPgCAPAAQAWgBAYACQAHAAAFAAQABAAABAAQABAAAAAAQAGAAAFABARorHQAjgEAjgEIAggCQAWgCAWAAQABAAACAAIAZAAQAHAAAIAAQCBAzBqBsQCoCtAUDrQAZA5ANA+QARBNgCBUQgBAsgHApQgBACgBACARArDQASAEARAFQBxAjBeBLQAlAeAiAlQATAUASAVQAEADAFACIB5BYQAFAFAFAEQAKAJAJAJQAfAfAaAgQABABAAABQAMAPALAPQABABABABQAJANAJAOQAXAlASAoQAAABABABQAAAAAAABQADAfAAAgQAADgh9CsQgdApglAmQhEBGhOAuQgoAOgpAIQgBAAAAABQgEAAgFABIg+AJQgIABgIABIg7AEIgQACQg7AahBAOQgmAIgoADARArDQAUgCAUgCQBkAlBVBIQAJAHAIAHQARAQAQARQAgAgAaAjIAMAGQADABACACQAEACAFACAwFpOQAogFAqgBQAUAAAVABQAkABAhAAQAXAAAXgBQApgCApgEIAmAAIHLAiIArAAQChgNCZgIQCPgICOAAQBXAABbAFQBGAEBLAFQAlAEAnACQBIAEBMAEQBCABBGADQABAAACAAQAEAAAEAAIA2AFQAKABAJABQAHABAHABQASAQASATQBOBRAwBdQBHCNAEChQAAALAAALQABBSgPBLQgGAZgIAYQg3B9hvBnQgrAoguAgQgBAAAAAAQgEACgDABIjgA1QgVABgVABIAAAAQg+ANhEABImYAFImygdIgBAAIgFAAIgCAAIgGgBIgCAAInHgeIiFAAQgYAAgZAAQiBAAhsgiQiFgohohdQgOgMgMgNQgSgSgRgSQiCi1AAjqIAAAAQAOjVCHijQAKgGAKgEQBGgjBMgRQAGgBAFgBQAWgFAWgDAS7orIAAAAQAHABAHABIAqAJQAuAKAsARQAEAEAEAEQADAEADADQADADADADQACADACACQAcAfAYAgQASAOARAQQAJAHAHAHIAcAbQAEAEAEAFIAAAAQADADACADIAPATQAFAFAEAGQABABABACQAYAiARAmQAcA+AIBHQAEAQADARQANA1AEA4QAHBZgPBSQgtBZhKBOQhbBehtAyQgFABgFABASaovQAKAAAJACQAHAAAHACQAHABAHABAStotIAAAAQADADADADQAMAMAMANQAKADAKADQBkAcBWBAQABACABABIBqEJQACAKABAKQABAKABAKIACA3QABAJgBAIQAABegaBVQgtCah8B5QhXBWhoAvIh2AJIg9AFQisATiuAIQgDAAgCAAIkXgTIxHADIj2gOIgBAAQgDgBgDgBIhmggIg6gBQhngBhageQhGgrg9hAQg8g+gphGQhXiVAAi5IAAgBQAAhnAbhbQAvhEBCg8QA6g0A/glQAFgHAFgFIBNhQQBfhWBvgvQABAAAAAAQAKgEAJgEQAHgCAHgCQAKgDAKgCQAQgGARgGQABAAABAAQAGgCAFgCQBDgCBDgBQAJAAAJAAQABAAAAAAQA0gCAzgCQABAAAAAAQBTgCBUgCAQ0qNQBAAoA5A4AQ0qNQBHAoBAA6AUWrTQAHAAAIAAQAJAAAKABAPhq3QC1AWCNB2QAEAEAEADQARAPARAQQAgANAgAQQAlAxAaA3QA2BwAGCEQAAABAAABQABAJABAJAKusDQDAAEC/AHQArABApAGQA/AJA6AVQCLAxBvB0QCICMAmC2QAOBGAABLQAAATgBASQgHCOg8B5QgJAwgRAuQgTA2gfAyQgFAHgFAHQgGAJgHAIQgKAMgMAMQgQAPgPAPQgbAYgaAVQgpAhgpAcQgBAAAAAAIgBAAQgSABgTAAIlagDQgKAAgJAAQgiADgjAAIhZAAIjeAAIgPgBQgTAAgUABIiqABIiDgBQgpABgpABIiBABQgMAAgMAAQgrgBgrAAIiugBQmCgDl7gKQgmgBgkgFQgqgFgngKQgFgBgEgBIhcAAQgqAAgpgFQgHgHgHgGQgcgbgYgcQgPgSgOgSQgBgCgBgBQgSgZgQgZQgSgegPggQgRgmgMgnQgBgBAAgBQgBgDgBgDQgBgFgCgFQgXhTgBhdIAAgEQAAihBGiGQAIgQAJgOQAwhTBLhFQBDhABNgqIA3g7QAEgEAEgEQACgCACgCIAFgEQAFgFAFgFQACgCACgBQACgCACgBQAEgEAEgDICkhoQAGgDAGgCQADgCADgBIABAAQAYgKAZgIIDwgMIDWgLQBtABBsACQAuAAAuABQAQAAARAAQA7ABA8ABQAKAAALAAQBZABBYABICvAJQALgBALgBQATgCATgBQAAAAABAAQACAAADAAICagJQAFAAAGgBIBQgDQADgBACAAQABAAABAAQAggBAggBQAsgBAqAAAWZniQACABADABIAAABQAEAFADAFQAtA5AeBAQADADACADAXollQAEAEAEAFQA8CBgDCXQAAALAAAKQgKEPjMC8QhGBBhPAqQgSAKgSAIQg4Aag8APQgMAAgMABQgyABgyACQgeAGgfAEQgDABgCAAQgHABgHABQgBAAAAAAQgCAAgCAAIgMgBQgGAAgGgBAYIiKQABATAAAUQgCBRgSBIQgqCpiFCDQgCACgCACQgBABgCABQgBABgCACIikBzQgGADgFADQgEABgEACAYFigQACALABALATLoOQCkC2ACD6QABELi6C+QiJCNi0AmAIIrrIEHANQAfACAdAEQAZAAAZAAIAAAAQAUABATAAQBSACBKASAPQq5QAEAAAFABIAIABQArASAoAYAPQq5QAEAAAFABAPMq7QAGAAAGAAQAEACAFACAPMq7QACABACABIAAAAQA0ASAwAaAPEq6QABAAAAAAQAAAAABAAQAFAAAFABAi4rOQBAAABAABQGLAGGHAIQBfABBfACQACAAADAAQACAAACAAQALAAAMABQAGAAAGABAiyrOIBeAIQB6AOB9AFQBDAEBFADQBZADBcAAQB2AABygEQBkgEBhgGQAcgCAbgBAwFpOQAwADAsAHIJ+AzQB8AOB9AFQBIAEBMADQBXADBaAAQBzAABwgEQBigEBfgGQCSgHCPgRIAngDQBsgIBgAXAN9rYQAvALAsASQA0gEA0gEAPGq6QADAAA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");
	this.shape_12.setTransform(1108.3,100.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AOJMPIl0gdQB2gHB1gNIEGgVQB7gJBrgyQAxgaAugeIglABIlagDIgTAAQAbgCAbgFIgvABIAvgBQgbAFgbACQgiADgjAAIhZAAQAfgBAfgDIABAAIgBAAIgEAAIgMgBIAMABIAEAAQgfADgfABIBZAAQAjAAAigDIATAAIFaADIAlgBQguAegxAaQhrAyh7AJIkGAVQh1ANh2AHIi7gLQjIARi+AJQiYAIiWAAQhjAAhlgEIikgLIhogHIhggFIgvgDQh6gLhwgyQhQglhHg4IAUgBIBNgEICBgHIiBAHIhNAEIgUABQBHA4BQAlQBwAyB6ALIAvADIBgAFIBoAHICkALQBlAEBjAAQCWAACYgIQC+gJDIgRIC7ALIhvAHQiBAIiHAHQi/AHjIAAQihAAibgEQiSgFiKgHQiIgIiDgNQjngSisigQA6ATBDAFIAGAAIAXABIABAAIAAAAIADAAIADAAQgUgQgTgSQATASAUAQIgDAAIgDAAIAAAAIgBAAIgXgBIgGAAQhDgFg6gTQgZgXgXgaIgCgDIgEgEQBTAkBdALQhdgLhTgkIgKgLIAKALIAEAEIACADQAXAaAZAXQgUgGgTgIQgWgIgWgJQhjgthVhQQi3iogejoQgBgZAAgaIAAgCQAGheAchYQApiIBkh2QiMCtgBDnQADEHC/C7QBbBZBsAuQhsguhbhZQi/i7gDkHQABjnCMitIAagdQCHiMCogzQhMAqhCA+QjJC7gOEIIAAABQAAAbACAcQAQBjAmBZQASAlAUAkIAPAZIAGAKIAAAAIgBgDIAAAAIgVhUIgDgMQAvByBeBgQAtAuAxAjQAQAZASAZIACADIAdAkQhWgvhJhLQhGhHgrhRQArBRBGBHQBJBLBWAvQAYAcAcAbIAOANIgOgNQgcgbgYgcQBqA5B8ANIALADIAJACQAnAKAqAFQAkAFAmABQF7AKGBADIg5gCIibgGIFYADIAZAAIAMAAIAIAAIgIAAIgMAAIgZAAIhtgEQhbgChbgIIh2gHILCAMIAQAAIAvACIAxADIAyADQihACihAAIgPAAIgSAAIASAAIAPAAQChAAChgCIABAAIgBAAIgygDIgxgDIgvgCIALABIgNgBIg2gEIj7gNIn3AAIBYAFIkYgFIgDAAIDDAAIhjgFIiYAAIgEgBIgGAAIhKgLIBKALIAGAAIAEABIkFAAIEFAAIA0AFIADAAIgLAAIgZAAIAZAAIAOAAIABAAIADABIDLAPIAKAAIB2AGIAIABIjogFIgWAAIkUgHIgDAAIgbgCIgEAAIC2gJIkWgFIgCAAQg2gMgxgVQAlAGAnACIDBALIALACIgKgCIAKACIgLgCIjBgLQgngCglgGQgvgTgrgcQgqgNgogUIBXA5IAOAHIAMAHIBgAmIAEABQh8gNhqg5IgdgkIgCgDQBGApBOAWIANAHIgNgHIgNgHIANAHQhOgWhGgpQgSgZgQgZQAoAcAqAVQgqgVgogcQgSgegPggQASAVAVAVQAkAmAoAfQgogfgkgmQgVgVgSgVQgRgmgNgnIAAgCIgCgGIgDgKQApBGA8A+QA9BABGArQhGgrg9hAQg8g+gphGQgXhTgBhdIAAgEQAAihBGiGQhGCGAAChIAAAEQABBdAXBTQhXiVAAi5IAAgBQAAhnAahbQgaBbAABnIAAABQAAC5BXCVIADAKIACAGIAAACQANAnARAmQiXi1gCjyIAAgHIAAgEIAAgCIAAgBIAAgCIAAgCIAGhWIACgMQAVgsAcgpQAwhEBDg8QA5g0A/glIAKgMIgKAMIAAAAIgLAOIALgOQAygeA2gVIAhgKIAhgLQAYgHAZgFIAFgEIgFAEIAFgEIAEgEIALgKIADgDIADgDIAJgHICkhoIikBoIgJAHIgDADIgDADIgLAKIgEAEIgFAEQgZAFgYAHIghALIghAKQg2AVgyAeIAKgMIBNhQQBfhWBvgvIABAAIAUgIIANgEIh3AGQBSgYBbgCIAMgBIgLAEIgCAAIghAMIgUAFICegIQgZAIgYAKIiOACICOgCIgGADIiJgBICJABIgMAFIAMgFIBGAAQFpACFnAFIAIAAIBeAIQB6AOB9AFQBDAEBFADQBaADBcAAQB0AABygEQBlgEBhgGIA3gDIABAAIAAAAIABAAIgBAAIAAAAIgBAAIgMgBIgXgBIgEAAIgDAAIgCAAIi9gDQmIgImLgGIiAgBIjVgRIgGgBIAEABIo6AHQAYgKAYgIIDxgMIEVAWIkVgWIDWgLIDaADIjagDIh4gBICogDIioADIgDAAIinAEIgIAAIAHAAIAFABIBIAHIjxAMQAegKAfgGIBngEIhnAEIALgDIgMADQgeAGgeAKIAAAAQgYAIgYAKIgBAAQAYgKAZgIIieAIIAUgFIAhgMIACAAIALgEICGgDIASAAIgSAAIiGADIACAAIAvgKIAIgBIABAAIgBAAIAAAAIgBAAIARgCIgPACIA4gCIAMAAIAGAAIgKAAIgTAAIgeAAIAegCQAXgBAXACIANAAIgNAAQgXgCgXABIgeACIjIgBIgBAAIgCAAIgBAAIgfABIgFAAIAkgIQDLAADBABQgYACgYADIg1ABIA1gBIgCAAIACAAQAYgDAYgCIALAAIgJAAIgCAAIACAAIAJAAIAlgBIADAAIADAAIDbAAIDUgBIAbABIh/AGQCagCCagBIArADIA7ADIg7gDIgegDIB0AAQD4AAD3AFIBzABIgFABIhQADIgLABIiaAJIgGAAIiBgCICBACIgmADIhpgFIBpAFIgXACIiugJIBNACIAPAAIAOAAIgRAAIjrgMICSAKIixgCIgVAAIh3gCIghAAIhbgBID4AMIDOALIpbAIIJbgIIBAADQDFAGC6ADIC+ADQBDAIA+AVIgGABIAKABQA0ASAwAaQBAAoA4A4IgSgCIATACIAGAGIAYAZIgYgZIgGgGIAOACIAAAAIAOACIAqAJQAuAKArARIAIAIIAHAHIAGAGIAEAFQAcAfAYAgQhWhAhkgcIgkgjIAOACIgOgCIAkAjIgUgGIgDAAIgDgBIgBAAQhEgQhKAAIAAAAIAAAAQgaAAgaACIgBAAIgCAAIgnADQiPARiSAHQhfAGhjAEQhwAEhyAAQhaAAhYgDIgEAAQhKgDhFgEQh9gFh8gOIp+gzQgsgHgwgDQAogFAqgBIApABIBFABIAugBQApgCAogEIAnAAIHMAiIAqAAQChgNCZgIQCPgICOAAQBXAABbAFICRAJIBMAGICUAIICIAEIABAAIACAAIAIAAIA2AFIg2gFIgIAAIgCAAIgBAAIiIgEIiUgIIhMgGIiRgJQhbgFhXAAQiOAAiPAIQiZAIihANIgqAAInMgiIgnAAQgoAEgpACIguABIhFgBIgpgBQgqABgoAFQAwADAsAHIJ+AzQB8AOB9AFQBFAEBKADIAEAAQBYADBaAAQByAABwgEQBjgEBfgGQCSgHCPgRIAngDIACAAIABAAQAagCAaAAIAAAAIAAAAQBKAABEAQIABAAIADABIADAAQCkC2ABD6IABAEQAAEIi4C9QiKCNi0AmQC0gmCKiNQC4i9AAkIIgBgEQgBj6iki2IAUAGQBOBRAwBdQBHCNAEChIAAAWQABBSgPBLQgGAZgJAYQg2B9hvBnQgrAoguAgIgIADIjgA1IgqACIAAAAIlFAAIqNgKIgIgBIAFABIvvgQQiJg5huh6Qgvg0gjg5QgshJgahJIgTg2QgUg/gKhEIgBgnQADguAJgqQgJAqgDAuIABAnQAKBEAUA/IATA2QAaBJAsBJQAjA5AvA0QBuB6CJA5Ig6gBQhngBhageQBaAeBnABIA6ABIBmAgIAGACIABAAID2AOIRHgDIEXATIi4ALIhbgCIizgCICzACIBbACIgaABIgMABIhgABIARABIAcAAIiNAEIiqgDIhaAAIBaAAICqADIhSACIBSgCICNgEIgcAAIgRgBIBggBIgEAAIAHAAIA4gBIAXgBIAEAAIAEAAIDXgEIhCgGIgRgBIAFAAQCugICsgTIA9gFIB1gJQg6AahAAOIAXgBIAHAAQAdgBAdgDQBpgLBcgqIABgBIgJACIg/AJIgQACIg8AEIAlgSQBQgqBFhBQDLi8ALkPIAAgVIAAgPQAAiOg5h7IAGAGIAOATIAJALIACADQAYAiAQAmQAcA+AJBHIAHAhQAMA1AFA4QACAcAAAcQAAA7gKA4QAKg4AAg7QAAgcgCgcQgFg4gMg1IgHghQgJhHgcg+QgQgmgYgiIgCgDIgJgLIgOgTIgGgGIgJgJIAJAJQA5B7AACOIAAAPIAAAVQgLEPjLC8QhFBBhQAqIglASIgQACQBpgvBYhWQB7h5AtiaQAZhVABheIAAgRIgCg3IgCgUQgGiEg2hwIAbAbIgbgbQgag3glgxIAMAGIAEACIAJAFIgIgEIAIAEIgJgFQgRgVgTgUQgiglgmgeIgQgOQhVhIhkglIBGgIIAggCIAsgCQCLAxBvB0QCICMAmC2Qgmi2iIiMQhvh0iLgxIADAAIAZAAIAPAAIAAAAIAAAAIgPAAIgZAAIgDAAQg6gVg/gJQgpgGgrgBQi/gHjAgEIgCAAIhzgBQj3gFj4AAIh0AAIghgBIAhABIgNAAIgUgBIg2gCIA2ACIAUABQiaABiaACIB/gGIBrAAIgTgBICUAAQGlgBGfAIIhWABIhAACIBAgCIBWgBIBFAAIB3AAIFDAWQEIAQC7DMQCNCaAjDIQAKBAABBDIAAAeQgBAigBAiQgIBIgPA3QgIAcgLAaQgJAVgKAUQgwBKhHBBIgJAIIgEADIgGAGIiCBZIgJAFIAJgFIgJAFIAAAAIgJAEIkYBHIEYhHIAJgEIAAAAIgJAEIAJgEQgfAmgmAjQgnAjgqAdQg/ArhFAbQhNAfhZAJQgyAGgyABIhEABIhPAFgAhnJZIBVABIAYAAICCgBIiCABIgYAAIhVgBIivgBgACLJZIDSgBIiDgBICDABIjSABIgBAAIgCAAIACAAIABAAgAFdJYICqgBgAI9JXIDeAAgAIHJXIA2AAIgPgBIEKgFIARABIgMgBIAHAAIgHAAIAMABIgRgBIADAAIACAAIgCAAIgDAAIgDAAIAWAAIgHAAIAKAAIAZAAIgNACIBfABIhfgBIANgCIAYAAQAgAAAfgCIABgBIABAAIgBAAIhSACQAfgEAegGIBlgDQgnAIgoADQAogDAngIIhlADQA3gNAzgVQgzAVg3ANIjfAFIDfgFQgeAGgfAEIgXABIgLAAIgWAAIADAAIkKAFIhHgCIiAgBIAOAAIAhgCIghACIgOAAICAABIBHACIgnABIAAAAgAVMJWIAAAAQAqgcApghQAbgVAZgYIAggeIAWgYIANgRIAMgIQArgdAqgkIArglIAngmIAWgYIAVgfIADgFIADgEIgDAEIADgEIgDAEIgDAFIgVAfIgWAYIgnAmIgrAlQgqAkgrAdIgMAIIAKgOQAfgyATg2QB9isAAjgQAAgggDgfQAZA5ANA+QAPBDAABJIAAAVQgBAsgGApQAGgpABgsIAAgVQAAhJgPhDQgNg+gZg5IAAgBIgBgCQgSgogXglQAOBGAABLIgBAlQgHCOg8B5QA8h5AHiOIABglQAAhLgOhGQAXAlASAoIABACIAAABQADAfAAAgQAADgh9CsQARguAJgwQgtBZhKBOQhbBehtAyQBtgyBbheQBKhOAthZQgJAwgRAuQgdApglAmQhEBGhOAuQgoAOgpAIQApgIAogOIgBAAIAFgBIBAgbQArgXApgaIgNARIgWAYIggAeQgZAYgbAVQgpAhgqAcIAAAAIgBAAgAhaJUIAwAAIgwAAIgLgBIALABIgEAAIgHgBIAHABIgbgBIAbABIAEAAIAAAAgAM1JRIgfgCQgmgBglgDQAlADAmABIAfACIlBgCIFBACgAPvJNIABAAIgBAAIAAAAIAAAAgAT+IsQhbAdhlACIhOACIBOgCQBlgCBbgdQBDgWA8gkQgnAOgqAJQAqgJAngOQg8AkhDAWgAPwJNQAbgFAbgGQgbAGgbAFgA0SI0IBcAAIhcAAQgqAAgpgFQApAFAqAAgAqtH1ICFAAIHHAeIACAAIgCAAInHgeIiFAAIgxAAIgEAAIAAAAIgBAAQh3gBhlgdIAAAAIgFgCIgFgBIgCgBQiFgohohdIgagZIgjgkQiCi1AAjqIAAAAQAOjVCHijQiHCjgODVIAAAAQAADqCCC1IAjAkIAaAZQBoBdCFAoIACABIAFABIAFACIAAAAQBlAdB3ABIABAAIAAAAIAEAAIAxAAgAbfE+QglBwhNBdQBNhdAlhwQASg0AJg5IAEgIIgEAIIAAAAQgJA5gSA0gA0xIDIgBAAgA63DZIAOAoQAaBKAqBJIAMATIA6BOIg6hOIgMgTQgqhJgahKIgOgoIgBgDIgCgEIACAEIABADIgJgRIAJARgA5hFFIAQARQBBBCBKAsQhKgshBhCIgQgRQgzg5gmg6IACAEIgCgEQAmA6AzA5gAb+DJIBJkfIgBgZIAAgJIgBgMIgBgKQgFg/gPg6IgHghQgIg+gYg5QgRgmgYgiQghgwgvgoQgmgjgqgaIkIhWIgTgBQhYgihjgJIgsgCIj6gGID6AGIAsACQBjAJBYAiIgPAAIAPAAIATABIgTgBQCBAzBqBsQCoCtAUDrQgUjrioitQhqhsiBgzIATABIEIBWQAqAaAmAjQAvAoAhAwQAYAiARAmQAYA5AIA+IAHAhQAPA6AFA/IABAKIABAMIAAAJIABAZgA3+jmIARgeQAwhTBKhFQBEhABNgqIAUgKQBGgjBNgRIAKgCQAWgFAWgDIAAAAIAAAAIgqgCIgIAAIgbgBIgBAAIgBAAIgIAAIgEAAIgBAAIgEAAQggACgeAGQAegGAggCIAEAAIABAAIAEAAIAIAAIABAAIABAAIAbABIAIAAIAqACQgWADgWAFIgKACQhNARhGAjIgUAKIA2g7Ig2A7QhNAqhEBAQhKBFgwBTIgRAeIABgDIAAgCIAEgQIBwjsIhwDsIgEAQIAAACIgBADIAAAAgAYgmDIALAJIASASQAfAfAaAgIABACIAXAeIABACIATAbIgTgbIgBgCIgXgeIgBgCQgagggfgfIgSgSIgLgJIh6hYgAWlnVQAtA5AeBAQgehAgtg5IgHgKIAHAKgAWenfIgBgBIABABIgFgDIAFADgAyspBIAJgIIAAAAIgJAIIAAAAgAtRr9IAhgGIAgADIAUACIgUgCIgggDIgFAAIgDAAIgIgBIAGABIAFAAIAFAAgAkesAIARABIAVABIgVgBIgRgBIhugEIAfgCIACAAIgCAAIgfACIgBAAIhFADIBFgDIABAAIBuAEgApNsCIjhgBIADgBIANgCIADAAICagDIAhAAIACAAIAeAAICeAEIAVABIgVgBIA1gBIg1ABIiegEIgeAAICDgDIiDADIgCAAIiKgCICKACIghAAIiaADQAYgDAZgCQgZACgYADIgBAAIAAAAIAAAAIABAAIgDAAIgNACIgDABIgKAAIAKAAIgCAAIACAAIDhABgAs6sDIg9gBIA9ABgAtGsEIAGAAIgGAAIgNgBIANABgAtGsEIgLgBIgBAAIgBAAIgeABIAegBIABAAIABAAIALABgAIVLygAIHJXIAngBIAPABgAMbJXgAIuJWgAO5JUIAAAAgAFnJTIAAAAgAnqJQIgLgBIh2gGIgKAAIjLgPIgDgBIEYAFIhYgFIH3AAID7ANIA2AEIgOAAIrCgMIB2AHQBbAIBbACIBtAEgANOJRIAIAAIAXgBIgGABIgZAAgANOJRIAAAAgAM1JRIAAAAgA0+JRIAAAAgANtJQIAAAAgAnqJQgAJ4JEgAtDI5gAtEI5IgDAAIABAAIADAAgAtSI5IALAAIADAAgAtGI5IgEAAIg0gFICYAAIBjAFgAtHI5IgDAAIAEAAgA3fI4IAAAAgAt+I0gAzBIxIAAAAgAvSIoIAAAAgAvcImgAvdImIgGgCIAHACgAxJIEgA4VIAIAAAAgAV+HyIAEgBIgFABIABAAgAYQF+QAlgmAdgpQgTA2gfAyIgKAOQgpAagrAXIhAAbIgEABQBOguBEhGgA3GHEIAAAAgA3oGSIAAAAgA3oGSQgxgjgtguQhehggvhyIgBgJIgFgbIgBglIAAAAQAKh/A2huIgCAMIgGBWIAAACIAAACIAAABIAAACIAAAEIAAAHQACDyCXC1QAPAgASAeIAAAAgA4JFUIAAAAgA4sD1IAAAAgAb3DVIAAAAgA66DSgA66DSIgBgDIABADgAb6DRIAAAAgAb6DRgAb6DRIAEgIIgEAIgA7PCvQgUgkgSglQgmhZgQhjQgCgcAAgbIAAgBQAOkIDJi7QBCg+BMgqQAcgJAdgGQhfAuhQBPQi/C6gEEIIABAYIgBALIAAAJIAAAEIAAAPQADCUA+B+IgPgZgA7TBvIAAAAgA6ajHIAAAAIgCAMIACgMgA6YjRIgCAKIAAAAIACgKgA6ajHIAAAAgA6YjRIB4kcIAEgEIADgEIAJgLQAVgbAZgYQBYhbBqgzQAmgKAogFQiIAyhtByQh1B5gtCXQgcApgVAsIACgKgA3+jmIAAAAgAXwlcIAAAAIAGAGIgGgGgAXnllIAJAJIAAAAIgJgJgAXMmAgAWenfIAAAAgA1+n1IAAAAIgLAOIALgOgA1+n1gAyjpJIAAAAIgJAIIAJgIgARjq6IgjgJIAogEQBkAlBVBIIAQAOQhdhLhxgjgAwFpOIAAAAgAErqsQhFgDhDgEQh9gFh6gOIhegIIgGAAICAABQGLAGGIAIIC9ADIACAAIADAAIAEAAIAXABIAMABIg3ADQhhAGhlAEQhyAEh0AAQhcAAhagDgAPGq6IAGgBQg+gVhDgIIAyAAIgyAAIi+gDQi6gDjFgGIhAgDIE5gEIABAAIEHANQAfACAdAEQgdgEgfgCIkHgNIDkADQBMAABFAQIABAAIAmABQBSACBKASIhoAIQgsgSgugLQAuALAsASIgMAAIAEACIgKgBgAPEq6IAAAAgAPMq7IAAAAgARorHIAAAAgA19rQQBpguB4gGIAFAAIAfgBIABAAIACAAIABAAIDIABIgRACIhUACIgjACQhfAHhUAeIg6ADQgkACgjAFIgCAAIABAAIgCABIABgBIgJACIgYADIAOgGgA19rQIDhg0gAi4rOIAAAAgA1prPIAAAAgA1qrPIACAAIgBAAIgBAAgA0hrWIA6gDIgMAFIgnAAQgoAAgmAFQAjgFAkgCgAUlrTIAAAAgAUlrTIAAAAgAvKrYIAAAAgAznrZIAAAAgAw0r+IAjgCIBUgCIgHABIgvAKIgCAAIgMABQhbAChSAYIg5ADQBUgeBfgHgAAAryIj4gMIBbABIAhAAIB3ACIAVAAICxACICuAJIAXgCICBAHIk5AEIjOgLgAuZrqgAu9sCIABAAIAAAAIgIABIAHgBgAKssDIAAAAgAmMsEIAAAAgAussEIAAAAgAsbsGIAAAAgAgMsGgAg3sJIANAAIAeADgAgqsJgApesJIAAAAgAjssMIAPgBIgPABIgbgBIAqAAIBJAAIATABgAjssMg");
	this.shape_13.setTransform(1108.3,100.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(161,161,161,0.631)").ss(0.1,0,1).p("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FQABAAAAABIABAAQATAQARARQAwBygECEQAAAKgBAKQgLD7jACvQhCA8hKAnQgIAEgIAEIgTACIAAAAIgLABIh+AOQgHABgGABQgsARgvALQgJAAgJABIhPACQgDAAgDAAIgmgFQgCAAgBAAIgbgCQgDAAgCAAIi5ANQgCAAgDABQgEAAgCAAIgFAAQgXACgXABQgDAAgDABQgSAAgTABAQyn1QAKAAAKABQAzAFAxALQABABACAAIAmAKQAGACAGACIABABQAFABAGACAu1oUQAVgDAWgCQAKgCALAAQAJgBAJAAQAGAAAGAAQAEAAAEAAQATAAAUAAQAhACAgAAQAWAAAVgCQAmgBAmgGIAkAAIGoApIAnAAQCTgPCLgJQCCgKCBAAQBOAABSAFQA/AFBFAGQAjAEAkAEQBEAEBHAEQA9ACBDADQAMABAMABQAMAOAMAPQB5CcABDOQACD3irCwQh5B9idAmQiOAAiOAAInYgJIgCAAIgFAAIm/gmIh9AAQgXAAgXAAQh5AAhlgeQh8gkhhhUQgNgKgLgMQgRgQgQgSQh4iqAAjbIAAAAQAOiwBniKQBBggBHgOQABAAABgBQAMgCAMgDgAOdp1QA/AnA4A5QAQAPAOARAMwrrQBmACBlAEQAUABAUABQBnAKBaAoAOdp1QBbAxBOBQANmqOQAcALAbAOANtqPQAYAMAYAOAUMnEQAHADAGADQAdArAUAwQABAAAAABAS6qwQB0AwBeBjQCGCMAfC5QAYAjATAnIAAAAQACADACAEATTnZQAGACAHADQAiAmAbApQBHBsARCAQAGApAAArQAAAGAAAHQgCBXgYBPQgqCOhyBwQhMBKhYAqIgLABAA0rvID3AVIABAAIAFABQBOABBPACQAgABAhABQCTADCSACQB8ADBoAvAEsraIAEABQABAAAAAAIAEAAAA0rvQALAAALAAQDnAADlAFQBSABBRADACjrJQACAAADABIA+ADQCzAHCpAEQBGABBGACQBHAJBBAZACerJQADAAADAAID9gEID4AQQAbACAaAEQAaAAAZABQAzAMAvAWAh5qpIBRAIQBxAQB0AFQA+AGBBADQBUAEBXAAQBvAABqgFQBVgEBRgGAC4rcIDpAPIDPAEQBMABBFASAK6rmQAogDAmgBQAUgBAUAAAh5qpQAWAAAWAAQFtAHF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");
	this.shape_14.setTransform(1131.2,138.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("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");
	this.shape_15.setTransform(1131.2,138.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(148,148,148,0.58)").ss(0.1,0,1).p("ASiqPQDDgKCOB2QAoAfAcAnQATAbANAgQASAvAEA1QADAMADAOQAPAxAHA1QAUCshJCEQgIAOgKAOQgCABgBACIgKAKQgDADgDADIAAABQAAACAAACQgEBagdBPQgVA7giA0QgsBGhDA6QgjAfglAYQg4Alg9AWQhEAahOAGQgsAEgsABQgiAAgaACQgjACgiAEIgnAAIlGgnIhzgOIgfAAQinAXicALQh7AMh6AAQhNAAhUgGQhAgHhHgIQgsgFgugFQgogDgrgDQgVgBgUgDQhpgKhkgtQhkgthRhNQgTgSgRgSQgLABgKAAQghAEgfACQgYACgXgBQgUgCgSgCQg0gIgrgTQgTgGgSgHQhXgnhMhDQigiOggjDQgBgXAAgXIAAgBQAIhRAahMQAnh+BjhwQABgBABgCIACgCQACgCACgCQCGiNCqgqQABgBACgBQAFgDAGgEIBPglQAEgCAEgBQAagKAbgIQABAAABAAQAAAAABgBQAJgCAKgCQArgKAtgEQAegDAgAAQD+AADqAEQABABABgBQACABADAAQAJAAAJAAIAAAAQAEAAAEgBIAIgBQAcgCAegBQAEAAAEAAQACAAACAAIBkAAIA6gCIAXABQCBgBCBABQGOgCGFANQACAAADAAQBCgCA8AAIBgAAIESAdQDfAXCeC0QB4CJAdCvQAJA5ABA6QAAANAAANQAAAfgBAcQgEA+gKAvQgGAXgIAWQgIATgJARQgsA/g/A3QhYBNhnAnQhtAqh+AAIg0AAQgcAWgbATQgoAbgqAZQhbAvhoAMIjeAcQhdAQheAKQg1AGg2AEQhuALh4AJQinAJixAAQiQAAiHgFQiBgGh4gLQh1gKhvgRQjegbidi1QgBgCgCgCQgWgagTgbQiBglhmhjQijiegFjfIAAAAQAAgDAAgEQAAgBAAgCQAAgEAAgFQAAgCAAgBQAAgDAAgCQABgHAAgHQABgFAAgEQAAgCABgDQAAgDAAgDQAAgCABgDQAAgBAAgCQAAgCABgDQAAgCAAgDIB1kKQACgDADgDQADgEAEgEIANgPQAEgEAFgFQADgDADgEQB5h7CfggQAAAAABAAQAFgDAFgEAW/jDIAAAAQAEAkAAAmQAAAQgBAQQgHCQhGB2QgiA5gwAzQhFBKhSArIAAAAQgGABgGABIi7AXIgYADIgEABQgGABgGAAQgrAIgsAGIhMAJQgFABgGAAQgJABgIABIg0AFQgKABgKABQgGAAgGABQgEAAgDAAQhPAIhUAHIgUACQgDAAgEAAQgFABgFAAIgZACQgCAAgDAAQgmACgmACIgxgCQg0AAg3gBQhOABhOAAQgMAAgLAAQgGAAgIAAIi6gBQgHAAgGAAAW7jIQACADACACQAZAhAUAjIAAAAQgBACABACIh8FuQgFAFgEAFIAAABQgLArgUApIAAAAQgGADgGADIhVAiIgHACQgEABgEABIAAABQgFABgEABIhDANAW7jIQACADACACQAZAhAUAjQACAEACAEIAuB3QADALADAMQANBDgCBHQgBABAAABQgRAQgSAQQgTARgTAPQgmAfglAbQgnAbgqAZQgBAAAAABQgGADgGADATal8ICqB4QAcAbAXAcIAEAFAXsh/QACAEACAEAY1CbQgDAEgDADQgBAAAAABAB9qpIA6AEQADABADAAQCjAHCXAFQAHAAAIAAQAmABAlABQAAAAABAAQAZAAAaABIAAAAQAyABAyABQBZADBNAYQAOAEAOAGIAAAAQANgCAOgBQAxAbAsAmIAMALQADACACACQADADACACIAQAQQACACACACQA0A3AjA+IAAAAQANAFANAGQAeAwAUA0IAAAAQAkBjgFBwQAAAJgBAKQgNDni0ChQg+A3hFAkQgDABgCABQgwAZg0APQgOAAgOABQg5ADg6ACQgCgBgCAAIgMgCIAAAAQgHACgHACQgVABgVAAQhVAEhVACQgfABgfABAFCquIDhASQAXACAXAEAGbq4QAWABAXAAQAWABAWAAQADAAADAAICkgRQAQgBAQgBQBxAEBxAGQAlABAjAGQBMAMBEAgIAAAAQAVgCAVgBQBaAtBLBOQCiCqADDrAH0q2IAAAAQADAAADAAAHxq1QABAAACgBAHxq1QABAAACgBQBwADBwADQCFADBtA8QBMgJBKgOIAbgDQAAAAABgBAGbq4IBMAEIAKgBAg3qEIA7AIQBoASBrAHQA6AGA9AEQBOAEBSAAQBoAABkgFQAjgCAkgDQAAAAABAAIAAAAQADACAEACQBbAwBNBRQAPAQAOAQQAMAPAMAPQAgAsAZAvQA/B8AFCKQAAAKABAJQABBHgKA/QgFAWgHAVQgyBqhiBXQgZAWgZATQgxAUg2AKQgmAHgpACQgQABgQAAQgTAAgTAAIgBAAQhAAShHABIh4ADIl1AIIrSAAIgOAAIkkAAIg6AAQgBgBgCAAQgkgNgigSIgRgJQgCgBgDgCIAAAAQg1gLgwgWIAAAAQhogthVhaQgHgIgHgHQgdgjgYgiQgJgegGgfQgBgMAAgNQAAgEAAgEIAAAAQAOh4A+hnAtjnYQAZADAYAGIIdBEQBoATBqAGQA/AGBCAEQBNAEBQAAQBmAABigFQBWgFBSgJQB9gJB5gWIAhgEQA0gHAxADQAPABAQABICwA4QAFADAGADIAAAAQATALASANQAEAEAFADIAJAHQACACABABQABAAAAAAIAMAKQAEAEAEADQAFAFAFAEIAmAtQAUAbANAgQAVAzAEA8QADANADANQANAsAGAxQAHBAgFA6QgEAqgKAmQgDAEgDAEIgSAUQgBACgCABQgCADgDADQg0A2g7AmQgFACgEABAtjnYQA5gNA/ABQASAAATABQAfABAeAAQAVAAATgBQAjgCAjgGIAiAAIGFAuIAiAAQCHgRB9gLQB0gLBzAAQBFAABLAGQA4AGBAAHQAfAEAiAEQA+AFBDAFQAnABApACQAKAPAKAPQBQCAABChQADDjicCiQhqBuiIAlAFCquICyAEQBMACBFATABorAIEFAHQAXAAAXABACPrVIAGABIEGAcACQrVIAFABACJrVIAHAAQCzABCxAFQBlACBlAEQAwgEAwgDQBNADBMADQATABASACQBrALBbAtACJrVIAGAAQABABAAgBAB0qqQAFABAEAAABuqqQAEAAADAAIDNgEABuqqQADAAADAAIABAAQAEABAEAAABVrAIACAAQAIAAAJAAAj2rHQBsAIBmAIQAIABAIABQAUACAWABQAIABAJABQAOABAPABIAqAEABErBQAJABAIAAQAKAAAJAAABErBQAJABAKAAIDrASAibrTQBygCBzAAQAiAAAjAAAjuraIFNAAIAqAFAreqPQE/ADE9AHQAWABAVAAQE6AHE2AKQBQACBQACQACAAADAAIAAAAQAEAAAEAAQAOAHAOAJAibrTIDwATAQvolQACACACABQAAABABAAQAoAfAjAnQAUAWASAXQANASAMATIAAABQAOAFAOAHAQzoiQADADADADAM8pkQCdAgB3B7QAHAIAHAIQADADACADQACADADACQABACABABQABABABABQABACACABQAAABABABQAAABABAAIAAAAQAAABABAAQAJAMAJAMQAAAAABABQAPAVANAWQASALATANQAEAEAFADARpmlQAEABAEABQAZAHAaAJQANAFANAFQAOAGAOAHARpmlQAEABAEABQAaAHAZAJQAUAlAOAoIAAAAQAaBNADBWQAAABAAABQAAAOAAAPQgBBFgQA+QglCOhyBvQhRBPhhAoQhIA0hSAdQAAAAAAABQgJAAgIABAPOm6QAGAAAHABQBFACBCAQIAHACASWlkQAFADAGADIBACvQABAGABAGQABAHABAGIAEBOQAAAEAAAEQgCBQgWBIQgnCDhqBnQhEBChPAmQgyAZg2ANQgdAHgeAEIgxgFQgEgBgDAAQgCgBgCAAATokrQAEAEAEADQAFAFAFAEAR4qMQBdAtBOBTQCGCNAWC8AM8pkQAUgCAVgCQAjgDAjgDAMBpfQAEACAEACQA6AkAzA0QAiAiAbAlQANABAOABALepvQASAHARAJAKFqVQAzAOAuAYQAsACAqAJAMCpfQAdgDAdgCAThivQABAHABAHQABAFABAGAOrpuQBJAcA/AwAJSqWQBJALBDAcA0IqQIEFhAQABAAABAAQABAAABAAQBjABBhAAQAdABAdAAQAUgBAVgBQARgCATgBQAMAAANABQAHABAGAAQADAAACAAIAiAEQAEAAAEABQAAAAAAAAQATAAAUAAQAcABAcAAIABAAQACAAABAAQBBgCBCgCQABAAAAAAQA3ADA2AEQAKAAAJABQAJAAAIAAIErAGAw0qNQADgBADgCQACgBADgBICdgDQAfgQAhgMQABAAACgBIABAAQANgEAPgDQAIgDAJgEQAFgBAFgCIAngKQADAAADgBQACAAABgBIAJgBQAfgBAegBQBAgCBAgCAw0qNQACgBADgCIABAAQAYgBAYAAQA1AAA0AAIAFgCQACgBACgBIAAAAQAfgQAhgMQABAAACgBAwvqQQADgBADgBQAXgKAYgHQBHgWBPgDQAkgCAlgCQAZAAAZgBQBQgEBRgDQABAAABgBAxGqdIBMgGICugOIAAAAIDzgTIANgDQACgBACAAQABgBABAAIAAAAQABAAABAAQAGABAGABIAAAAQAPADAOADQACAAABABID0AeIAAAAIAEABIAAAAI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");
	this.shape_16.setTransform(1154.1,176.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("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");
	this.shape_17.setTransform(1162.7,176.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(134,134,134,0.525)").ss(0.1,0,1).p("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QBBACBBACQDwAHDtAJQA+ACA/ACQABAAACAAAjtqEIE1gIAJlpJQAHADAHAEQAPAJANAKQAmAbAjAjQAyAzAiA7QASABATABQALAQALARICsAjQAIAEAJAEIAAAAQAgBBAMBIQAAAAAAABQAAALAAAMQgBA+gPA5QgiCChpBlQhPBMhfAkQhEA0hNAdQgYAJgZAHQgFABgGAAIgmAFQgFAAgEABQgBAAgBAAQhDAChCACQgJAAgJABQgugBgugBQiUgDiOgGIhAgCIgKgBIgKAAImYgNIgBAAQgFgBgGgBIgggGQgUgDgVgEIgFgBQgCAAgCAAQhkgQhWgzQhWgzhHhWQgkgrgbgwQghg/gWg5QgIgWgKgWQgRgygNg1QAAgCAAgDIAAAAQAAgNAAgNIAAgBQANhdAthRQAzhfBehOQACgBACgBQABgBABgBQACgBABgCIBFgwQAFgDAFgDIABAAQAQAAARAAQBWABBVACQAOgJAPgIIBwgtQACAAACgBQACgBACAAIAPgEIADgBQACAAADgBQAogBAogCAJopJQAJAAAJABQA+ACA5APQB8AjBgBlQABABABABQABABABABQABABABABQAAABABABQABAAABABQAXAbAUAcIAfAyQACAEACAEIAAAAIAAAAQAOAHAOAJQAPA5ABBAQABAGABAFIAFBLQAAACAAACQAAABAAACQAAADgBAEQgBBJgVBCQgkB3hhBeQhIBFhVAkQg9AJg9AHAHTp1QBNAMBFAgANvpEQAbASAaAXQAAAAABABQADACADADQAAABABAAIADAEQADACAEADQADAEADADIAHAHQACACACACQABABABABQA/BDAiBPQAFACAGABIALADQAGACAGACAOvoQQADACADADQADADAEAEAO1oLQAAAAABAAQAoAfAjAoQATAUAQAWQAXAfARAgQAVAqAOAsANapCQAwAWArAhAQfloQAFACAGABQAFACAGABAQTk9QAIAEAJAEQAgBBAMBJQABAFABAFAQgk9QACAEACAEAgKqmQDFAGDFAHQB6AEB5ADQCNAFBvBJALHqrQArgFApgDA0KpkQABgBAAAAQAEAAADgBQAWgDAXgCQADgBACgCIAAAAQAEAAAEgBIDcgVIAAAAQAFgCAEgBICJgkQAHAAAHgBQAOgCANAAQAIAAAHgBQAGAAAGAAQAmgCAmgCQAlAAAlABQAyABAzABIAXgDQABAAABAAIAJACQAEAAAFABQADABACAAIABAAQAIAAAIgBQABABABgBQAQAAAQgBQABAAAAAAQAPgDAPgDA0KpkQABgBAAAAQAEgDAFgDA0KpkQAEgBAEgBQAZgFAZgDQAHgEAIgFID4g+QABgBABABQABgBACABQBaAABZABQAjAAAkABQA3gDA4gCQAKgBAKAAQADAAADAAQANABAPACQARABAQACIBAgGQAVABAVABA3FihQAAgHAAgIIgBgdQAGjLCViQQADgCADgDIBGg3QAFgEAFgDIABAAQACgBACgCQAIgEAHgFA2aBPQgOgWgMgVQgRgdgPgdQgghGgShMQgBgXAAgWIAAgBQAVjLCkiQQAhgcAjgXA45m0QADgDADgEA5AmsQADgEAEgEA5AmsQAEgEAEgFQCEiLCqgkAt+qRIBhgOQADAAADgBQA3gCA2gDIAAAAQAEgBADgBIAHgDQABAAACgBQAMgEANgDQASgEATgCQANAAANgBQAkgBAlgBQA1gCA1gBAqxqiIACgBQADgBACgBQAEgBADgBAsgp2QApgXAtgPQAMgEANgCIAAAAIA6gGIBcgIQAVAAAVAAQADABADAAAqqqlQACAAACAAQAYgBAXgCQBGgEBGgDAqvqjQADgBACgBAn5qxQAEABAEAAQABAAAAAAQALAAALAAAnTqqQADgBACAAAnWqpQACAAABgBIABAAQAMADAMADIDNAgAm8qwQACAAACgBQAPgDAPgDAnYqwQAMABANAAQBnACBmACAnqqvQAMACALADAuZqJQAHgCAGgCQAHgCAHgCAuZqJQAGgCAGgCQAHgCAIgCAuNqNIABAAIDbgVAvZpwQACgBACgBQADgBADgBIA2gVAvZpwQACgBABgBQAEgBADgBAvWpyIABAAIC1gEIDagGIFZgIAwNp0IAUgKQABAAACgBIAFgCQADgCACgBIBfgJAvxqBQADgCACgBQAFgCAEgBAvcpvQAMAAANAAQBKAABJABQAEgCAEgCIAIgEAvcpvIADgBAwZmEQALgEALgFQANgCAMgDQAMgFALgEQAjgMAsgCQASAAAVADQAWACAWADQAOACANADAwkpnQABgBACgBIAGgEQAEgBADgCQADgCAEgCAwbptQADgBAEgCQADgCAEgCAwUpwIAAAAIA+gCAzUprQAJAAAIgBQADAAACAAICqgEA03ieQAHjPCQiXQA5g8BDgnQAjgGAlgCA0CjhQAeghAmgfQBMg/BZgkAxTi7QAmg3A0gvQA/g5BKgiQAagMAcgJQADgGAEgGIACgEQAwhOBNhCQAnghAqgZA0CjhQAYifByh5QBHhMBVgqAsvpuQADgCAEgCAs6poQAFgDAGgDAtCmDQAEgHAEgHQAEgGADgGA3FihQAPi6CMiGQByhsCUgaAzfpkQAFgEAGgDAw/EjIg0gxQgCgDgDgCQgXgagUgbQhmiKAAizIAAgCQAAguAHgsAyQEFQgJgIgIgJQiVidgBjaIAAgFQAAgLAAgLIAAAAQAXgjAeggAyCETQgFgCgGgDQhdgnhMhPQgyg0ghg6QgzhcgJhvAw4FMIg7gsQgHgGgIgHQgHgHgHgHAw3EpIAAAAQgEgDgEgDAw3EpQgDgDgFgDAw3EpQgmgIglgOAsQE5IjLgGQgwgBgsgJAt9GEIgGAAIgwAFIAAAAQgUgGgTgHQAAAAgBAAQgsgSgpgZQgmgHgjgMQh6gqhfhoQgHgHgGgHQgUgXgRgYQgDgMgDgLQgBgPAAgPIAAgBQABgIABgHQAUhsA+hcAt9GEQgMgCgLgEQgEgBgEgBIhGgdQgEgCgFgDQgogVgkgcAviFfQgEgCgFgDIAAAAIgagDQgVgCgWgEIAAAAQgEgCgEgDAuwGKQgBAAgCgBQgTgGgTgHQgBAAgBAAQgsgSgpgZQgEgCgEgDAuwGKQgCAAgBgBIhtAKQgSADgRACQgtAEgrAEQgeAEgcADQgSABgRAAQgTgbgRgbQgFgJgFgJQghg+gVg7QgHgVgJgUIgQgzQgBgDgBgEQgBgGgCgGQgBgEgCgFQgLgQgLgPIAAgBQgCgFgCgFIgnihQgBgPAAgPIAAgMQAAgNABgOAAEG0QmigBmTgUQhBgDg6gRIgEgBAxQGGQgDgFgEgFIhbAAQg3AAgzgKQiOgdhthpQiViQgFjKIAAgBIAAAAQAAgKAAgLQAAgCAAgDQAAgCABgCQAAgCAAgBQAAgEAAgEIBwkUAn4GMQgGgBgGgBAokGEIhAAAIhTgIIk0giQgngVglgcAn5GMIg7gCIiigGIinAAAkBGpQiggDidgHQhsgFhrgHQg2gCgygNA2aBQQgCgGgCgFA1+CEIgYguQgCgDgCgDA18CLQgBgEgBgDA2WBWQgCgDgCgEALXGYQgDAAgDgBALYGYQgBAAAAAAQAAAAgBAAQg3ADg3ACQgNABgOABQgNAAgMABQgVABgUABQggADggADQgDAAgDAAIgUACQhCAEhEADQgdABgeABIg8ABQgiABgjAAIhrgBQhOgChLgDQgdgCgdgCQgNAAgOAAQgMgBgLgBALZGYQgBAAgBAAAK9GnQgIABgIAAQgzAJg2AAIiaAAIgfAAQhNAChOAAALnGbQgcAIgcAFQgHAAgHABAKnGRIgEAAIgtgGIjWgcALYGYQgoAKgrAEQgZADgZAAQgkgBgkAAIAAAAQgfAFgfADQgRABgSAAAJFGbQgJADgIACQgUAFgVADAIUGhQgGAAgFABQgfADggADQgDAAgCAAAHLGoQgBAAAAAAQgtgBgrAAQh9ADh/ACQg3AAg3AAQh0AAhzgCQgFAAgGgBIh8gLQgLgBgLgBQg/gHg9gJAILGoQghAAgfAAAJUGaQgHAAgIABAhMGaIgJgBIgLAAAhVGZQgBAAAAAAQgEgBgFAAIjHgUIj+AAAjXGrQgFgBgFAAQgEAAgFgBAGgFvIirgXIgCAAIAAAAIgFgBIv+geADzFYIgEgBIgBAAIgFAAAD8GxIglgFIgcAAQghAAgkAAQgVgBgWgBQgZgCgbgEQgSgCgTgBQgigBglgH");
	this.shape_18.setTransform(1177.1,214.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("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");
	this.shape_19.setTransform(1179.6,214.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(121,121,121,0.475)").ss(0.1,0,1).p("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IAAAAQAXi3CYiCQAUgQAVgPQAXgDAXgBIAIAAIDTgGIABAAIBCgCQBUgsBkgGQAzgDAzgCQAZgCAYgCQAdgCAdgCIBCgEQACAAACAAQABAAABAAQAPgBAQAAAUEhdQAEAFAEAFAQfpFQAyAiAtAvQCICRABDLQAAAdgDAdIAAABQgRCmh1B9QgBABAAAAIgCACQgDADgCACQgFAFgEAEIg7AzQgzAkg4AXQgIADgHADQhBAXhJAEQgLABgLAAIAAAAQhwAHhxAFQhgAEhiADQgfAAggABQhhAChhABAT/hlQADAEACAEAPVkrQAOAiAIAkAP0o7QAxAhAsAwQCCCNAADGAR2DPQgFAEgEAEAR7DJQgDADgCADAPoEYIgKACIgKACAoYqWQADgBADAAAoaqVQABgBACAAQAyABAyABQAQgBAQgBQAAABABAAIADAAQAFABAEABQAFABAFABIAbAJIAAAAQABAAABAAAo0qXQAOABAOAAAkVqcIAKgCQAygIA2AAIHBAAIA2AIIAFABQAAAAABAAQAqABApACQCPAFCOAKIAAAAQARgCARgCQACAAABAAQAWgDAVgCQAKAAALABQAPABAQACQBzAOBeA9AmGqTQAAAAAAAAQASABATAAQANABAOAAIAAAAQACgBACAAAmPqVQAEABAFABQAFABAFABAmTqWQAIAAAIAAAm3qUQADAAADAAQAVABAWAAAmaqXQADABAEAAAkkqZQACgBAEgBQAEAAAFgBAkkqZQACgBADgBIABAAQATAAATgBQCfgFChAAQCJAACIAEIAGABIDjAkIAbAAQACAAACgBQACAAACAAQAzgLAygHAlGqRQACgBACAAIANgEIARgDAlhqIQANgFAOgEQArABAsABAlhqIQANgFAOgEAlVqYQAbgBAbgCQAFgBAFAAAjuqPQALABAMAAQA3ACA3ABABMo1IAPADQBWAYBZAHQAwAIA1AFQBDAFBIAAQAMAAANAAIAAAAQATAPASATQBABBAiBOQAMAeAJAeQAPA5ABA+QACC8h+CHQhOBShhAiQglAAglAAQgkAAgjAAIulgiIkDgKQgcgBgbgEQgegFgbgIQgHgbgDgdQhtiFAAizIAAgCQAAgbACgaQAYgXAbgVQBQhBBeggQAEgBAEgBQAIgBAHgBQAKgEAKgEQAdgLAngBQAQAAA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");
	this.shape_20.setTransform(1200.1,252.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("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");
	this.shape_21.setTransform(1200.1,252.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(107,107,107,0.42)").ss(0.1,0,1).p("AMUpzQACAAACAAQAvgIApgFQAvgCAkAAIA+AAIDHAnQCiAfBzCSQBYBuAVCKQAGAvABAsQABALAAAKQABAYABAWQAAAtgDAjQgDARgEAQQgGAOgGAOQglAugzAoQhzBbiSATQgGAXgJAWQgsBphgBMQgcAXgfARQgtAbgwAPQg2ASg/ACQgkACgiAAQgbABgVACQgbADgaAGIggAAIkAg6IAAAAQgyALgzAHQhSAPhhAMQiCANiRAAQh2AAhpgHQhngJhbgOQhZgOhRgYQijglhziYQgegogXgsQgEgJgEgKQgLABgJACQgYAEgXAEQgQACgPAAQg0gCgigTQgPgDgNgEQhEgcg8gxQiBhogiiNQgBgSAAgSIAAgBQALg7AWg6QAihjBShfQACgCACgCQAEgFADgFIAWgYQBdheB6gYQAcgIAdgEIABAAIABAAIBDgKQAWgQAZgNQBCgjBMgJQAdgEAdABQBJAABIABQA2ABA2ABQABAAABAAQAEAAADAAIACAAQAEgBAEAAICJgIQAAAAABAAQACAAACAAIATgBQAZgBAagBQDBgIDFABQCPgBCOAEIBIAAIANACQCyAGCuANQANABAPACQAGABAHABQBwASBZBFQAAAAABgBIATgEQCjglBzBOQAcAQATAaQANARAHAWQAKAggEAnQADAIACAIQAPAkAJAnQAcB9goBhQgHAMgGALQgJAHgIAIQgOAKgPAMQgPANgQAMQgTAPgSAPQAFATAEATQALA4gFA6QgDAvgNAqQgmAFgpAAIirAAIgTgDIgHgCIgdAAQgeAAgigDQgQgCgTgFQgegCgfgJQgTADgTACIkjARQgKABgKAAQgeADgeAAIgKAAIgCAAQgDAAgCABIijAEQgZAAgZgBQgCABgDgBQgEAAgEAAAOxoOQAcAXAbAeQB0CAAACzQAAAMAAAMQAAAHgBAIQAJAIAKAJQABABABABIAWAXQAEAEADAEQACADADACIAEAFQA1BCAXBNQgLAIgKAJQgeAWgeAXQhEAthOARIgGABIgdAHQg2Aqg/AYQgqAQgtAGQgMgCgMgEIghgHIgFgBQgEAAgDABQgqAEgqADQgEABgFABIh8ATQgNABgOACQgBAAAAAAIgBAAQgQADgRACQgYABgYABQgCAAgCAAIgOABQgDAAgCAAQgEAAgDABAPdocQAgAYAdAgQB7CEAAC5QAAAvgIArIAAAAQACADADACAOxoOQAWgHAWgHAK1nhQA7gGA4gLQBGgJBDgTALTpoQAXACAWAEQBhATBQBBAK1nhQAsAfAlArQAPASANATQAnA5ASBAQAHAbADAbQAGAvgFAxQgBAHgBAHQgSCuiRB1QgnAhgsAXQgLAGgLAFQgeAOgfAKQgUACgVABQgfAHggADQgUACgUAAQg2AAg2gBIAAAAQgFAAgEAAQgBAAgBAAQgmAAgmgBQgYgBgYAAQgIgBgIAAQh2gEhzgIIiggIAMVkCQADABADAAQAFABAGAAQACATABAUQAIACAIADIAPAFQAPAFAOAHQASAJARALQAeASATAZQAMARAHAWQANAkgEArQADAJABAHQAOAhAIAjQAGAaADAaQgIAJgIAJQg0A6g/AjIgKADIgJACQhQAahTAOQgaAFgbAEIgMACQgEABgEAAQgtAEguADQghALgjAGAMpjZQAIACAIADAMpjZIAAAAQABANgBAOQAAAEAAAFQgCAygNAuQgcBohWBRQhJBHhcAbQgFAFgFAEQgRANgQAMIhNgPIhSgRIklg6IhaAAQgSAAgQAAQhbABhIgRQhagShDgtQgJgGgIgGQgNgLgMgMQhRh/AAihIAAgBQABgCAAgBIEpBHQBNAaBQAIQAvAIA0AGQA8AFBCAAQBSAABNgHQBEgHA/gMQA3gHA0gNQAmgKAlgNIACAAIAWgGQACAAACgBQAIgBAHgCICJgDQAJACAJACIAAAAQADABADAAAMRjeQAJACAJACQADAOADAOQAKAxgCA1QgCA8gSA0QgfBghPBLQgnAmgtAZQgxAdg4ANQhSAFhUAEQgVABgVABQgCAAgBAAAMjjaQADABADAAAMVkCQAIAUAGAUANbj5QAVAEAWAGQB6AgBbBQQgLCNhYBsQADAfgBAeQgOANgQAMIhdAXIgKACIgKADAMmkAQAaACAbAFASGhVQAEAFADADQgXCBhcBkQgQAQgQAPQAAAJgBAJQgFAzgTAtQgGALgHALQAAAAAAABQgJAHgIAIQgMAJgLAJQgUAPgTAPQgdAWgbAWQgeAVgeAYQhCAqhNARIihAnQg5ASg6ANAN/DnIgKACIAAAAQg+AjhJALQgNACgPABIAAAAIgFgBIgOgDIhRgQIgTgEIiDgaQhUA6hiAVIgGAAQgDAAgDAAAxYooQABAAABgBQAHgGAHgFIE9guQAqgNAugGQAMgBAMgBIA+gFQAGAAAFgBQABAAACAAIAEAAQAFAAAFgBAyLoqQAEgDAEgDIBqghICOgsIA1gQQC4AACkAEQASABASAAQAPABAPABQACAAADAAAyMoqQAFgDAEgDAyRolQAIgBAIAAIApgCIDngIQAEgDAFgDIA9ggQAHgCAHgDQACgBABAAQAIgDAHgDIC8gbQBQACBPACIABAAQABAAABgBIACAAQABgBABAAIAagHQACAAADgBIAAAAQACAAADAAIAOgCQADAAADAAQABAAABAAQAMABANADQAOABANADAySolIABAAQADgDADgCAzzjFQgBgPgBgPIAAgXQAHijB6hyQANgNAPgMAyXohQADgCACgCAyXohQADgCADgCAzWAAQgUgcgPgcQgOgZgOgYQgcg5gTg9QgBgTAAgSIAAgBQAZijCNhzIAIgGAzGoeQAZgFAbgCQADgDADgCAxGiAQgBgQAAgRIAAgFQAAi4B7iGQAlgnApgdQABgBABAAIAFgEQADgCADgBQAEgDAFgDAwOi2QAFinBvh6QABgBABgBQABgBACgBIBWhLQADgCAEgCQAHgEAIgFIABAAQAEgCAEgDICMgsQAMgBALgBQAugDAugDQA0gFA1gEIAEgCQACgBACgBQACAAABgBAzzjFQATiNBthnQBqhiCLgNQAXgCAYAAQALAAAMAAIAAAAQAIgEAIgFIDlgJQADgCAEgCIBsgxQAKgBAKgBQACgBACgBQATgBAUgCQAngCAngDQAAABABgBIAAAAQADAAAEAAIAAAAQABAAABAAIACABQAEABADAAQAAABABgBQAGACAFACIAMADQAVABAWAAQADABAEAAQAKAAALAAIAAAAQABAAABAAQABgBABAAQAPgFAQgEQATgFAUgDQBngDBmAAQCkAACgAIQAnABAnADQAAAAABAAQB5AHB4ALQAEABAFAAQAhgHAggEA3Dl6QAFgHAFgGQADgEADgFA3Dl6QAEgGAFgGQAAgBABAAQBrhzCIgkAxuEBIgEAAQipAAh6hzQh5hzgHihIAAgBIAAAAQAAgHAAgIQABgDAAgDQAAgDAAgDQAAgDABgFQAAgBAAgCQAAgCAAgBIBQjKAwOi2QAPgMAQgMQBLg6BXgcQAKgCAKgBQAIgEAIgDQACgBACAAQAtiICEhkQABgBABAAIAJgHQADgCACgCIAAAAQAQgLARgKQADgCAEgCAzWAAQgehHgBhTIAAgKQAAgRACgQAuQDXIgPgCQibgZhwiBQAAAAAAAAQgFgGgFgGQgTgYgPgXAvJCaQhpgdhQhVQgOgOgLgPQhKhbgOh1AyqA7QAEgRAGgRQACgHADgHQAdhKA4hBQAZgcAfgaAuZCPQh2iBAAixIAAgCQAAgIABgJAuZCPQgBgKAAgKIAAgCQAAh+BChkQAZgoAjgjQAPgOAQgNQA2gvA/gbIAHgDQACgBACgBIABAAQAEgBAEgCIA7gRQADgBAEgBQAJgCAJgBQAFgBAGgBQAogGAtADQAOAAAPABQAaACAXAAQAQAAAQgCQAbgCAbgJIAaAAIEbBAIAWAAQBggYBSgPQBNgOBJAAQAsAAAxAHQACABACAAIAXAFQAHACAIABIAAABQAHABAIABIAZAGQANAEAMADQATAkANAmQAVA/AEBBQABAIABAHQAEA2gDAtQgEARgFAQQgpBIhGA8Qg4AShAABQgDAAgDAAQg4AAg4AAQg7AXhEADIljAOIjBAAQgBAAgBAAIiWhDQgFgDgEgEIAAAAQgEgCgEgDIhlhmQgDgDgDgEQgcgmgWgpQgag3gTgwQgHgTgJgTQgFgOgGgPQgKgagKgcQgBgNAAgOIAAAAQAFgWAHgUQAXgJAegBQANABARADQAqAGAnAQIAEABQAFgBAEgCAvCChQgEgDgDgEQgBAAgBgBIgBgBQhuh4gMigAvCChQgEgDgDgEQgBAAgBgBAvJCaIAAAAAuBCoIAAAAQgMgCgKgBQgCgLAAgLAuLCeIgIgJQgCgCgCgCQgBgBgBgBAuBCoQgFgFgFgFAuBCoQgFgFgFgFAuXClQgagEgYgHAuCDaIgOgDQgBgEgBgFQgEgUgBgVAuCDaQgIgGgIgGIgwgtAuAEMIgLAAIiCASQgoAIgmAFQgKgVgJgVQgJgWgHgVQgHgSgIgRQgPgpgRgqQAAgKAAgLQAAgCAAgCIAAgBQABgGACgFAuAEMQgBgFgCgEQAAgBAAgBQgBAAAAgBQgHgUgFgVAuEEAQiUgPhqhxQgYgagTgbQgZgkgQgnAuDEBIjrAAAHOp9IAKACIAMACICdAfIAXAAQAegIAdgGAHOp9IALACIALACAFfoAQAEAAAEAAQAdARAbAUQApADArAAQAHAAAGAAQAkAAAkgBQAugCAsgEQAJgBAKgBAFfoAIAAAAQAWAQAVATQAKABALABQAoAeAkAoQA0A4AgBBQAAAAAAABQAMACANACQAwAHA0AHQApADAwAEAFGoRQANAIAMAJACOoLQBcAFBbAFQANAAANABAFGoRQARAIAQAJQApADApACQBNAEBCAeQBGAgA5A+QAzA4AbBBACOoLQBJAYBMAIQAsAIAxAGQAFAAAFAAQAIAIAIAIQBGBJAeBZQAHACAIABAGLqLIBDAOAjJpxQDeAIDaAMQBiAFBhAEQCMAHBlBbQAJAIAJAJIAAAAQAGAHAGAGQBVBcAQB4AEGo0IAMABQBhADBcAEQBGAEA6ATQA3ATAvAhAgNpRIAhABIANABIALAAIBTADQBBADA6AUQAGAAAGABAAgpPIAMAAAAUpQIAMABIABAAICHAUIAWADQBIAKBAAdAgNpRQAoAHAmAFQA1AFAyAFQAWACAWABIAYACQAHABAHAAIAAAAQAGABAGAAADso2QAHABAHAAQAoAOAkAWAiApNIEHBAQADABAEABAiHqEQAygJA3AAIFUAAQAqABArABAHvkuQAHACAIACQARA1ADA7QAAAHAAAHQADCohwB4QgxA1g7AfQgSAKgSAHQgvAAgwAAIrlgiQgEgCgEgDAkwp7QAGACAGACAk7p9QANgBANAAIBSAMAlCp9QAJABAJABAk3p8QAEABAEAAQATADATACQAOACAOABQALACALABIABAAQACgBADgBQAEABAEAAIDpAiAkzpGIABAAICygHIBzgEAk6pCQAEgCADgCQAhgTAjgOQADgBADgBIASgHQA/AJA7AKQApAGAnAGAk6pCQAEgCAEgCQAhgTAigOIBvAaAltqJIBMALQBMgEBOgCAmPqCQADAAACgBQAkADAjADAmvp5QAPABAPAAQA8ACA9ACQAMAEALAFIASAEIAAAAQADgBADgBAn6qJIA+gJIAUAAIA7AJAm3qGQAWACAXABAm0p3QACgBADgBAoVk5QApiCB7hgQADgDAEgCIAwgiAjWpwQACgBADgBQABAAABAAIAGABAlqogQBjADBjAEQCbAGCXAIAt3otQADgCADgBIAAAAIBIgDQAFgCAEgDAs4oqQA+ABA+ABQAsAAAsABQAQgLARgKIAAAAIEQgKAs/omQAEgCADgCApJp9IBPgMApdp8QAFAAAEgBQAFAAAGAAAppojQADgCACgCQB+ADB8AEAqBkcQACgBADgBIBaAWQAFgZAIgYAkBEgIgTgBIgBAAQgDAAgEgBIgUgFIhdgNIjGAAIg/gLIhoAAQgBAAgBgBQgPgGgNgHQgMgFgKgHIhJg2QgFgFgFgEAh1E3QgJgCgLgCQgPgCgPgDQgggBgjgJIgXgEIAAAAIgvgHQgegGgcgIQgEgBgEgBQgIgCgHgCQgDgBgEgBIgEgBQgBAAgBgBIkEAAIicgaIhUgNAkNEhQgDgBgEgBQgEgBgEAAAkNEhQgEgBgEgBIkcgOIgigFIhOAAIg8AAQgFgCgGgCIhRgEIg0gCQgEAAgFgBIgNAAAh1E3Qg2gGgzgIQgCAAgCgBQgKgBgLgCIgWgEAmNEwQgjgFgkgKIhdgQIhwgFIhHgEQgJgDgJgEIhGAAIg2AAQgHAAgHgBAmNEwQgfgCgfgCQhZgGhXgIQg0gDgugPIhLAAQgJgEgIgEQgEgBgDgCQgigQgggXAAHFCIikAAIgggFQgwAAg6gCQgdgDgigEQgUgBgTgDAhUE7QgGgBgHAAQgJgBgLgCAhRE7IgBAAQgBAAgBAAQgRgCgQgCAomC+QgFgDgEgEIk+gOQgKgBgKAAACMFGQgpABgpAAQl0AAljgbQg1gEgwgPQgUgGgSgHIhYAAAFuJZIhBgPIgUAAQh2AfhoAQQhPAQhOAAQgxAAg3gJQgqgIgzgMQgggHgjgGQgggEghgEQgQgCgQgDQhQgKhTglQhQgkhBg8QghgegZgfQgug4gZhCAJ+EhQgEABgDAAQgBAAAAAAQgEABgEABALSEaIgFgBALXEbIgFgBAHHE+QgJABgKAAQgBAAAAAAQgaABgZABQgSABgRAAQgBAAgBAAQhkADhmABQgGAAgHAAIh9gEQgRgBgRgBIgqgEQgCAAgDAAQgCgBgDAAIgCAAAFrFCIgOAAAFyFCQgEAAgDAAAHVE6QgoAEgpADAAlFCIgegFIgUAAQgZAAgdgBQgDAAgEAAQAAAAAAAAQgDgBgCAAAhFE8QgDAAgCAAQikgDifgJAEUE3Qh/AFiCAAQgrAAgrAAQgHgBgHAAAAlFCIgeAAAEfE3QgwAKgzABIiXAAAFbFCIifAAAt3CxQgGgFgEgE");
	this.shape_22.setTransform(1223.1,290.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AJuKTIkAg6QA6gNA5gSIChgnQBMgRBCgqQAfgYAegVIA4gsIAmgeIAYgSIARgPIAAgBIAAABIgRAPIgYASIgmAeIg4AsQgeAVgfAYQhCAqhMARIihAnQg5ASg6ANIAAAAIhBgPIgUAAQh2AfhoAQQhQAQhNAAQgxAAg3gJIhdgUQgggHgkgGIhAgIIgggFQhQgKhSglQhRgkhAg8QgigegagfQgtg4gZhCIBYAAIhYAAQAZBCAtA4QAaAfAiAeQBAA8BRAkQBSAlBQAKIAgAFIBAAIQAkAGAgAHIBdAUQA3AJAxAAQBNAABQgQQBogQB2gfIAUAAIBBAPQgyALgzAHQhTAPhgAMQiCANiQAAQh3AAhpgHQhngJhbgOQhagOhQgYQijglhziYQgegogWgsIgJgTQAmgFApgIICBgSIALAAIgDgJIAAgCIAAACIADAJIgLAAIiBASQgpAIgmAFIgSgqIASAqIgUADIguAIQgRACgPAAQg0gCgjgTQgOgDgNgEQhEgcg9gxQh/hogjiNIgBgkIAAgBQALg7AWg6QAihjBRhfIAFgEIgJAMIhQDKIAAADIAAADIgBAJIAAAFIAAAGIgBAPIABAAIAAABQAGChB5BzQB5BzCqAAIAFAAIgRgrQgGgSgKgRIgehTIgBgVQATAbAYAaQBqBxCUAPIABABIjqAAIDqAAIANAAIAJABIA0ACIARAIIgRgIIBRAEIALAEIhLAAIBLAAQAuAPA0ADQBXAIBZAGIA+AEQgjgFgkgKIhdgQIEcAOIkcgOIgigFIDGAAIBdANIAUAFIAHABIAIACIgHgCIATABIAAAAIAXAEQAkAJAeABIAfAFIAUAEIgUgEIgfgFQgegBgkgJIgXgEICgAIQBzAIB2AEIAQABIAwABIBMABIACAAIAJAAIAAAAIBsABQAUAAATgCQAhgDAfgHQA4gNAxgdQAtgZAngmQBPhLAfhgQARg0ADg8QACg1gKgxIAAgaIAQAEIgQgFQgBgUgCgTQAaACAaAFQgRhAgog5QgMgTgPgSQglgrgsgfIAMANQBVBcAQB4IgLgBIgGgBQgbhBgzg4Qg5g+hGggQAugCAsgEIATgCIgTACQgsAEguACQBGAgA5A+QAzA4AbBBQgwgEgogDIhlgOIgYgFIgBAAQgghBg0g4QgkgogogeQApADArAAIANAAIBIgBQhCgehNgEIhSgEQgQgKgRgIQgkgWgngOIALABIAMABIC9AHQBGAEA6ATQA3ATAvAhIAAAAQA7gGA4gLQBGgJBDgTQAcAXAbAeQB0CAAACzIAAAYIgBAPIABgPIAAgYQAAizh0iAQgbgegcgXIAsgOQAgAYAdAgQB7CEAAC5QAAAvgIArQAIgrAAgvQAAi5h7iEQgdgggggYIABgBIATgEIAEgBIACgBIABAAQAwgKAsAAIABAAIAAAAQBhAABNAyIAEADQAcAQATAaQANARAGAWQAIAYAAAbIgBAUIAFAQQAPAkAJAnQAMA0AAAvQgBBCgXA5IgNAXIgRAPIgdAWIgfAZIglAeIAlgeIAfgZIAdgWIARgPIANgXQAXg5ABhCQAAgvgMg0QgJgngPgkIgFgQIABgUQAAgbgIgYQgGgWgNgRQgTgagcgQIgEgDQhNgyhhAAIAAAAIgBAAQgsAAgwAKIgBAAIgCABIgEABIgTAEIgBABQhZhFhwgSQggAEghAHIgJgBQh4gLh5gHIgLgCIhDgOIhVgCIlVAAQg2AAgyAJQhOAChMAEQBMgEBOgCQgUADgTAFIgfAJIgCABIhSgMIBSAMIgCAAIgVAAIgIgBIgcgDIglgFIAlAFIAcADIgqgBIAXAJIASAEQgjAOggATIkRAKIAGgEIBtgxIAUgCIAEgCIAngCIB5ADIgMgDIAMADIh5gDIBOgGIAAAAIABAAIASACIgSgCIgBAAIAAAAIhHgGIAFAAIAOgCIAGAAIACAAQAMABAOADIAaAEIgHAAIAHAAIAAAAIACAAIACABIAHABIAMAEIgLgEIgIgBIgCgBIgCAAIAagBIgaABIAAAAIgagEQgOgDgMgBIgCAAIgGAAIgOACIgFAAIAAAAIAAAAIBHAGIhOAGIgegBIACgCIgCACIiggFIAEAAIALgBICIgIIABAAIAEAAIgFAAIgegCIgkgBIAkABIAeACIiIAIIgLABIACAAIgLAAIgJABIg+AFIgYACQguAGgqANIk9AuIE9guIgPAGIgDABIgOAFIg9AgIgJAGIjnAIIABgBIAPgLQAWgQAYgNQBDgjBMgJIiPAsICPgsIADgBQAZgCAaAAIAAAAIAAAAIACAAIACAAICSABIBrACIhrgCIiSgBIgCAAIgCAAIAAAAIAAAAQgaAAgZACIgDABIA1gQQC4AACkAEIhPAMIAJgBIgJABIBPgMIA+gJIAUAAIA6AJIBNALIhNgLQDCgIDFABQCPgBCOAEIBIAAIANACQCyAGCuANIAcADIANACIAEAAQAvgIAqgFQAtgCAlAAIA+AAIDHAnQCiAfBzCSQBXBuAWCKQAGAvABAsIABAVIACAuQAAAtgEAjQgCARgEAQIgNAcQgkAugzAoQhzBbiSATQANgqADgvIABgiQAAgpgHgnQgEgTgFgTQgXhNg2hCIgDgFIgFgFIgHgIIgWgWIgCgDIgTgRQgLCNhYBsQBYhsALiNIATARIACADIAWAWIAHAIIAFAFIADAFQA2BCAXBNIgWARIg7AtQhEAthOARIgGABIABgSQAQgPAQgQQBchkAXiBQgXCBhcBkQgQAQgQAPIABgOQAAgXgDgYIgQASQg0A6g/AjQA/gjA0g6IAQgSQADAYAAAXIgBAOIgBASIAGgBQBOgRBEgtIA7gtIAWgRQAFATAEATQAHAnAAApIgBAiQgDAvgNAqQgmAFgpAAIirAAIgTgDIANgWQATgtAFgzIgdAHQAQgMAOgNQgOANgQAMIAdgHQgFAzgTAtIgNAWIATADICrAAQApAAAmgFQgGAXgJAWQgsBphgBMQgcAXgfARQgtAbgxAPQg1ASg/ACIhGACQgbABgVACQgcADgZAGgADEFHICigEIiiAEIgzgBQBmgBBkgDIifAAICfAAQhkADhmABIgFAAIgIAAIAIAAIhSABQl1AAligbQg1gEgxgPQgTgGgSgHQASAHATAGQAxAPA1AEQFiAbF1AAIBSgBIAFAAIAzABgACEFGIANAAIgNAAIh9gEIAdAAICYAAQAzgBAwgKQgwAKgzABIiYAAIgdgFIgUAAIg2gBIBWAAQCCAAB/gFQh/AFiCAAIhWAAIgOgBIgBAAIgCAAIghgEQg2gGgzgIIgEAAIgVgEIgWgEIAWAEIAVAEIAEAAQAzAIA2AGIAUADIANABIACAAIABAAIACAAIAFABIAFAAIgEAAIAGAAIA2ABIAUAAIAdAFIgdAAIgigCIgqgEIAqAEIAiACIilAAIgfgFQgwAAg6gCIg/gHQgUgBgTgDQCfAJCkADQikgDifgJQATADAUABIA/AHQA6ACAwAAIAfAFIClAAgAFmFDIAHgBIAKAAQAeAAAdgDIgyACIAEAAIAwgCIAhgEIAAAAIACgBIAbgDIB8gTIAJgCIBUgHIAHgBIAFABIgFgBIgGgBIgNgDIANADIAGABIgHABIhUAHIAHgBIgIABIhbAHIBbgHIgIACIh8ATIgbADQAjgGAhgLIgpADIApgDQghALgjAGIgCABIAAAAIhRAGIgEAAIgjABIgCAAIACAAIAOAAIgFABIAAAAgAGyE/IAVgBIgTABIgCAAIAAAAgAMQEpQAfAIAfACQASAFAQACQAiADAeAAIAcAAIAIACIgIgCIgcAAQgeAAgigDQgQgCgSgFQgfgCgfgIQAtgHAqgQQA/gYA2gqIhdAXIBdgXQg2Aqg/AYQgqAQgtAHIgYgHIghgHIAhAHIAYAHIgmAEIkjARIEjgRIAmgEIAAAAgAJYERQgeAOgfAKQAfgKAegOIAWgLIgTgEIATAEIgWALgAKKEfIgMACIAMgCIA1gJIhRgQIBRAQIg1AJgALuEXIgcADIAcgDQBJgLA+gjQg+AjhJALgANrDrIgJADQhQAahTAOQBTgOBQgaIAJgDIAKgCIAKgCIgKACIgKACgANmhjIgCAOQgSCuiSB1QgmAhgsAXQAsgXAmghQCSh1ASiuIACgOQACgYAAgXQAAgZgDgYQASAJAQALQAfASATAZQAMARAHAWQAKAcAAAhIgBASIAEAQQAOAhAIAjQAGAaADAaQgDgagGgaQgIgjgOghIgEgQIABgSQAAghgKgcQgHgWgMgRQgTgZgfgSQgQgLgSgJQADAYAAAZQAAAXgCAYgAOGjvQB6AgBbBQQhbhQh6ggQgWgGgWgEQAIAbADAbQgOgHgPgFIgPgFIAPAFQAPAFAOAHQgDgbgIgbQAWAEAWAGgAmpp7IgCABIgCAAIACAAIACgBIAagHgAmPqCIAFgBIgFABIAFgBIgtgDIAtADIgFABgAmgqHIgTABIATgBIAygCIgyACgAFuJZgACRFGIAAAAgACMFGIAAAAgAFmFDIAAAAgAFrFCIAHAAIgFAAIgCAAIACAAIgHABIAFgBgAFtFCIAFAAIAOgBIAygCQgdADgeAAgAFdFCIAjgBIgOABIgHAAgAAHFCgAFyFCIAAAAgAGAFBgAGEFBIAAAAgAHVE7IghAEIgwACIBRgGgAGyE/IAAAAgAG0E/IATgBIgVABIACAAgAThE9IAAAAgAThE9IAAAAgAhJE8IgGgBIgCAAIAOABIgGAAgAhhE6IgUgDIAhAEIgNgBgAHVE7IAAAAgAHXE6IAAAAgAh1E3IAAAAgAmNEwIAAAAgAxbErIAAAAgAMQEpIAAAAgALSEagAmNEMIjGAAIAiAFIhwgFIBOAAIg/gLIEEAAIACABIAEABIAHACIAPAEIAIACQAcAIAeAGgAoxERgApTEMgAuAEMgAuAEMgAt2EBIgOgBQgHgUgEgVIgDgJIADAJIgQgCQibgZhwiBIAAAAIAKgiIAFgOQhKhbgOh1QATiNBshnQBrhiCLgNQgpAdgkAnQh8CGAAC4IAAAFIABAiQg4BAgdBKIAZAdQBQBVBoAdIAIAIIgHgIQAYAHAaAEQABAVAEAUIAQALIgNgCIANACQAgAYAiAQgAuSDOIgwgsgAyCCAQgYgagTgbIAAgEIAAgBIADgLIgDALIAAABIAAAEQgZgkgQgnQAPAXATAYIAKAMIAAAAQBwCBCbAZIAQACQAEAVAHAUQiUgPhqhxgAGLDZQBAgBA4gSIgKAJQgRANgRAMgAE5DIQA7gfAxg1QBth1ABijIAAgIIgBgOQAmgKAlgNIACAAIAWgGIAEgBIAPgDICJgDIiJADIgPADIgEABIgWAGQgNgmgSglIgagGIgagGIgOgDIgPgDIAPAEQARA1ADA7Qg0ANg3AHQg+AMhFAHQhNAHhSAAQhCAAg8gFQg0gGgwgIQhPgIhNgaIkphHQAFgZAIgYIALgBQAWgDAYAAIAAAAIABAAIAYABIADAAIAcABQAbACAXAAQAQAAAQgCQAbgCAagJIAbAAIEbBAIAVAAQBggYBTgPQBNgOBKAAQArAAAxAHIAEABIAXAFIgXgFIgEgBQgxgHgrAAQhKAAhNAOQhTAPhgAYIgVAAIkbhAIgbAAQgaAJgbACQgQACgQAAQgXAAgbgCIgcgBIgDAAIgYgBIgBAAIAAAAQgYAAgWADIgLABQApiCB7hgIAGgFIgGAFQh7BggpCCIgLACIgSADIgHACIg7ARIgJADIgEgBQgogQgpgGQgRgDgNgBQgeABgXAJQgHAUgFAWIAAAAIABAbIAUA3QgjAigZAoQhCBkAAB+IAAACIABAUQh2iBAAixIAAgCIABgRIAfgYQBKg6BYgcIAUgDIAQgHIAEgBIgEABIgQAHIgUADQhYAchKA6IgfAYQAFinBvh6IACgCIADgCIBWhKIAHgFIB8ACIBYACIgFADIgJAHIgCABQiEBkgtCIQAtiICEhkIACgBIAJgHIAGgDID4AGIDIAHIExAOQBIAYBNAIQArAIAyAGIAKABIAPAPQBHBJAeBZQgehZhHhJIgPgPIAVABQAoAeAkAoQA0A4AgBBIABAAIAYAFIBlAOQAoADAwAEQAIAUAFAUIgRgEIARAEIAHAcIAAAJQgCAygNAuQgcBohWBRQhJBHhcAbQBGg8AphIIAJghIABgmQAAgdgDggIgBgPQgEhBgVg/QAVA/AEBBIABAPQADAgAAAdIgBAmIgJAhQgpBIhGA8Qg4AShAABgAC2DZIrlgiIgIgFIAIAFIk+gOIgUgBIgKgJIgIgKIgEgEIgCgCIgBgUIAAgCQAAh+BChkQAZgoAjgiQAPgPAQgNQA2gvA/gbIAHgDIgHADQg/Abg2AvQgQANgPAPIgUg3IgBgbIAAAAQAFgWAHgUQAXgJAegBQANABARADQApAGAoAQIAEABIgEACIAFgCIBaAWIEpBHQBNAaBPAIQAwAIA0AGQA8AFBCAAQBSAABNgHQBFgHA+gMQA3gHA0gNIABAOIAAAIQgBCjhtB1QgxA1g7AfIklg6IhaAAIgjAAIgBAAIgJAAIAAAAIAAAAQhRAAhCgPIgDAAIgDgBQhZgShDgtIgRgMIgZgXQhRh/AAihIAAgBIABgDIgBADIAAABQAAChBRB/IAZAXIARAMQBDAtBZASIADABIADAAQBCAPBRAAIAAAAIAAAAIAJAAIABAAIAjAAIBaAAIElA6QgSAKgSAHIhfAAgAqiBFIAGAHIBlBmIhlhmIgGgHIAAgBQgdgmgVgoQgag3gTgwQgHgTgJgTIgLgcIALAcQAJATAHATQATAwAaA3QAVAoAdAmIAAABgAuPDXgAP5DJIAAAAgAIDDGIAAAAgAIDDGIAAAAgAvJCaIgCgBIAAgBQhvh4gMifQAZgdAfgaIgBARIAAACQAACxB2CBIACAWQgagEgYgHgAytBLIAAAAgASNhNIAAAAIAFAFIgFgFgASGhVIAHAIIAAAAIgHgIgASGhVIAAAAgAscizIAAAAgAISi6QgDg7gRg1IAOACIAaAGIAaAGQASAlANAmIgCAAQglANgmAKIAAAAgAMmkAQgQh4hVhcIgMgNQAsAfAlArQAPASAMATQAoA5ARBAQgagFgagCgAp8keIAIgDIA7gRIAHgCIASgDIALgCQgIAYgFAZgAoikIgAp9keIABAAIgFACIAEgCgAp8keIgBAAIAJgDIgIADgAp9kegAH+kqIAAAAgAoVk5IAAAAgAHznYQgrAAgpgDQgbgUgdgQIBSAEQBNAEBCAeIhIABIgNAAgAJInZIAAAAgAFnn/IAAAAgAFFoBIi3gKIgHgCIkHhAIBzgEIhzAEIhvgaIAGgCIASgGIgXgEIAIABIAVAAIgFACIgBABIB6ASIBQAMIBNAMIBoAKIAWADQBIAKBAAdIAZARIgagBgAOxoOQhQhBhigTQgVgEgXgCQAhgHAggEQBwASBZBFIgsAOIAAAAgAC+o4IgWgDIArADIAZACIAPABQAnAOAkAWQhAgdhIgKgAPdocIAAAAgAyNoqIABAAIABAAIgBAAIAJgGIgIAGIgGAFIgBAAIAGgFIgGAFQgbACgaAFQAdgIAdgEgACoo7IAAAAgAKBpaIidgfIgLgCQB5AHB4ALIAJABQgdAGgeAIgAqzp1IAYgCIA+gFIALgBIADAAIi8AbQAqgNAugGgAjvpnIgSgEIgXgJIAqABIAXAEIgSAGIgGACIAGgCIgGACgALTpoIAAAAgAkwp7IAAABIABgBIALAEIgMgEgAkwp7IgHgBIAIABIgBABIAAgBgAkvp7IAAAAgAkwp7IAAAAgAHZp7IAAAAgAlDp9IAAAAgApPp9IAAAAgAk7p9IAAAAgAm4qGIAFAAIgEAAIgBAAIAAAAgAm4qGIAAAAgAm4qGIAAAAg");
	this.shape_23.setTransform(1223.1,290.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(94,94,94,0.369)").ss(0.1,0,1).p("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hkgHiOIAAAAIAAAAQAAgCAAgBQAAgKABgLQAAgCAAgBQAAgBAAgCQAAgBABgCIBFi0AxzglQgDgHgCgHAxtgXQgEgHgDgIAhmpNQADgBAEgCIAAAAAkopZIAAAAQAZABAaABQABAAABAAQADAAACABAjqpnQAEABADABQB2gHB5gCQArgGAtAAIC4AAQB5ADB2AIAkxpgQAngDAngCQAbAGAaAMIAAAAQAFABAEACAiJo9IAAAAIBJANIAFAAIAkACQAGABAGACIAiAGQAmAFAkAEQAqANAlAXQATAMATAPQAHAAAIABQAHAAAHABQAzADAzADQBLAFA/AhAh9pDQAAAAABAAIAEABQAEABADABIBPAQQAGABAFABQAGABAGACAh9pDIAAAAQADABACAAIA9ASIAGACIB7AWQA4AKAyAWQAbAMAaAQQAIAFAJAGQAiAJAkAFQAnAJAtAGQAoAEArABAiJo9QAGgDAGgDAifowQALgHALgGAjtpWQA7AJA1AKAkopZICfAcAjun4QAOgMAQgMQACgBACgCIAngaQADgCADgBAgiowQAFABAGABIAAAAIAYABQAzACAtAPQA2AGAvAEQBYADBTAFQA/AEA0ASQArAPAkAYAhAowIALACIDoBFQAOAGAOAFQAFACAGACQAOAFAOAEQAyAiArAxQAuAzAeA7QAEAJAFAJQAfBDAKBEQACAPABAPQABAHABAGQAFAxgBAnQgDAQgFAPQgdAwgtArQgDACgDADQgPAOgRANQhTBBhlAXAilotQADgCADgBIBfAAAwYoFQABgBACgBIAAAAID7gMIBOgEQAEgCAFgDICTgtQApgEAogDQAFgBAEAAQAEgBADAAQAygFAxgEIABAAQALAAAMAAQAWABAWABArUoSQAEgCAEgDQAEgCAFgDAspoIQAHgFAIgGQBQg4BkgPQAKgBAKgBQAcgDAcgCQBYACBWAEAyJjXQATh3BehXQBmheCJgFAmRpsIALACQAoAEAnAFQADAAADABAlApdQACgBABAAAlApdIAAAAIAYAEAlBpdQABAAAAAAAlHpfIAHACAlrpbQASgCASgCAo0jZQAEgCAEgCQACgBADgBAuRigQAEgDAEgDQBGgyBQgZQAJgBAJAAQAHgDAGgDQASgJAdAAQAEABAEAAQgBgCgBgCQAAgMAAgNIAAAAQAliFB+hgQCIAECGAGAwyApQAJgXAMgWQgGgGgGgGQhQhXgQhwAwyApQgTgSgRgVQgFgEgEgGQgLgPgJgOAwUDDQgEgLgHgLQgOgkgRglQAAgLAAgMIAAgBQAAgBAAgBQACgHADgHQADgJAEgKAsnBjIgPAAQgcgCgbgFQhMhagRhyQAagZAfgXAscBvQgGgGgFgGAsPCxQgLgHgKgIIhIgPQhwgWhWhUAsMDHIAAAAIgqgDQgHAAgGgBIjRAAAsMDHQgBgCAAgBAsLDNQgBgDAAgDArZDPIgyAAIiFAAIhzAUQgCABgCAAQgFgMgEgLQgCgFgCgFArlDJIgngCAlbDiIgBgBIhlgSIiHAAIg7gMIglAAQgNgGgMgGQgEgDgEgCAlSDiIgJAAIjUgNIhVgGIgIAAQgBAAAAgBIgLAAIhNgFAlSDiIgKgBIjUgNIhSgFIgLgBQgCAAgBgBAqMDPIgMgBAqjDGQgDgCgCgBIhJAAQgPgIgPgKAjSEKQjEgGi9gRQgvgFgsgOQgWgHgVgKABCEKQgDAAgCAAIgdgCQgUgCgTgCIiqgEQgJAAgJgBQgHAAgGgBABBEKQgCAAgCAAABGELIgNAAAiTDvQgCgBgDAAAjFELQgEAAgEAAQgDAAgCgBAixEAQgJgBgJAAQgLgCgMgDQgNgCgOgDQgbgCgggKIgrgHAjLELQgDAAgEgBAhGELIiFAAAD7D+QgFABgFAAQgDAAgCAAACqD+QgLACgLACQgoAIgqAAACXEPQgagBgagBQgPgBgOgBAFLI4IgEgBAFOI5IgDgBIAAAAAiYDuIi6gM");
	this.shape_24.setTransform(1246.1,328.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("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");
	this.shape_25.setTransform(1246.1,328.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(81,81,81,0.318)").ss(0.1,0,1).p("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AACPQAABVgfBIQARAMAPAPQABABABABQATARAPASQAHAIAGAJQAsA9ANBJQADASABASQABAdgDAeQgGA6gYAzQgoBVhSA6QgYARgaANQgmAUgpALQgsANg1gBQgeAAgcAAQgWABgRADQgXADgVAHIgaAAIjOhJIgFgCQgvARgxALQg/ARhRAPQhpAPh7AAQhlAAhWgIQhWgLhIgQQhHgRg8gcQh6gshXiBQgWgjgRglQgUgxgNgmQgGgPgJgOQgDgHgDgHIgFgKQgCgFgCgFIgBAAIh0AAQiCAAhehWQhdhVgIh6IAAAAIgBAAQADhyBHhWQASgTATgPIB1hIIAFgDQAEgBAGgCQADgBAFgBABZn1QAQACAPACQBPAEBKAFQA5AEAuARQAfALAbARQADADACADQASAUAOAXQAMABANAAIAAAAQAGAAAHABAFDmeQBGAZA2A+QABABABABQADAEADADIA4BqQAAABABACIAAABQgCAYgGAYQABAAAAAAQAIACAJABQABAPAAAQQAAABAAACQAAAHAAAIQgBACAAACQAAACAAACQgEAsgNAmQgQAsgdAnQgTAYgXAWQhUBOhvAJQgQABgPAAQhIAAhFgCQgIACgIABQgDAAgCAAAFHmeIAMADQAjAKApAGQACAAACABIAnADQAGABAHAAIAAAAQAMABANAAQANANALAPQAMAPAJAPQA2BXgHBkQgBAQgDAQQAAADgBADQAyAAAqAUQAXAIAMARQAIAKAEAQQAGAZgIAfQACAGABAFQAOAZAJAaQABABABACQghAdglASIAAAAIgEgBAEXmqQABAAAAAAQAWAEAUAHQACABADAAAFDmeQACAAACAAAEYmqQAVAHAWAFAFCmfQAAAAABABAHwmFQAGAAAHABAHXmGQAvBOgGBhQAAADAAADQABAEABADIAIAtQAbAGAfAFQADABAEABQABAAAAAAQAjADAqAHQAsAEAsAMQA5AQAvAaQAdAQAZAUQgYA1gpAuQgCACgBACIhHA+QgGAEgFADQgFADgFADAH/jUQAAACABACQABADABADAALopQABAAABAAQAFAAAGABQAHAAAGABQALABAKABQARABARACQBKAGBIAEQBpAJBKBHQAJAIAIAJQAiAVAcAdAHKmHQAGABAHAAAE4gbIAAAAQBJgOBCgkIASgHQAEg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AzATIBmAnAjFjJQAGABAFAAQAOAAAMgDQAWgCAVgLIAWAAIDUBMIAOAAQADgCADgBIAigNQAFgCAGgCQAFgDAGgBABcm7QAyAhAsAzQApAuAaA1QARAhAMAhABFm9QALABAMABAAum/QAMABALABAjto6QAJABAJAAICbAKAjso5QAIAAAJAAAjto6QABAAAAABAjvo+IAVgHQACAAABAAQAIgBAHABQAGgDAFgCIAAgBQANgHAYABQABAAAAAAQABAAAAAAIAJACQABAAACABIAAAAQABAAABABAiNpPQABAAACABAi9pLQAZgCAagBQABAAABABAlIo+QAIgBAIgBQANgBAMgCIABAAQAKACAJACQALABAKADIAAAAQAEgCADgBAj5o6IAAAAIAAAAQABAAABAAQAGAAAFABAj5o6QACgBABAAQAFAAAEABAj5o6QABgBACAAQAEgCADgBAlIo+QAhABAhACQAGAAAHABAkmonQAEgCADgCQADgBAEgCAkforQADgBAEgCIAZgKQACgBAEgBAj3o6QAFAAAFAAAkepDQAwgEAxgEAj/o4QADgBADgBAmGpBIAeAGIAAAAQAQgCAQgBAmwpKIAqAJQAfABAfACAnnpXIA3ANAnjpFQAvACAuACAl5pPQAvAFArAHAloo7IBJAQAm6CgIgIAAAm6ChIAAgBIg8gNIhDAAAl5DHQgLgCgNgCQgogFgqgSIgdgIAlVC5QgQgDgSgHIhDgOAmxChIgJgBAk3BHQgGgFgFgEQgFgEgFgEAlCA+IgBAAIk5gXAkcDOQgEgBgFAAQgqgDgqgDAi0DTQg0gCg0gDAlLC6QgFAAgFgBACricQAFgCAGgCQgJBZg1BGQg9gBgxgHQhHgJg1gbQgGgDgGgDQgLgJgLgJQgig+gPhGAAjDIQgBAAAAAAQgJACgJACQgjAGgmABAAyDLQgIgCgHgBAARBWIlTgYApApZQAuABArAB");
	this.shape_26.setTransform(1269.2,366.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("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");
	this.shape_27.setTransform(1269.2,366.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(67,67,67,0.263)").ss(0.1,0,1).p("ADxozQAWABAVACQBsAJBoAUQASACARAFQBWAWA/BPQAUAZAPAaQAOgEANgEQABAAABgBQAMgCALgEQAGgCAFgCQAwBPAABkQAABsg5BUQAlAUAfAaQAHAGAGAGQARAQANAQQAfAlAQAqQALAbAEAeQAHAqgGArQgGAzgYAtQgmBLhLAxQgWAPgYALQgiARglAIQgnAKgwgCQgbgBgZAAQgUABgPADQgUADgTAIIgXAAIi8hXIgMgFIgJAAQg2AegsATQAAABgBAAQgtAOg4AMQgFABgFAAQgNgCgQgGQgTgLgggPQgUgJgZgIQgVgFgYgFQgLgDgMgDQg3gKhBgdQg+gbgwgqQgagVgTgWQgngsgUgzQgSgvAAg2IAAgCQAAgVADgUQgDgBgCgBQgYgJgVgMQgCgBgCgBQgBAAAAgBIgBAAIgogNIhyAAQg8gIgxgiQAKgOAMgNQAYgaAfgYQhLgTg5g/Qgwg3gQhEQABgDAAgCIAhhHQADgDACgEQACgCACgDQABgBABgCQALgOANgNQAHgGAHgHQBThHBuACQARAAARAAQAfABAeABQAIAAAHABIAqgjQADgCAEgDIAAAAQAEgCAEgDIA7gZQANgEAOgDQAHgBAHgBQAKgCAKgBIAAAAQAUgDAUgCQAcgFAcgEQAHAAAIABQAVABAVACQAcAHAZAHQAPAFANAEQA1ASAnAOQA/AOAqAIQAFAAAFAAQAUgRAXgQIBXAqIBQAnQAhAXAkAMQAPAGAQADIABAAQABAAABABQAPAOAMASQAKANAIAOQA1BbgXBmQgBAEgBAFIAAABIAAAAQAEACAFABIAJAEQABAAAAAAQAhAJAoAIQAeAEAnAHQAnAEAoAMQARAFARAGQABABABAAQAdALAaAOQgLASgPAPQgXAbgbAWQghAagmARQgoARgtAGQifAXirAHQhKADhNAAQgFAAgFAAQgJAAgJAAQgLAAgLAAIicgFQgDAAgDAAQgCAAgCgBIgEAAQgBAAAAAAIgBAAQgHABgIAAIhsAAIgTgHIgKAAQgQAAgZgEQgKgDgNgFQgBgBgBAAQghgEghgEIgLgCQgDgBgEAAQgLgFgMgHIgWgIIgwgQIgDAAQgCgBgCgBIgCgBIgVAAIh8gMQgEgBgFAAIiIAAIi7AAQhuAAhQhIQhQhHgJhlIAAgBIAAAAQADhfA6hJQAIgKAKgKQAHgHAHgHIAUgMQAigaAlgRQAHgDAGgDQAEgBADgBIARgEQANgCANgCQABAAABAAQAFgBAGAAIBNgGQARgSAVgQQAMgLAOgJQBphICGAAQAjAAAhABIAAAAIAVgGIAOAAIAaAHIBNAVQAbABAaACIABAAQAogGApgEQAoAFAlAJQAAAAABAAQAQAEAPAEQAlACAkADQAigPAlgKQAHABAGABQAEgDADgCIAEgCQACgBADgBQADAAAEgBIAIAAQABAAACAAQAAAAABAAQA1gCA3AAQBaAABXAHQAcgHAegEQAegEAgAAIEwAAIChBCIALAAQAlgXAkgKQAZgKATgGQAZgDANAAIAdAAIB8AzQBlAnBIBvQA3BUANBlQAEAkABAfQABAIAAAHQACARAEAQQAEAfADAVQABALAAAJQgEALgEAKQgeAdgnAZQhvBIiNAAIh+AAIgQgHIgIAAIgFAAQgNAAgRgEQgIgCgKgGQgZgFgbgSIhWgjQgoAUgrALQgMAFgOAEQgtAOg5AMQheARhwAAQg7AAg1gEQgdgCgbgDQgIgBgJgCQgBAAgCAAQgKgCgJgCIgBAAIgQgDQgDAAgDgBQgEgBgEgBIg3gMQgBAAgBgBQgHgBgGgCQgBgBgBAAQgJgDgIgCQgygRgqgaIgDgBQgdgOgagTQgeALghACIjaATIhDAAQAIgcANgaQACgDACgDQACgEACgDQAGgJAHgKQABgBABgBQATgaAYgWQAJgIAJgHQAEgDAEgDQApggAxgRQACAAACgBQAkgMAmgEQAggEAnAFQALABALABQAUADARAAQANAAALgDQASgDASgLIAUAAIAHADQgghQAAhdIAAgCQAFgLAFgLQAIgPAJgPQAXAWAXAbQAjApAXAvQAmBLAJBFQABAGABAEQAAACABACIAVAKIAKAAQA5geAogTQAkgTAhAAQACAAADAAQAAABABgBQANACARAGQADABACABQARAKAdANQABAAAAAAIAFADQADACAEACQAEACAFABAExmgQAPARALATQAnBCgHBTQgBAHgBAGQgDAZgHAXQgDAMgFAKQgQAoggAjQgKALgMALQg/A5hTAMQgcAeglAbQA1gBAvgIQAygJArgPQAngKAkgSQgUAdgcAaQhHBBhfAHQgNABgOAAQgEgBgEgBABwn8QAOACA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QgCgGgDgGAoMnjQAEgCADgDICxgNIBDAFIAKABIABAAIALABQAGAAAGABQAJgGAKgGQABgBABAAQABgBACgBQABgBACgBQAMgHAMgGQADgBACgCQAKgEAKgFQBcAIBZAKQAWADAWACAotpAQBNACBEAEQAiADAgAFQADgBACAAAqMhuQgHgYgEgaQgBgEAAgFQgBgMgBgMQAAgBAAgBQAAgHAAgGIAAgCQAAh5BKhZQANgPANgNQCCAEB+AIQAdgcAlgaQADgBACgCQA7AGAxAeQAcARAZAYQAPACAOABQASANASAPQAHgLAHgMQAWgdAdgaAqMhuQAkgRAogKQAGABAGABQAEgDADgCQAHgGASABQAFACAJAEQAZAHAYAVIBEAhICrBRIAFADIAAAAIACABQACABACABQAcAUAfALQABAAACABQgBAAAAAAQgBgBgBAAQgTgOgSgSIgcgCIACABArIhNQAFgDAGgDQAYgPAZgMAgpo2IAGADQABAAABABQAaAHAYAVIAtAWAgto4IAAAAQACABACABAgto4IABAAQABABACABAg+o3QADAAADgBAg/o3IABAAQAJAAAIgBAgxmdQAaADAYACAiDnJQArARAnAbAhEo1QADgBADgBAkGnvIASAFIBKAUQAUAGATAHAkHnvIAMABAklogQANgCANgCQBkgOBogFAkRnwIALABApqpBQAfAAAeABAqnoxIA9gQAmqooQBDADBCAFAmFoSIB+AjAtDoGQBGgsBWABAibCcQgDAAgCgBAiWCcQgDAAgCAAABvCSQgnACgpAAQg8AAg8gDAjmADIAFADIjtgVIiZgPQgZglgMgrAkhCcIgcAAIgTgHQgVAAghgDQgPgDgTgFQgVgEgWgJQgGgBgHgCIgigKQAAgDABgEQAAgDABgEQAAgCABgCQABgJADgJQgCgCgDgBIhOAAIgUAAIiog5QgRgFgQgHQhKgig5hNAhaCRQhngFhigNQg7gHg5gKQAAAAgBAAQgWgDgVgHIg8gGIgZgCIgUgGIgNAAQgLgGgKgHQgjgZgegiQgVgYgQgbIgXgCQgVgCgUgFQAVgQAXgPAo4BXQgBAAAAgBAo4BXIAAAAAoxBZIgHgCAoYBcIgZgDAoABiIgYgGAnNB+QgDAAgDgBQAAAAgBAAQgGgBgGgCAmACIQgIgDgKgDQgTgCgagLIhBgTAo0BZIgbgDIkTAAQADgHADgGQAJgQALgQQADgFAEgFQgegTgZgcQgBgBgBgBQgBgBgBgCIguhKAimCbQhvgGhrgN");
	this.shape_28.setTransform(1292.4,404.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("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");
	this.shape_29.setTransform(1292.4,404.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Ak2ImQhGgNg1gTQg0gTgoghQhSgyg5hrQgPgdgLgfQgNgqgKgcQgFgMgKgLQgLgXgUgUIAAgRIAAgBQAXglAjggIjlAAIhJAZQgdANgYAIIgVALIgMAEQgXABgCgIIgOABQgrgOgogYQhWgzgmhIIAAgWIAAAAIAghDQAXg3AzhCQAQgUAQgQQAugtAzgbQAWgLAXgIIDLhHIAMgHQBNgwBdgIIAUgHIANAAIAQAFQCAABBkAHQAnAFAlAIIAAAAQCqgaC2ACQCvgCChAUQA5gPA/AAIEKAAICCBHIAHAAQAbgZAbgKIAdgRQASgEAFAAIARAAIBkA2QBRAqA6BkQAsBLAKBZQAEAgAAAbIACANQABAPAFANQAFAaAHARIADARIgHASQgbAXgkAUQhjA5h8AAIhuAAIgNgHIgIAAQgHAAgMgEQgFgDgHgHQgUgEgVgUIhig1QgcAVgeAOQAnAWAeAcQAPAPAMAOQAtA2AJBCQAGAlgHAmQgHAtgWAnQgkBBhEAoQgUAMgVAJQggAOggAFQgiAIgsgDIgtgCQgSABgOADQgSAEgPAIIgVAAIighjIgFAAQg2AqgiAWQgXAVgUAAQgJAAgSgLIgEgDIgnALQhRARhmAAQhTAAhBgJgAAiBcIAJAAQAegGAcgLIAHgCIgVgHIgBgBQglARgpADIgVABQhIgBhDgEIgagDIgpgGIgSgDQgwgIgwgKIgVgFQAIgPALgOIALgNIhZg5QgTgWgRgHIDIAZIARgKIAGgDIAJgEIgJAEIAKgLQApgyAHg/IACAEIgCgEIgBgEIgCgDQgNgqgKgcQgGgNgJgLQgMgXgTgUIAAgTQAHgMAJgMIAHgIIgQgDQgagbgfgRIgCgBIhtgmQAfgRAkgGIAwgJIAYgGIAaADIgPgFIgLACIgigDIhQgGIAGgCIgGACQhUgHhXgEIgTAAIg5gCQhagChFA5QgZAWgRAZQgcApgGAyIAAAMQABAgAJAeQAUg1AwgpQBFg5BaACIBCACQhCBQAABsIAAACIABATIACAWIARBFIAGAPIhDgJQhRgJg6hDQgggmgPgtQgHAVgDAXIAAAFQAAApANAlQAyBBBBAcIBPAjQAXgPAbgPIAegOIAAAAQAfgOAhgKIgGgJIAmAFIgCACIgBABIgKgEIgTAFQAKATAOARQAVAcAYATIhRAJIiWAAIAHABIGGA1IA3AIIAAABIAPAMIAYgIQBmAOBuAAgAqtALIAQAAIgNgCIgDACgAhKgrIAJAKIAeAaIATgUIAEgRIgJABIg1AAIgLgMIALAMgACninIAPALQgRAdgdAYQgOANgQAKIBXA0QAJgQAHgRQAMgcADggQABgOAAgOQAAgpgPgkQgLgagTgYQgXgegegTQAFBVAjBJgAFGoLIgHADIAHgDIAGgCIgGACgAnbhVIABgBQABgFAMACIAKAGIACABg");
	this.shape_30.setTransform(1315.7,442.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AFHIWIh4hpIgBAAQglAsgRAYQgJAXgFAAIgIgMQgFgNgTgRIgFgEIgEACQglAWg5ASQhFAShaAAQhKAAg4gJQg9gOgrgUQgrgVgegiQg+g2grhhQgLgagIgbQgKgngJgWQgEgLgJgJQgLgSgVgQIAAgOIAAgBQAngtA+giIgLgHQgMgCgSgOIhKghIkRAAIg6AbQgYAMgSAJIgOAMIgHAFQgPABAFgGIgKADQgmgKgjgSQhKgmgng2IgBgTIAAAAQARgYAQgdQAVgtAqg7QAWgcAXgWIABgBQAXgWAZgRQAXgPAYgLIFHiXIAKAAIAfAOQAogIAsAAQB1AABUAIQAvAHAoANIABAAQCagjCrADQDAgDCmAmIANAEIAVAHQBXgqBoAAIDmAAIBhBLIACAAQATgaASgLQALgMADgHQALgDgDAAIAHAAIBKA5QA9AtArBZQAhBCAIBNIAEAyIABALQACANAFALQAHAVAJANIAFAMIgFAQQgZASgfAOQhYArhqAAIhfAAIgKgIIgDAAQgCAAgGgEIgGgKQgOgFgQgUIhvhWIgLALQgoAxguAWQglAVg5ASIgCABIgfAHQgcAFgdADQAbAFAfAKQBRAaAzAvQAOANAKAMQAnAvAHA6QAEAhgGAgQgIAngWAhQgiA2g9AgQgRAJgUAHQgbAKgdAEQgdAEgngEQgVgDgSABQgQAAgLADQgQAFgNAIgAl2hbQAuBDBGASIAMADIgJAFIgcANIgFACQAuAKAwAHIABAAIAGgHQAjACAkABIARgBIAIgBQgqgFgngJIgLgCQgggHgfgIQAngVAdgaIADgSQgIgRgHgWIgBgFIgDgHQgJgugeg7QgRgigZggQgkgugpgfIgYgRIABgCQAvhCBEgRIAbgHIAAAAIgBAAIhQgMIgMgBQhYgLhegGIg8gCQgegBgbAHQgkAKggAYQgeAYgQAdQgNAXgFAbIAAAJQACAmAOAhQgLAWgFAYIAAAEQABAjALAfQAKAeAVAaQApA0A6AMIAFABICaAeIgFABIAFgBIAGgDIAvgMQgYgTgUgYQAggLAZgcQAHAMAJAMgADIAXIAGACIgGgCIgFgCIAFACgAlmADIgDgDIAAAAIADADgAlvgJIABAAIAEADIgEgDIgFgFIAEAFgAg0k2QAJAXAKAmQAIAaALAZQAJAVAJATQAZAuAeAiIACgFQAKgVADgYQAJg7gbgwIgKgPQglg1g5gMIgHgBIADAGgAHnjYIAVgBIAEAAIgEAAIgVABgAghm1IgHAFIAHgFIAIgFIgIAFgACeoBIACABIgCgBIgDgCIADACgACOoCIgIABIAJgBIAEgBIgFABg");
	this.shape_31.setTransform(1339,480.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AkGH0Qg1gPgigVQghgWgVglQgog5gdhWQgHgXgGgYQgHgjgGgSQgFgKgJgHQgKgOgVgJIAAgNIAAgBQA5goBWgdQAqgOAtgHIAGAGIgDgDQgKgCACADQgCADACAEQAGAJALAZIBiCRQASAoAaANQARANAbAIQAQAFASACQgOgRgJgTQgOgfAAgjIAAAAQAAg+AoguQAWgZAegQQAbgQAigHQAagGAaABQAVAAAaAHIAPADQAPAEAJAAQAKAAAGgEQAKgEAKgNIANAAIBHBgQAHgPAEgNIAFAEIABABQASALAaAKIAsANQAYAFAbAKQBHAZAqAmQAMAKAJAKQAhAoAEAxQADAcgGAcQgJAggVAcQgfAsg2AWQgRAHgRAFQgYAGgXABQgaADghgGQgSgDgPAAQgNAAgLADQgNAFgJAJIgQAAIhPhtQgJAVgFARIALAMQANARgDAOQgBANgJAAQgLAAgFgZQAAgMAFgTIgKgIIgBAAIgagOIgOgFIgTgHQgUAcgXAQQgbAWgwAUQg5AThQABQhBgBgugJgAEwBHQgHgFgDgHQgMgQADgLQAAgNAKAAQAJABAEAWQABANgFAQIAAAAgAFFgNQgbgHgWgJQhoAah7AAQhrAAhdgTIAAAAQAYgGAVgJIAGgDQBMghAbg8IADgEQAdg4gVg7IgIgSQgUgqgvgXQgNgHgRgFQgDgJgFgIIgHgKQgUgdgigLIgvgOIgDgBIgHAFIgFgEIgHgHIgxgOIg2gLQhBgNhKgGIgrgDQgygCgpAcQgPALgLANQgLANgIAPIgWgEIk4BCQguAJghAlQghAmgEAyIABAAQAKAoAmAdQAnAdAzAAIEaAAIBOgWQAOAMAQAGIgUgUQAfgLAWgjQARgZADgfICAAkIgGgMQgPgcgTgbQgigwgoghIAlADQAwADAuAHQgNAkgBAqIAAACQABAeAHAcIBWAZIAJAAQAHASAKAQQAiA2AyATQAVAJAWAIQgVANgYAGIAiAHQgvAMg0ABIjnAAIgGgHQgkAGgmABIg9AAIgHgJIAAAAQAHABgFgGQAAgDgFgHIgJgIQgJgCgPgOIg3glIjhAAIgtAdIgdAXQgHAIgCAFIgBAFQgJADAOgEIgHAGQgfgHgegMQhAgagogkIAAgQIAAAAQARgRAQgXQARgjAkgzQAwhFA7glID4ihIAIAAIA/ApIAMgGQBFgcBQAAQBjAABBAJQAvAJAkASIAPAIIASgHIAJgDQB9gpCTADQBtgCBgATIAggGIAFAGIgDgCQgKgCADADQgCACABAEIAAABQAcAGAaAJIAKADQA9AXAmA1QAqA4AABMQAAAOgBAOQAXAHAcABIALAAQAsAAAjgLQAhgLAZgTQANgIAMgOIgEgFIgrAAIgPABQgtABgeAFQglAJgXAMIgFACIgOgFQgUhBgBhKIAAgBQAwgpBNgdQBMgcBYAAIDBAAIBABOQAJgaAIgMIACgHIAkAtQAoAwAeBNQAVA5AGBAIACArIABAJQADAKAGAJQAIARALAIIAIAJIgDANQgXAMgbAKQhNAdhYAAIhQAAIgHgJIADAAQADAAAAgEQABgEgBgHQgJgFgKgWIh5iVIgIALIgnA5QgaA1gjAYQgbAWgxAUQg6AThPABQhCAAgugLgAF9k1QgHgjgTgcQgYgrgjgTgAPznlIAFAAQALAAgEAEQACAFAAAHg");
	this.shape_32.setTransform(1362.3,518);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("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");
	this.shape_33.setTransform(1385.6,556);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("ADTHIQgQgDgYgJQgMgEgIAAQgIAAgIAEQgHAFgFAKIgKAAIAAh9IAKAAQALA1AjAcQAiAbAnAAQAfAAASgOQASgPAAgUQAAgMgGgLQgIgLgOgKQgOgKgkgPQgygXgXgPQgVgQgNgTQgMgTABgYQgBgnAhgcQAggcAyAAQARAAARAEQANADATAIQASAIAIAAQAHAAAEgEQAEgEAEgPIAIAAIACBuIgKAAQgJgpgegZQgggagjAAQgcAAgQAOQgRANAAARQAAALAGAJQAIALASAMQAMAIAuAUQBCAdAWAZQAWAaABAgQAAAqgkAeQglAeg4AAQgQAAgQgEgAj4HAQglgQgOgYQgPgYAAgqIAAiiQAAgcgDgHQgEgHgIgEQgKgFgXABIAAgJIC/AAIAAAJIgKAAQgVAAgIAEQgIAEgDAHQgEAHAAAcIAACiQAAAtAIAOQAHAPASAJQAQAKAbAAQAeAAAVgMQAVgNALgVQAKgVAAg1IAAiHQAAgWgFgJQgGgKgHgEQgNgFgWAAIAAgJIB/AAIAAAJIgIAAQgOAAgKAFQgLAGgEALQgEAIAAAUIAAB+QAAA6gJAaQgIAagiAWQghAWg5AAQgxAAgZgMgAGXh8QgjgQgPgYQgPgZAAgpIAAiiQAAgdgDgHQgEgHgIgEQgKgEgXAAIAAgJIC/AAIAAAJIgKAAQgVAAgIAEQgIAEgDAHQgEAHAAAdIAACiQAAAsAHAPQAIAOARAKQARAJAbAAQAeAAAVgMQAUgMAMgVQAKgVAAg1IAAiHQAAgWgFgKQgGgJgHgEQgNgGgWAAIAAgJICAAAIAAAJIgIAAQgPAAgKAGQgLAFgFAMQgDAIAAAUIAAB9QAAA7gIAaQgJAagiAVQghAWg5AAQgxAAgagLgAiQiuQgrgwAAhBQAAhKA5gxQA3gxBRADQBZgDA4AxQA2AxAABKQAAA+gqAwQg2BAhjAAQhjAAg3g9gAhCmKQgXAmAABHQAABVAiAoQAXAdApAAQAcAAATgNQAYgPAOgjQANgiAAg3QAAhCgNggQgOghgWgNQgVgOgcAAQgxAAgaAvgAM9h5IAAgJIANAAQAPAAALgFQAHgDAEgJQACgFAAgZIAAkAIgaAAQglAAgSAOQgXAUgGAlIgKAAIAAhaIFMAAIAABaIgLAAQgIgfgLgOQgKgNgTgIQgKgFgbAAIgbAAIAAEAQAAAZADAGQAEAGAHAFIACABQAJAEAQAAIAMAAIAAAJgApxh5IAAgJQAaAAAIgEQAKgEAEgHQADgHAAgbIAAjXQAAgbgDgGQgEgHgKgFQgJgEgZAAIAAgJICxAAQBAAAAaAKQAbAKAPAVQAQAUAAAWQAAAYgUATQgTATgxALQA1ALAUAPQAfAXAAAjQAAAlghAZQgqAdhOAAgAnnkcIAAB3QgBANAIAHQAHAGAPAAQAWAAASgIQATgJAJgRQAKgQAAgUQAAgYgMgSQgMgSgVgIQgTgHgmAAIgFAAgAnnkvQAmAAATgIQASgIAKgOQAKgOAAgWQAAgWgKgOQgJgOgTgHQgSgHgnAAgAtth5IAAgJIAHAAQAVAAAJgFQAGgEAAgHIgCgJIgIgTIgUgpIiCAAIgQAgQgHAQAAALQAAAOAMAGQAHAEAeACIAAAJIh7AAIAAgJQATgCANgMQANgNATglICEkJIAFAAICFEQQAUAmAMAKQAKAIAQABIAAAJgAvYjpIBvAAIg3hyg");
	this.shape_34.setTransform(1412.4,593.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},283).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[]},19).wait(84));

	// MotionGuide
	this.instance_7 = new lib.Symbol6();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1560.4,712.2,1,1,0,0,0,362.1,196);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(263).to({_off:false},0).to({x:1564,y:712.8},19).to({_off:true},39).wait(84));

	// ShapeTween
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(0.1,0,1).p("ALORdIrThoIrVBhIh+rRIk8qSIKHlWIIRn5IINH9IKEFcIlDKQg");
	this.shape_35.setTransform(908.4,792.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF00FF").s().p("AgFP1IrVBhIh9rRIk8qSIKGlWIIRn5IINH9IKDFcIlCKQIiDLQg");
	this.shape_36.setTransform(908.4,792.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(0.1,0,1).p("Az0j9QE0jbFTjNQBHhHBIhFQDbjSDjjAQCUBxCZB6QCZB5CVCAQELCIEDCaQBWAzBUA0Qh5FjiZFxQg/GOhfGBQhegChggCQkggIkngZQjEAfjIAXQjJAXjFAPQhSkMhKkfQgZhggWhgQi3lliWlxg");
	this.shape_37.setTransform(940.6,751.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF00FF").s().p("At3KZQgZhggWhgQi3lliWlxQE0jbFTjNQBHhHBIhFQDbjSDjjAQCUBxCZB6QCZB5CVCAQELCIEDCaQBWAzBUA0Qh5FjiZFxQg/GOhfGBIi+gEQkggIkngZQjEAfjIAXQjJAXjFAPQhSkMhKkfg");
	this.shape_38.setTransform(940.5,751.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(0.1,0,1).p("A1UjwQEkkLFkjwQBLhOBPhMQDvjmD+jDQCnBkCuBzQCuBzCnCCQElCOEVCxQBcA7BYA7QhSF/iRGYQg8G2h7GaQhiAJhlAIQkwAYlAgMQjUAmjbAWQjbAWjVAGQh1kLhmkwQghhlgehmQjOmAiPmZg");
	this.shape_39.setTransform(972.8,710.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF00FF").s().p("Au3L0QghhlgehmQjOmAiPmZQEkkLFkjwQBLhOBPhMQDvjmD+jDQCnBkCuBzQCuBzCnCCQElCOEVCxQBcA7BYA7QhSF/iRGYQg8G2h7GaIjHARQkwAYlAgMQjUAmjbAWQjbAWjVAGQh1kLhmkwg");
	this.shape_40.setTransform(972.7,710.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(0.1,0,1).p("A20jkQEVk6F0kTQBQhVBWhTQEDj6EZjGQC5BWDEBtQDCBtC6CEQE+CTEoDJQBhBBBcBEQgqGaiKHBQg5HciXG0QhlAUhrASQlBA3lXACQjkAsjuAVQjuAVjlgCQiXkLiClAQgqhqgkhtQjomaiHnCg");
	this.shape_41.setTransform(1004.9,669.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF00FF").s().p("ArdWaQiYkLiBlAQgqhqglhtQjnmaiHnCQEVk6F0kTQBQhVBVhTQEDj6EZjGQC5BWDFBtQDCBtC6CEQE9CTEoDJQBiBBBcBEQgrGaiKHBQg4HciYG0QhlAUhqASQlBA3lYACQjjAsjvAVQjUATjNAAIgxAAg");
	this.shape_42.setTransform(1004.8,669.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(0.1,0,1).p("A4TjZQEGlqGEk1QBVhdBchZQEXkPE0jJQDMBIDZBnQDYBnDLCGQFYCYE6DhQBnBJBgBMQgDG1iCHpQg1IDi1HOQhoAfhwAcQlSBXlvAPQj1AzkAATQkBAUj0gLQi7kJiclRQgzhwgshyQj/m2iAnqg");
	this.shape_43.setTransform(1036.9,629);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF00FF").s().p("ArdYDQi7kJidlRQgyhwgthyQj/m2iAnqQEGlqGEk1QBVhdBchZQEXkPE1jJQDLBIDZBnQDYBnDLCGQFYCYE6DhQBnBJBgBMQgCG1iDHpQg1IDi0HOQhpAfhvAcQlSBXlwAPQj1AzkAATQijANieAAQhaAAhZgEg");
	this.shape_44.setTransform(1036.9,629);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(0.1,0,1).p("A53jQQD2mZGVlYQBZhkBjhgQErkkFPjLQDeA6DvBhQDtBhDdCHQFyCeFMD4QBtBRBjBUQAmHQh7ISQgyIpjRHnQhsAqh1AnQliB2mIAdQkEA6kUASQkTATkEgVQjekIi4liQg7h0gzh5QkYnRh4oSg");
	this.shape_45.setTransform(1069.5,588.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF00FF").s().p("ArjZqQjekIi4liQg7h0gzh5QkYnRh4oSQD2mZGVlYQBZhkBjhgQErkkFPjLQDeA6DvBhQDtBhDdCHQFyCeFMD4QBtBRBjBUQAmHQh7ISQgyIpjRHnQhsAqh1AnQliB2mIAdQkEA6kUASQiEAJiBAAQiLAAiHgLg");
	this.shape_46.setTransform(1069.5,588.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(0.1,0,1).p("A7ijHQDnnJGll7QBdhrBphnQFAk4FrjOQDwAsEEBbQECBbDvCJQGMCjFeEQQBzBYBnBcQBNHshzI5QgvJQjuIBQhvA2h6AwQlzCVmfArQkVBBkmARQknARkTgdQkBkHjTlzQhFh5g5h/Qkwnshxo6g");
	this.shape_47.setTransform(1102.7,548);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF00FF").s().p("ArvbRQkBkHjTlzQhFh5g5h/Qkwnshxo6QDnnJGll7QBdhrBphnQFAk4FrjOQDwAsEEBbQECBbDvCJQGMCjFeEQQBzBYBnBcQBNHshzI5QgvJQjuIBQhvA2h6AwQlzCVmfArQkVBBkmARQhvAHhsAAQizAAisgTg");
	this.shape_48.setTransform(1102.7,548);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(0.1,0,1).p("A9Ri/QDYn4G1mdQBihzBwhuQFTlMGHjRQEDAeEZBVQEXBVEBCKQGlCpFxEnQB4BgBrBlQB1IGhsJiQgsJ3kKIaQhyBBiAA7QmEC0m3A5QkkBHk6AQQk5AQkjgmQkjkGjvmDQhNh/hBiFQlIoHhqpjg");
	this.shape_49.setTransform(1136.3,507.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF00FF").s().p("Ar/c4QkjkGjvmDQhNh/hBiFQlIoHhqpjQDYn4G1mdQBihzBwhuQFTlMGHjRQEDAeEZBVQEXBVEBCKQGlCpFxEnQB4BgBrBlQB1IGhsJiQgsJ3kKIaQhyBBiAA7QmEC0m3A5QkkBHk6AQQhfAFhcAAQjWAAjLgbg");
	this.shape_50.setTransform(1136.3,507.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(0.1,0,1).p("A/Ci2QDIopHGm/QBmh7B2h0QFolgGhjUQEWAQEuBPQEtBPETCMQG+CuGDE/QB+BnBvBtQCcIhhjKLQgpKdknI0Qh2BLiFBFQmUDUnPBHQk0BNlNAPQlMAPkzguQlGkFkKmVQhWiEhHiKQlioihhqLg");
	this.shape_51.setTransform(1170.2,467.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF00FF").s().p("AsRefQlGkFkLmVQhWiEhHiKQlhoihiqLQDIopHGm/QBnh7B2h0QFnlgGijUQEVAQEvBPQEsBPETCMQG/CuGDE/QB+BnBvBtQCcIhhkKLQgpKdkmI0Qh2BLiGBFQmTDUnPBHQk0BNlNAPQhRAEhQAAQj2AAjogjg");
	this.shape_52.setTransform(1170.2,467.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(0.1,0,1).p("Egg1gCuQC5pYHWniQBriCB9h7QF7l1G9jWQEoACFEBJQFBBIEmCOQHYC0GVFWQCEBuBzB2QDDI8hcKzQgmLElDJNQh5BXiLBPQmkD0nnBTQlEBVlgAOQlfAOlCg4QlpkEkmmlQhfiJhOiRQl6o9haqzg");
	this.shape_53.setTransform(1204.2,426.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF00FF").s().p("EgMlAgFQlpkEkmmlQhfiJhOiRQl6o9haqzQC5pYHWniQBriCB9h7QF7l1G9jWQEoACFEBJQFBBIEmCOQHYC0GVFWQCEBuBzB2QDDI8hcKzQgmLElDJNQh5BXiLBPQmkD0nnBTQlEBVlgAOQhHAChFAAQkUAAkBgsg");
	this.shape_54.setTransform(1204.2,426.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(0.1,0,1).p("EgipgCmQCqqIHmoEQBwiJCDiCQGPmJHZjZQE6gMFZBDQFXBCE3CQQHyC5GnFuQCJB1B3B+QDrJYhULbQgiLqlgJnQh9BiiQBaQm1ESn/BiQlTBbl0ANQlxAMlShAQmMkDlCm2QhniPhViWQmSpYhTrcg");
	this.shape_55.setTransform(1238.4,386.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FF00FF").s().p("EgM6AhsQmMkDlCm2QhniPhViWQmSpYhTrcQCqqIHmoEQBwiJCDiCQGPmJHZjZQE6gMFZBDQFXBCE3CQQHyC5GnFuQCJB1B3B+QDrJYhULbQgiLqlgJnQh9BiiQBaQm1ESn/BiQlTBbl0ANQg8ACg7AAQkxAAkbg2g");
	this.shape_56.setTransform(1238.4,386.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(0.1,0,1).p("EgkdgCaQCaq4H3onQB0iQCKiIQGjmfH0jcQFMgZFvA9QFsA8FJCRQIMC/G5GFQCPB9B7CGQETJzhNMDQggMSl8KAQiABtiVBkQnGEyoWBvQlkBimHALQmEAMlihJQmvkCldnHQhwiUhcicQmqpzhLsEg");
	this.shape_57.setTransform(1272.5,345.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF00FF").s().p("EgNQAjWQmvkCldnHQhwiUhcicQmqpzhLsEQCaq4H3onQB0iQCKiIQGjmfH0jcQFMgZFvA9QFsA8FJCRQIMC/G5GFQCPB9B7CGQETJzhNMDQggMSl8KAQiABtiVBkQnGEyoWBvQlkBimHALQg3ABg2AAQlJAAkwg+g");
	this.shape_58.setTransform(1272.5,345.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(0.1,0,1).p("EgmTgCOQCLroIHpJQB5iYCQiPQG3myIQjfQFegnGEA2QGCA3FbCSQIlDFHMGcQCUCFB/COQE6KOhFMsQgcM4mYKaQiEB3ibBvQnWFRovB9QlzBomaAKQmXALlxhSQnSkAl5nYQh4iahjiiQnDqOhEssg");
	this.shape_59.setTransform(1306.8,304.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FF00FF").s().p("EgNmAlAQnSkAl5nYQh4iahjiiQnDqOhEssQCLroIHpJQB5iYCQiPQG3myIQjfQFegnGEA2QGCA3FbCSQIlDFHMGcQCUCFB/COQE6KOhFMsQgcM4mYKaQiEB3ibBvQnWFRovB9QlzBomaAKIhcABQllAAlHhIg");
	this.shape_60.setTransform(1306.8,304.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(0.1,0,1).p("EgoJgCBQB8sXIXprQB+igCWiVQHLnIIrjhQFxg1GZAwQGXAxFtCUQI/DKHeG0QCaCMCDCWQFiKqg+NUQgZNem1K0QiHCDigB4QnnFxpGCKQmEBvmtAJQmqAKmAhbQn1j/mUnpQiCifhqioQnaqpg9tVg");
	this.shape_61.setTransform(1341.2,263.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FF00FF").s().p("EgN9AmsQn1j/mUnpQiCifhqioQnaqpg9tVQB8sXIXprQB+igCWiVQHLnIIrjhQFxg1GZAwQGXAxFtCUQI/DKHeG0QCaCMCDCWQFiKqg+NUQgZNem1K0QiHCDigB4QnnFxpGCKQmEBvmtAJIhQABQl+AAlchSg");
	this.shape_62.setTransform(1341.2,263.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(0.1,0,1).p("Egp/gByQBstHIoqOQCCinCdicQHfncJGjkQGDhDGvAqQGsAqF/CWQJZDQHwHLQCgCUCGCeQGKLFg2N8QgWOFnRLNQiLCOimCDQn3GQpeCYQmTB2nAAIQm9AImRhkQoXj+mwn6QiKijhxiuQnzrFg1t8g");
	this.shape_63.setTransform(1375.5,222.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FF00FF").s().p("EgOVAoYQoXj+mwn6QiKijhxiuQnzrFg1t8QBstHIoqOQCCinCdicQHfncJGjkQGDhDGvAqQGsAqF/CWQJZDQHwHLQCgCUCGCeQGKLFg2N8QgWOFnRLNQiLCOimCDQn3GQpeCYQmTB2nAAIIhCAAQmZAAlzhcg");
	this.shape_64.setTransform(1375.5,222.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(0.1,0,1).p("Egr1gBjQBct3I4qwQCHivCkiiQHznxJhjnQGVhRHFAlQHBAkGRCXQJyDVIDHjQClCbCKCnQGyLgguOlQgTOrnuLnQiPCZirCNQoHGvp2CmQmjB8nUAHQnPAHmghsQo7j9nLoLQiTiph3i0QoMrfgtulg");
	this.shape_65.setTransform(1409.9,181.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF00FF").s().p("EgOsAqGQo7j9nLoLQiTiph3i0QoMrfgtulQBct3I4qwQCHivCkiiQHznxJhjnQGVhRHFAlQHBAkGRCXQJyDVIDHjQClCbCKCnQGyLgguOlQgTOrnuLnQiPCZirCNQoHGvp2CmQmjB8nUAHIg4ABQmwAAmHhmg");
	this.shape_66.setTransform(1409.9,181.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(0.1,0,1).p("EgtsgBUQBNumJIrTQCMi2CqipQIHoFJ9jpQGnhfHaAeQHXAeGjCZQKMDbIVH6QCrCiCOCvQHYL7gmPNQgQPToKMAQiSCkiwCXQoZHPqNCzQmzCDnnAGQniAGmwh1Qpdj8nnocQiciuh+i6Qokr6gmvOg");
	this.shape_67.setTransform(1444.3,140.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF00FF").s().p("EgPEAr0Qpdj8nnocQiciuh+i6Qokr6gmvOQBNumJIrTQCMi2CqipQIHoFJ9jpQGnhfHaAeQHXAeGjCZQKMDbIVH6QCrCiCOCvQHYL7gmPNQgQPToKMAQiSCkiwCXQoZHPqNCzQmzCDnnAGIgrAAQnLAAmchvg");
	this.shape_68.setTransform(1444.3,140.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(0.1,0,1).p("EgvjgBDQA+vWJYr2QCQi9CxiwQIboZKYjtQG6htHwAZQHrAYG1CaQKmDgInISQCxCqCRC3QIBMWgfP2QgNP5onMZQiVCwi2ChQooHuqmDBQnDCKn5AFQn2AEm/h+QqAj7oCosQiliziFjAQo9sWgev1g");
	this.shape_69.setTransform(1478.8,99.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FF00FF").s().p("EgPcAtiQqAj7oCosQiliziFjAQo9sWgev1QA+vWJYr2QCQi9CxiwQIboZKYjtQG6htHwAZQHrAYG1CaQKmDgInISQCxCqCRC3QIBMWgfP2QgNP5onMZQiVCwi2ChQooHuqmDBQnDCKn5AFIgjAAQniAAmwh6g");
	this.shape_70.setTransform(1478.8,99.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(0.1,0,1).p("EgxagAzQAuwFJpsZQCVjEC3i3QIvouK0jvQHMh7IFATQIAASHHCcQLADlI5IqQC2CxCWDAQIoMxgXQeQgJQfpEM0QiZC6i7CsQo5INq+DOQnTCRoMADQoIAEnPiHQqkj6odo9Qiti4iNjGQpUsxgXweg");
	this.shape_71.setTransform(1513.2,58.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF00FF").s().p("EgP0AvRQqkj6odo9Qiti4iNjGQpUsxgXweQAuwFJpsZQCVjEC3i3QIvouK0jvQHMh7IFATQIAASHHCcQLADlI5IqQC2CxCWDAQIoMxgXQeQgJQfpEM0QiZC6i7CsQo5INq+DOQnTCRoMADIgbABQn5gBnDiDg");
	this.shape_72.setTransform(1513.2,58.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(0.1,0,1).p("EgzRgAiQAfw1J5s7QCZjMC+i9QJDpCLPjyQHeiJIbAMQIVANHaCdQLYDrJMJBQC8C5CZDIQJQNMgPRGQgGRGphNNQicDGjAC1QpKItrVDcQnjCYogACQobACneiQQrHj4o4pOQi3i+iTjMQpttMgPxGg");
	this.shape_73.setTransform(1547.7,16.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FF00FF").s().p("EgQMAxAQrHj4o4pOQi3i+iTjMQpttMgPxGQAfw1J5s7QCZjMC+i9QJDpCLPjyQHeiJIbAMQIVANHaCdQLYDrJMJBQC8C5CZDIQJQNMgPRGQgGRGphNNQicDGjAC1QpKItrVDcQnjCYogACIgSAAQoRAAnWiOg");
	this.shape_74.setTransform(1547.7,16.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(0.1,0,1).p("Eg1JgAQQAQxlKJteQCejTDEjEQJYpXLqj0QHwiXIwAGQIrAGHrCgQLzDwJeJZQDBDACeDPQJ3NogIRuQgDRtp9NnQifDQjGDAQpaJMruDqQnyCeozABQouACnuiZQrpj4pUpeQi/jDibjSQqFtngIxug");
	this.shape_75.setTransform(1582.2,-24.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FF00FF").s().p("EgQlAywQrpj4pUpeQi/jDibjSQqFtngIxuQAQxlKJteQCejTDEjEQJYpXLqj0QHwiXIwAGQIrAGHrCgQLzDwJeJZQDBDACeDPQJ3NogIRuQgDRtp9NnQifDQjGDAQpaJMruDqQnyCeozABIgLAAQonAAnqiXg");
	this.shape_76.setTransform(1582.2,-24.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(0.1,0,1).p("EA3BAAAQAAWzwIQHQwHQH2yAAQ2yAAwHwHQwHwHAA2zQAA2yQHwHQQHwHWyAAQWyAAQHQHQQIQHAAWyg");
	this.shape_77.setTransform(1616.7,-65.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FF00FF").s().p("Egm5Am6QwHwIAA2yQAA2yQHwHQQHwHWyAAQWzAAQHQHQQHQHAAWyQAAWywHQIQwHQH2zAAQ2yAAwHwHg");
	this.shape_78.setTransform(1616.7,-65.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_36},{t:this.shape_35}]},241).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_42},{t:this.shape_41}]},1).to({state:[{t:this.shape_44},{t:this.shape_43}]},1).to({state:[{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_48},{t:this.shape_47}]},1).to({state:[{t:this.shape_50},{t:this.shape_49}]},1).to({state:[{t:this.shape_52},{t:this.shape_51}]},1).to({state:[{t:this.shape_54},{t:this.shape_53}]},1).to({state:[{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_58},{t:this.shape_57}]},1).to({state:[{t:this.shape_60},{t:this.shape_59}]},1).to({state:[{t:this.shape_62},{t:this.shape_61}]},1).to({state:[{t:this.shape_64},{t:this.shape_63}]},1).to({state:[{t:this.shape_66},{t:this.shape_65}]},1).to({state:[{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_72},{t:this.shape_71}]},1).to({state:[{t:this.shape_74},{t:this.shape_73}]},1).to({state:[{t:this.shape_76},{t:this.shape_75}]},1).to({state:[{t:this.shape_78},{t:this.shape_77}]},1).to({state:[]},59).wait(84));

	// CheeseLeft
	this.instance_8 = new lib.Tween25("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(129.7,598.7);
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween26("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(780.7,610.7);

	this.instance_10 = new lib.Tween27("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(1014.6,620.8);
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween28("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(419.7,622.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},201).to({state:[{t:this.instance_9}]},19).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},19).to({state:[]},81).wait(84));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(201).to({_off:false},0).to({_off:true,x:780.7,y:610.7},19).wait(185));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(221).to({_off:false},0).to({_off:true,x:419.7,y:622.9},19).wait(165));

	// CheeseRight
	this.instance_12 = new lib.Tween23("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(1410.7,610.7);
	this.instance_12._off = true;

	this.instance_13 = new lib.Tween24("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(780.7,610.7);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(201).to({_off:false},0).to({_off:true,x:780.7},19).wait(185));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(201).to({_off:false},19).wait(1).to({startPosition:0},0).to({x:138},19).to({_off:true},81).wait(84));

	// GreenLeft
	this.instance_14 = new lib.Tween17("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(128.1,372.7);
	this.instance_14._off = true;

	this.instance_15 = new lib.Tween18("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(761.1,372.7);

	this.instance_16 = new lib.Tween21("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(950.2,390.9);
	this.instance_16._off = true;

	this.instance_17 = new lib.Tween22("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(413.2,374.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_14}]},161).to({state:[{t:this.instance_15}]},19).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},19).to({state:[]},121).wait(84));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(161).to({_off:false},0).to({_off:true,x:761.1},19).wait(225));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(181).to({_off:false},0).to({_off:true,x:413.2,y:374.9},19).wait(205));

	// GreenRight
	this.instance_18 = new lib.Tween19("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(1397.1,372.7);
	this.instance_18._off = true;

	this.instance_19 = new lib.Tween20("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(761.1,372.7);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(161).to({_off:false},0).to({_off:true,x:761.1},19).wait(225));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(161).to({_off:false},19).wait(1).to({x:716.9},0).to({x:139.3},19).to({_off:true},121).wait(84));

	// TaroLeft
	this.instance_20 = new lib.Tween9("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(152.6,140.7);
	this.instance_20._off = true;

	this.instance_21 = new lib.Tween10("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(751.2,132.4);

	this.instance_22 = new lib.Tween15("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(1023.3,110.3);
	this.instance_22._off = true;

	this.instance_23 = new lib.Tween16("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(443.5,132.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_20}]},122).to({state:[{t:this.instance_21}]},18).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},19).to({state:[]},161).wait(84));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(122).to({_off:false},0).to({_off:true,x:751.2,y:132.4},18).wait(265));
	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(141).to({_off:false},0).to({_off:true,x:443.5,y:132.3},19).wait(245));

	// TaroRight
	this.instance_24 = new lib.Tween11("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(1458.3,139.4);
	this.instance_24._off = true;

	this.instance_25 = new lib.Tween12("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(751.2,132.4);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(122).to({_off:false},0).to({_off:true,x:751.2,y:132.4},18).wait(265));
	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(122).to({_off:false},18).wait(1).to({startPosition:0},0).to({x:143.5},19).to({_off:true},161).wait(84));

	// Motion
	this.instance_26 = new lib.Symbol7();
	this.instance_26.parent = this;
	this.instance_26.setTransform(375.2,813.7,1,1,0,0,0,178.2,118.7);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(84).to({_off:false},0).wait(1).to({rotation:9.4,x:437.8,y:714.4},0).wait(1).to({rotation:18.7,x:500.5,y:615.1},0).wait(1).to({rotation:28.1,x:563.1,y:515.9},0).wait(1).to({rotation:37.5,x:591.1,y:542.2},0).wait(1).to({rotation:46.9,x:619,y:568.6},0).wait(1).to({rotation:56.2,x:647,y:595},0).wait(1).to({rotation:65.6,x:675,y:621.4},0).wait(1).to({rotation:75,x:703,y:647.8},0).wait(1).to({rotation:36,x:726.2,y:595.8},0).wait(1).to({rotation:-3,x:749.4,y:543.8},0).wait(1).to({rotation:-42,x:772.6,y:491.9},0).wait(1).to({rotation:-81,x:795.9,y:439.9},0).wait(1).to({rotation:-120,x:819,y:387.9},0).wait(1).to({rotation:-96,x:849.9,y:435.4},0).wait(1).to({rotation:-72,x:880.6,y:483},0).wait(1).to({rotation:-48,x:911.4,y:530.6},0).wait(1).to({rotation:-24,x:942.2,y:578.3},0).wait(1).to({rotation:0,x:973,y:625.9},0).wait(1).to({rotation:18,x:1006.5,y:579.1},0).wait(1).to({rotation:36,x:1040.1,y:532.3},0).wait(1).to({rotation:54,x:1073.6,y:485.5},0).wait(1).to({rotation:72,x:1107.2,y:438.7},0).wait(1).to({rotation:90,x:1140.9,y:391.9},0).wait(1).to({rotation:105.9,x:1184.8,y:374.3},0).wait(1).to({rotation:121.9,x:1228.8,y:356.6},0).wait(1).to({rotation:137.8,x:1272.7,y:339},0).wait(1).to({rotation:153.8,x:1316.8,y:321.4},0).wait(1).to({rotation:169.7,x:1360.8,y:303.9},0).wait(1).to({x:1410.8,y:308.7},0).wait(1).to({x:1460.8,y:313.5},0).wait(1).to({x:1510.7,y:318.3},0).wait(1).to({x:1560.7,y:323.1},0).wait(1).to({x:1610.7,y:327.9},0).wait(1).to({x:1634.7,y:347.2},0).wait(1).to({x:1658.7,y:366.5},0).wait(1).to({x:1682.7,y:385.9},0).wait(1).to({_off:true},1).wait(283));

	// NextMenu
	this.NextBtn = new lib.NextMenu();
	this.NextBtn.name = "NextBtn";
	this.NextBtn.parent = this;
	this.NextBtn.setTransform(1683.1,302.3,1,1,0,0,0,93.2,80.2);
	this.NextBtn._off = true;
	new cjs.ButtonHelper(this.NextBtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.NextBtn).wait(103).to({_off:false},0).to({scaleX:0.72,scaleY:0.71,x:1485.1,y:667.3},18).to({_off:true},1).wait(283));

	// Text
	this.instance_27 = new lib.Symbol8();
	this.instance_27.parent = this;
	this.instance_27.setTransform(1007.2,-390.6,0.939,1,0,0,0,446.7,64.2);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(84).to({_off:false},0).to({x:995,y:197.2},18).to({_off:true},20).wait(283));

	// Information
	this.instance_28 = new lib.Information();
	this.instance_28.parent = this;
	this.instance_28.setTransform(46,67,2.206,2.645);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(84).to({_off:false},0).to({_off:true},38).wait(283));

	// MotionStop
	this.instance_29 = new lib.Symbol9();
	this.instance_29.parent = this;
	this.instance_29.setTransform(1463.6,638.7,1,1,0.8,0,0,312.9,313);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(40).to({_off:false},0).wait(44).to({_off:true},1).wait(320));

	// MotionCartoon
	this.instance_30 = new lib.Symbol9();
	this.instance_30.parent = this;
	this.instance_30.setTransform(1694.5,406.1,1,1,0,0,0,312.9,313.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(1).to({regX:313,regY:313,rotation:-3,x:1589.6,y:406},0).wait(1).to({rotation:-6,x:1484.7},0).wait(1).to({rotation:-9,x:1471.4,y:416.4},0).wait(1).to({rotation:-12,x:1458,y:426.8},0).wait(1).to({rotation:-15,x:1444.7,y:437.3},0).wait(1).to({rotation:-18.7,x:1430.9,y:447.2},0).wait(1).to({rotation:-22.4,x:1417.1,y:457.2},0).wait(1).to({rotation:-26.1,x:1403.4,y:467.3},0).wait(1).to({rotation:-29.8,x:1389.7,y:477.2},0).wait(1).to({rotation:-33.6,x:1369.6,y:489.8},0).wait(1).to({rotation:-37.3,x:1349.7,y:502.3},0).wait(1).to({rotation:-41.1,x:1329.6,y:514.8},0).wait(1).to({rotation:-44.8,x:1309.7,y:527.2},0).wait(1).to({rotation:-49.8,x:1295.5,y:540.2},0).wait(1).to({rotation:-54.8,x:1281.4,y:553.2},0).wait(1).to({rotation:-59.9,x:1267.2,y:566.1},0).wait(1).to({rotation:-62.9,x:1257.2,y:577.7},0).wait(1).to({rotation:-65.9,x:1247.1,y:589.2},0).wait(1).to({rotation:-68.9,x:1237.2,y:600.7},0).wait(1).to({rotation:-71.9,x:1227.1,y:612.2},0).wait(1).to({rotation:-74.9,x:1217.1,y:623.7},0).wait(1).to({rotation:-77.9,y:642},0).wait(1).to({rotation:-80.9,y:660.4},0).wait(1).to({rotation:-83.9,x:1217.2,y:678.7},0).wait(1).to({rotation:-57.7,x:1202.1,y:751.4},0).wait(1).to({rotation:-31.4,x:1187.2,y:824},0).wait(1).to({rotation:-5.2,x:1228.5,y:751.6},0).wait(1).to({rotation:21,x:1269.7,y:679.1},0).wait(1).to({rotation:13.5,x:1282.2,y:645.3},0).wait(1).to({rotation:6,x:1294.7,y:611.6},0).wait(1).to({rotation:4.3,x:1316.4,y:600.7},0).wait(1).to({rotation:2.6,x:1338.2,y:590},0).wait(1).to({rotation:0.8,x:1359.9,y:579.1},0).wait(1).to({x:1397.4},0).wait(1).to({x:1434.9},0).wait(1).to({x:1448.7,y:609.1},0).wait(1).to({x:1462.4,y:639.1},0).wait(1).to({_off:true},1).wait(366));

	// Stop_Text
	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#66FF00").s().p("AnMIeQgJgEgIgHQgIgHgFgJQgHgJAAgLQAAgYADgiIAHhGIAHg/IAEgoQAIhKAHhVQAHhWAEhjIACg5IAChHIAChDIACgtQAIiIA1AAQAKAAAKAGQAJAGAIAKQAHAJAEAMQAEANABALQgBAZgEAdIgKA8IgKA7QgFAdAAAYQAAAVAEAAQArhaAphEQAphEApgtQAagdAagXQAZgZAbgRQAZgSAdgJQAbgKAegBQAWAAAXAMQAXANATAaQARAaANAlQAMAkgBAvQABAjgKAkQgLAkgQAjQgRAigXAgQgWAggYAcQAzgXA1ggQA1ggA1glQA1glAzgoIBihOIAWgTQAJgIAKAAQAJAAABAKQACAJAAAKQAAAWgNAfQgDAIgIAJIgQARIgQAQIgMAKQgTATghAZIhGAyIhTA3IhWA1IhVAxIhKAqQgYAMgWARIgrAeQgWANgVAKQgWAJgYAAQgOAAgNgEQgNgEgKgIQgLgJgFgNQgIgNAAgTQAAgKAHgJQAFgIAJgHQAKgHAKgFQAMgGAKgEQALgFAQgFIAdgKIAfgMIAYgLQATgMARgTQASgSAPgWQAOgXANgXIAXgvIAOghIAMglQAFgTADgQQADgRAAgMQgBgxgSgdQgSgegbAAQgRAAgWAOQgWANgXASQgWATgTAVQgUAUgMAOQgbAjgZApQgZApgWAsQgXAqgTAsIgkBTQgIAhgGApQgIApgDAwQgHBhgDBLQgDBMgLA/QgEAXgOASQgOARgWAAQgHAAgKgEg");
	this.shape_79.setTransform(1415.5,267.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#66FF00").s().p("Al2FUQgXgRgSgaQgRgZgLgeQgLgdAAgYQAAg5AOg1QANg2AWgxQAWgxAegvQAdgwAhgwQASgaAYgZQAYgZAZgVQAagTAagNQAbgNAYAAQATAAAOAHQAOAGANAMQAMAMAOARIAdApQAFAGAaANQAYAMAiAMQAiAMAlAJQAmAJAeAAQAfAAAagCQAZgEAZgFQAYgGAYgKQAYgKAbgOQADALAAAHQAAAMgFANQgFANgHAMQgHALgJALQgJAKgJAGQgWAQgnANQgoANg6AAQguAAgwgOQgvgOgrggQAOAZAEAWQAEAYAAAfQAAA3gZBAQgYBAgkA3QgmA3grAkQgYAWgcAPQgdAPgfAKQgfAJgiAGQghAEgjAAQgYgBgWgSgAidjkQgIAEgKAKQgJAJgJANQgKAMgJAOIgiAyIgdAuQgOAWgNAaQgNAWgNAgQgFAMgEASQgFASgDATQgDATgBATIgCAhQAAAKAGAOQAFANAJANQAJALAMAJQALAJALAAQAfAAAWgEQAWgDATgIQASgIATgOQATgPAZgWQANgLAMgOIAXgfIAWggIAUgiQAGgLAEgQIAHgeIAEgdIAAgSQABgUgDgZQgDgagIgWQgIgXgMgOQgNgPgSAEQgcgNgTgPQgSgOgKAAQgHAAgJAGg");
	this.shape_80.setTransform(1330.7,249);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#66FF00").s().p("An6JEQgLgFgIgJQgIgJgFgLQgGgLAAgKQAAgKADgUIAGgxIAIg2IAGg1IAKhnIAKhyIAJhwIAHhjIACgmIACgzIADg8IACg9IADg4IABgsQAAgUACgRQACgRADgRQACgRAGgQQAEgRAIgVQADgGAFgHQAGgJAHgGQAHgHAJgEQAIgEAIAAQASAAAPAQQAOAQAAAdQAAAKgDAPIgHAiIgGAfIgFAXQgFAegEAlIgHBOIgGBOIgEBDIgEBBIgGA7IgFA8IgFBBQgEA0gGApQgFAoAAAdQAAAFAEAFQAEAGADAAIACAAQAGgIAIgQIAUgiIAXgnQAMgVALgQIAagmQANgUAQgVIAegqIAegmQATgVAYgZQAXgYAagUQAZgUAZgNQAagNAXAAQAFABAHACQAHADAHAGQAGAFAGAIQAGAHADAKQAMAnAGAmQAFAmAFAqIAIBMQAEAmAHAfQAGAgALAUQALAUAQAAQBMAABFgnQAlgVAbgUQAagTAXgUQAXgVAWgZIA1g6QA8hAAJAAQAKABAAAdQAAAPgTAgIgRAcIgVAhIgXAeIgUAYQgjAqgoAnQgoAmgqAfQgrAegtATQguASgvABQgkAAgcgQQgcgPgPgjQgQgkgIgrQgIgsgFgyIgCgXIgCgjIgEgnIgGgkQgDgRgEgKQgEgLgFAAQgTABghAeQghAcgnAxQgnAwgpA9QgpA9gkA+QgfA2gZA3IgtBgQgKATgMAHQgMAIgEAAQgKgBgJgFg");
	this.shape_81.setTransform(1238.9,235.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#66FF00").s().p("AjzImQgZgFgZgKQgZgJgRgNQgRgOAAgPQAAgKACgNQABgNAFgOQAEgMAFgJQAFgJAHAAQAMAAAOAFIAfAKQARAFAZAGQAZAEAkAAQAkAAAogJQAogJAmgPQAlgPAigTQAjgTAbgWIAdgWQAPgOANgQQAOgPAJgSQAKgSAAgTQAAgbgjgZQghgYgkgOQgjgOgcgIQghgKgpgQQgqgRgygWQhUgkg5hIQg6hHAAhlQgBgvAagsQAagsAsgkQAtgmA4gdQA4gdA8gQIAegHQARgDATgCIAkgFQARgCANAAQAOAAAWADQAXADAXADQAYAFAVAGQAVAHANAIQAfATASAcQARAbAAAaIgBAXIgFAcIgIAaQgFAMgGAHQgOAVgmAAQAAgxgMggQgFgPgPgKQgOgKgSgIQgRgHgTgDQgSgDgNAAQgdgBgbACQgcACgZAFQgaAEgaAIQgaAJgdANQgWALgYAOQgZAPgTASQgVATgPAWQgOAXgEAaQgBAUALAZQAMAaAVAZQATAYAbAUQAZAUAdAJIAWAKIAnAOIAlAPIAVAIQCLApBDA5QBDA4AABSQAAAbgKAaQgKAagPAZQgQAXgRAUQgSAUgQANQgRARgXARQgXASgaARQgZAQgcAOQgcAPgcAKQgaAKgeAKQgeAIgeAHQgeAHgbADQgcAEgVABQgQgBgZgFg");
	this.shape_82.setTransform(1128.6,237.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#66FF00").s().p("AmuFVQgSgTgMgaQgMgbgFgdQgHgfAAgXQAAgvANgxQALgyATgtQASgvAYgrQAWgqAWggQAXgjAhghQAfgjAigaQAjgbAhgQQAhgRAZAAIAcAAQAOAAAOACQAOACAOAEQANAEALAHQAFAFAHAMQAIAMAGAPQAHAPADAPQAFAPAAAIQAAAYgJAnIgSBaQgIApAAAqQAAAXAGAaQAHAaANAUQAMAVASAOQASAMAXAAQAlAAAngSQAngSApgfQAoghAogpQAngpAngwIALgOIAQgUQAIgLAIgIQAIgJAEAAQAMAAABAeQgBAIgBAMIgGAYIgHAXQgEALgFAGIgKAQIgPAVIgTAXIgWAYIhJBPQgmAmgmAeQgnAdgpARQgqARgyAAQgWAAgXgJQgXgLgTgRQgUgSgPgZQgPgZgGgeIglAtIgoAuQgWAYgWAWQgYAWgXATQgOAJgSAMQgTALgUAKQgVAKgVAGQgUAGgRAAQgYAAgTgSgAiSj4QgUAIgTAOQgTAOgSASQgRASgQAUQgOAQgQAZQgQAYgPAdQgPAdgOAgQgOAfgLAfQgKAfgGAdQgGAcAAAYIACATQABAMADAMQADAKAHAIQAGAIAIAAQAcAAArgVQA5gcAvgxQAvgzAghBQAxhkgBhyIgBgeQgBgRgHgMQgHgMgJABIgUAAQgWAAgTAIg");
	this.shape_83.setTransform(998.7,250.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#66FF00").s().p("Ak/JXQgTgKAAgXQAAgOAKgMQASgVAQgPQAPgPARgOIAkgcIAugjIAxgmIATgPQAmggAdghQAdggAUgiQAshEAAhWQAAgPgFgZQgGgZgJgWQgKgYgOgSQgNgRgRAAQgSAAgSAIQgSAIgSAOQgRANgRASIgiAiQggAkgeAtQgfAsghA4QgRAcgMAdQgMAdgIAcQgJAbgEAYQgEAZgBARIgCA6QgCAVgNAMQgNAMgTAAQgcAAgLgZQgMgZAAgyIAAgZIABgnIACguIABguIACglIABgWIAFhXIAGhUQADgqAFguIAKhiIALhlIAKhcQAGgsAHgrQAHgrAKgrIAEgTQAEgPAGgOQAFgOAHgMQAGgLAHAAIALAAQAGgBAIABQAHABAGADQAHACAGAIQAFAHAEAJQADAJABAJIACARIAAAOQAAAKgGAbIgPBJQgPBQgOBVQgPBUgJBTIgGA9IgFBEIgFBHQgDAlAAAhQATgiAUgrQAUgrAegpQAdgoAdggQAcggAigdQBEg5A5AAQAigBAfAUQAeAUAXAhQAXAgANApQAMAnAAAnQAAAagSBDQgJAggIASIgQAfIAyglIA3goIA2goIAwgjIAPgLIAegXIAkgbIAegWQAcgVAFAAQALAAAFALQAEAKAAALQAAAXgRAYQgLAQgVAUQgUAUgeAXIg/AxIhJAzIhMA0QglAagnAZIg/ArIgnAcQgNAKgPASIgkAoQgxA6g9A0QggAcgqAAQgXAAgTgLg");
	this.shape_84.setTransform(913.8,234.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#66FF00").s().p("Al2FUQgXgRgSgaQgRgZgLgeQgLgdAAgYQAAg5AOg1QANg2AWgxQAWgxAegvQAdgwAhgwQASgaAYgZQAYgZAZgVQAagTAagNQAbgNAYAAQATAAAOAHQAOAGANAMQAMAMAOARIAdApQAFAGAaANQAYAMAiAMQAiAMAlAJQAmAJAeAAQAfAAAagCQAZgEAZgFQAYgGAYgKQAYgKAbgOQADALAAAHQAAAMgFANQgFANgHAMQgHALgJALQgJAKgJAGQgWAQgnANQgoANg6AAQguAAgwgOQgvgOgrggQAOAZAEAWQAEAYAAAfQAAA3gZBAQgYBAgkA3QgmA3grAkQgYAWgcAPQgdAPgfAKQgfAJgiAGQghAEgjAAQgYgBgWgSgAidjkQgIAEgKAKQgJAJgJANQgKAMgJAOIgiAyIgdAuQgOAWgNAaQgNAWgNAgQgFAMgEASQgFASgDATQgDATgBATIgCAhQAAAKAGAOQAFANAJANQAJALAMAJQALAJALAAQAfAAAWgEQAWgDATgIQASgIATgOQATgPAZgWQANgLAMgOIAXgfIAWggIAUgiQAGgLAEgQIAHgeIAEgdIAAgSQABgUgDgZQgDgagIgWQgIgXgMgOQgNgPgSAEQgcgNgTgPQgSgOgKAAQgHAAgJAGg");
	this.shape_85.setTransform(826.4,249);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#66FF00").s().p("AiWIlQgqgUAAg6QAAgjAPgQQAQgQAoAAQAtAAAhARQAiASAWAAQAOAAAogLQAogMAXgSQAagUAcggQAbggAYgkQAWglAOgmQAOgmAAgiQAAgwghgmQghgngtgUQgtgWggAAQgxAAgaAJQgZAIgYANQgYANgRAAQgUAAgVgOQgUgPAAgXQAAgUAFgOQAFgPAJgKQAIgLALgGQALgGAMgDIAbgGIAegEQAfgDAGgEQArgdAsgnQAYgUAUgVQATgVASgWQAkgsAAgcQAAglgbgUQgbgTg+AAQgUAAgYACQgXACgYAFQgYAFgYAHQgZAGgYAJQgYAIgWALQgWALgTANQgTAMgPAPQgPAPgJAPQgFAJgCAVQgCAUgCAsIgBAxIgCA5IgCA4IgCAnIgDAhIgGAuQgGAzgDAmQgEAmAAAiIABAbIACAlIACAlIAAAaQAAA+gOAdQgOAdghAAQhJAAAAiRQAAgRAPhiQAPhiABgYIAGg+IAEg3IAGg+IAHhSIAFguIABgZQAAgSgEgUIgDgUIgBgNQAAg1AQgmQAWgyANgBQAVgDATgFIAlgMIB+gyIA8gWQAbgLAfgEQAPgDAWgBIA0gBIAiAAQANgBAVAIQAVAIAWAMQAWANASARQATAPAHARQAIAPAHAfIAEAcQACAMAAAKQAAA6gqA9QgrA9hRBNQAtAKAqAZQAqAXAgAhQAgAgAUAmQATAmAAAnQAAAQgEAfIgFAlQgIAlgVAsQgVAsgcAoQgaAogbAfQgbAfgTAPQgTAQgeARQgeAPgoAPQhQAdg7AAQg0AAgrgVg");
	this.shape_86.setTransform(727,237.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79}]},40).to({state:[{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79}]},44).to({state:[]},1).wait(320));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AsyMyQlSlSAAngIAAAAQAAnfFSlSIAAAAQFUlTHeAAIAAAAQHgAAFSFTIAAAAQFTFSAAHfIAAAAQAAHglTFSIAAAAQlSFTngAAIAAAAQneAAlUlTg");
	var mask_graphics_1 = new cjs.Graphics().p("AsyMyQlSlTAAnfIAAAAQAAneFSlUIAAAAQFUlSHeAAIAAAAQHgAAFSFSIAAAAQFTFUAAHeIAAAAQAAHflTFTIAAAAQlSFTngAAIAAAAQneAAlUlTg");
	var mask_graphics_2 = new cjs.Graphics().p("AsyMyQlSlSAAngIAAAAQAAneFSlUIAAAAQFUlSHeAAIAAAAQHgAAFSFSIAAAAQFTFUAAHeIAAAAQAAHglTFSIAAAAQlSFTngAAIAAAAQneAAlUlTg");
	var mask_graphics_3 = new cjs.Graphics().p("AsyMyQlSlTAAnfIAAAAQAAneFSlUIAAAAQFUlSHeAAIAAAAQHgAAFSFSIAAAAQFTFUAAHeIAAAAQAAHflTFTIAAAAQlSFTngAAIAAAAQneAAlUlTg");
	var mask_graphics_4 = new cjs.Graphics().p("AsyMyQlSlSAAngIAAAAQAAnfFSlTIAAAAQFUlSHeAAIAAAAQHgAAFSFSIAAAAQFTFTAAHfIAAAAQAAHglTFSIAAAAQlSFTngAAIAAAAQneAAlUlTg");
	var mask_graphics_5 = new cjs.Graphics().p("AsxMyQlTlSAAngIAAAAQAAnfFTlTIAAAAQFSlSHfAAIAAAAQHgAAFSFSIAAAAQFTFTAAHfIAAAAQAAHglTFSIAAAAQlSFTngAAIAAAAQnfAAlSlTg");
	var mask_graphics_6 = new cjs.Graphics().p("AsyMyQlSlSAAngIAAAAQAAnfFSlTIAAAAQFTlSHfAAIAAAAQHfAAFTFSIAAAAQFTFTAAHfIAAAAQAAHglTFSIAAAAQlTFTnfAAIAAAAQnfAAlTlTg");
	var mask_graphics_7 = new cjs.Graphics().p("AsyMyQlSlSAAngIAAAAQAAnfFSlTIAAAAQFUlSHeAAIAAAAQHfAAFTFSIAAAAQFTFTAAHfIAAAAQAAHglTFSIAAAAQlTFTnfAAIAAAAQneAAlUlTg");
	var mask_graphics_8 = new cjs.Graphics().p("AsyMyQlSlSAAngIAAAAQAAnfFSlTIAAAAQFTlSHfAAIAAAAQHfAAFTFSIAAAAQFTFTAAHfIAAAAQAAHglTFSIAAAAQlTFTnfAAIAAAAQnfAAlTlTg");
	var mask_graphics_9 = new cjs.Graphics().p("AsyMyQlSlSAAngIAAAAQAAnfFSlTIAAAAQFTlSHfAAIAAAAQHfAAFTFSIAAAAQFTFTAAHfIAAAAQAAHglTFSIAAAAQlTFTnfAAIAAAAQnfAAlTlTg");
	var mask_graphics_10 = new cjs.Graphics().p("AsyMyQlSlSAAngIAAAAQAAnfFSlTIAAAAQFTlSHfAAIAAAAQHfAAFTFSIAAAAQFTFTAAHfIAAAAQAAHglTFSIAAAAQlTFTnfAAIAAAAQnfAAlTlTg");
	var mask_graphics_11 = new cjs.Graphics().p("AsyMyQlSlSAAngIAAAAQAAnfFSlTIAAAAQFUlSHeAAIAAAAQHgAAFSFSIAAAAQFTFTAAHfIAAAAQAAHglTFSIAAAAQlSFTngAAIAAAAQneAAlUlTg");
	var mask_graphics_12 = new cjs.Graphics().p("AsyMyQlSlSAAngIAAAAQAAnfFSlTIAAAAQFUlSHeAAIAAAAQHfAAFTFSIAAAAQFTFTAAHfIAAAAQAAHglTFSIAAAAQlTFTnfAAIAAAAQneAAlUlTg");
	var mask_graphics_13 = new cjs.Graphics().p("AsyMyQlSlSAAngIAAAAQAAnfFSlTIAAAAQFTlSHfAAIAAAAQHfAAFTFSIAAAAQFTFTAAHfIAAAAQAAHglTFSIAAAAQlTFTnfAAIAAAAQnfAAlTlTg");
	var mask_graphics_14 = new cjs.Graphics().p("AsyMyQlSlSAAngIAAAAQAAnfFSlTIAAAAQFTlSHfAAIAAAAQHfAAFTFSIAAAAQFTFTAAHfIAAAAQAAHglTFSIAAAAQlTFTnfAAIAAAAQnfAAlTlTg");
	var mask_graphics_15 = new cjs.Graphics().p("AsyMyQlSlTAAnfIAAAAQAAnfFSlTIAAAAQFTlSHfAAIAAAAQHfAAFTFSIAAAAQFTFTAAHfIAAAAQAAHflTFTIAAAAQlTFTnfAAIAAAAQnfAAlTlTg");
	var mask_graphics_16 = new cjs.Graphics().p("AsyMyQlSlTAAnfIAAAAQAAneFSlUIAAAAQFTlSHfAAIAAAAQHgAAFSFSIAAAAQFTFUAAHeIAAAAQAAHflTFTIAAAAQlSFTngAAIAAAAQnfAAlTlTg");
	var mask_graphics_17 = new cjs.Graphics().p("AsyMyQlSlSAAngIAAAAQAAneFSlUIAAAAQFUlSHeAAIAAAAQHfAAFTFSIAAAAQFTFUAAHeIAAAAQAAHglTFSIAAAAQlTFTnfAAIAAAAQneAAlUlTg");
	var mask_graphics_18 = new cjs.Graphics().p("AsxMyQlTlSAAngIAAAAQAAneFTlUIAAAAQFSlSHfAAIAAAAQHfAAFTFSIAAAAQFTFUAAHeIAAAAQAAHglTFSIAAAAQlTFTnfAAIAAAAQnfAAlSlTg");
	var mask_graphics_19 = new cjs.Graphics().p("AsyMyQlSlTAAnfIAAAAQAAnfFSlTIAAAAQFUlSHeAAIAAAAQHfAAFTFSIAAAAQFTFTAAHfIAAAAQAAHflTFTIAAAAQlTFTnfAAIAAAAQneAAlUlTg");
	var mask_graphics_20 = new cjs.Graphics().p("AsyMyQlSlTAAnfIAAAAQAAnfFSlTIAAAAQFUlSHeAAIAAAAQHfAAFTFSIAAAAQFTFTAAHfIAAAAQAAHflTFTIAAAAQlTFTnfAAIAAAAQneAAlUlTg");
	var mask_graphics_21 = new cjs.Graphics().p("AsyMyQlSlTAAnfIAAAAQAAnfFSlTIAAAAQFTlSHfAAIAAAAQHfAAFTFSIAAAAQFTFTAAHfIAAAAQAAHflTFTIAAAAQlTFTnfAAIAAAAQnfAAlTlTg");
	var mask_graphics_22 = new cjs.Graphics().p("AsyMyQlSlTAAnfIAAAAQAAnfFSlTIAAAAQFUlSHeAAIAAAAQHfAAFTFSIAAAAQFTFTAAHfIAAAAQAAHflTFTIAAAAQlTFTnfAAIAAAAQneAAlUlTg");
	var mask_graphics_23 = new cjs.Graphics().p("AsxMyQlTlTAAnfIAAAAQAAnfFTlTIAAAAQFSlSHfAAIAAAAQHfAAFTFSIAAAAQFTFTAAHfIAAAAQAAHflTFTIAAAAQlTFTnfAAIAAAAQnfAAlSlTg");
	var mask_graphics_24 = new cjs.Graphics().p("AsyMyQlSlTAAnfIAAAAQAAnfFSlTIAAAAQFTlSHfAAIAAAAQHfAAFTFSIAAAAQFTFTAAHfIAAAAQAAHflTFTIAAAAQlTFTnfAAIAAAAQnfAAlTlTg");
	var mask_graphics_25 = new cjs.Graphics().p("AsyMyQlSlTAAnfIAAAAQAAnfFSlTIAAAAQFUlSHeAAIAAAAQHgAAFSFSIAAAAQFTFTAAHfIAAAAQAAHflTFTIAAAAQlSFTngAAIAAAAQneAAlUlTg");
	var mask_graphics_26 = new cjs.Graphics().p("AsyMyQlSlTAAnfIAAAAQAAnfFSlTIAAAAQFTlSHfAAIAAAAQHfAAFTFSIAAAAQFTFTAAHfIAAAAQAAHflTFTIAAAAQlTFTnfAAIAAAAQnfAAlTlTg");
	var mask_graphics_27 = new cjs.Graphics().p("AsyMyQlSlTAAnfIAAAAQAAnfFSlTIAAAAQFUlSHeAAIAAAAQHfAAFTFSIAAAAQFTFTAAHfIAAAAQAAHflTFTIAAAAQlTFTnfAAIAAAAQneAAlUlTg");
	var mask_graphics_28 = new cjs.Graphics().p("AsyMyQlSlTAAnfIAAAAQAAnfFSlTIAAAAQFUlSHeAAIAAAAQHgAAFSFSIAAAAQFTFTAAHfIAAAAQAAHflTFTIAAAAQlSFTngAAIAAAAQneAAlUlTg");
	var mask_graphics_29 = new cjs.Graphics().p("AsxMyQlTlTAAnfIAAAAQAAnfFTlTIAAAAQFSlSHfAAIAAAAQHfAAFTFSIAAAAQFTFTAAHfIAAAAQAAHflTFTIAAAAQlTFTnfAAIAAAAQnfAAlSlTg");
	var mask_graphics_30 = new cjs.Graphics().p("AsyMyQlSlTAAnfIAAAAQAAnfFSlTIAAAAQFUlSHeAAIAAAAQHfAAFTFSIAAAAQFTFTAAHfIAAAAQAAHflTFTIAAAAQlTFTnfAAIAAAAQneAAlUlTg");
	var mask_graphics_31 = new cjs.Graphics().p("AsyMyQlSlTAAnfIAAAAQAAnfFSlTIAAAAQFUlSHeAAIAAAAQHfAAFTFSIAAAAQFTFTAAHfIAAAAQAAHflTFTIAAAAQlTFTnfAAIAAAAQneAAlUlTg");
	var mask_graphics_32 = new cjs.Graphics().p("AsyMyQlSlTAAnfIAAAAQAAnfFSlTIAAAAQFUlSHeAAIAAAAQHfAAFTFSIAAAAQFTFTAAHfIAAAAQAAHflTFTIAAAAQlTFTnfAAIAAAAQneAAlUlTg");
	var mask_graphics_33 = new cjs.Graphics().p("AsyMyQlSlTAAnfIAAAAQAAnfFSlTIAAAAQFTlSHfAAIAAAAQHfAAFTFSIAAAAQFTFTAAHfIAAAAQAAHflTFTIAAAAQlTFTnfAAIAAAAQnfAAlTlTg");
	var mask_graphics_34 = new cjs.Graphics().p("AsyMyQlSlTAAnfIAAAAQAAnfFSlTIAAAAQFUlSHeAAIAAAAQHfAAFTFSIAAAAQFTFTAAHfIAAAAQAAHflTFTIAAAAQlTFTnfAAIAAAAQneAAlUlTg");
	var mask_graphics_35 = new cjs.Graphics().p("AsyMyQlSlTAAnfIAAAAQAAnfFSlSIAAAAQFUlTHeAAIAAAAQHfAAFTFTIAAAAQFTFSAAHfIAAAAQAAHflTFTIAAAAQlTFTnfAAIAAAAQneAAlUlTg");
	var mask_graphics_36 = new cjs.Graphics().p("AsyMyQlSlTAAnfIAAAAQAAneFSlUIAAAAQFUlSHeAAIAAAAQHfAAFTFSIAAAAQFTFUAAHeIAAAAQAAHflTFTIAAAAQlTFTnfAAIAAAAQneAAlUlTg");
	var mask_graphics_37 = new cjs.Graphics().p("AsyMyQlSlSAAngIAAAAQAAnfFSlSIAAAAQFUlTHeAAIAAAAQHfAAFTFTIAAAAQFTFSAAHfIAAAAQAAHglTFSIAAAAQlTFTnfAAIAAAAQneAAlUlTg");
	var mask_graphics_38 = new cjs.Graphics().p("AsyMyQlSlSAAngIAAAAQAAnfFSlSIAAAAQFUlTHeAAIAAAAQHfAAFTFTIAAAAQFTFSAAHfIAAAAQAAHglTFSIAAAAQlTFTnfAAIAAAAQneAAlUlTg");
	var mask_graphics_39 = new cjs.Graphics().p("AsyMyQlSlTAAnfIAAAAQAAneFSlUIAAAAQFUlSHeAAIAAAAQHfAAFTFSIAAAAQFTFUAAHeIAAAAQAAHflTFTIAAAAQlTFTnfAAIAAAAQneAAlUlTg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:725.3,y:580.9}).wait(1).to({graphics:mask_graphics_1,x:725.3,y:501.1}).wait(1).to({graphics:mask_graphics_2,x:725.3,y:421.3}).wait(1).to({graphics:mask_graphics_3,x:725.3,y:341.5}).wait(1).to({graphics:mask_graphics_4,x:725.3,y:261.7}).wait(1).to({graphics:mask_graphics_5,x:745.2,y:261.7}).wait(1).to({graphics:mask_graphics_6,x:765.1,y:261.7}).wait(1).to({graphics:mask_graphics_7,x:785,y:261.7}).wait(1).to({graphics:mask_graphics_8,x:804.9,y:261.7}).wait(1).to({graphics:mask_graphics_9,x:824.8,y:261.7}).wait(1).to({graphics:mask_graphics_10,x:845.3,y:261.7}).wait(1).to({graphics:mask_graphics_11,x:865.9,y:261.7}).wait(1).to({graphics:mask_graphics_12,x:886.4,y:261.7}).wait(1).to({graphics:mask_graphics_13,x:907,y:261.7}).wait(1).to({graphics:mask_graphics_14,x:927.5,y:261.7}).wait(1).to({graphics:mask_graphics_15,x:954.2,y:257.4}).wait(1).to({graphics:mask_graphics_16,x:981,y:253}).wait(1).to({graphics:mask_graphics_17,x:1007.7,y:248.7}).wait(1).to({graphics:mask_graphics_18,x:1034.5,y:244.3}).wait(1).to({graphics:mask_graphics_19,x:1061.2,y:240}).wait(1).to({graphics:mask_graphics_20,x:1081.7,y:240}).wait(1).to({graphics:mask_graphics_21,x:1102.3,y:240}).wait(1).to({graphics:mask_graphics_22,x:1122.8,y:240}).wait(1).to({graphics:mask_graphics_23,x:1143.4,y:240}).wait(1).to({graphics:mask_graphics_24,x:1163.9,y:240}).wait(1).to({graphics:mask_graphics_25,x:1186.4,y:240}).wait(1).to({graphics:mask_graphics_26,x:1208.8,y:240}).wait(1).to({graphics:mask_graphics_27,x:1231.3,y:240}).wait(1).to({graphics:mask_graphics_28,x:1253.8,y:240}).wait(1).to({graphics:mask_graphics_29,x:1276.2,y:240}).wait(1).to({graphics:mask_graphics_30,x:1294.9,y:240}).wait(1).to({graphics:mask_graphics_31,x:1313.5,y:240}).wait(1).to({graphics:mask_graphics_32,x:1332.1,y:240}).wait(1).to({graphics:mask_graphics_33,x:1350.7,y:240}).wait(1).to({graphics:mask_graphics_34,x:1369.3,y:240}).wait(1).to({graphics:mask_graphics_35,x:1369.3,y:285.6}).wait(1).to({graphics:mask_graphics_36,x:1369.3,y:331.1}).wait(1).to({graphics:mask_graphics_37,x:1369.3,y:376.7}).wait(1).to({graphics:mask_graphics_38,x:1369.3,y:422.3}).wait(1).to({graphics:mask_graphics_39,x:1369.3,y:467.9}).wait(366));

	// Text
	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#66FF00").s().p("AnNJCQgKgFgHgHQgJgIgGgJQgFgKAAgMQAAgZACgkIAHhLIAHhDIAEgrQAJhPAHhaQAGhbAFhrIABg8IAChMIADhIIABgvQAJiRA1AAQAKAAAKAHQAJAGAIALQAHAJAEANQAFANgBAMQABAbgFAfIgKA/IgKBAQgFAfAAAaQAAAWAEAAQAqhgAqhIQAphJApgwQAagfAbgZQAZgaAbgSQAagTAcgKQAbgLAeAAQAWgBAXANQAXAOATAcQASAbAMAoQAMAmgBAyQABAmgKAmQgLAmgQAlQgRAlgWAiQgWAigYAdQAygXA1gjQA1giA2gnQA1goAzgrIBihTIAWgUQAJgIAKAAQAKAAABAKQACAKAAALQAAAXgOAhQgDAIgHAKIgQATIgRAQIgLALQgUAVghAZQgfAagnAcIhTA6IhXA5QgsAdgpAYQgpAZghATQgZANgVASIgrAgQgWAOgWAKQgVAKgYAAQgPAAgMgEQgNgEgLgJQgLgJgFgOQgIgPABgTQAAgLAFgJQAGgJAJgHQAJgIALgGIAWgLIAbgKIAdgLIAfgMQAOgGAKgGQAUgNARgUQARgTAPgYQAPgYANgZIAXgxIAOgkIAMgoQAFgTADgSQADgSAAgMQgBg1gSgfQgSgfgbAAQgRAAgWAOQgXAOgWAUQgXAUgTAWQgUAVgLAPQgdAlgYAtQgZArgWAuQgXAugTAuIglBYIgNBQQgIArgEA0QgGBngEBQQgDBRgKBDQgEAYgOATQgOATgXAAQgHAAgJgEg");
	this.shape_87.setTransform(1415.4,276.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#66FF00").s().p("Al3FrQgXgTgSgbQgSgcgKgfQgLgfAAgaQAAg9ANg4QANg5AXg0QAWg1AegzQAdgyAhgzQATgcAYgbQAXgbAagVQAagVAagNQAagOAYAAQAUAAAOAGQAOAIANAMQANAMANAUIAdAqQAGAHAZAOQAYANAjANQAiAMAlAKQAmAJAeAAQAfAAAagCQAagDAYgGQAYgHAYgKQAYgLAcgPQACALAAAIQAAANgEAOQgFAOgHAMIgQAYQgKAKgJAIQgVARgoANQgoAOg6AAQgvAAgvgPQgvgPgsgjQAOAbAFAYQADAZAAAiQAAA6gYBEQgYBEglA8QgmA6grAnQgYAWgcAQQgdARgfAKQggAKghAGQgiAEgjAAQgYAAgWgTgAidjzQgJAFgJAKQgJAJgJAPQgKAMgJAPIgiA2QgQAYgOAYQgOAYgNAbQgNAYgNAhQgFAOgEATQgFATgDAUQgDAVgBAUIgCAkQAAAJAGAPQAFAOAJAOQAJAMAMAJQALAKALAAQAfAAAWgDQAWgEATgJQATgIATgQQATgPAZgZQAMgLANgPIAXggIAWgjIAUgkQAGgLAEgRQAEgRADgQIAEgeIAAgTQABgWgDgbQgDgbgIgXQgIgZgMgPQgNgPgSADQgdgOgSgPQgSgQgKABQgIgBgIAHg");
	this.shape_88.setTransform(1330.2,257.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#66FF00").s().p("An8JqQgKgGgIgJQgJgJgFgLQgFgNAAgLQAAgKADgWIAGgzIAHg6IAGg4IAKhuIALh5IAJh5IAHhpIABgoIADg3IAChAIADhAIACg8IABgvIADgnQABgTADgRQADgSAFgSQAFgSAIgWQADgGAFgJQAGgIAHgHQAHgHAIgEQAIgGAJAAQASAAAOASQAPARAAAgQAAAJgDARIgHAjIgGAiIgFAZQgFAfgEAoIgHBTIgGBSIgEBJIgEBEIgGA/IgFBAIgFBFQgFA5gFArQgGArAAAeQAAAFAFAGQADAGADAAIADAAQAFgIAJgRIAUglIAXgpIAXgoIAagoIAdgsIAfgsIAegpQATgXAXgaQAXgZAagWQAZgVAagOQAagOAXAAQAFAAAHAEQAHADAHAGQAGAFAGAIQAGAIADALQANApAFApQAGAoAEAuIAIBQQAEApAHAhQAHAiALAVQAKAVARAAQBLAABGgqQAlgWAbgUQAagVAYgWQAWgWAXgbIA1g9QA7hEAKAAQAJAAAAAfQAAAQgSAiQgHAOgKARIgWAiIgWAgIgUAaQgkAtgoApQgoApgqAhQgrAggtAUQgvATgvABQgkAAgcgRQgcgQgPgmQgQglgIguQgIgvgFg1IgCgZIgCglIgEgqIgGgmQgDgSgEgLQgEgLgFAAQgTAAghAgQghAfgoA0QgnAzgpBBQgpBAgkBDQgfA6gZA7IgtBlQgLAUgLAIQgMAIgEAAQgKAAgKgGg");
	this.shape_89.setTransform(1238.2,243.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#66FF00").s().p("Aj0JKQgagGgYgKQgZgKgRgOQgSgPAAgQQAAgJADgPQACgOAEgOQAEgOAFgJQAFgKAHAAQAMAAAOAGIAfAKQASAGAZAGQAYAEAkAAQAlAAAogJQAngKAmgQQAlgQAjgUQAjgVAbgWIAdgYQAQgPANgRQAOgQAJgTQAJgTAAgVQAAgdgigaQgigagjgPQgkgOgbgJQgigKgpgSQgqgRgzgZQhTgmg6hMQg6hMAAhsQgBgyAaguQAagvAsgnQAtgoA5geQA4ggA9gRIAdgHQARgEATgCIAkgFQARgCANAAQAOAAAXADQAWACAYAFQAYAFAVAGQAVAHANAJQAfAVASAdQASAdAAAbQAAAKgCAPIgFAdIgIAcQgFANgFAIQgPAWgmAAQAAg0gMgiQgFgQgPgLQgOgLgSgIQgSgHgSgDQgSgEgNAAQgeAAgbABQgbACgaAFQgaAFgaAJQgbAIgdAPQgWALgYAQQgYAPgUAUQgUAUgPAYQgPAXgEAcQgBAWAMAbQAMAbAUAaQAUAaAaAVQAaAWAcAKIAXAKIAmAQIAmAQIAWAIQCKArBEA9QBDA8AABYQAAAcgKAcQgKAbgQAaQgPAZgSAWQgSAVgPAOQgSASgXATQgWASgaASQgaARgcAPQgbAQgcALQgbALgeAKQgfAKgdAGQgeAHgbAFQgcAEgWAAQgQAAgZgGg");
	this.shape_90.setTransform(1127.5,245.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#66FF00").s().p("AmvFrQgSgTgMgcQgMgdgGggQgGgfAAgZQAAgzAMg1QALg0ATgwQATgyAXguQAXgsAWgkQAXgkAggkQAgglAjgcQAigcAhgSQAhgSAaAAIAcAAQAOABAOACQAOABAOAFQANAEALAIQAFAEAHANQAIANAGARQAHAQAEAPQAEAQAAAKQAAAZgJApIgSBhQgJAqAAAuQAAAYAHAcQAHAaANAXQAMAWATAOQARAOAXAAQAmAAAngTQAngUApghQAogjAogrQAogsAmgzIALgPIAQgWQAIgMAIgIQAIgJAEAAQANAAAAAfIgCAWIgFAaIgHAZIgJASIgKAQIgQAXIgTAZIgVAZIhLBUQgkApgnAfQgnAfgqATQgqASgxgBQgXAAgXgKQgXgKgTgTQgUgUgPgaQgPgagGghIgmAxIgoAxQgWAZgWAYQgXAXgYAUIggAXQgTAMgUALQgVAJgUAHQgVAHgRgBQgZAAgSgTgAiSkIQgVAIgTAQQgTAOgRAUQgSASgQAWQgPARgPAbQgQAZgPAfQgPAfgOAiQgOAggLAiQgKAhgGAfQgGAfAAAYIABAVQACAMADAMQADAMAHAIQAFAJAJgBQAcAAAqgVQA6gfAvg0QAvg1AhhGQAwhqAAh6IgBggQgBgTgHgMQgHgNgKABIgTAAQgWAAgTAJg");
	this.shape_91.setTransform(997.2,258.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#66FF00").s().p("Ak/J/QgUgLAAgZQAAgPAKgMQASgXAQgQQAPgQARgPIAkgdIAuglIAygpIATgRQAmgiAdgiQAdgjAVgkQArhIAAhbQAAgQgFgbQgGgbgJgYQgKgagNgSQgOgTgRAAQgTAAgRAJQgSAIgSAPQgSAOgQATIgiAlQggAngeAvQgfAvgiA7QgQAegNAfQgMAfgIAeQgJAdgEAaQgEAagBASIgCA+QgCAWgNANQgNANgTAAQgcAAgMgaQgMgbAAg2IABgaIABgqIACgxIABgxIACgnIABgYIAEhcIAGhaQAEgtAFgwIAJhpIALhsIALhiQAFgvAIguQAHgtAKguIAEgVQAEgPAFgPQAGgPAHgMQAGgNAHAAIALAAIAOAAQAHABAGADQAHADAGAIQAGAHADAKQADAJABAKIACATIAAAOQAAALgGAdIgPBOQgPBVgOBaQgPBagJBYIgFBCIgHBIQgCAlgCAnQgCAngBAjQATgkAUguQAUguAegsQAegqAcgiQAdgiAigfQBEg9A5AAQAigBAfAVQAeAVAYAjQAXAjANAsQAMApgBAqQAAAcgSBGQgIAjgJATIgPAhIAygnIA3grIA2grIAwglIAPgLIAegZIAkgdIAfgXQAcgXAFAAQALAAAFAMQAEALAAAMQAAAYgRAZQgMASgUAVQgVAVgdAZIhAA0QgiAagmAcIhNA4IhMA2QgnAbgZATIgnAdQgNALgPATIgkArQgxA+g9A4QghAdgqAAQgWAAgTgLg");
	this.shape_92.setTransform(912.1,241.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#66FF00").s().p("Al3FrQgXgTgSgbQgSgcgKgfQgLgfAAgaQAAg9ANg4QANg5AXg0QAWg1AegzQAdgyAhgzQATgcAYgbQAXgbAagVQAagVAagNQAagOAYAAQAUAAAOAGQAOAIANAMQANAMANAUIAdAqQAGAHAZAOQAYANAjANQAiAMAlAKQAmAJAeAAQAfAAAagCQAagDAYgGQAYgHAYgKQAYgLAcgPQACALAAAIQAAANgEAOQgFAOgHAMIgQAYQgKAKgJAIQgVARgoANQgoAOg6AAQgvAAgvgPQgvgPgsgjQAOAbAFAYQADAZAAAiQAAA6gYBEQgYBEglA8QgmA6grAnQgYAWgcAQQgdARgfAKQggAKghAGQgiAEgjAAQgYAAgWgTgAidjzQgJAFgJAKQgJAJgJAPQgKAMgJAPIgiA2QgQAYgOAYQgOAYgNAbQgNAYgNAhQgFAOgEATQgFATgDAUQgDAVgBAUIgCAkQAAAJAGAPQAFAOAJAOQAJAMAMAJQALAKALAAQAfAAAWgDQAWgEATgJQATgIATgQQATgPAZgZQAMgLANgPIAXggIAWgjIAUgkQAGgLAEgRQAEgRADgQIAEgeIAAgTQABgWgDgbQgDgbgIgXQgIgZgMgPQgNgPgSADQgdgOgSgPQgSgQgKABQgIgBgIAHg");
	this.shape_93.setTransform(824.4,257.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#66FF00").s().p("AiWJJQgrgWAAg9QAAgmAQgQQAPgSApAAQAtAAAgATQAjASAXAAQANAAApgLQAngMAYgUQAZgVAcgiQAcgiAXgnQAXgnAOgpQAOgoAAgkQAAg0gigoQghgpgsgWQgugXggAAQgxAAgaAJQgZAJgZAOQgXAOgSAAQgTAAgVgPQgVgQAAgZQAAgVAFgPQAGgQAIgLQAJgLALgGQALgHAMgDQAMgEAOgCQAOgDARgCQAfgDAGgEQAqgfAugqQAXgVAUgWQAUgXASgYQAjguABgeQAAgogbgVQgcgUg+AAQgUAAgXACQgYACgYAGQgYAEgZAIQgYAHgYAJQgZAJgVALQgXAMgTAOQgTANgPAQQgPAPgIARQgGAJgBAWQgDAWgCAvIgBA0IgCA9IgBA8IgDAqIgDAiIgFAxQgHA3gDAoQgDApgBAjIABAeIACAnIACAnIABAcQgBBCgOAfQgOAfghAAQhJAAAAibQAAgSAOhoQAQhoABgaIAGhCIAEg6IAFhDIAIhXIAFgyIABgaQAAgSgEgXIgDgUIgBgPQAAg4AQgoQAVg2AOAAQAVgEAUgFIAkgNIB/g1IA8gYQAbgMAegEQARgDAVgBQAXgCAdAAIAjAAQANAAAVAIQAVAIAWAOQAWAOASARQATARAHASQAJAQAFAgIAFAfQACANAAAKQAAA+gqBBQgrBAhSBTQAtALArAaQAqAZAhAjQAfAiAUAoQATApAAAqQAAARgEAhIgFAnQgIAngVAvQgVAvgbArQgbAqgbAiQgbAggTAQQgUASgeARQgdARgpAPQhRAfg6AAQg0AAgrgWg");
	this.shape_94.setTransform(724.7,244.4);

	var maskedShapeInstanceList = [this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87}]}).to({state:[]},40).wait(365));

	// Masking (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EgolAwEMAAAhgHMBRLAAAMAAABgHg");
	mask_1.setTransform(351.1,355.5);

	// Opening
	this.instance_31 = new lib.Opening();
	this.instance_31.parent = this;
	this.instance_31.setTransform(66,32,2.411,2.776);

	var maskedShapeInstanceList = [this.instance_31];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(4).to({x:-459,y:38},0).wait(5).to({x:-995,y:33},0).wait(5).to({x:57,y:-594},0).wait(5).to({x:-465,y:-1214},0).wait(5).to({x:63,y:-2460},0).wait(5).to({x:-466,y:-1836},0).wait(5).to({x:-1544,y:-1847},0).wait(10).to({x:66,y:32},0).wait(4).to({x:-459,y:38},0).wait(5).to({x:-995,y:33},0).wait(5).to({x:57,y:-594},0).wait(5).to({x:-465,y:-1214},0).wait(5).to({x:63,y:-2460},0).wait(5).to({x:-466,y:-1836},0).wait(5).to({x:-1544,y:-1847},0).wait(5).to({_off:true},1).wait(321));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(806.5,367,1955.7,936.6);
// library properties:
lib.properties = {
	id: '7DD274C3BC9FDB44B59D6997CB730AC8',
	width: 1509,
	height: 730,
	fps: 15,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/CheeseDrink.png?1576048459320", id:"CheeseDrink"},
		{src:"images/Click.png?1576048459320", id:"Click"},
		{src:"images/GreenDrink.png?1576048459320", id:"GreenDrink"},
		{src:"images/Information.png?1576048459320", id:"Information"},
		{src:"images/Motion.png?1576048459320", id:"Motion"},
		{src:"images/NextButton.png?1576048459320", id:"NextButton"},
		{src:"images/Open.png?1576048459320", id:"Open"},
		{src:"images/Opening.png?1576048459320", id:"Opening"},
		{src:"images/TaroDrink.png?1576048459320", id:"TaroDrink"},
		{src:"components/lib/jquery-2.2.4.min.js?1576048459320", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1576048459320", id:"sdk/anwidget.js"},
		{src:"components/video/src/video.js?1576048459320", id:"an.Video"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['7DD274C3BC9FDB44B59D6997CB730AC8'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// Virtual camera API : 

AdobeAn.VirtualCamera = new function() {
	var _camera = new Object();
	function VirtualCamera(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined )
	{
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VirtualCamera.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VirtualCamera.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VirtualCamera.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VirtualCamera.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VirtualCamera.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VirtualCamera.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VirtualCamera.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VirtualCamera.prototype.resetZoom = function() {
	this.setZoom(100);
};

VirtualCamera.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VirtualCamera.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VirtualCamera.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VirtualCamera.prototype.resetRotation = function() {
this.setRotation(0);
};

VirtualCamera.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VirtualCamera.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VirtualCamera.prototype.getZDepth = function() {
	return this.camera.depth;
}
VirtualCamera.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VirtualCamera.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VirtualCamera.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
if(this.camera.pinToObject != undefined) {
this.camera.pinToObject.pinOffsetX = offsetX;
this.camera.pinToObject.pinOffsetY = offsetY;
this.camera.pinToObject.pinOffsetZ = offsetZ;
}
};

VirtualCamera.prototype.unpinCamera = function() {
this.camera.pinToObject = undefined;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VirtualCamera(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
VirtualCamera.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};
}

function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;