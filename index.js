((space3, undefined) => {
    space3.scene = new THREE.Scene();
    space3.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    space3.renderer = new THREE.WebGLRenderer();

    // Define threejs
    space3.threejs = function () {

        // Initialize the class
        this.init();

        this.constants = {
            threejs: "this is three.js",
        };
    };

    // Define the threejs prototype.
    space3.threejs.prototype = {

        // <summary>Initializes the threejs Prototype.</summary>
        init: () => {
            space3.renderer.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(space3.renderer.domElement);
        },

        /// <summary>Game Logic</summary>
        update: () => {
            try {

            }
            catch (e) {
                console.log(e);
            }
        },

        /// <summary>Draw Scene</summary>
        render: () => {
            try {
            } catch (e) {
                console.log(e);
            }
        },

        /// <summary>Draw Scene</summary>
        gameLoop: () => {
            try {
                debugger;
                requestAnimationFrame(space3.threejs.__proto__.gameLoop);
                space3.threejs.__proto__.update();
                space3.threejs.__proto__.render();
            } catch (e) {
                console.log(e);
            }
        },
    };
})(window.space3 = window.space3 || {});

window.onload = () => {
    space3.threejs = new space3.threejs();
};

