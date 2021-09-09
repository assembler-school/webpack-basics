module.exports = {
	mozjpeg: {
		progressive: true,
		quality: 50,
	},
	pngquant: {
		speed: 8,
		quality: [0.3, 0.5],
		strip: true,
	},
	gifsicle: {
		optimizationLevel: 3,
		interlaced: true,
		colors: 256,
	},
	svgo: {
		name: "preset-default",
		params: {
			overrides: {
				removeViewBox: {
					active: false,
				},
				addAttributesToSVGElement: {
					params: {
						attributes: [{ xmlns: "http://www.w3.org/2000/svg" }],
					},
				},
			},
		},
	},
};
