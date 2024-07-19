import { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const imagen360 = () => {
    useEffect(() => {
        // Crear la escena
        const scene = new THREE.Scene();

        // Crear la cámara
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 0, 0); // Posición inicial de la cámara

        // Crear el renderizador
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        // Cargar la imagen en 360 grados
        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load('https://i.ibb.co/CVvYDKx/Test-Pano.jpg');

        // Crear la esfera para mostrar la imagen
        const sphereGeometry = new THREE.SphereGeometry(10, 32, 32); // Tamaño de la esfera
        const sphereMaterial = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        scene.add(sphere);

        // Agregar controles de cámara para moverse dentro de la imagen
        const controls = new OrbitControls(camera, renderer.domElement);

        function animate() {
            requestAnimationFrame(animate);
            controls.update(); // Actualizar los controles de la cámara
            renderer.render(scene, camera);
        }

        animate();
        return () => {
            scene.remove(sphere);
            renderer.dispose();
        };
    }, []);
        // Limpiar la escena al desmontar el componente
    return null;
};

export default imagen360;