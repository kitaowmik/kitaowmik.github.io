import * as THREE from './build/three.module.js';
// import {OrbitControls} from './src/OrbitControls.js';
// import { GLTFLoader } from './src/GLTFLoader.js';
// import Stats from './src/stats.module.js';




const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, innerWidth/innerHeight, 1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);

const mouse = new THREE.Vector2();
const target = new THREE.Vector2();
const windowHalf = new THREE.Vector2( window.innerWidth / 2, window.innerHeight / 2 );


const starGeo = new THREE.BufferGeometry();
const starMat = new THREE.PointsMaterial({color: 0xffffff});

const stars = new THREE.Points(starGeo, starMat);
scene.add(stars);

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

const starPos = [];
for (let i = 0; i < 10000; i++) {
    const x = (Math.random() - 0.5) * 3000;
    const y = (Math.random() - 0.5) * 3000;
    const z = -(Math.random() - 0.5) * 2000
    starPos.push(x,y,z);
}

starGeo.setAttribute('position', new THREE.Float32BufferAttribute(starPos, 3));
renderer.setClearColor(0x000000);
renderer.setSize(window.innerWidth,window.innerHeight);
renderer.setPixelRatio(devicePixelRatio);
document.body.appendChild(renderer.domElement);

camera.position.set(0,0,0);



const light = new THREE.DirectionalLight( 0xFFFFFF, 50.5);
light.position.set( 200, 20, 10);
scene.add(light);


const ambientLight = new THREE.AmbientLight(0xD66868, 0.8);
scene.add(ambientLight);
 let t = 0;

 document.addEventListener( 'mousemove', onMouseMove, false );
 window.addEventListener('resize', onWindowResize, false)

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
}


function onMouseMove( event ) {

	mouse.x = ( event.clientX - windowHalf.x );
	mouse.y = ( event.clientY - windowHalf.x );

}
function animate() {

    target.x = ( 1 - mouse.x ) * 0.0002;
    target.y = ( 1 - mouse.y ) * 0.0002;
    
    camera.rotation.x += 0.05 * ( target.y - camera.rotation.x );
    camera.rotation.y += 0.05 * ( target.x - camera.rotation.y );

    requestAnimationFrame( animate );

    
    


    renderer.render( scene, camera );
   
}
animate();