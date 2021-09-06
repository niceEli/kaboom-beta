module.exports = {
	"@font-face": [
		{
			"font-family": "IBM Plex Mono",
			"src": `url("/site/fonts/IBMPlexMono-Regular.ttf") format("truetype")`,
		},
		{
			"font-family": "Necto Mono",
			"src": `url("/site/fonts/NectoMono-Regular.otf") format("opentype")`,
		},
	],
	"*": {
		"padding": "0",
		"margin": "0",
		"box-sizing": "border-box",
		"font-family": "inherit",
	},
	"html": {
		"width": "100%",
		"height": "100%",
		"font-family": "Necto Mono",
		"color": "#333333",
	},
	"body": {
		"width": "100%",
		"height": "100%",
	},
	"pre": {
		"overflow": "scroll",
		"font-family": "IBM Plex Mono",
		"background": "#fafafa",
		"padding": "16px",
		"border": "solid 2px #eaeaea",
		"border-radius": "12px",
	},
	"code": {
		"font-family": "IBM Plex Mono",
	},
	"blockquote": {
		"color": "#999999",
		"padding-left": "24px",
		"border-left": "solid 3px #cccccc",
	},
};