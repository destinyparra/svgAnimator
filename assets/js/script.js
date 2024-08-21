var svgContainer = document.getElementById('icons');

function loadSVG(path, callback) {
    Snap.load(path, function (f) {
        svgContainer.appendChild(f.node);
        callback(f.node);
    });
}

var bedPoints, applePoints;
var simpleCup, fancyCup;

loadSVG('assets/svgs/1apple.svg', function (node) {
    simpleCup = Snap.select('#apple');
    bedPoints = simpleCup.node.getAttribute('d');
});

loadSVG('assets/svgs/2bed.svg', function (node) {
    fancyCup = Snap.select('#bed');
    applePoints = fancyCup.node.getAttribute('d');

    animateSVG(); // Start animation after both SVGs are loaded
});

function animateSVG() {
    var toApple = function () {
        simpleCup.animate({ d: applePoints }, 1000, mina.backout, toBed);
    }

    var toBed = function () {
        simpleCup.animate({ d: bedPoints }, 1000, mina.backout, toApple);
    }

    toBed(); // Initiate the animation loop
}
