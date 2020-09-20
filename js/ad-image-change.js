//****************AUTO IMAGE CHANGE*****************
//change image in ad-image box after 5 seconds
var images = [
	"img/assorted-t-shirts.jpg",
  "img/chick-sunglasses.jpg",
  "img/posed-man.jpg",
  "img/women-statement-shirt.jpg"
];
var current = 0;

setInterval(function(){

  $('#flip').attr('src', images[current]);
  current = (current < images.length - 1)? current + 1: 0;

},3000); /*3000 = 3 sec*/
