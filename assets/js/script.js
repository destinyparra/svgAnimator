var svgContainer = document.getElementById('icons');

function loadSVG(path, callback) {
    Snap.load(path, function (f) {
        svgContainer.appendChild(f.node);
        callback(f.node);
    });
}

var bedPoints, applePoints, bookPoints;
var bed, apple, book;
var originalFirstIconPoints, originalSecondIconPoints, originalThirdIconPoints;


loadSVG('assets/svgs/1apple.svg', function (node) {
    apple = Snap.select('#apple');
    applePoints = apple.node.getAttribute('d');
    originalFirstIconPoints = applePoints; // Store original path data

});
loadSVG('assets/svgs/2bed.svg', function (node) {
    bedPoints = Snap.select('#bed');
    // bedPoints = bed.node.getAttribute('d');
    originalSecondIconPoints = bedPoints; // Store original path data

});

loadSVG('assets/svgs/4book.svg', function (node) {
    bookPoints = Snap.select('#book');
    // bookPoints = book.node.getAttribute('d');
    originalThirdIconPoints = bookPoints; // Store original path data

    animateSVG(); // Start animation after both SVGs are loaded
});

function animateSVG() {


    var toApple = function () {
        apple.animate({ d: originalFirstIconPoints }, 1000, mina.easein, function () {
            setTimeout(toBed, 500); // Pause for 500ms before animating back
        })

    }

    var toBed = function () {
        apple.animate({ d: originalSecondIconPoints }, 1000, mina.easein, function () {
            setTimeout(toBook, 500);
        });

    }


    var toBook = function () {
        apple.animate({ d: originalThirdIconPoints }, 1000, mina.easein, function () {
            setTimeout(toApple, 500)
        })
    }

    toApple(); // Initiate the animation loop

}



//check svg files from figma ig linear gradient is correct and fill="url()"