// Modal
document.querySelectorAll(".cta").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    const modal = document.getElementById("modal-contacto");
    if (modal) modal.style.display = "flex";
  });
});

function cerrarFormulario() {
  document.getElementById("modal-contacto").style.display = "none";
}

function cerrarModal(e) {
  if (e.target.id === "modal-contacto") {
    cerrarFormulario();
  }
}

// Preguntas frecuentes tipo acordeón
document.querySelectorAll('.faq-pregunta').forEach(pregunta => {
  pregunta.addEventListener('click', () => {
    const respuesta = pregunta.nextElementSibling;
    const yaActiva = respuesta.classList.contains('activa');

    document.querySelectorAll('.faq-respuesta').forEach(r => r.classList.remove('activa'));
    document.querySelectorAll('.faq-pregunta').forEach(p => p.setAttribute('aria-expanded', 'false'));

    if (!yaActiva) {
      respuesta.classList.add('activa');
      pregunta.setAttribute('aria-expanded', 'true');
    }
  });
});

// IMC Calculadora
const pesoInput = document.getElementById('peso');
const alturaInput = document.getElementById('altura');
const pesoSlider = document.getElementById('peso-slider');
const alturaSlider = document.getElementById('altura-slider');

function actualizarIMC() {
  const peso = parseFloat(pesoInput.value);
  const altura = parseFloat(alturaInput.value) / 100;
  const imc = peso / (altura * altura);
  const imcRedondeado = imc.toFixed(1);

  const valor = document.getElementById('imc-valor');
  const clasificacion = document.getElementById('imc-clasificacion');
  const riesgo = document.getElementById('imc-riesgo');
  const badge = document.querySelector('.clasificacion-badge');

  valor.textContent = imcRedondeado;

  // Limpiar clases anteriores del badge
  badge.classList.remove('bajo-peso', 'peso-normal', 'exceso-peso', 'obesidad-grado-i', 'obesidad-grado-ii', 'obesidad-grado-iii');

  if (imc < 18.5) {
    clasificacion.textContent = "Clasificación de peso: Bajo peso";
    riesgo.textContent = "Riesgo de enfermedad relacionada: Bajo";
    badge.textContent = "Bajo peso";
    badge.classList.add('bajo-peso');
  } else if (imc < 25) {
    clasificacion.textContent = "Clasificación de peso: Peso normal";
    riesgo.textContent = "Riesgo de enfermedad relacionada: Promedio";
    badge.textContent = "Peso normal";
    badge.classList.add('peso-normal');
  } else if (imc < 30) {
    clasificacion.textContent = "Clasificación de peso: Exceso de peso";
    riesgo.textContent = "Riesgo de enfermedad relacionada: Aumento del riesgo";
    badge.textContent = "Exceso de peso";
    badge.classList.add('exceso-peso');
  } else if (imc < 35) {
    clasificacion.textContent = "Clasificación de peso: Obesidad grado I";
    riesgo.textContent = "Riesgo de enfermedad relacionada: Moderado";
    badge.textContent = "Obesidad grado I";
    badge.classList.add('obesidad-grado-i');
  } else if (imc < 40) {
    clasificacion.textContent = "Clasificación de peso: Obesidad grado II";
    riesgo.textContent = "Riesgo de enfermedad relacionada: Alto";
    badge.textContent = "Obesidad grado II";
    badge.classList.add('obesidad-grado-ii');
  } else {
    clasificacion.textContent = "Clasificación de peso: Obesidad grado III";
    riesgo.textContent = "Riesgo de enfermedad relacionada: Muy alto";
    badge.textContent = "Obesidad grado III";
    badge.classList.add('obesidad-grado-iii');
  }
}

[pesoInput, pesoSlider].forEach(el => el.addEventListener('input', e => {
  const valor = parseFloat(e.target.value);
  pesoInput.value = pesoSlider.value = valor;
  actualizarIMC();
}));

[alturaInput, alturaSlider].forEach(el => el.addEventListener('input', e => {
  const valor = parseFloat(e.target.value);
  alturaInput.value = alturaSlider.value = valor;
  actualizarIMC();
}));

actualizarIMC();

document.getElementById("modal-contacto").addEventListener("click", cerrarModal);

// Animación de entrada para las cards de los planes
document.addEventListener('DOMContentLoaded', () => {
  const planes = document.querySelectorAll('#planes .plan');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { 
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  planes.forEach(plan => {
    observer.observe(plan);
  });
});

// Animación de entrada para las listas de Servicios y Beneficios
document.addEventListener('DOMContentLoaded', () => {
  const listItems = document.querySelectorAll('#servicios li, #beneficios li');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Añadir un pequeño retraso basado en el índice del elemento
        const index = Array.from(entry.target.parentNode.children).indexOf(entry.target);
        entry.target.style.animationDelay = `${index * 0.1}s`;
        entry.target.classList.add('visible');
        // Dejar de observar el elemento una vez que la animación se ha disparado
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  listItems.forEach(item => {
    observer.observe(item);
  });
});

// Slider de testimonios
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.testimonios-slider');
  const slides = document.querySelectorAll('.testimonial');
  const dots = document.querySelectorAll('.slider-dot');
  let currentSlide = 0;

  // Función para mostrar un slide específico
  function showSlide(index) {
		slider.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    currentSlide = index;
  }

  // Event listeners para los dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
    });
  });

  // Auto slide cada 5 segundos
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 5000);

  // Animación de entrada para los testimonios
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  slides.forEach(slide => {
    observer.observe(slide);
  });
});

// Control de aparición de pestañas sociales
document.addEventListener('DOMContentLoaded', () => {
  const socialTabs = document.querySelector('.mobile-social-tabs');
  
  // Esperar 0.5 segundos antes de mostrar las pestañas
  setTimeout(() => {
    if (socialTabs) {
      socialTabs.classList.add('visible');
    }
  }, 500);
});

// Control del menú móvil
document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.mobile-menu-button');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeButton = document.querySelector('.close-menu');
  const menuLinks = document.querySelectorAll('.mobile-nav a');
  const header = document.querySelector('header');

  // Función para controlar la aparición de la barra móvil según el scroll
  function updateMobileNavVisibility() {
    const headerBottom = header.offsetTop + header.offsetHeight;
    if (window.scrollY > headerBottom - 50) {
      menuButton.classList.add('scrolled');
      mobileMenu.classList.add('scrolled');
    } else {
      menuButton.classList.remove('scrolled');
      mobileMenu.classList.remove('scrolled');
    }
  }

  // Actualizar visibilidad al cargar y al hacer scroll
  window.addEventListener('scroll', updateMobileNavVisibility);
  updateMobileNavVisibility();

  // Abrir/Cerrar menú y transformar botón
  menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    menuButton.classList.toggle('active'); // Toggle active class on the button itself
  });

  // Cerrar menú al hacer clic en un enlace
  menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      // Agregar clase para la animación
      link.classList.add('active');
      
      // Cerrar el menú con una animación suave
      mobileMenu.classList.remove('active');
      menuButton.classList.remove('active');
      
      // Esperar a que el menú se cierre antes de hacer scroll
      setTimeout(() => {
        targetSection.scrollIntoView({ behavior: 'smooth' });
        // Remover la clase de animación después de un tiempo
        setTimeout(() => {
          link.classList.remove('active');
        }, 500);
      }, 300);
    });
  });

  // Cerrar menú al hacer clic fuera
  document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !menuButton.contains(e.target)) {
      mobileMenu.classList.remove('active');
      menuButton.classList.remove('active'); // Also remove active class from button when closing by clicking outside
    }
  });
});

// Control de la barra de navegación de escritorio (aparece y se achica al scrollear pasado el header)
document.addEventListener('DOMContentLoaded', () => {
  const desktopNav = document.querySelector('.desktop-nav');
  const header = document.querySelector('header');

  function updateDesktopNavAppearance() {
    const headerBottom = header.getBoundingClientRect().bottom;

    if (window.innerWidth >= 769) { // Solo en desktop
      if (headerBottom <= 0) {
        desktopNav.classList.add('scrolled');
      } else {
        desktopNav.classList.remove('scrolled');
      }
    } else {
      desktopNav.classList.remove('scrolled'); // Asegurar estado inicial en móvil
    }
  }

  // Ejecutar al cargar y al hacer scroll
  window.addEventListener('scroll', updateDesktopNavAppearance);
  window.addEventListener('resize', updateDesktopNavAppearance); // También al redimensionar
  updateDesktopNavAppearance(); // Verificar la posición inicial
});

// Dark Mode Toggle
const toggleSwitchDesktop = document.querySelector('#checkbox');
const toggleSwitchMobile = document.querySelector('#checkbox-mobile');
const desktopLogo = document.querySelector('.desktop-nav .logo img'); // Get desktop logo element
const currentTheme = localStorage.getItem('theme');

// Set initial logo based on theme
if (currentTheme) {
  document.documentElement.setAttribute('data-bs-theme', currentTheme);
      if (currentTheme === 'dark') {
      toggleSwitchDesktop.checked = true;
      toggleSwitchMobile.checked = true;
      if (desktopLogo) desktopLogo.src = 'img/logoOscuro.png'; // Set dark logo initially
    } else {
      if (desktopLogo) desktopLogo.src = 'img/logo.png'; // Set light logo initially
    }
} else {
    // Default to light theme and light logo if no theme is stored
    document.documentElement.setAttribute('data-bs-theme', 'light');
    localStorage.setItem('theme', 'light');
    if (desktopLogo) desktopLogo.src = 'img/logo.png';
    toggleSwitchDesktop.checked = false;
    toggleSwitchMobile.checked = false;
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-bs-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    if (desktopLogo) desktopLogo.src = 'img/logoOscuro.png'; // Change logo to dark
    // Sincronizar el otro switch
    if (e.target.id === 'checkbox') {
      toggleSwitchMobile.checked = true;
    } else if (e.target.id === 'checkbox-mobile') {
      toggleSwitchDesktop.checked = true;
    }
  } else {
    document.documentElement.setAttribute('data-bs-theme', 'light');
    localStorage.setItem('theme', 'light');
    if (desktopLogo) desktopLogo.src = 'img/logo.png'; // Change logo to light
    // Sincronizar el otro switch
    if (e.target.id === 'checkbox') {
      toggleSwitchMobile.checked = false;
    } else if (e.target.id === 'checkbox-mobile') {
      toggleSwitchDesktop.checked = false;
    }
  }
}

toggleSwitchDesktop.addEventListener('change', switchTheme);
toggleSwitchMobile.addEventListener('change', switchTheme);

// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.remove('hide');
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
    backToTopButton.classList.add('hide');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});