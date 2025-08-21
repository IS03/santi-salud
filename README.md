# 🥗 Santiago - Nutrición Deportiva

Sitio web profesional para un nutricionista deportivo, orientado a la **presentación de servicios**, la **captación de clientes** y la **experiencia del usuario**.  

Este proyecto combina **HTML5, CSS3, JavaScript (ES6), Bootstrap 5, AOS y Font Awesome**, con un diseño moderno, animaciones suaves y soporte para **modo claro/oscuro**.  

---

## 📂 Archivos principales

- **`index.html`** → Estructura HTML y secciones principales del sitio.  
- **`estilos.css`** → Estilos personalizados: variables para light/dark mode, grillas, animaciones y responsividad.  
- **`script.js`** → Lógica de interactividad: menú móvil, acordeón FAQ, calculadora IMC, animaciones dinámicas, slider de testimonios.  

---

## ⚙️ Tecnologías Utilizadas

### 1. **HTML5**
- Estructuración semántica de contenido.  
- Uso de secciones (`<section>`, `<header>`, `<footer>`) para accesibilidad.  
- Integración de atributos `data-aos` para animaciones en scroll.  
- Formularios modales para contacto.  

### 2. **CSS3**
- **Diseño responsivo** con media queries en breakpoints:  
  - `600px` → móviles chicos.  
  - `768px` → tablets.  
  - `1200px` → desktop grandes.  
- Variables CSS (`--bg-color`, `--text-color`) para modo claro/oscuro.  
- **Flexbox y CSS Grid** para layouts dinámicos.  
- Animaciones personalizadas con `@keyframes`.  
- Hover effects y transiciones suaves.  

### 3. **JavaScript (ES6+)**
- Manipulación del DOM con `querySelectorAll`, `classList`, `addEventListener`.  
- Eventos dinámicos: `click`, `scroll`, `input`.  
- Persistencia del **modo oscuro** con `localStorage`.  
- **IntersectionObserver** para animaciones al scrollear.  
- Slider de testimonios automático con `setInterval()`.  

### 4. **Bootstrap 5**
- Carruseles con controles e indicadores.  
- Sistema de grillas responsivas.  
- Utilidades para spacing, ratio e imágenes fluidas.  

### 5. **AOS (Animate On Scroll)**
- Librería para animaciones progresivas en secciones (`fade-up`, `fade-left`, `fade-right`).  

### 6. **Font Awesome**
- Iconos en botones, menús y toggles de tema.  

---

## 🔎 Detalle Técnico por Sección

### **1. Menú de Navegación**
- **Desktop**:  
  - Navbar fija con cambio de estilo al hacer scroll (`.scrolled`).  
  - Interruptor de modo claro/oscuro.  
- **Móvil**:  
  - Menú hamburguesa animado con transición a “X”.  
  - Apertura/cierre controlado con JS.  
  - Scroll suave al hacer clic en enlaces.  

### **2. Modo Claro/Oscuro**
- Implementado con `data-bs-theme`.  
- Persistencia del estado en `localStorage`.  
- Cambio dinámico de logotipo (claro ↔ oscuro).  
- Sincronización de switches en desktop y mobile.  

### **3. Sección "Sobre mí"**
- Foto circular con borde dinámico.  
- Diseño con Flexbox para alinear imagen y texto.  
- Animación `fade-up` en scroll.  

### **4. Sección "Trabajando"**
- Carrusel de imágenes (Bootstrap).  
- Indicadores, controles personalizados y soporte `touch` en mobile.  
- Imágenes ajustadas con `object-fit`.  

### **5. Sección "Consultorio Físico"**
- Google Maps embebido vía `iframe`.  
- Dos versiones del mapa: light y dark mode.  
- Contenedor con `box-shadow` y `border-radius`.  

### **6. Sección "Servicios" y "Beneficios"**
- Listas dinámicas con `IntersectionObserver`.  
- Animaciones con `@keyframes fadeInSlideUpSmooth`.  
- Estilos minimalistas con iconos (`✓`).  

### **7. Sección "Planes de Nutrición"**
- Tarjetas construidas con CSS Grid.  
- Aparición progresiva con animaciones.  
- Hover effects: elevación y cambio de borde lateral.  

### **8. Sección "Preguntas Frecuentes" (FAQ)**
- Acordeón implementado en JS.  
- `aria-expanded` para accesibilidad.  
- Respuestas con transición de altura (`max-height`) y opacidad.  

### **9. Sección "Testimonios"**
- Slider personalizado con `translateX()`.  
- Auto-slide cada 5 segundos.  
- Dots sincronizados con el slide activo.  
- Animaciones de entrada con `IntersectionObserver`.  

### **10. Calculadora de IMC**
- Sliders de peso y altura sincronizados con inputs numéricos.  
- Cálculo dinámico: `IMC = peso / (altura^2)`.  
- Clasificación en rangos:  
  - Bajo peso, Normal, Sobrepeso, Obesidad I–III.  
- Badges de colores (`verde`, `naranja`, `rojo`) para mejorar comprensión visual.  

### **11. Modal de Contacto**
- Modal personalizado activado desde botones CTA.  
- Cierre al hacer clic fuera del contenido.  
- Formulario conectado a **Formspree** (o servicio similar).  

### **12. Footer**
- Dividido en dos columnas (info y redes sociales).  
- Redes sociales con botones de colores (Instagram, WhatsApp, Facebook).  
- Adaptación responsiva → en mobile se oculta la columna derecha.  

---

## 🛠️ Scripts y Funcionalidades Clave

### **Modo Oscuro**
```javascript
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-bs-theme', currentTheme);
}
```

### **FAQ tipo acordeón**
```javascript
document.querySelectorAll('.faq-pregunta').forEach(pregunta => {
  pregunta.addEventListener('click', () => {
    const respuesta = pregunta.nextElementSibling;
    respuesta.classList.toggle('activa');
  });
});
```

### **Calculadora IMC**
```javascript
function actualizarIMC() {
  const imc = peso / (altura * altura);
  document.getElementById('imc-valor').textContent = imc.toFixed(1);
}
```

---

## 🎨 Enfoque en el Usuario (UX/UI)

- **Accesibilidad**: uso de `alt`, `aria-expanded`, contrastes correctos.  
- **Interacción intuitiva**: FAQ clicable, slider automático, carrusel táctil.  
- **Feedback visual**: colores, badges y hover effects.  
- **Experiencia móvil cuidada**: menús simplificados, tabs sociales flotantes.  

---

## ▶️ Ejecución

1. Clonar repositorio:  
   ```bash
   git clone https://github.com/usuario/nutricion-deportiva.git
   cd nutricion-deportiva
   ```  
2. Abrir `index.html` en el navegador.  

⚡ Proyecto **100% estático**, sin dependencias de backend.  

---

## 🚀 Mejoras Futuras

- Validación avanzada de formularios.  
- Integración real del formulario con backend (Node.js, PHP o Firebase).  
- Optimización SEO (Open Graph, metatags dinámicos).  
- Testing con **Lighthouse** para accesibilidad/performance.  
- Implementación de **PWA** (instalable en móviles).  
