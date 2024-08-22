var svgContainer = document.getElementById('icons');

function loadSVG(path, callback) {
    Snap.load(path, function (f) {
        svgContainer.appendChild(f.node);
        callback(f.node);
    });
}

var bedPoints, applePoints, bookPoints;
var bed, apple, book;

loadSVG('assets/svgs/1apple.svg', function (node) {
    apple = Snap.select('#apple');
    applePoints = apple.node.getAttribute('d');
});
loadSVG('assets/svgs/2bed.svg', function (node) {
    bed = Snap.select('#bed');
    bedPoints = bed.node.getAttribute('d');
});

loadSVG('assets/svgs/4book.svg', function (node) {
    book = Snap.select('#book');
    bookPoints = book.node.getAttribute('d');

    animateSVG(); // Start animation after both SVGs are loaded
});

function animateSVG() {


    var toApple = function () {
        apple.animate({ d: applePoints }, 1000, mina.easein, function () {
            setTimeout(toBed, 500); // Pause for 500ms before animating back
        })

    }

    var toBed = function () {
        bed.animate({ d: bedPoints }, 1000, mina.easein, function () {
            setTimeout(toBook, 500);
        });

    }


    var toBook = function () {
        book.animate({ d: bookPoints }, 1000, mina.easein, function () {
            setTimeout(toApple, 500)
        })
    }

    toApple(); // Initiate the animation loop

}



//check svg files from figma ig linear gradient is correct and fill="url()"