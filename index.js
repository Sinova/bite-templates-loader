let bite = require('bite-templates');
let fs   = require('fs');

module.exports = function(content) {
	if (this.cacheable) {
		this.cacheable();
	}

	return "module.exports = " + bite(content).toString();
};
