import * as THREE from "three";

const scene = new THREE.Scene();
console.log(scene)
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  10
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x9cffab });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
  cube.rotation.x += 0.006;
  cube.rotation.y += 0.006;
  cube.rotation.z += 0.004;

  renderer.render(scene, camera);
}

console.log(cube)
console.log(camera);
console.log(window.innerHeight,window.innerWidth)

