"use strict";

var Benchmark = require('node_modules/benchmark-pages/lib/benchmark');

var pages = {
	"main": {
		url: "www.sweetpixelstudios.com",
		weight: 3
	}
};

var engines = {
	"google": "https://www.google.com",
	"bing": "http://www.bing.com"
};

function main() {
	var benchmark = new Benchmark(engines, pages, { iterations: 2 });
	benchmark.runMultiple(
		[
			1, 10, //burning in is useful for dev sites: the following passes will not wait for cache/pool filling etc.
			1, 2, 4, 8//, 16, 32, 64, 128, 256, 512, 1024
		],
		Benchmark.statisticsDisplay.showCliTable,
		function () {
			console.log("Done benchmarking");
		}
	);
}

main();
