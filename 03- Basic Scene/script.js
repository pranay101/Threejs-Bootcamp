const canvas = document.querySelector(".webgl")
const body = document.querySelector("body")


function onscroll(){
    document.addEventListener("scroll", (event)=>{
        console.log()
    })
}
const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color:'blue'})   

const mesh =  new THREE.Mesh(geometry,material)

scene.add(mesh)


const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight)
camera.position.z= 17

scene.add(camera)

const renderer = new THREE.WebGLRenderer({
    canvas : canvas
})

renderer.setSize(window.innerWidth,window.innerHeight*10)

renderer.render(scene,camera)


onscroll()