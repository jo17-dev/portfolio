var scene, camera, renderer, div_number = 2.8,
    imgScene, imgRenderer, imgCubeContainer = document.getElementById("photo-cube")
    ;


init();
document.getElementById("right-section").appendChild(renderer.domElement);
window.addEventListener("resize", resize, false);


function drawCube(x=4, y=4, z=4){ // the parameters are the dimentions
    var geometry = new THREE.BoxGeometry(x, y, z);

    const materials = [
        new THREE.MeshBasicMaterial({ color: "skyblue" }), // Face avant (HTML.CSS)
        new THREE.MeshBasicMaterial({ color: "red" }), // Face arrière (Lararel)
        new THREE.MeshBasicMaterial({ color: "yellow" }), // Face gauche (JS)
        new THREE.MeshBasicMaterial({ color: "blue" }), // Face droite (PHP)
        new THREE.MeshBasicMaterial({ color: "white" }), // Face haut (Tailwind)
        new THREE.MeshBasicMaterial({ color: "white" }), // Face bas ()
      ];
      return new THREE.Mesh(geometry, materials);
}

var stackCube = drawCube();

var imgCube = drawCube(5,5,5);

scene.add(stackCube, imgCube);
renderer.render(scene, camera);


imgScene = new THREE.Scene();
imgScene.add(imgCube);
imgRenderer = new THREE.WebGLRenderer();
imgRenderer.setSize(imgCubeContainer.offsetWidth, imgCubeContainer.offsetHeight);
imgCubeContainer.appendChild(imgRenderer.domElement);
imgRenderer.render(imgScene, camera);
imgRenderer.setClearColor(0x0000, 0);


animation();


function animation(){
    stackCube.rotation.x += 0.01;
    stackCube.rotation.y += 0.01;

    imgCube.rotation.x += 0.01;
    imgCube.rotation.y += 0.01;
    
    renderer.render(scene, camera);
    imgRenderer.render(imgScene, camera);
    requestAnimationFrame(animation);
}

function resize(){
    renderer.setSize(window.innerWidth/div_number, window.innerWidth/div_number);
    //camera.aspect = window.innerWidth / (window.innerHeight);
    camera.aspect = 1.0;
    camera.updateProjectionMatrix();
    renderer.render(scene, camera);
}

function init(){
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerWidth, 0.1, 1000);
    camera.position.z = 11;
    camera.position.y = 2;
    camera.lookAt(0, 0, 0);


    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth/div_number, window.innerWidth/div_number);
    renderer.setClearColor(0x000000, 0);
}