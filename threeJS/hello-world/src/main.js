import * as THREE from "three";
import {OrbitControls} from "three/addons/controls/OrbitControls.js"

const scene = new THREE.Scene();
console.log(scene)
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   4,
//   100
// );

const aspectRatio = window.innerWidth / window.innerHeight

const camera = new THREE.OrthographicCamera(
  -1,1,1,-1,0.1,200
)

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x9cffab });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

// initialize controls
const controls = new OrbitControls(camera, renderer.domElement)
console.log(renderer.domElement)
const canvas = document.querySelector('canvas.threejs')
console.log(canvas);
console.log(controls);

controls.enableDamping = true
controls.autoRotate = true

// console.log(window.requestAnimationFrame())

const renderLoop = () => {
  // console.log("redner loops");
  controls.update()
  renderer.render(scene,camera)
  window.requestAnimationFrame(renderLoop)
  
}

renderLoop()


// function animate() {
//   cube.rotation.x += 0.006;
//   cube.rotation.y += 0.006;
//   cube.rotation.z += 0.004;

//   renderer.render(scene, camera);
// }

console.log(cube)
console.log(camera);
console.log(window.innerHeight,window.innerWidth)

