/**
 * Notes:
 * It's interesting to note that these exercises build on top of each other.
 *
 * "Looping a triangle" introduces the concept of building up strings before
 * displaying it.
 *
 * "FizzBuzz" introduces diplaying different things depending on the condition.
 *
 * "Chess board" combines the two concepts introduced by the previous exercises
 * with a bit more creativity.
 *
 */


/**
 * Looping a triangle
 *
 */
for (var i=0; i < 7; i++) {
    var tile = '#';
    for (var j=0; j < i; j++) {
        tile += '#';
    }
    console.log(tile);
}


/**
 * FizzBuzz
 *
 */
for (var i=1; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log('FizzBuzz');
    }
    else if (i % 3 === 0) {
        console.log('Fizz');
    }
    else if (i % 5 === 0) {
        console.log('Buzz');
    }
    else {
        console.log(i);
    }
}


/**
 * Chess board
 *
 */
var width = 8,
    height = 8,
    tile_b = '#',
    tile_w = ' ';

for (var y=0; y < height; y++) {
    var tiles = '';
    if (y % 2 === 0) {
        for (var x=0; x < width; x++) {
            (x % 2 === 0) ? tiles += tile_w : tiles += tile_b;
        }
    }
    else {
        for (var x=0; x < width; x++) {
            (x % 2 === 0) ? tiles += tile_b : tiles += tile_w;
        }
    }
    console.log(tiles);
}
