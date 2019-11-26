/*((space3, undefined) => {
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
            let geometry = new THREE.CylinderBufferGeometry(5, 5, 20, 32);
            let material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
            let cylinder = new THREE.Mesh(geometry, material);
            space3.scene.add(cylinder);
            space3.camera.position.z = 10;
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
*/

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// create the shape
var geometry = new THREE.CylinderBufferGeometry( .2, .2, 20, 32 );
// create a material, colour or image texture
var material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: false });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 50;
// game logic
var update = function () {
};
// draw scene
var render = function () {
    renderer.render(scene, camera);
};
// run game loop (update, render, repeat)
var GameLoop = function () {
    requestAnimationFrame(GameLoop);
    update();
    render();
};
GameLoop();
