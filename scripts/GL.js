function init() {
    /**
     *  1. first we add event listener for resize handler and add onResize() function within init() function at the bottom
     *  2. declare scene,camera, renderer
     *  3. define rendering color, size and shadowMap property
     *  4. set camera Position and lookAt property
     *  5. append renderer.domElement to body or targeted id
     *  6. now create objects ground, tree, whatever you want
     *  7. add animation function animate(){ requestAnimationFrame(animate); renderer.render(scene,camera);}
     *  8. add dat.GUI to control animation, for this need to change some variables and pass them through control variables
     *
     */

    window.addEventListener('resize',onResize, false);

    let scene;
    let camera;
    let renderer;

    //basic scene declaration
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0x000000)); //#260701
    renderer.setSize(window.innerWidth,window.innerHeight);
    renderer.shadowMap.enabled = true;

    //helper
    const axesHelper = new THREE.AxesHelper(50);
    scene.add(axesHelper);
// dat.GUI
    let gui = new dat.GUI();
    let controls = new function () {
    this.rotationSpeed = 0.02;
    this.movingSpeed = 0.02;
    };
gui.add(controls, 'rotationSpeed', 0, 0.1);
gui.add(controls, 'movingSpeed', 0, 0.1);
    // defining lights
    const ambientLight = new THREE.AmbientLight(0xdddfff);
    scene.add(ambientLight);
    const spotLight = new THREE.SpotLight("#ffffff") ;
    spotLight.position.set(0,50,0);
    spotLight.castShadow = true;
    scene.add(spotLight);

    // defining camera positions
     camera.position.x = 40;
     camera.position.y = 40;
     camera.position.z = 40;
     camera.lookAt(scene.position);


    // creating objects
    //groundPlane
    const groundGeo = new THREE.PlaneGeometry(60,40);
    const groundMesh = new THREE.Mesh(groundGeo, new THREE.MeshLambertMaterial({
        color: "#c68642"
    }));
    groundMesh.receiveShadow = true;
    groundMesh.rotation.x = -Math.PI/2;
    groundMesh.position.x = 0;
    groundMesh.position.y = 0;
    groundMesh.position.z = 0;
    scene.add(groundMesh);

    //ball
    const ballGeo = new THREE.SphereGeometry(3,20,20);
    const ballMesh = new THREE.Mesh(ballGeo, new THREE.MeshLambertMaterial({color: "#676767"}));
    ballMesh.position.x = -20;
    ballMesh.position.y = 12;
    ballMesh.position.z = 10;
    ballMesh.castShadow = true;
    groundMesh.add(ballMesh);



    // document.getElementById("webgl").appendChild(renderer.domElement);  // for specific target
    document.body.appendChild(renderer.domElement); // entire background
    renderer.render(scene,camera);
    let step = 0;
    animate();
    function animate() {
        step += controls.movingSpeed;
        ballMesh.position.x = 20+ (10*Math.cos (step));
        ballMesh.position.y = 2+ (10*Math.sin (step/4 * step/3));

        groundMesh.rotation.z += Math.sin(controls.rotationSpeed);

        requestAnimationFrame(animate);
        renderer.render(scene,camera);

    }

    // resize handler
    function onResize(){
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
}