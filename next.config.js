const path = require('path');

module.exports = {
	webpack: function (config) {
		config.resolve.alias = {
			...config.resolve.alias,
			'@components': path.resolve('./components'),
			'@public': path.resolve('./public'),
		};
		return config;
	},
};
