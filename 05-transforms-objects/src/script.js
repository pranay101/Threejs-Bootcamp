import './style.css'
import * as THREE from 'three'
import gsap from "gsap"
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
// animation using GSAP.
gsap.to(mesh.position,{duration:1,delay:1,x:2})
gsap.to(mesh.position,{duration:1,delay:2,x:0})

// let time  = Date.now()


// const clock = new THREE.Clock()

// animation using the native js and threejs
const tick = () =>{

    // Way 1 using time from native js
    // const currentTime = Date.now()
    // const deltaTime = currentTime - time;
    // time = currentTime
    
    // const elapsedTime = clock.getElapsedTime()

    // mesh.rotation.y = elapsedTime
    // render
    renderer.render(scene, camera)
    
    window.requestAnimationFrame(tick)
}


tick()


