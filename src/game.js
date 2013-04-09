
function Game () {

    var clientRect = document.body.getBoundingClientRect();

    var sceneWidth = clientRect.width,
        sceneHeight = clientRect.height;

    var cameraAngle = 45,
        cameraNear = 0.1,
        cameraFar = 10000,
        cameraAspectRatio = sceneWidth / sceneHeight;

    this.stats = new Stats;
    this.stats.domElement.style.position = 'absolute';
    this.stats.domElement.style.left = '12px';
    this.stats.domElement.style.top = '12px';

    // init the webgl renderer
    this.renderer = new THREE.WebGLRenderer;
    this.renderer.setSize(sceneWidth, sceneHeight);

    // init the camera
    this.camera = new THREE.PerspectiveCamera(cameraAngle, cameraAspectRatio, cameraNear, cameraFar);
    this.camera.position.z = 600;

    // init the scene
    this.scene = new THREE.Scene;
    this.scene.add(this.camera);

    document.body.appendChild(this.renderer.domElement);
    document.body.appendChild(this.stats.domElement);

    this.animate();

};

Game.prototype.animate = function animate () {

    this.stats.begin();

    // render the current scene
    this.renderer.render(this.scene, this.camera);

    this.stats.end();

    // request the next animation frame
    requestAnimationFrame(this.animate.bind(this));

};
