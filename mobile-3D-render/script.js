// Initialize scene, camera and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Add directional light
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(2, 2, 2);
scene.add(directionalLight);

// Create phone frame geometry
const phoneGeometry = new THREE.BoxGeometry(0.6, 1.2, 0.02);
const screenGeometry = new THREE.PlaneGeometry(0.55, 1.1);

// Load phone texture
const textureLoader = new THREE.TextureLoader();
const phoneTexture = textureLoader.load('phone_texture.jpg');

// Create phone frame material with texture
const phoneMaterial = new THREE.MeshPhongMaterial({ map: phoneTexture });
const screenMaterial = new THREE.MeshPhongMaterial({ color: 0x0000FF, side: THREE.DoubleSide });

// Create phone frame mesh
const phoneMesh = new THREE.Mesh(phoneGeometry, phoneMaterial);
const screenMesh = new THREE.Mesh(screenGeometry, screenMaterial);

// Position phone frame and screen
phoneMesh.position.set(0, 0, 0);
screenMesh.position.set(0, 0, 0.015);

// Add phone frame and screen to the scene
scene.add(phoneMesh);
scene.add(screenMesh);

// Set camera position
camera.position.z = 3;

// Render loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate phone frame
    phoneMesh.rotation.x += 0.005;
    phoneMesh.rotation.y += 0.005;

    renderer.render(scene, camera);
}

animate();
