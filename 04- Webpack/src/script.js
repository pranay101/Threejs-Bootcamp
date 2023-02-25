import './style.css'
import * as THREE from "three";
import { Mesh } from 'three';

const canvas = document.querySelector(".webgl")

const scene = new THREE.Scene()

// const geometry = new THREE.BoxGeometry(1,1,1)
// const material = new THREE.MeshBasicMaterial({color:'red'})   
// const mesh =  new THREE.Mesh(geometry,material)
// scene.add(mesh)


// axes helper
const axesHelper = new THREE.AxesHelper(4)
scene.add(axesHelper)

const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight)
camera.position.z= 3



const group = new THREE.Group()
scene.add(group)


const cube1 = new Mesh(new THREE.BoxGeometry(1,1,1),new THREE.MeshBasicMaterial({color:"red"}))
group.add(cube1)
const cube2 = new Mesh(new THREE.BoxGeometry(1,1,1),new THREE.MeshBasicMaterial({color:"blue"}))
group.add(cube2)
cube2.position.x = -2
const cube3 = new Mesh(new THREE.BoxGeometry(1,1,1),new THREE.MeshBasicMaterial({color:"green"}))
group.add(cube3)
cube3.position.x = 2
// scale
// mesh.scale.y=2
// mesh.scale.set(2,1,1)

// rotation
// mesh.rotation.y = 3.14

scene.add(camera)

const renderer = new THREE.WebGLRenderer({
    canvas : canvas
})

renderer.setSize(window.innerWidth,window.innerHeight)

renderer.render(scene,camera)
