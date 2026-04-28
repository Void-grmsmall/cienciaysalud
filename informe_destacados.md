# Informe de Componentes Destacados: Landing Ciencia y Salud

Este informe resume las funcionalidades y elementos visuales clave rescatados de la implementación de la landing page, detallando la lógica y el código detrás de cada uno.

## 1. Animación del Isotipo (Hero Merge)
Se ha implementado una animación de entrada donde las dos piezas del logo (cruz y hoja) se deslizan desde los laterales para fusionarse en el centro.

**Cambio realizado:** Se eliminó la imagen de fondo del contenedor para que la animación del logotipo sea la protagonista absoluta, sobre un fondo sutil de cristal esmerilado.

### Código Destacado (GSAP + React)
```jsx
// Timeline para la unión de las partes del logo
tl.fromTo('.logo-cruz', 
  { x: -120, opacity: 0 }, 
  { x: -15, opacity: 1, duration: 1.2, ease: 'back.out(1.2)' }, '-=0.6'
).fromTo('.logo-hoja', 
  { x: 120, opacity: 0 }, 
  { x: 15, opacity: 1, duration: 1.2, ease: 'back.out(1.2)' }, '<'
);
```

---

## 2. Tarjetas de Perfiles con Despliegue de Exámenes
Las tarjetas de perfiles médicos incluyen un acordeón interactivo que permite ver el detalle de los exámenes sin recargar la página ni ocupar espacio innecesario inicialmente.

### Lógica de UI
- **Estado React:** Controla la visibilidad (`open`).
- **GSAP:** Anima la altura del contenedor suavemente de `0` a `auto`.

```jsx
const [open, setOpen] = useState(false);

useEffect(() => {
  gsap.to(bodyRef.current, { height: open ? 'auto' : 0, duration: 0.3, ease: 'power2.out' });
}, [open]);
```

---

## 3. Contadores de Números Dinámicos
En la sección de "Ventajas" y "Urocultivo", los números no aparecen estáticos; se incrementan visualmente desde cero cuando el usuario llega a esa sección del sitio.

### Implementación con ScrollTrigger
```jsx
gsap.from(c, { 
  textContent: 0, 
  duration: 2, 
  ease: 'power2.out', 
  snap: { textContent: 1 }, 
  onUpdate: function() { 
    c.innerHTML = Math.round(c.textContent); 
  } 
});
```

---

## 4. Sección Promocional S/. 20
Se diseñó un bloque central de alto impacto para la promoción principal, flanqueado por frases persuasivas con imágenes animadas que simulan flotación.

### Estructura de Diseño
- **Centro:** Card con sombra `shadow-card` y tipografía `font-display` de gran tamaño (3rem+).
- **Laterales:** Imágenes circulares con animación de levitación infinita.

```jsx
// Animación de levitación perpetua
gsap.to('.floating-img', { 
  y: -20, 
  rotation: 5, 
  duration: 3, 
  repeat: -1, 
  yoyo: true, 
  ease: 'sine.inOut' 
});
```

---

## 5. Apartado "¿Por qué elegirnos?"
Un grid moderno que utiliza íconos grandes, tipografía técnica y colores contrastantes (Celeste y Gris Pizarra) para transmitir confianza y claridad.

### Estética Clinical Luxe
Utiliza utilidades de **Tailwind CSS** para un acabado premium:
- `rounded-3xl`: Esquinas muy redondeadas para un look moderno.
- `hover:-translate-y-2`: Micro-interacción al pasar el mouse que añade dinamismo.
- `shadow-card`: Sombra personalizada que da profundidad sin ensuciar el diseño.
