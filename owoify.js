var faces=["(・`ω´・)",";;w;;","owo","UwU",">w<","^w^"];

function handleText(text, addRandomFaces) 
{

	var v = text;

	v = v.replace(/(?:r|l)/g, "w");
	v = v.replace(/(?:R|L)/g, "W");
	v = v.replace(/n([aeiou])/g, 'ny$1');
	v = v.replace(/N([aeiou])/g, 'Ny$1');
	v = v.replace(/N([AEIOU])/g, 'Ny$1');
	v = v.replace(/ove/g, "uv");

	
	var exclamationPointCount = 0;
	var i;
	var stringsearch = "!";
	//for loop counts the # of individual exclamation points
	for(var i=0; i < v.length; i++) {
		stringsearch===v[exclamationPointCount++]
	};
	for (i = 0; i < exclamationPointCount; i++) {
			v = v.replace("!", " "+ faces[Math.floor(Math.random()*faces.length)]+ " ");
    }
    if(addRandomFaces){
        v += faces[Math.floor(Math.random()*faces.length)];
    }
	return (v);
}

module.exports = handleText;