let scene, camera, renderer, mesh;
let add = 0.8;

const random = (from, to) => {
	const number = Math.floor(Math.random() * (to - from));
	return from + number;
}

const init = () => {
	scene = new THREE.Scene();
	scene.background = new THREE.Color(0xffffee);
	const axis = new THREE.AxisHelper(10);
	scene.add(axis);

	const g= new THREE.Geometry();

	g.vertices.push(
		new THREE.Vector3(8, 0, 0),
		new THREE.Vector3(0, 0, 0),
		new THREE.Vector3(0, 0, 8),
		new THREE.Vector3(-8, 0, 0),
	);
	g.faces.push(
		new THREE.Face3(0,1,2),
		new THREE.Face3(1,2,3)
	)

	const m = new THREE.MeshBasicMaterial({color: 0x1313131, side: THREE.DoubleSide});
	mesh = new THREE.Mesh(g, m);

	mesh.rotation.y = 0.8;
	mesh.rotation.x = 0.2;

	scene.add(mesh);
	camera = new THREE.PerspectiveCamera(
		40,
		window.innerWidth / window.innerHeight,
		1, 
		1000
	);
	camera.position.x = 5;
	camera.position.z = 50;

	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);

	document.body.appendChild(renderer.domElement);
}
const mainLoop = () => {
	mesh.geometry.vertices[0].y += add;
	mesh.geometry.vertices[3].y += add;
	mesh.geometry.verticesNeedUpdate = true;

	if (mesh.geometry.vertices[0].y > 6
		|| mesh.geometry.vertices[0].y < -6) {
			add *= -1;
		}
	renderer.render(scene, camera);
	requestAnimationFrame(mainLoop);
}

init();
mainLoop();