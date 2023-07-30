import * as THREE from './build/three.module.js';
import {FlyControls} from './src/FlyControls.js';
import { GLTFLoader } from './src/GLTFLoader.js';
import Stats from './src/stats.module.js';

let controls, stats, pointLight;


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, innerWidth/innerHeight, 1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
const clock = new THREE.Clock();

const starGeo = new THREE.BufferGeometry();
const starMat = new THREE.PointsMaterial({color: 0xffffff});

const stars = new THREE.Points(starGeo, starMat);
scene.add(stars);

const starPos = [];
for (let i = 0; i < 10000; i++) {
    const x = (Math.random() - 0.5) * 3000;
    const y = (Math.random() - 0.5) * 3000;
    const z = -(Math.random() - 0.5) * 2000
    starPos.push(x,y,z);
}

starGeo.setAttribute('position', new THREE.Float32BufferAttribute(starPos, 3));
renderer.setClearColor(0x000000);
renderer.setSize(innerWidth,innerHeight);
renderer.setPixelRatio(devicePixelRatio);
document.body.appendChild(renderer.domElement);

camera.position.set(1,0.45,2);
camera.rotation.set(0,0,-0.2);


let planetOne = new THREE.Object3D();
const loaderOne = new GLTFLoader().load(
    "./assets/asphalt.glb",
    function(gltf) {
    planetOne = gltf.scene;
    planetOne.position.set(0,0,0);
    planetOne.rotation.set(0, 0, 0); 
    planetOne.scale.set(.3, .3, .3);
    scene.add(planetOne);
    },
    undefined,
    function(error) {
    console.error(error);
    }
);


/*et spaceDust = new THREE.Object3D();
const loaderThree = new GLTFLoader().load(
    "./assets/asteroids.glb",
    function(gltfthree) {
    spaceDust = gltfthree.scene;
    spaceDust.position.set(-0.9,0,.5);
    spaceDust.rotation.set(0, 0, 0); 
    spaceDust.scale.set(0.2, .2, .2);
    scene.add(spaceDust);
    },
    undefined,
    function(error) {
    console.error(error);
    }
);*/

// var mouseSpeed = 0.0001;

// document.onmousemove = function (e) {
//   var centerX = window.innerWidth * 0.5;
//   //var centerY = window.innerHeight * 0.5;

//   camera.position.x = (e.clientX - centerX) * mouseSpeed;
//   camera.position.y = (e.clientY - centerY) * mouseSpeed;
// };


const light = new THREE.DirectionalLight( 0xFFFFFF, 50.5);
light.position.set( 200, 20, 10);
scene.add(light);


const ambientLight = new THREE.AmbientLight(0xD66868, 0.8);
scene.add(ambientLight);
 let t = 0;
function animate() {

    t += 0.05;
    const timer = 0.0003 * Date.now();

  
    planetOne.position.y = Math.cos( timer ) * 0.2;
    planetOne.position.z = Math.sin( timer ) * 0.2;
    

    
    requestAnimationFrame(animate);

    
    renderer.render( scene, camera );
   
}
animate();