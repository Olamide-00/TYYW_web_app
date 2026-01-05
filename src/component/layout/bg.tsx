import { useEffect, useRef } from "react";
import * as THREE from "three";

const VickiesRomanticBackground = ({ children }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const loveEmojisRef = useRef([]);
  const heartsRef = useRef([]);
  const particlesRef = useRef(null);

  // Create heart geometry
  const createHeartGeometry = (size = 1) => {
    const shape = new THREE.Shape();
    const x = 0,
      y = 0;

    shape.moveTo(x, y + 0.25 * size);
    shape.bezierCurveTo(
      x,
      y,
      x - 0.25 * size,
      y,
      x - 0.25 * size,
      y + 0.25 * size
    );
    shape.bezierCurveTo(
      x - 0.25 * size,
      y + 0.5 * size,
      x,
      y + 0.75 * size,
      x,
      y + 0.75 * size
    );
    shape.bezierCurveTo(
      x,
      y + 0.75 * size,
      x + 0.25 * size,
      y + 0.5 * size,
      x + 0.25 * size,
      y + 0.25 * size
    );
    shape.bezierCurveTo(x + 0.25 * size, y, x, y, x, y + 0.25 * size);

    return new THREE.ShapeGeometry(shape);
  };

  // Create infinity symbol (∞)
  const createInfinityGeometry = (size = 1) => {
    const curve = new THREE.Curve();
    curve.getPoint = function (t) {
      t = t * Math.PI * 2;
      const x = size * Math.sin(t);
      const y = (size * Math.sin(2 * t)) / 2;
      return new THREE.Vector3(x, y, 0);
    };

    return new THREE.TubeGeometry(curve, 64, 0.1, 8, false);
  };

  // Create love emoji
  const createLoveEmoji = (type = "❤️") => {
    const group = new THREE.Group();

    // Create heart shape
    const heartGeometry = createHeartGeometry(0.5);
    const heartMaterial = new THREE.MeshBasicMaterial({
      color: 0xff3366,
      transparent: true,
      opacity: 0.9,
    });
    const heart = new THREE.Mesh(heartGeometry, heartMaterial);

    // Add glow effect
    const glowGeometry = createHeartGeometry(0.6);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0xff6699,
      transparent: true,
      opacity: 0.3,
      side: THREE.DoubleSide,
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);

    group.add(heart);
    group.add(glow);

    return group;
  };

  // Create floating text particles (VICKIE)
  const createTextParticles = () => {
    const particles = [];

    // Define positions for "VICKIE" in 3D space
    const vickiePositions = [
      // V
      [-2.5, 0, 0],
      [-2, 0.5, 0],
      [-1.5, 1, 0],
      [-1, 0.5, 0],
      [-0.5, 0, 0],
      // I
      [0, 0, 0],
      [0, 0.5, 0],
      [0, 1, 0],
      // C
      [0.7, 1, 0],
      [1.2, 0.8, 0],
      [1.2, 0.2, 0],
      [0.7, 0, 0],
      // K
      [1.8, 0, 0],
      [2, 0.5, 0],
      [2.2, 0.3, 0],
      [2.4, 0.5, 0],
      [2.6, 0, 0],
      // I
      [3.2, 0, 0],
      [3.2, 0.5, 0],
      [3.2, 1, 0],
      // E
      [4, 1, 0],
      [3.5, 1, 0],
      [3.5, 0.5, 0],
      [4, 0.5, 0],
      [3.5, 0, 0],
      [4, 0, 0],
    ];

    vickiePositions.forEach((pos) => {
      const geometry = new THREE.SphereGeometry(0.05, 8, 8);
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color(1, 0.4, 0.6),
        transparent: true,
        opacity: 0.8,
      });
      const particle = new THREE.Mesh(geometry, material);

      particle.position.set(pos[0], pos[1], pos[2]);
      particle.userData = {
        originalX: pos[0],
        originalY: pos[1],
        originalZ: pos[2],
        speed: 0.5 + Math.random() * 0.5,
      };
      particles.push(particle);
    });

    return particles;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    rendererRef.current = renderer;

    // Set size
    const setRendererSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const pixelRatio = Math.min(window.devicePixelRatio, 2);

      renderer.setSize(width, height);
      renderer.setPixelRatio(pixelRatio);

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    setRendererSize();

    // Romantic colors
    const romanticColors = [
      0xff3366, // Romantic pink-red
      0xff6699, // Pink
      0xff99cc, // Light pink
      0xff66b2, // Hot pink
      0xff3388, // Deep pink
      0xff77aa, // Rose
      0xff88bb, // Blush
    ];

    // Create romantic particles (like sparkling dust)
    const createRomanticParticles = () => {
      const particleCount = window.innerWidth < 768 ? 800 : 1500;
      const geometry = new THREE.BufferGeometry();

      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);
      const sizes = new Float32Array(particleCount);

      for (let i = 0; i < particleCount; i++) {
        // Spread particles in a romantic cloud
        positions[i * 3] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

        // Romantic colors
        const color = new THREE.Color(
          romanticColors[Math.floor(Math.random() * romanticColors.length)]
        );
        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;

        sizes[i] = Math.random() * 0.05 + 0.01;
      }

      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
      geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

      const material = new THREE.PointsMaterial({
        size: 0.05,
        vertexColors: true,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true,
      });

      const particles = new THREE.Points(geometry, material);
      scene.add(particles);
      particlesRef.current = particles;
    };

    // Create floating love emojis
    const createLoveEmojis = () => {
      loveEmojisRef.current.forEach((emoji) => scene.remove(emoji));
      loveEmojisRef.current = [];

      const emojiCount = window.innerWidth < 768 ? 6 : 10;

      for (let i = 0; i < emojiCount; i++) {
        const emoji = createLoveEmoji();

        // Position in a romantic spread
        const spread = window.innerWidth < 768 ? 8 : 15;
        emoji.position.set(
          (Math.random() - 0.5) * spread,
          (Math.random() - 0.5) * spread - 2,
          (Math.random() - 0.5) * spread
        );

        // Random rotation
        emoji.rotation.set(
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        );

        // Add floating animation data
        emoji.userData = {
          scale: 0.8 + Math.random() * 0.5,
          speed: 0.3 + Math.random() * 0.5,
          rotationSpeed: 0.05 + Math.random() * 0.1,
          floatSpeed: 0.2 + Math.random() * 0.3,
          floatHeight: 0.2 + Math.random() * 0.4,
        };

        scene.add(emoji);
        loveEmojisRef.current.push(emoji);
      }
    };

    // Create big romantic shapes (hearts, infinity symbols, rings)
    const createRomanticShapes = () => {
      heartsRef.current.forEach((shape) => scene.remove(shape));
      heartsRef.current = [];

      const shapes = [];

      // Create big heart
      const bigHeartGeometry = createHeartGeometry(1.5);
      const bigHeartMaterial = new THREE.MeshBasicMaterial({
        color: 0xff3366,
        wireframe: true,
        transparent: true,
        opacity: 0.4,
      });
      const bigHeart = new THREE.Mesh(bigHeartGeometry, bigHeartMaterial);
      bigHeart.position.set(0, 0, -5);
      shapes.push(bigHeart);

      // Create infinity symbol
      const infinityGeometry = createInfinityGeometry(1);
      const infinityMaterial = new THREE.MeshBasicMaterial({
        color: 0xff6699,
        wireframe: true,
        transparent: true,
        opacity: 0.3,
      });
      const infinity = new THREE.Mesh(infinityGeometry, infinityMaterial);
      infinity.position.set(3, 2, -3);
      shapes.push(infinity);

      // Create ring (like engagement ring)
      const ringGeometry = new THREE.TorusGeometry(1, 0.1, 16, 100);
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: 0xff99cc,
        wireframe: true,
        transparent: true,
        opacity: 0.3,
      });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.position.set(-3, 1, -2);
      shapes.push(ring);

      // Create diamond shape
      const diamondGeometry = new THREE.OctahedronGeometry(0.8);
      const diamondMaterial = new THREE.MeshBasicMaterial({
        color: 0xff88bb,
        wireframe: true,
        transparent: true,
        opacity: 0.3,
      });
      const diamond = new THREE.Mesh(diamondGeometry, diamondMaterial);
      diamond.position.set(-4, -1, -4);
      shapes.push(diamond);

      shapes.forEach((shape, index) => {
        shape.userData = {
          rotationSpeed: 0.02 + Math.random() * 0.03,
          floatSpeed: 0.1 + Math.random() * 0.2,
          floatHeight: 0.1 + Math.random() * 0.3,
        };
        scene.add(shape);
        heartsRef.current.push(shape);
      });
    };

    // Create "LOVE" text
    const createLoveText = () => {
      const letters = [];

      // L
      for (let i = 0; i < 4; i++) {
        const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
        const material = new THREE.MeshBasicMaterial({ color: 0xff3366 });
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(-3, i * 0.3 - 0.3, 2);
        letters.push(cube);
      }
      for (let i = 0; i < 3; i++) {
        const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
        const material = new THREE.MeshBasicMaterial({ color: 0xff3366 });
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(-3 + i * 0.3, -1.2, 2);
        letters.push(cube);
      }

      // O (heart)
      const heartGeometry = createHeartGeometry(0.3);
      const heartMaterial = new THREE.MeshBasicMaterial({ color: 0xff6699 });
      const heart = new THREE.Mesh(heartGeometry, heartMaterial);
      heart.position.set(-1.5, -0.3, 2);
      letters.push(heart);

      // V
      for (let i = 0; i < 4; i++) {
        const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
        const material = new THREE.MeshBasicMaterial({ color: 0xff99cc });
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(0, i * 0.3 - 0.3, 2);
        letters.push(cube);
      }
      for (let i = 1; i < 4; i++) {
        const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
        const material = new THREE.MeshBasicMaterial({ color: 0xff99cc });
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(i * 0.3, (3 - i) * 0.3 - 0.3, 2);
        letters.push(cube);
      }

      // E
      for (let i = 0; i < 4; i++) {
        const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
        const material = new THREE.MeshBasicMaterial({ color: 0xff88bb });
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(2.5, i * 0.3 - 0.3, 2);
        letters.push(cube);
      }
      for (let i = 0; i < 3; i++) {
        const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
        const material = new THREE.MeshBasicMaterial({ color: 0xff88bb });
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(2.5 + i * 0.3, 0.6, 2);
        letters.push(cube);
      }
      for (let i = 0; i < 3; i++) {
        const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
        const material = new THREE.MeshBasicMaterial({ color: 0xff88bb });
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(2.5 + i * 0.3, -0.3, 2);
        letters.push(cube);
      }
      for (let i = 0; i < 3; i++) {
        const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
        const material = new THREE.MeshBasicMaterial({ color: 0xff88bb });
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(2.5 + i * 0.3, -1.2, 2);
        letters.push(cube);
      }

      letters.forEach((letter) => {
        scene.add(letter);
      });

      return letters;
    };

    // Initialize everything
    createRomanticParticles();
    createLoveEmojis();
    createRomanticShapes();
    const loveText = createLoveText();
    const vickieText = createTextParticles();
    vickieText.forEach((particle) => scene.add(particle));

    // Camera position
    const setCameraPosition = () => {
      camera.position.set(0, 0, 10);
      camera.lookAt(0, 0, 0);
    };
    setCameraPosition();

    // Animation
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Animate love emojis
      loveEmojisRef.current.forEach((emoji, index) => {
        if (!emoji) return;

        // Pulsing scale
        const scale =
          emoji.userData.scale +
          Math.sin(elapsedTime * emoji.userData.speed) * 0.2;
        emoji.scale.setScalar(scale);

        // Rotation
        emoji.rotation.x += emoji.userData.rotationSpeed;
        emoji.rotation.y += emoji.userData.rotationSpeed * 1.2;
        emoji.rotation.z += emoji.userData.rotationSpeed * 0.8;

        // Floating
        emoji.position.y +=
          Math.sin(elapsedTime * emoji.userData.floatSpeed + index) * 0.01;
      });

      // Animate romantic shapes
      heartsRef.current.forEach((shape, index) => {
        if (!shape) return;

        shape.rotation.x += shape.userData.rotationSpeed;
        shape.rotation.y += shape.userData.rotationSpeed * 1.5;

        // Floating
        shape.position.y =
          Math.sin(elapsedTime * shape.userData.floatSpeed + index) *
          shape.userData.floatHeight;
      });

      // Animate particles
      if (particlesRef.current) {
        particlesRef.current.rotation.y = elapsedTime * 0.02;
        particlesRef.current.rotation.x = Math.sin(elapsedTime * 0.1) * 0.05;
      }

      // Animate VICKIE text particles
      vickieText.forEach((particle, index) => {
        if (!particle) return;
        particle.position.y =
          particle.userData.originalY + Math.sin(elapsedTime * 2 + index) * 0.1;
        particle.rotation.y += 0.02;
      });

      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      setRendererSize();
      setCameraPosition();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none"
      />

      {/* Romantic overlay gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-900/10 to-rose-900/15"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-rose-900/10 to-pink-900/15"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-pink-500/5"></div>
      </div>

      {/* Glitter effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(255,105,180,0.03)_50%,transparent_100%)] animate-pulse"></div>
      </div>

      <div className="relative z-10 w-full min-h-screen">{children}</div>
    </div>
  );
};

export default VickiesRomanticBackground;
