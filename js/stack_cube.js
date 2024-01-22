var scene, camera, renderer, textureLoader, div_number = (window.innerWidth <= 425 ? 1.6 : 2.8) ,
    imgScene, imgRenderer, imgCubeContainer = document.getElementById("photo-cube")
    ;

init();
document.getElementById("right-section").appendChild(renderer.domElement);
window.addEventListener("resize", resize, false);

var stackCube = drawCube();
stackCube.rotation.x = Math.PI/6;

stackCube.rotation.x = Math.PI/6;

scene.add(stackCube);
renderer.render(scene, camera);


animation();


function animation(){
    stackCube.rotation.y += 0.008;
    
    renderer.render(scene, camera);
    requestAnimationFrame(animation);
}

function resize(){
    div_number = window.innerWidth <= 425 ? 1.6 : 2.8
    renderer.setSize(window.innerWidth/div_number, window.innerWidth/div_number);
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

function drawCube(x=4, y=4, z=4, textures=[]){ // the parameters are the dimentions
    var geometry = new THREE.BoxGeometry(x, y, z);

    textureLoader= new THREE.TextureLoader();
    // here are loaded all the texture who will be used
    gitTexture = textureLoader.load("https://joel-tsafack.netlify.app/img/git.png");
    // ajax = textureLoader.load("https://joel-tsafack.netlify.app/img/ajax.jpg");
    react = textureLoader.load("https://joel-tsafack.netlify.app/img/react_logo.png")
    laravelTexture = textureLoader.load("https://joel-tsafack.netlify.app/img/laravel.png");
    cssTexture = textureLoader.load("https://joel-tsafack.netlify.app/img/css.jpg");
    htmltexture = textureLoader.load("https://joel-tsafack.netlify.app/img/html.jpg");
    tailwindCssTexture = textureLoader.load("https://joel-tsafack.netlify.app/img/tailwind.jpg");
    jsHtmlCssTexture = textureLoader.load("https://joel-tsafack.netlify.app/img/htmlCssJs.jpg")



    const materials = [
        new THREE.MeshBasicMaterial({ map: react }), // Face droite (HTML.CSS)
        new THREE.MeshBasicMaterial({ map: jsHtmlCssTexture }), // Face gauche (Lararel)
        new THREE.MeshBasicMaterial({ map: gitTexture }), // Face haut (JS)
        new THREE.MeshBasicMaterial({map: htmltexture }), // Face bas (PHP)
        new THREE.MeshBasicMaterial({ map: laravelTexture}), // Face avant (Tailwind)
        new THREE.MeshBasicMaterial({ map: tailwindCssTexture }) // Face deriere ()
      ];
      return new THREE.Mesh(geometry, materials);
}

console.log(geometry);