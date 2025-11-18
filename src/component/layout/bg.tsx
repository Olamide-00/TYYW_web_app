import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const PinkWeb3Background = ({ children }) => {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const sceneRef = useRef(null)
  const cameraRef = useRef(null)
  const rendererRef = useRef(null)
  const particlesMeshRef = useRef(null)
  const shapesRef = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene
    
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    cameraRef.current = camera
    
    const renderer = new THREE.WebGLRenderer({ 
      canvas, 
      alpha: true,
      antialias: true 
    })
    rendererRef.current = renderer

    // Set appropriate size based on device
    const setRendererSize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      const pixelRatio = Math.min(window.devicePixelRatio, 2) // Limit pixel ratio for performance
      
      renderer.setSize(width, height)
      renderer.setPixelRatio(pixelRatio)
      
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }

    setRendererSize()

    // Pink color palette
    const pinkColors = [
      new THREE.Color(0xff69b4), // Hot pink
      new THREE.Color(0xff1493), // Deep pink
      new THREE.Color(0xff91a4), // Light pink
      new THREE.Color(0xff6b8b), // Dark pink
      new THREE.Color(0xff4d94), // Web3 pink
    ]

    // Adjust particle count based on screen size
    const getParticleCount = () => {
      if (window.innerWidth < 768) return 800 // Mobile
      if (window.innerWidth < 1024) return 1200 // Tablet
      return 1500 // Desktop
    }

    // Create particles
    const createParticles = () => {
      const particlesCount = getParticleCount()
      const particlesGeometry = new THREE.BufferGeometry()

      const posArray = new Float32Array(particlesCount * 3)
      const colorArray = new Float32Array(particlesCount * 3)

      // Adjust particle spread based on screen size
      const spread = window.innerWidth < 768 ? 6 : 10

      for (let i = 0; i < particlesCount * 3; i++) {
        // Positions
        posArray[i] = (Math.random() - 0.5) * spread
        
        // Colors
        const color = pinkColors[Math.floor(Math.random() * pinkColors.length)]
        colorArray[i * 3] = color.r
        colorArray[i * 3 + 1] = color.g
        colorArray[i * 3 + 2] = color.b
      }

      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
      particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3))

      // Adjust particle size based on device
      const particleSize = window.innerWidth < 768 ? 0.015 : 0.02

      const particlesMaterial = new THREE.PointsMaterial({
        size: particleSize,
        vertexColors: true,
        transparent: true,
        opacity: window.innerWidth < 768 ? 0.7 : 0.8, // Slightly less opacity on mobile
        blending: THREE.AdditiveBlending
      })

      const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
      
      // Remove existing particles if any
      if (particlesMeshRef.current) {
        scene.remove(particlesMeshRef.current)
      }
      
      scene.add(particlesMesh)
      particlesMeshRef.current = particlesMesh
    }

    // Create geometric shapes
    const createShapes = () => {
      // Clear existing shapes
      shapesRef.current.forEach(shape => scene.remove(shape))
      shapesRef.current = []

      const geometries = [
        new THREE.TorusGeometry(1, 0.3, 16, 100),
        new THREE.OctahedronGeometry(0.5),
        new THREE.IcosahedronGeometry(0.7),
        new THREE.TorusKnotGeometry(0.8, 0.2, 100, 16)
      ]

      // Adjust number of shapes and scale based on screen size
      const scale = window.innerWidth < 768 ? 0.8 : 1
      const shapeCount = window.innerWidth < 768 ? 3 : 4

      for (let i = 0; i < shapeCount; i++) {
        const geometry = geometries[i]
        const material = new THREE.MeshBasicMaterial({
          color: pinkColors[i % pinkColors.length],
          wireframe: true,
          transparent: true,
          opacity: window.innerWidth < 768 ? 0.2 : 0.3 // Less opacity on mobile
        })
        const mesh = new THREE.Mesh(geometry, material)
        
        // Adjust position spread for mobile
        const positionSpread = window.innerWidth < 768 ? 5 : 8
        
        mesh.position.set(
          (Math.random() - 0.5) * positionSpread,
          (Math.random() - 0.5) * positionSpread,
          (Math.random() - 0.5) * positionSpread
        )
        mesh.scale.set(scale, scale, scale)
        
        scene.add(mesh)
        shapesRef.current.push(mesh)
      }
    }

    // Initialize scene
    createParticles()
    createShapes()

    // Adjust camera position based on screen size
    const setCameraPosition = () => {
      if (window.innerWidth < 768) {
        camera.position.z = 4 // Closer on mobile
      } else {
        camera.position.z = 5
      }
    }
    setCameraPosition()

    // Animation
    const clock = new THREE.Clock()

    const animate = () => {
      const elapsedTime = clock.getElapsedTime()

      // Animate particles
      if (particlesMeshRef.current) {
        particlesMeshRef.current.rotation.x = elapsedTime * 0.05
        particlesMeshRef.current.rotation.y = elapsedTime * 0.03
      }

      // Animate shapes - slower animation on mobile for better performance
      const animationSpeed = window.innerWidth < 768 ? 0.8 : 1
      
      shapesRef.current.forEach((shape, index) => {
        shape.rotation.x = elapsedTime * 0.02 * (index + 1) * animationSpeed
        shape.rotation.y = elapsedTime * 0.03 * (index + 1) * animationSpeed
        shape.position.y = Math.sin(elapsedTime * 0.5 * animationSpeed + index) * 0.5
      })

      renderer.render(scene, camera)
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      setRendererSize()
      setCameraPosition()
      
      // Recreate particles and shapes with new sizes
      createParticles()
      createShapes()
    }

    // Throttled resize handler
    let resizeTimeout
    const throttledResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(handleResize, 250)
    }

    window.addEventListener('resize', throttledResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', throttledResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      renderer.dispose()
      
      // Clean up geometries and materials
      if (particlesMeshRef.current) {
        particlesMeshRef.current.geometry.dispose()
        particlesMeshRef.current.material.dispose()
      }
      
      shapesRef.current.forEach(shape => {
        shape.geometry.dispose()
        shape.material.dispose()
      })
    }
  }, [])

  return (
  <div className="relative w-full min-h-screen"> {/* Changed from h-screen to min-h-screen */}
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full"/>
      
    <div className="relative z-10 w-full">
      {children}
    </div>
  </div>
)
}

export default PinkWeb3Background