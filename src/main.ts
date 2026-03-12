import './style.css';
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('App root not found');
}

app.innerHTML = `
  <div class="page-shell">
    <header class="topbar">
      <div class="brand-lockup">
        <span class="brand-mark"></span>
        <span class="brand-name">Aether Atelier</span>
      </div>
      <nav class="topbar-nav" aria-label="Primary">
        <a href="#experience">Experience</a>
        <a href="#materials">Materials</a>
        <a href="#launch">Launch</a>
      </nav>
      <a class="topbar-cta" href="#launch">Reserve a reveal</a>
    </header>

    <main>
      <section class="hero" id="experience">
        <div class="hero-sticky">
          <div class="hero-backdrop">
            <div class="mesh-orb mesh-orb-a"></div>
            <div class="mesh-orb mesh-orb-b"></div>
            <div class="mesh-orb mesh-orb-c"></div>
            <div class="grain"></div>
          </div>

          <canvas id="hero-canvas" aria-hidden="true"></canvas>

          <div class="hero-overlay">

            <div class="scroll-dash-indicator" aria-label="Scroll progress">
              <div class="dash-step is-active" data-step="0"></div>
              <div class="dash-step" data-step="1"></div>
              <div class="dash-step" data-step="2"></div>
              <div class="dash-step" data-step="3"></div>
              <div class="dash-step" data-step="4"></div>
              <div class="dash-step" data-step="5"></div>
              <div class="dash-step" data-step="6"></div>
            </div>

            <div class="hero-copy-stack">
              <article class="hero-copy is-active" data-copy="0">
                <p class="eyebrow">World-class spatial hero</p>
                <h1>
                  Precision in
                  <span>liquid light.</span>
                </h1>
                <p class="copy-body">
                  A 3D MacBook reveal designed like a studio film frame: dark aluminum,
                  cinematic reflections, and scroll-driven motion that feels expensive from
                  the first pixel.
                </p>
                <div class="hero-actions">
                  <a class="button button-primary" href="#launch">Launch the concept</a>
                  <a class="button button-secondary" href="#materials">See the system</a>
                </div>
              </article>

              <article class="hero-copy" data-copy="1">
                <p class="eyebrow">Display activation</p>
                <h2>The screen wakes with controlled brilliance.</h2>
                <p class="copy-body">
                  Dashboard previews, branded landing visuals, and moving footage blend into
                  the device with natural glass reflections and soft bloom.
                </p>
              </article>

              <article class="hero-copy" data-copy="2">
                <p class="eyebrow">Interface choreography</p>
                <h2>Every frame shifts without breaking the illusion.</h2>
                <p class="copy-body">
                  Scroll drives the camera, the hinge, the screen media, and the surrounding
                  atmosphere so the whole composition feels engineered rather than decorated.
                </p>
              </article>

              <article class="hero-copy" data-copy="3">
                <p class="eyebrow">Hero lockup</p>
                <h2>A premium hero angle tuned for the final reveal.</h2>
                <p class="copy-body">
                  The MacBook settles into a confident showcase pose while the typography and
                  metrics recede, leaving the device as the unmistakable focal point.
                </p>
              </article>
            </div>

            <aside class="detail-panel detail-panel-left" id="materials">
              <p class="detail-label">Material study</p>
              <p class="detail-value">CNC-machined space gray unibody with soft studio reflections.</p>
              <p class="detail-meta">Clear hierarchy, clean edges, realistic hinge geometry.</p>
            </aside>

            <aside class="detail-panel detail-panel-right">
              <p class="detail-label">Screen sequence</p>
              <ul>
                <li>Realtime dashboard visual</li>
                <li>Autoplay cinematic video</li>
                <li>Futuristic analytics surface</li>
                <li>Premium landing composition</li>
              </ul>
            </aside>

            <div class="hero-footer">
              <div class="footer-stat">
                <span>Built for</span>
                <strong>luxury launches</strong>
              </div>
              <div class="footer-stat">
                <span>Motion language</span>
                <strong>cinematic and precise</strong>
              </div>
              <div class="footer-stat">
                <span>Rendering</span>
                <strong>Three.js, GSAP, Lenis</strong>
              </div>
            </div>

            <div class="scroll-hint">
              <span></span>
              Scroll to reveal
            </div>
          </div>
        </div>
      </section>

      <section class="afterglow" id="launch">
        <div class="afterglow-shell">
          <div class="afterglow-copy">
            <p class="eyebrow">Built as a premium section, not a template</p>
            <h2>Ready to continue the same reveal, not switch into another page style.</h2>
            <p>
              This follow-up section keeps the same dark material palette, glass surfaces,
              cinematic spacing, and premium product language so the MacBook hero flows into a
              cohesive landing experience.
            </p>
            <div class="afterglow-actions">
              <a class="button button-primary" href="#experience">Replay the reveal</a>
              <a class="button button-secondary" href="#materials">Review the system</a>
            </div>
          </div>

          <div class="afterglow-rail">
            <article class="afterglow-card afterglow-card-wide">
              <p class="detail-label">Continuation language</p>
              <h3>Shared typography, surfaces, and motion cues keep the whole page in one voice.</h3>
              <p>
                No abrupt template switch, no disconnected footer block, and no separate visual
                system after the hero sequence ends.
              </p>
            </article>

            <article class="afterglow-card">
              <p class="detail-label">Visual rhythm</p>
              <ul class="afterglow-list">
                <li>Same dark silver palette</li>
                <li>Same glass panel treatment</li>
                <li>Same restrained premium spacing</li>
              </ul>
            </article>

            <article class="afterglow-card">
              <p class="detail-label">Section payload</p>
              <div class="afterglow-metrics">
                <div>
                  <span>Rendering stack</span>
                  <strong>Three.js + GSAP</strong>
                </div>
                <div>
                  <span>Media support</span>
                  <strong>Image, UI, video</strong>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div class="afterglow-band" aria-hidden="true">
          <span>same page</span>
          <span>same product language</span>
          <span>same cinematic system</span>
          <span>same premium finish</span>
        </div>
      </section>
    </main>

    <video
      id="screen-video"
      class="screen-video"
      src="/media/reel.mp4"
      muted
      loop
      playsinline
      preload="auto"
    ></video>
  </div>
`;

type ScreenLayer = {
  mesh: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>;
  material: THREE.MeshBasicMaterial;
};

type LaptopBuild = {
  root: THREE.Group;
  lidGroup: THREE.Group;
  screenLayers: ScreenLayer[];
  glowMaterial: THREE.MeshBasicMaterial;
  reflectionMaterial: THREE.MeshBasicMaterial;
};

const hero = document.querySelector<HTMLElement>('.hero');
const canvas = document.querySelector<HTMLCanvasElement>('#hero-canvas');
const copyPanels = Array.from(document.querySelectorAll<HTMLElement>('.hero-copy'));
const progressSteps = Array.from(document.querySelectorAll<HTMLElement>('.dash-step'));
const scrollHint = document.querySelector<HTMLElement>('.scroll-hint');
const detailPanelLeft = document.querySelector<HTMLElement>('.detail-panel-left');
const detailPanelRight = document.querySelector<HTMLElement>('.detail-panel-right');
const heroFooter = document.querySelector<HTMLElement>('.hero-footer');
const topbarNavLinks = Array.from(document.querySelectorAll<HTMLElement>('.topbar-nav a'));

if (!hero || !canvas) {
  throw new Error('Hero elements not found');
}

const lenis = new Lenis({
  duration: 1.15,
  smoothWheel: true,
  touchMultiplier: 1.15,
});

lenis.on('scroll', ScrollTrigger.update);

const tickLenis = (time: number) => {
  lenis.raf(time);
  requestAnimationFrame(tickLenis);
};

requestAnimationFrame(tickLenis);

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: true,
  powerPreference: 'high-performance',
});

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.28;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.setClearColor(0x000000, 0);

const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x05070d, 8, 20);

const camera = new THREE.PerspectiveCamera(34, window.innerWidth / window.innerHeight, 0.1, 40);
camera.position.set(-0.6, 0.75, 7.8);
scene.add(camera);

const pointer = { x: 0, y: 0, currentX: 0, currentY: 0 };
const clock = new THREE.Clock();
const cameraFocus = new THREE.Vector3(0, 0.12, 0.08);

window.addEventListener('pointermove', (event) => {
  pointer.x = event.clientX / window.innerWidth - 0.5;
  pointer.y = event.clientY / window.innerHeight - 0.5;
});

const orbitRig = new THREE.Group();
const floatRig = new THREE.Group();
const laptopRig = new THREE.Group();

orbitRig.add(floatRig);
floatRig.add(laptopRig);
scene.add(orbitRig);

orbitRig.position.y = -0.22;

const particleCount = window.innerWidth < 768 ? 90 : 180;
const particles = createParticles(particleCount);
scene.add(particles);

const contactShadow = createContactShadow();
scene.add(contactShadow);

const catchShadow = new THREE.Mesh(
  new THREE.PlaneGeometry(18, 18),
  new THREE.ShadowMaterial({ color: 0x000000, opacity: 0.16 }),
);
catchShadow.receiveShadow = true;
catchShadow.rotation.x = -Math.PI / 2;
catchShadow.position.y = -0.42;
scene.add(catchShadow);

const softGlowTexture = createRadialTexture([
  { offset: 0, color: 'rgba(255,255,255,0.95)' },
  { offset: 0.35, color: 'rgba(160,210,255,0.35)' },
  { offset: 1, color: 'rgba(5,7,13,0)' },
]);

addGlowPlane({
  texture: softGlowTexture,
  color: 0x8db8ff,
  position: new THREE.Vector3(-3.8, 2.8, -4.6),
  scale: new THREE.Vector2(7.8, 7.8),
  opacity: 0.2,
});

addGlowPlane({
  texture: softGlowTexture,
  color: 0xffa15c,
  position: new THREE.Vector3(4.2, 1.8, -5.1),
  scale: new THREE.Vector2(6.6, 6.6),
  opacity: 0.14,
});

addGlowPlane({
  texture: softGlowTexture,
  color: 0x58e8d0,
  position: new THREE.Vector3(0, -2.2, -5.5),
  scale: new THREE.Vector2(9.5, 4.2),
  opacity: 0.08,
});

const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
scene.add(ambientLight);

const keyLight = new THREE.DirectionalLight(0xf4f6ff, 2.8);
keyLight.position.set(5.4, 6.6, 4.8);
keyLight.castShadow = true;
keyLight.shadow.mapSize.set(2048, 2048);
keyLight.shadow.radius = 6;
keyLight.shadow.bias = -0.0004;
keyLight.shadow.camera.near = 0.5;
keyLight.shadow.camera.far = 20;
keyLight.shadow.camera.left = -6;
keyLight.shadow.camera.right = 6;
keyLight.shadow.camera.top = 6;
keyLight.shadow.camera.bottom = -6;
scene.add(keyLight);

const rimLight = new THREE.PointLight(0x7cb8ff, 25, 20, 2);
rimLight.position.set(-5.5, 3.2, -4.2);
scene.add(rimLight);

const warmLight = new THREE.PointLight(0xffb178, 10, 18, 2);
warmLight.position.set(4.8, 1.4, 2.6);
scene.add(warmLight);

const fillLight = new THREE.DirectionalLight(0x5be7d8, 1.15);
fillLight.position.set(-2.8, 1.6, 5.4);
scene.add(fillLight);

let activeStage = -1;

const setActiveStage = (index: number, dashIndex: number = index) => {
  if (index === activeStage && dashIndex === (progressSteps.findIndex(s => s.classList.contains('is-active')))) {
    return;
  }

  activeStage = index;

  copyPanels.forEach((panel, panelIndex) => {
    panel.classList.toggle('is-active', panelIndex === index);
  });

  progressSteps.forEach((step, stepIndex) => {
    const isActive = stepIndex === dashIndex;
    step.classList.toggle('is-active', isActive);
    // Add custom scaling for dash steps
    step.style.width = isActive ? '24px' : '16px';
    step.style.opacity = isActive ? '1' : '0.4';
  });

  // Manage visibility of detail panels and footer based on stage
  if (detailPanelLeft) {
    detailPanelLeft.style.opacity = index === 0 ? '1' : '0';
    detailPanelLeft.style.visibility = index === 0 ? 'visible' : 'hidden';
    detailPanelLeft.style.transform = index === 0 ? 'translateY(0)' : 'translateY(20px)';
  }

  if (detailPanelRight) {
    detailPanelRight.style.opacity = index === 1 || index === 2 ? '1' : '0';
    detailPanelRight.style.visibility = index === 1 || index === 2 ? 'visible' : 'hidden';
    detailPanelRight.style.transform = index === 1 || index === 2 ? 'translateY(0)' : 'translateY(20px)';
  }

  if (heroFooter) {
    heroFooter.style.opacity = index === 3 ? '1' : '0';
    heroFooter.style.visibility = index === 3 ? 'visible' : 'hidden';
    heroFooter.style.transform = index === 3 ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(20px)';
  }

  // Update topbar nav active state
  topbarNavLinks.forEach((link, linkIndex) => {
    link.style.color = (index === 0 && linkIndex === 0) || (index === 1 && linkIndex === 1) || (index === 3 && linkIndex === 2) 
      ? 'var(--text)' 
      : 'var(--muted)';
  });
};

const loadTexture = async (url: string) => {
  const loader = new THREE.TextureLoader();
  const texture = await loader.loadAsync(url);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
  return texture;
};

const buildScene = async () => {
  try {
    const sitePreview = await loadTexture('/media/afterglow-preview.png');
    // Using distinct textures for different layers if available, or just reusing for now with different blends
    const laptop = createLaptop([sitePreview, sitePreview, sitePreview, sitePreview]);
    laptopRig.add(laptop.root);
    camera.position.set(0.24, 0.52, 8.35);
    laptopRig.scale.setScalar(1.02);
    laptopRig.rotation.set(0.46, -0.34, 0.12);
    laptopRig.position.set(0.78, -0.08, 0);

    gsap.set(copyPanels, {
      autoAlpha: 0,
      y: 36,
      filter: 'blur(18px)',
    });

    gsap.set(copyPanels[0], {
      autoAlpha: 1,
      y: 0,
      filter: 'blur(0px)',
    });

    setActiveStage(0);

    laptop.screenLayers.forEach((layer, index) => {
      layer.material.opacity = index === 0 ? 0.12 : 0;
    });

    laptop.glowMaterial.opacity = 0;
    laptop.reflectionMaterial.opacity = 0.16;
    laptop.lidGroup.rotation.x = -0.12;

  const revealCopy = (index: number, position: number, timeline: gsap.core.Timeline) => {
    copyPanels.forEach((panel, panelIndex) => {
      timeline.to(
        panel,
        {
          autoAlpha: panelIndex === index ? 1 : 0,
          y: panelIndex === index ? 0 : 28,
          filter: panelIndex === index ? 'blur(0px)' : 'blur(18px)',
          duration: 0.55,
        },
        position,
      );
    });
  };

  const showScreenLayer = (index: number, position: number, timeline: gsap.core.Timeline) => {
    laptop.screenLayers.forEach((layer, layerIndex) => {
      timeline.to(
        layer.material,
        {
          opacity: layerIndex === index ? 1 : 0,
          duration: 0.65,
        },
        position,
      );
    });
  };

  const master = gsap.timeline({
    defaults: { ease: 'power2.inOut' },
    scrollTrigger: {
      trigger: hero,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1.15,
      onUpdate: (self) => {
        const progress = self.progress;
        // Map 7 dashes
        const dashIndex = Math.min(Math.floor(progress * progressSteps.length), progressSteps.length - 1);
        const stepIndex = progress < 0.25 ? 0 : progress < 0.52 ? 1 : progress < 0.78 ? 2 : 3;
        setActiveStage(stepIndex, dashIndex);

        // Fade out scroll hint
        if (scrollHint) {
          scrollHint.style.opacity = progress > 0.02 ? '0' : '1';
          scrollHint.style.visibility = progress > 0.02 ? 'hidden' : 'visible';
          scrollHint.style.transform = `translateX(-50%) translateY(${progress * 100}px)`;
        }
      },
    },
  });

  master
    .to(
      camera.position,
      {
        x: -0.4,
        y: 0.65,
        z: 6.8,
        duration: 1.2,
      },
      0,
    )
    .to(
      laptopRig.scale,
      {
        x: 0.98,
        y: 0.98,
        z: 0.98,
        duration: 1.2,
      },
      0,
    )
    .to(
      laptopRig.rotation,
      {
        x: 0.65,
        y: -0.35,
        z: 0.18,
        duration: 1.2,
      },
      0,
    )
    .to(
      laptop.lidGroup.rotation,
      {
        x: -0.48,
        duration: 1.1,
      },
      0.08,
    )
    .to(
      laptop.glowMaterial,
      {
        opacity: 0.2,
        duration: 0.8,
      },
      0.48,
    );

  revealCopy(0, 0, master);
  showScreenLayer(0, 0.55, master);

  master
    .to(
      camera.position,
      {
        x: 0.18,
        y: 0.46,
        z: 6.35,
        duration: 1.18,
      },
      1.28,
    )
    .to(
      laptopRig.rotation,
      {
        x: 0.42,
        y: 0.32,
        z: -0.12,
        duration: 1.18,
      },
      1.28,
    )
    .to(
      laptopRig.scale,
      {
        x: 1.02,
        y: 1.02,
        z: 1.02,
        duration: 1.18,
      },
      1.28,
    )
    .to(
      laptop.lidGroup.rotation,
      {
        x: -1.08,
        duration: 1.18,
      },
      1.28,
    )
    .to(
      laptop.glowMaterial,
      {
        opacity: 0.62,
        duration: 1,
      },
      1.42,
    );

  revealCopy(1, 1.25, master);
  showScreenLayer(1, 1.56, master);

  master
    .to(
      camera.position,
      {
        x: -0.12,
        y: 0.28,
        z: 5.78,
        duration: 1.1,
      },
      2.55,
    )
    .to(
      laptopRig.rotation,
      {
        x: 0.24,
        y: -0.18,
        z: 0.07,
        duration: 1.1,
      },
      2.55,
    )
    .to(
      laptopRig.position,
      {
        y: 0.08,
        duration: 1.1,
      },
      2.55,
    )
    .to(
      laptop.lidGroup.rotation,
      {
        x: -1.2,
        duration: 1.1,
      },
      2.55,
    );

  revealCopy(2, 2.48, master);
  showScreenLayer(2, 2.7, master);

  master
    .to(
      camera.position,
      {
        x: 0.18,
        y: 1.18,
        z: 6.45,
        duration: 1.18,
      },
      3.7,
    )
    .to(
      laptopRig.rotation,
      {
        x: 1.12,
        y: 0.04,
        z: -0.03,
        duration: 1.18,
      },
      3.7,
    )
    .to(
      laptopRig.position,
      {
        x: 0.42,
        y: 0.02,
        duration: 1.18,
      },
      3.7,
    )
    .to(
      laptopRig.scale,
      {
        x: 1.03,
        y: 1.03,
        z: 1.03,
        duration: 1.18,
      },
      3.7,
    )
    .to(
      laptop.lidGroup.rotation,
      {
        x: -1.26,
        duration: 1.18,
      },
      3.7,
    )
    .to(
      laptop.glowMaterial,
      {
        opacity: 0.46,
        duration: 0.9,
      },
      3.88,
    )
    .to(
      laptop.reflectionMaterial,
      {
        opacity: 0.28,
        duration: 0.9,
      },
      3.88,
    );

  revealCopy(3, 3.64, master);
  showScreenLayer(3, 3.92, master);

  // Buffer at the end to prevent abrupt disappearance
  master.to({}, { duration: 0.5 }, '+=0.2');

  gsap.from('.topbar', {
    y: -24,
    autoAlpha: 0,
    duration: 0.9,
    ease: 'power3.out',
  });

    gsap.from('.detail-panel, .hero-footer, .scroll-dash-indicator, .scroll-hint', {
      y: 24,
      autoAlpha: 0,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.08,
      delay: 0.15,
    });

    // Dash Navigation
    progressSteps.forEach((step, idx) => {
      step.addEventListener('click', (e) => {
        e.preventDefault();
        const targetProgress = idx / (progressSteps.length - 1);
        const scrollTarget = hero.offsetTop + (hero.offsetHeight * targetProgress * 0.9); // Slight offset for better alignment
        lenis.scrollTo(scrollTarget, { duration: 1.2 });
      });
    });

    // Navigation Sync
    topbarNavLinks.forEach((link, idx) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetProgress = idx === 0 ? 0 : idx === 1 ? 0.35 : 1; 
        const scrollTarget = hero.offsetTop + (hero.offsetHeight * targetProgress);
        lenis.scrollTo(scrollTarget, { duration: 1.5 });
      });
    });

    const topbarCta = document.querySelector('.topbar-cta');
    if (topbarCta) {
      topbarCta.addEventListener('click', (e) => {
        e.preventDefault();
        lenis.scrollTo('.afterglow', { duration: 1.2 });
      });
    }

    // Scroll hint click
    if (scrollHint) {
      scrollHint.style.cursor = 'pointer';
      scrollHint.addEventListener('click', () => {
        lenis.scrollTo(hero.offsetTop + hero.offsetHeight * 0.15, { duration: 1 });
      });
    }
  } catch (error) {
    console.error('CRITICAL: Failed to build scene:', error);
  }
};

void buildScene();

const render = () => {
  const elapsed = clock.getElapsedTime();

  pointer.currentX += (pointer.x - pointer.currentX) * 0.04;
  pointer.currentY += (pointer.y - pointer.currentY) * 0.04;

  floatRig.position.y = Math.sin(elapsed * 1.1) * 0.08;
  floatRig.rotation.z = pointer.currentX * 0.1 + Math.sin(elapsed * 0.5) * 0.018;
  floatRig.rotation.x = -pointer.currentY * 0.08 + Math.cos(elapsed * 0.65) * 0.012;

  particles.rotation.y = elapsed * 0.03;
  particles.rotation.x = Math.sin(elapsed * 0.15) * 0.06;
  contactShadow.material.opacity = 0.34 + Math.sin(elapsed * 1.1) * 0.025;
  camera.lookAt(
    cameraFocus.x + pointer.currentX * 0.18,
    cameraFocus.y - pointer.currentY * 0.08,
    cameraFocus.z,
  );

  renderer.render(scene, camera);
  requestAnimationFrame(render);
};

requestAnimationFrame(render);

const onResize = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const aspect = width / height;

  camera.aspect = aspect;
  camera.fov = width < 768 ? 39 : 34;
  camera.updateProjectionMatrix();

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, width < 768 ? 1.5 : 1.8));
  renderer.setSize(width, height);
};

window.addEventListener('resize', onResize);
onResize();

function createLaptop(screenMaps: THREE.Texture[]): LaptopBuild {
  const root = new THREE.Group();

  const premiumDarkMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x0d1117,
    metalness: 0.42,
    roughness: 0.18,
    clearcoat: 0.5,
    clearcoatRoughness: 0.2,
    reflectivity: 1,
  });

  const base = new THREE.Mesh(
    new RoundedBoxGeometry(4.24, 0.1, 2.74, 10, 0.04),
    premiumDarkMaterial,
  );
  base.castShadow = true;
  base.receiveShadow = true;
  root.add(base);

  const deck = new THREE.Mesh(
    new RoundedBoxGeometry(4.24, 0.03, 2.74, 10, 0.04),
    premiumDarkMaterial,
  );
  deck.position.y = 0.074;
  deck.castShadow = true;
  root.add(deck);

  const keyboardBed = new THREE.Mesh(
    new RoundedBoxGeometry(3.3, 0.012, 1.74, 10, 0.04),
    new THREE.MeshStandardMaterial({
      color: 0x11151a,
      metalness: 0.18,
      roughness: 0.9,
    }),
  );
  keyboardBed.position.set(0, 0.092, -0.36);
  root.add(keyboardBed);

  const keyboard = createKeyboard();
  keyboard.position.set(0, 0.104, -0.36);
  root.add(keyboard);

  const leftSpeaker = createSpeakerGrille();
  leftSpeaker.position.set(-1.75, 0.104, -0.18);
  root.add(leftSpeaker);

  const rightSpeaker = createSpeakerGrille();
  rightSpeaker.position.set(1.75, 0.104, -0.18);
  root.add(rightSpeaker);


  const hinge = new THREE.Mesh(
    new THREE.CylinderGeometry(0.05, 0.05, 3.8, 28),
    premiumDarkMaterial,
  );
  hinge.rotation.z = Math.PI / 2;
  hinge.position.set(0, 0.12, -1.42);
  hinge.castShadow = true;
  root.add(hinge);

  const lidGroup = new THREE.Group();
  lidGroup.position.set(0, 0.12, -1.47);
  root.add(lidGroup);

  const lidShell = new THREE.Mesh(
    new RoundedBoxGeometry(4.68, 0.1, 3.06, 14, 0.07),
    premiumDarkMaterial,
  );
  lidShell.position.z = 1.51;
  lidShell.castShadow = true;
  lidShell.receiveShadow = true;
  lidGroup.add(lidShell);

  const lidLogo = new THREE.Mesh(
    new THREE.PlaneGeometry(0.48, 0.58),
    new THREE.MeshBasicMaterial({
      map: createLogoTexture(),
      transparent: true,
      opacity: 0.9,
      toneMapped: false,
    }),
  );
  lidLogo.rotation.x = -Math.PI / 2;
  lidLogo.position.set(0, 0.056, 1.52);
  lidGroup.add(lidLogo);

  const bezel = new THREE.Mesh(
    new THREE.PlaneGeometry(4.08, 2.46),
    new THREE.MeshBasicMaterial({ color: 0x090b10 }),
  );
  bezel.rotation.x = Math.PI / 2;
  bezel.position.set(0, -0.062, 1.51);
  lidGroup.add(bezel);

  const screenGlow = new THREE.MeshBasicMaterial({
    map: createRadialTexture([
      { offset: 0, color: 'rgba(255,255,255,0.85)' },
      { offset: 0.45, color: 'rgba(122,170,255,0.18)' },
      { offset: 1, color: 'rgba(0,0,0,0)' },
    ]),
    color: 0x9ec7ff,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    opacity: 0,
    toneMapped: false,
  });

  const glowPlane = new THREE.Mesh(new THREE.PlaneGeometry(4.1, 2.48), screenGlow);
  glowPlane.rotation.x = Math.PI / 2;
  glowPlane.position.set(0, -0.067, 1.51);
  lidGroup.add(glowPlane);

  const screenLayers: ScreenLayer[] = screenMaps.map((map, index) => {
    const material = new THREE.MeshBasicMaterial({
      map,
      transparent: true,
      opacity: index === 0 ? 0.12 : 0,
      toneMapped: false,
    });

    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(4.06, 2.44), material);
    mesh.rotation.x = Math.PI / 2;
    mesh.position.set(0, -0.068 - index * 0.0004, 1.51);
    lidGroup.add(mesh);

    return { mesh, material };
  });

  const reflectionMaterial = new THREE.MeshBasicMaterial({
    map: createLinearTexture([
      { offset: 0, color: 'rgba(255,255,255,0)' },
      { offset: 0.18, color: 'rgba(255,255,255,0.22)' },
      { offset: 0.4, color: 'rgba(255,255,255,0.06)' },
      { offset: 0.7, color: 'rgba(255,255,255,0.12)' },
      { offset: 1, color: 'rgba(255,255,255,0)' },
    ]),
    transparent: true,
    opacity: 0.16,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    toneMapped: false,
  });

  const reflectionPlane = new THREE.Mesh(new THREE.PlaneGeometry(4.08, 2.46), reflectionMaterial);
  reflectionPlane.rotation.x = Math.PI / 2;
  reflectionPlane.position.set(0.05, -0.0696, 1.53);
  lidGroup.add(reflectionPlane);

  return {
    root,
    lidGroup,
    screenLayers,
    glowMaterial: screenGlow,
    reflectionMaterial,
  };
}

function createKeyboard() {
  const group = new THREE.Group();
  const unit = 0.2;
  const gap = 0.02;
  const layoutWidth = 3.2;
  const leftEdge = -layoutWidth / 2;
  const keyThickness = 0.012;

  const keyMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x080a0d,
    metalness: 0.32,
    roughness: 0.28,
    clearcoat: 0.1,
    clearcoatRoughness: 0.1,
  });

  const textureCache = new Map<string, THREE.CanvasTexture>();

  const addLegendPlane = (
    label: string,
    x: number,
    z: number,
    width: number,
    depth: number,
    options?: {
      align?: 'center' | 'corner';
      color?: string;
      opacity?: number;
      scaleX?: number;
      scaleZ?: number;
    },
  ) => {
    if (!label) {
      return;
    }

    const cacheKey = JSON.stringify({
      label,
      align: options?.align ?? 'center',
      color: options?.color ?? '#e2e8f0',
    });

    let labelTexture = textureCache.get(cacheKey);
    if (!labelTexture) {
      labelTexture = createKeyLabelTexture(label, {
        align: options?.align,
        color: options?.color,
      });
      textureCache.set(cacheKey, labelTexture);
    }

    const labelPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(
        width * (options?.scaleX ?? 0.72),
        depth * (options?.scaleZ ?? 0.64),
      ),
      new THREE.MeshBasicMaterial({
        map: labelTexture,
        transparent: true,
        opacity: options?.opacity ?? 0.66,
        depthWrite: false,
      }),
    );
    labelPlane.rotation.x = -Math.PI / 2;
    labelPlane.position.set(x, 0.007, z);
    group.add(labelPlane);
  };

  const addKey = ({
    label,
    x,
    z,
    width,
    depth,
    align,
  }: {
    label: string;
    x: number;
    z: number;
    width: number;
    depth: number;
    align?: 'center' | 'corner';
  }) => {
    const keyMesh = new THREE.Mesh(
      new RoundedBoxGeometry(width, keyThickness, depth, 8, 0.02),
      keyMaterial,
    );
    keyMesh.position.set(x, 0, z);
    keyMesh.castShadow = true;
    keyMesh.receiveShadow = true;
    group.add(keyMesh);

    const inset = new THREE.Mesh(
      new THREE.PlaneGeometry(width + 0.012, depth + 0.012),
      new THREE.MeshBasicMaterial({
        color: 0x000000,
        transparent: true,
        opacity: 0.16,
      }),
    );
    inset.rotation.x = -Math.PI / 2;
    inset.position.set(x, -0.006, z);
    group.add(inset);

    addLegendPlane(label, x, z, width, depth, {
      align: align ?? (label.length > 2 ? 'corner' : 'center'),
      scaleX: label.length > 2 ? 0.84 : 0.66,
      scaleZ: label.length > 2 ? 0.58 : 0.62,
    });
  };

  const addRow = (
    z: number,
    depth: number,
    keys: Array<{ label: string; w: number; align?: 'center' | 'corner' }>,
    offset = 0,
  ) => {
    let cursor = leftEdge + offset;
    keys.forEach((key) => {
      const width = key.w * unit;
      addKey({
        label: key.label,
        x: cursor + width / 2,
        z,
        width,
        depth,
        align: key.align,
      });
      cursor += width + gap;
    });
  };

  const topRowZ = -0.63;
  const topRowDepth = 0.118;
  const escWidth = 1.02 * unit;
  const touchIdWidth = 1.06 * unit;
  const touchBarWidth = layoutWidth - escWidth - touchIdWidth - gap * 2;
  const escCenter = leftEdge + escWidth / 2;
  const touchBarCenter = escCenter + escWidth / 2 + gap + touchBarWidth / 2;
  const touchIdCenter = leftEdge + layoutWidth - touchIdWidth / 2;

  addKey({
    label: 'esc',
    x: escCenter,
    z: topRowZ,
    width: escWidth,
    depth: topRowDepth,
    align: 'corner',
  });

  const touchBarBase = new THREE.Mesh(
    new RoundedBoxGeometry(touchBarWidth, keyThickness, topRowDepth, 10, 0.02),
    new THREE.MeshStandardMaterial({
      color: 0x080b0f,
      metalness: 0.08,
      roughness: 0.96,
      emissive: 0x1a2030,
      emissiveIntensity: 0.38,
    }),
  );
  touchBarBase.position.set(touchBarCenter, 0, topRowZ);
  group.add(touchBarBase);

  const touchBarIcons = new THREE.Mesh(
    new THREE.PlaneGeometry(touchBarWidth * 0.96, topRowDepth * 0.74),
    new THREE.MeshBasicMaterial({
      map: createTouchBarIconsTexture(),
      transparent: true,
      opacity: 0.94,
      depthWrite: false,
      toneMapped: false,
    }),
  );
  touchBarIcons.rotation.x = -Math.PI / 2;
  touchBarIcons.position.set(touchBarCenter, 0.007, topRowZ);
  group.add(touchBarIcons);

  addKey({
    label: '',
    x: touchIdCenter,
    z: topRowZ,
    width: touchIdWidth,
    depth: topRowDepth,
  });
  addLegendPlane('◉', touchIdCenter, topRowZ, touchIdWidth, topRowDepth, {
    align: 'center',
    color: '#d8deea',
    opacity: 0.7,
    scaleX: 0.46,
    scaleZ: 0.5,
  });

  addRow(-0.385, 0.17, [
    { label: '`', w: 1.0 },
    { label: '1', w: 1 }, { label: '2', w: 1 }, { label: '3', w: 1 },
    { label: '4', w: 1 }, { label: '5', w: 1 }, { label: '6', w: 1 },
    { label: '7', w: 1 }, { label: '8', w: 1 }, { label: '9', w: 1 },
    { label: '0', w: 1 }, { label: '-', w: 1 }, { label: '=', w: 1 },
    { label: 'delete', w: 1.48, align: 'corner' },
  ]);

  addRow(-0.145, 0.17, [
    { label: 'tab', w: 1.48, align: 'corner' },
    { label: 'Q', w: 1 }, { label: 'W', w: 1 }, { label: 'E', w: 1 },
    { label: 'R', w: 1 }, { label: 'T', w: 1 }, { label: 'Y', w: 1 },
    { label: 'U', w: 1 }, { label: 'I', w: 1 }, { label: 'O', w: 1 },
    { label: 'P', w: 1 }, { label: '[', w: 1 }, { label: ']', w: 1 },
    { label: '\\', w: 1.48 },
  ]);

  addRow(0.095, 0.17, [
    { label: 'caps lock', w: 1.82, align: 'corner' },
    { label: 'A', w: 1 }, { label: 'S', w: 1 }, { label: 'D', w: 1 },
    { label: 'F', w: 1 }, { label: 'G', w: 1 }, { label: 'H', w: 1 },
    { label: 'J', w: 1 }, { label: 'K', w: 1 }, { label: 'L', w: 1 },
    { label: ';', w: 1 }, { label: '\'', w: 1 },
    { label: 'return', w: 1.98, align: 'corner' },
  ], 0.012);

  addRow(0.335, 0.17, [
    { label: 'shift', w: 2.18, align: 'corner' },
    { label: 'Z', w: 1 }, { label: 'X', w: 1 }, { label: 'C', w: 1 },
    { label: 'V', w: 1 }, { label: 'B', w: 1 }, { label: 'N', w: 1 },
    { label: 'M', w: 1 }, { label: ',', w: 1 }, { label: '.', w: 1 },
    { label: '/', w: 1 },
    { label: 'shift', w: 2.26, align: 'corner' },
  ]);

  addRow(0.585, 0.155, [
    { label: 'fn', w: 0.92, align: 'corner' },
    { label: 'control', w: 0.92, align: 'corner' },
    { label: 'option', w: 1.0, align: 'corner' },
    { label: 'command', w: 0.96, align: 'corner' },
    { label: '', w: 5.2 },
    { label: 'command', w: 0.96, align: 'corner' },
    { label: 'option', w: 1.0, align: 'corner' },
    { label: '◀', w: 0.9 },
    { label: '▼', w: 0.9 },
    { label: '▶', w: 0.9 },
  ]);

  const downArrowCenter =
    leftEdge
    + (0.92 + 0.92 + 1 + 0.96 + 5.2 + 0.96 + 1 + 0.9) * unit
    + gap * 8
    + (0.9 * unit) / 2;
  addKey({
    label: '▲',
    x: downArrowCenter,
    z: 0.47,
    width: 0.9 * unit,
    depth: 0.072,
  });

  return group;
}

function createKeyLabelTexture(
  label: string,
  options: {
    align?: 'center' | 'corner';
    color?: string;
  } = {},
) {
  const size = 128;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  
  if (!ctx) throw new Error('Could not get canvas context');

  ctx.clearRect(0, 0, size, size);

  const isWordLabel = label.length > 2;
  const isLongWordLabel = label.length > 6;
  const fontSize = isLongWordLabel ? 16 : isWordLabel ? 20 : 38;
  ctx.fillStyle = options.color ?? '#f4f7fb';
  ctx.font = `${isWordLabel ? '' : '600 '} ${fontSize}px "SF Pro Display", "Helvetica Neue", Arial, sans-serif`;

  if ((options.align ?? 'center') === 'corner') {
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillText(label, 12, 16);
  } else {
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(label, size / 2, size / 2);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}

function createSpeakerGrille() {
  const group = new THREE.Group();
  const holesX = 6;
  const holesZ = 18;
  const spacingX = 0.041;
  const spacingZ = 0.086;
  const geometry = new THREE.CylinderGeometry(0.008, 0.008, 0.004, 20);
  const material = new THREE.MeshStandardMaterial({
    color: 0x0d1014,
    metalness: 0.12,
    roughness: 0.92,
  });
  const holes = new THREE.InstancedMesh(geometry, material, holesX * holesZ);
  const matrix = new THREE.Matrix4();
  let index = 0;

  for (let xIndex = 0; xIndex < holesX; xIndex += 1) {
    for (let zIndex = 0; zIndex < holesZ; zIndex += 1) {
      const x = (xIndex - (holesX - 1) / 2) * spacingX;
      const z = (zIndex - (holesZ - 1) / 2) * spacingZ;
      matrix.makeTranslation(x, 0, z);
      holes.setMatrixAt(index, matrix);
      index += 1;
    }
  }

  holes.instanceMatrix.needsUpdate = true;
  holes.castShadow = true;
  holes.receiveShadow = true;
  group.add(holes);

  return group;
}

function createTouchBarIconsTexture() {
  const width = 1024;
  const height = 96;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    throw new Error('Could not get canvas context');
  }

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = 'rgba(8, 11, 16, 0.95)';
  ctx.fillRect(0, 0, width, height);

  const items = [
    { label: '☀', color: '#f8cf5f', size: 30 },
    { label: '⌨', color: '#f4f7ff', size: 28 },
    { label: '◀', color: '#f4f7ff', size: 28 },
    { label: '▮▮', color: '#f4f7ff', size: 24 },
    { label: '▶', color: '#f4f7ff', size: 28 },
    { label: '◔', color: '#f4f7ff', size: 26 },
    { label: '◕', color: '#f4f7ff', size: 26 },
    { label: '◎', color: '#7cb8ff', size: 30 },
  ];

  const startX = 118;
  const itemGap = 100;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  items.forEach((item, index) => {
    const x = startX + index * itemGap;
    ctx.fillStyle = item.color;
    ctx.shadowBlur = item.color === '#7cb8ff' ? 12 : 0;
    ctx.shadowColor = item.color;
    ctx.font = `600 ${item.size}px "SF Pro Display", "Helvetica Neue", Arial, sans-serif`;
    ctx.fillText(item.label, x, height / 2);
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}

function createParticles(count: number) {
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);

  for (let index = 0; index < count; index += 1) {
    const stride = index * 3;
    positions[stride] = THREE.MathUtils.randFloatSpread(12);
    positions[stride + 1] = THREE.MathUtils.randFloatSpread(7);
    positions[stride + 2] = THREE.MathUtils.randFloat(-7, 2);
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const material = new THREE.PointsMaterial({
    color: 0xb9d7ff,
    size: 0.04,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.55,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });

  return new THREE.Points(geometry, material);
}

function createContactShadow() {
  const material = new THREE.MeshBasicMaterial({
    map: createRadialTexture([
      { offset: 0, color: 'rgba(0,0,0,0.9)' },
      { offset: 0.4, color: 'rgba(0,0,0,0.26)' },
      { offset: 1, color: 'rgba(0,0,0,0)' },
    ]),
    transparent: true,
    depthWrite: false,
    opacity: 0.34,
  });

  const shadow = new THREE.Mesh(new THREE.PlaneGeometry(5.8, 3.2), material);
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = -0.405;
  return shadow;
}

function addGlowPlane(config: {
  texture: THREE.Texture;
  color: number;
  position: THREE.Vector3;
  scale: THREE.Vector2;
  opacity: number;
}) {
  const material = new THREE.MeshBasicMaterial({
    map: config.texture,
    color: config.color,
    transparent: true,
    opacity: config.opacity,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    toneMapped: false,
  });

  const plane = new THREE.Mesh(new THREE.PlaneGeometry(config.scale.x, config.scale.y), material);
  plane.position.copy(config.position);
  scene.add(plane);
}

function createRadialTexture(stops: Array<{ offset: number; color: string }>) {
  const canvasElement = document.createElement('canvas');
  canvasElement.width = 512;
  canvasElement.height = 512;

  const context = canvasElement.getContext('2d');

  if (!context) {
    throw new Error('Unable to create 2D context');
  }

  const gradient = context.createRadialGradient(256, 256, 0, 256, 256, 256);

  stops.forEach((stop) => {
    gradient.addColorStop(stop.offset, stop.color);
  });

  context.fillStyle = gradient;
  context.fillRect(0, 0, 512, 512);

  const texture = new THREE.CanvasTexture(canvasElement);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function createLinearTexture(stops: Array<{ offset: number; color: string }>) {
  const canvasElement = document.createElement('canvas');
  canvasElement.width = 512;
  canvasElement.height = 512;

  const context = canvasElement.getContext('2d');

  if (!context) {
    throw new Error('Unable to create 2D context');
  }

  const gradient = context.createLinearGradient(0, 0, 512, 512);

  stops.forEach((stop) => {
    gradient.addColorStop(stop.offset, stop.color);
  });

  context.fillStyle = gradient;
  context.fillRect(0, 0, 512, 512);

  const texture = new THREE.CanvasTexture(canvasElement);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function createLogoTexture() {
  const canvasElement = document.createElement('canvas');
  canvasElement.width = 256;
  canvasElement.height = 256;

  const context = canvasElement.getContext('2d');

  if (!context) {
    throw new Error('Unable to create 2D context');
  }

  context.clearRect(0, 0, 256, 256);
  context.fillStyle = '#05070b';

  context.beginPath();
  context.ellipse(108, 140, 42, 56, 0.22, 0, Math.PI * 2);
  context.ellipse(146, 140, 42, 56, -0.22, 0, Math.PI * 2);
  context.ellipse(127, 176, 36, 28, 0, 0, Math.PI * 2);
  context.fill();

  context.globalCompositeOperation = 'destination-out';
  context.beginPath();
  context.ellipse(170, 96, 18, 22, 0, 0, Math.PI * 2);
  context.fill();

  context.globalCompositeOperation = 'source-over';
  context.beginPath();
  context.ellipse(145, 72, 18, 8, -0.75, 0, Math.PI * 2);
  context.fill();

  const texture = new THREE.CanvasTexture(canvasElement);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}
