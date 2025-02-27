import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
<<<<<<< HEAD
import * as dat from 'dat.gui';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import space from '../img/space.jpeg';
import PN from '../img/PN.png';
import PE from '../img/PE.png';

const Doort = new URL('../assets/Doort.glb', import.meta.url);

const renderer = new THREE.WebGLRenderer();

renderer.shadowMap.enabled = true;

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
const orbit = new OrbitControls(camera, renderer.domElement);

const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);

camera.position.set(-10, 32, 30);
orbit.update();

const boxGeometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const box = new THREE.Mesh(boxGeometry, material);
scene.add(box);

const planeGeometry = new THREE.PlaneGeometry(30, 30);
const planeMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, side: THREE.DoubleSide });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(plane);
plane.rotation.x = -0.5 * Math.PI;
plane.receiveShadow = true;

const gridHelper = new THREE.GridHelper(30);
scene.add(gridHelper);

const sphereGeometry = new THREE.SphereGeometry(4, 50, 50);
const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000, wireframe: false });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);
sphere.position.set(-10, 10, 0);
sphere.castShadow = true;

const ambientLight = new THREE.AmbientLight(0xFFFFFF);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.9);
scene.add(directionalLight);
directionalLight.position.set(-30, 50, 0);
directionalLight.castShadow = true;
directionalLight.shadow.camera.bottom = -12;

const dLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5);
scene.add(dLightHelper);

const dLightShadowHelper = new THREE.CameraHelper(directionalLight.shadow.camera);
scene.add(dLightShadowHelper);

// const spotLight = new THREE.SpotLight( 0xFFFFFF);
// scene.add( spotLight );
// spotLight.position.set( -100, 100, 0 );
// spotLight.castShadow = true;

// const sLightHelper = new THREE.SpotLightHelper( spotLight );
// scene.add( sLightHelper );

scene.fog = new THREE.Fog(0xffffff, 0, 200);
//scene.fog = new THREE.FogExp2( 0xffffff, 0.1 );

//renderer.setClearColor( 0xffffff );

const textureLoader = new THREE.TextureLoader();
scene.background = textureLoader.load(space);

const box2Geometry = new THREE.BoxGeometry(4, 4, 4);
const box2Material = new THREE.MeshStandardMaterial({ map: textureLoader.load(PN) });
const box2MultiMaterial = [
    new THREE.MeshStandardMaterial({ map: textureLoader.load(PN) }),
    new THREE.MeshStandardMaterial({ map: textureLoader.load(PE) }),
    new THREE.MeshStandardMaterial({ map: textureLoader.load(PN) }),
    new THREE.MeshStandardMaterial({ map: textureLoader.load(PE) }),
    new THREE.MeshStandardMaterial({ map: textureLoader.load(PN) }),
    new THREE.MeshStandardMaterial({ map: textureLoader.load(PE) })

];
const box2 = new THREE.Mesh(box2Geometry, box2Material);
scene.add(box2);
box2.position.set(0, 15, 10);
//box2.material.map = textureLoader.load(PN);

const plane2Geometry = new THREE.PlaneGeometry(10, 10, 10, 10);
const plane2Material = new THREE.MeshStandardMaterial({ color: 0xffffff, wireframe: true });
const plane2 = new THREE.Mesh(plane2Geometry, plane2Material);
scene.add(plane2);
plane2.position.set(10, 10, 15);

plane2.geometry.attributes.position.array[0] -= 10 * Math.random();
plane2.geometry.attributes.position.array[1] -= 10 * Math.random();
plane2.geometry.attributes.position.array[2] -= 10 * Math.random();

const lastPosition = plane2.geometry.attributes.position.array.length - 1;
plane2.geometry.attributes.position.array[lastPosition] -= 10 * Math.random();

//const sphere2Geometry = new THREE.SphereGeometry(4);

// const vShader = `
//     void main() {
//         gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//     }
// `;

// const fShader = `
//     void main() {
//         gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
// }`;


//const sphere2Material = new THREE.MeshStandardMaterial({ vertexShader: 'vShader', fragmentShader: 'fShader' });
//const sphere2 = new THREE.Mesh(sphere2Geometry, sphere2Material);
//scene.add(sphere2);
//sphere2.position.set(-5, 10, 10);

const assetLoader = new GLTFLoader();
assetLoader.load(Doort.href, function (gltf) {
    const model = gltf.scene;
    scene.add(model);
    model.position.set(-12, 4, 10);
}, undefined, function (error) {
    console.error(error)
});


const gui = new dat.GUI();

const options = {
    sphereColor: 0xff0000,
    wireframe: false,
    speed: 0.01
};

let step = 0;

const mousePosition = new THREE.Vector2();

window.addEventListener('mousemove', function (e) {
    mousePosition.x = (e.clientX / window.innerWidth) * 2 - 1;
    mousePosition.y = - (e.clientY / window.innerHeight) * 2 + 1;
});

const raycaster = new THREE.Raycaster();
const sphereId = sphere.id;
box2.name = 'theBox';

gui.addColor(options, 'sphereColor').onChange(function (e) {
    sphere.material.color.set(e);
});

gui.add(options, 'wireframe').onChange(function (e) {
    sphere.material.wireframe = e;
});

gui.add(options, 'speed', 0, 0.1);

=======

const renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const orbit = new OrbitControls( camera, renderer.domElement );

const axesHelper = new THREE.AxesHelper( 3 );
scene.add( axesHelper );

camera.position.set( 0, 2, 5 );
orbit.update();

const boxGeometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const box = new THREE.Mesh( boxGeometry, material );
scene.add( box );
>>>>>>> bacd345540647ece5184fff83bd58869587eaf78

function animate(time) {
    box.rotation.x = time / 2000;
    box.rotation.y = time / 1000;
<<<<<<< HEAD

    step += options.speed;
    sphere.position.y = 10 * Math.abs(Math.sin(step));

    raycaster.setFromCamera(mousePosition, camera);
    const intersects = raycaster.intersectObjects(scene.children);
    console.log(intersects);

    for (let i = 0; i < intersects.length; i++) {
        if (intersects[i].object.id === sphereId) {
            intersects[i].object.material.color.set(0x00ff00);
        }

        if (intersects[i].object.name === 'theBox') {
            intersects[i].object.rotation.x = time / 1000;
            intersects[i].object.rotation.y = time / 1000;
        }
    }

    // plane2.geometry.attributes.position.array[0] -= 10 * Math.random();
    // plane2.geometry.attributes.position.array[1] -= 10 * Math.random();
    // plane2.geometry.attributes.position.array[2] -= 10 * Math.random();
    // plane2.geometry.attributes.position.array[lastPosition] -= 10 * Math.random();
    // plane2.geometry.attributes.position.needsUpdate = true;

    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);

window.addEventListener('resize', function () { 
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
=======
    renderer.render( scene, camera );
}

renderer.setAnimationLoop( animate );
>>>>>>> bacd345540647ece5184fff83bd58869587eaf78



