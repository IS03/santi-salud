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

  valor.textContent = imcRedondeado;

  if (imc < 18.5) {
    clasificacion.textContent = "Clasificación de peso: Bajo peso";
    riesgo.textContent = "Riesgo de enfermedad relacionada: Bajo";
  } else if (imc < 25) {
    clasificacion.textContent = "Clasificación de peso: Peso normal";
    riesgo.textContent = "Riesgo de enfermedad relacionada: Promedio";
  } else if (imc < 30) {
    clasificacion.textContent = "Clasificación de peso: Exceso de peso";
    riesgo.textContent = "Riesgo de enfermedad relacionada: Aumento del riesgo";
  } else if (imc < 35) {
    clasificacion.textContent = "Clasificación de peso: Obesidad grado I";
    riesgo.textContent = "Riesgo de enfermedad relacionada: Moderado";
  } else if (imc < 40) {
    clasificacion.textContent = "Clasificación de peso: Obesidad grado II";
    riesgo.textContent = "Riesgo de enfermedad relacionada: Alto";
  } else {
    clasificacion.textContent = "Clasificación de peso: Obesidad grado III";
    riesgo.textContent = "Riesgo de enfermedad relacionada: Muy alto";
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
  const prevBtn = document.querySelector('.slider-prev');
  const nextBtn = document.querySelector('.slider-next');
  let currentSlide = 0;

  // Función para mostrar un slide específico
  function showSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    currentSlide = index;
  }

  // Event listeners para los botones
  prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

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

  
