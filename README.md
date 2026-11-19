# LOOK VINTAGE

Tienda editorial de prendas vintage construida con React, TypeScript y Vite. Esta primera etapa incluye inicio, navegación adaptable, catálogo mock con búsqueda y filtro por categoría, tarjetas y ficha de producto.

## Requisitos

- Node.js 20 o posterior
- npm

## Inicio local

```bash
npm install
npm run dev
```

Vite mostrará la dirección local en la terminal (normalmente `http://localhost:5173`). Para crear y previsualizar el build de producción:

```bash
npm run build
npm run preview
```

## Datos e integraciones

El catálogo actual vive en `src/data/products.ts` y usa imágenes remotas de Unsplash. Es contenido de muestra, no un inventario conectado. `src/types` contiene los tipos frontend. `.env.example` reserva URL para la futura API de Drupal y webhook n8n; no hay conexión real configurada todavía.

## Estructura

- `src/components`: header, footer y tarjeta de producto
- `src/data`: catálogo de demostración
- `src/types`: modelos TypeScript
- `src/App.tsx`: inicio, catálogo y ficha
- `src/styles.css`: identidad visual, diseño responsive y utilidades Tailwind

## Siguiente etapa

Completar interacciones comerciales (carrito, favoritos y checkout), páginas de cuenta y servicios/adaptadores de Drupal. La disponibilidad y las ventas todavía no se validan en servidor, por lo que esta versión no debe procesar compras reales.
