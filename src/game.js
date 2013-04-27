
function Game () {

    var sceneWidth = window.innerWidth,
        sceneHeight = window.innerHeight;

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

    // init the scene
    this.scene = new THREE.Scene;
    this.scene.add(this.camera);

    // init the controls
    this.controls = new THREE.TrackballControls( this.camera );

    document.body.appendChild(this.renderer.domElement);
    document.body.appendChild(this.stats.domElement);

    // define the cube
    var cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00, wireframe: true }),
        cubeGeometry = new THREE.CubeGeometry(10, 10, 10),
        cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

    // specify the cubes starting position
    cube.position.set(0, 0, 0);

    // add the cube to the scene
    this.scene.add(cube);

    // place this camera back a little bit from the cube
    this.camera.position.set(0, 150, 400);

    // point the camera back towards the cube
    this.camera.lookAt(this.scene.position);

};

Game.prototype.update = function update () {

    this.controls.update();
    this.stats.update();

};

Game.prototype.render = function render () {

    this.renderer.render(this.scene, this.camera);

};

Game.prototype.animate = function animate () {

    // request the next animation frame
    requestAnimationFrame(this.animate.bind(this));

    // render the current scene
    this.render();

    // perform updates for the next scene
    this.update();

};
