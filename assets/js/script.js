var svgContainer = document.getElementById('icons');

function loadSVG(path, callback) {
    Snap.load(path, function (f) {
        svgContainer.appendChild(f.node);
        callback(f.node);
    });
}

var bedPoints, applePoints;
var bed, apple;

loadSVG('assets/svgs/1apple.svg', function (node) {
    bed = Snap.select('#apple');
    bedPoints = bed.node.getAttribute('d');
});

loadSVG('assets/svgs/2bed.svg', function (node) {
    apple = Snap.select('#bed');
    applePoints = apple.node.getAttribute('d');

    animateSVG(); // Start animation after both SVGs are loaded
});

function animateSVG() {
    var toApple = function () {
        bed.animate({ d: applePoints }, 1000, mina.backout, toBed);
    }

    var toBed = function () {
        bed.animate({ d: bedPoints }, 1000, mina.backout, toApple);
    }

    toBed(); // Initiate the animation loop
}
