let movies = [];
while(true){
	let movieN = prompt("enter the name of movie");
	let movieR = prompt("enter the imdb rating of the movie");

	if(movieN === null || movieR === null){
		break;
	}else{
		movies.push({
			title:movieN,
			rating:Number(movieR), 
		});
	}
}

console.log("all ratings under 7:");
for(r of movies){
	if(r.rating < 7){
		console.log(`${r.title} (${r.rating})`);
	}
}
console.log("all ratings above 7:");
for(r of movies){
	if(r.rating >= 7){
		console.log(`${r.title} (${r.rating})`);
		break;
	}
}
// console.log(movies);