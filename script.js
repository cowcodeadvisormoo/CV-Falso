// DATOS DE LAS PÁGINAS DEL CUADERNO (5 PARES DE PÁGINAS = 10 PÁGINAS INDIVIDUALES)
const spreads = [
  // SPREAD 0: PERFIL
  {
    left: `
      <h1 class="handwriting">¡Hola, soy Alex!</h1>
      <h2 class="section-title">Perfil Profesional</h2>
      <p style="font-size: 0.9rem; line-height: 1.5; color: #374151; margin-bottom: 12px;">
        Desarrollador Web Full Stack apasionado por construir aplicaciones interactivas, accesibles e innovadoras. Con experiencia creando interfaces elegantes y arquitecturas robustas.
      </p>
      <div class="card-box">
        <strong style="font-size: 0.85rem; color: #b45309;">Enfoque Principal:</strong>
        <p style="font-size: 0.8rem; color: #4b5563;">Desarrollo Frontend, Experiencia de Usuario (UI/UX) y Soluciones Escalables.</p>
      </div>
    `,
    right: `
      <h2 class="section-title">Destacados Clave</h2>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 12px;">
        <div style="background: #fef3c7; padding: 10px; border-radius: 6px; text-align: center;">
          <span style="font-size: 1.4rem; font-weight: 700; color: #b45309; display: block;">+5</span>
          <span style="font-size: 0.75rem; color: #78350f;">Años de Exp.</span>
        </div>
        <div style="background: #dbeafe; padding: 10px; border-radius: 6px; text-align: center;">
          <span style="font-size: 1.4rem; font-weight: 700; color: #1d4ed8; display: block;">+20</span>
          <span style="font-size: 0.75rem; color: #1e40af;">Proyectos</span>
        </div>
      </div>
      <p style="font-size: 0.85rem; color: #4b5563; font-style: italic;">
        "La simplicidad es la clave de la verdadera elegancia digital."
      </p>
    `
  },
  // SPREAD 1: EXPERIENCIA
  {
    left: `
      <h2 class="section-title">Experiencia Laboral</h2>
      <div class="card-box">
        <strong style="font-size: 0.9rem; color: #111827;">Senior Frontend Developer</strong>
        <p style="font-size: 0.75rem; color: #6b7280;">Tech Innovators Inc. | 2023 - Presente</p>
        <p style="font-size: 0.8rem; color: #374151; margin-top: 4px;">Liderazgo del rediseño del sistema web, aumentando la velocidad en un 40%.</p>
      </div>
    `,
    right: `
      <h2 class="section-title">Trayectoria Previa</h2>
      <div class="card-box">
        <strong style="font-size: 0.9rem; color: #111827;">Full Stack Developer</strong>
        <p style="font-size: 0.75rem; color: #6b7280;">Digital Craft Studio | 2021 - 2023</p>
        <p style="font-size: 0.8rem; color: #374151; margin-top: 4px;">Desarrollo de servicios API RESTful y prototipos UX interactivos.</p>
      </div>
    `
  },
  // SPREAD 2: PROYECTOS
  {
    left: `
      <h2 class="section-title">Proyectos Destacados</h2>
      <div class="card-box">
        <strong style="font-size: 0.9rem; color: #111827;">Plataforma de Bitácora Web</strong>
        <p style="font-size: 0.8rem; color: #374151; margin-top: 2px;">CV interactivo simulando un libro en 3D con generación directa en PDF.</p>
        <div style="margin-top: 6px;"><span class="badge">JavaScript</span><span class="badge">CSS3</span></div>
      </div>
    `,
    right: `
      <h2 class="section-title">Más Proyectos</h2>
      <div class="card-box">
        <strong style="font-size: 0.9rem; color: #111827;">Dashboard Analítico</strong>
        <p style="font-size: 0.8rem; color: #374151; margin-top: 2px;">Panel de métricas en tiempo real con integración de gráficos interactivos.</p>
        <div style="margin-top: 6px;"><span class="badge">React</span><span class="badge">Tailwind</span></div>
      </div>
    `
  },
  // SPREAD 3: SKILLS
  {
    left: `
      <h2 class="section-title">Educación & Formación</h2>
      <div class="card-box">
        <strong style="font-size: 0.9rem; color: #111827;">Lic. en Ciencias de la Computación</strong>
        <p style="font-size: 0.75rem; color: #6b7280;">UNAM | 2016 - 2020</p>
      </div>
    `,
    right: `
      <h2 class="section-title">Habilidades Técnicas</h2>
      <div style="margin-bottom: 8px;">
        <span class="badge">JavaScript (ES6+)</span>
        <span class="badge">TypeScript</span>
        <span class="badge">React</span>
        <span class="badge">Node.js</span>
        <span class="badge">HTML5/CSS3</span>
        <span class="badge">Git & GitHub</span>
      </div>
    `
  },
  // SPREAD 4: CONTACTO
  {
    left: `
      <h2 class="section-title">¿Hablamos?</h2>
      <p style="font-size: 0.85rem; color: #374151; margin-bottom: 10px;">
        Estoy disponible para colaboraciones, proyectos freelance o posiciones de tiempo completo.
      </p>
      <button onclick="copyToClipboard('alex.morgan@email.com', 'Correo copiado al portapapeles')" class="btn-primary" style="font-size: 0.8rem; padding: 6px 12px;">
        <i class="fa-solid fa-envelope"></i> Copiar Correo
      </button>
    `,
    right: `
      <h2 class="section-title">Canales de Contacto</h2>
      <p style="font-size: 0.85rem; color: #374151;"><strong>Ubicación:</strong> Mérida, México</p>
      <p style="font-size: 0.85rem; color: #374151; margin-top: 4px;"><strong>LinkedIn:</strong> linkedin.com/in/alexmorgan</p>
      <p style="font-size: 0.85rem; color: #374151; margin-top: 4px;"><strong>GitHub:</strong> github.com/alexmorgan</p>
    `
  }
];

let currentSpread = 0;

// ELEMENTOS DOM
const pageLeftContent = document.getElementById('page-left-content');
const pageRightContent = document.getElementById('page-right-content');
const pageCounter = document.getElementById('page-counter');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const downloadPdfBtn = document.getElementById('download-pdf-btn');
const tabButtons = document.querySelectorAll('.tab-btn');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');

// RENDERIZAR PÁGINAS DEL CUADERNO
function renderSpread(index) {
  if (index < 0 || index >= spreads.length) return;
  
  currentSpread = index;
  
  // Actualizar contenido
  pageLeftContent.innerHTML = spreads[currentSpread].left;
  pageRightContent.innerHTML = spreads[currentSpread].right;
  
  // Actualizar contador (Ej: Páginas 1-2 de 10)
  const leftPageNum = currentSpread * 2 + 1;
  const rightPageNum = leftPageNum + 1;
  pageCounter.textContent = `Páginas ${leftPageNum}-${rightPageNum} de ${spreads.length * 2}`;
  
  // Actualizar estados de pestañas laterales
  tabButtons.forEach(btn => {
    const spreadIndex = parseInt(btn.dataset.spread, 10);
    if (spreadIndex === currentSpread) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// COPIAR AL PORTAPAPELES CON TOAST
function copyToClipboard(text, message) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(message);
  }).catch(() => {
    showToast("Error al copiar");
  });
}

function showToast(message) {
  toastMessage.textContent = message;
  toast.classList.remove('hidden');
  setTimeout(() => {
    toast.classList.add('hidden');
  }, 2500);
}

// DESCARGA PDF FORMATO HARVARD
function downloadHarvardPDF() {
  const element = document.getElementById('harvard-pdf-template');
  
  showToast("Generando PDF en formato Harvard...");

  const opt = {
    margin:       [0.4, 0.4, 0.4, 0.4],
    filename:     'CV_Alex_Morgan_Harvard.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2, useCORS: true, logging: false },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(element).save().then(() => {
    showToast("¡PDF descargado con éxito!");
  });
}

// EVENT LISTENERS
prevBtn.addEventListener('click', () => {
  if (currentSpread > 0) renderSpread(currentSpread - 1);
});

nextBtn.addEventListener('click', () => {
  if (currentSpread < spreads.length - 1) renderSpread(currentSpread + 1);
});

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetSpread = parseInt(btn.dataset.spread, 10);
    renderSpread(targetSpread);
  });
});

downloadPdfBtn.addEventListener('click', downloadHarvardPDF);

// NAVEGACIÓN CON FLECHAS DEL TECLADO
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft' && currentSpread > 0) {
    renderSpread(currentSpread - 1);
  } else if (e.key === 'ArrowRight' && currentSpread < spreads.length - 1) {
    renderSpread(currentSpread + 1);
  }
});

// INICIALIZAR
renderSpread(0);