const canvas = document.querySelector(".webgl")
const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color:'red'})   

const mesh =  new THREE.Mesh(geometry,material)

scene.add(mesh)


const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight)
camera.position.z= 3
camera.position.x= 2
camera.position.y= 1
scene.add(camera)

const renderer = new THREE.WebGLRenderer({
    canvas : canvas
})

renderer.setSize(window.innerWidth,window.innerHeight)

renderer.render(scene,camera)