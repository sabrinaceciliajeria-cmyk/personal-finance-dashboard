# Personal Finance Dashboard

Aplicación web para la gestión y visualización de finanzas personales, desarrollada con React y TypeScript.

> 🚧 **Estado:** En desarrollo

## Descripción

Personal Finance Dashboard es una aplicación frontend orientada a la gestión de finanzas personales.

El proyecto permitirá registrar y administrar transacciones, organizar gastos por categorías, consultar resúmenes financieros y visualizar la información mediante gráficos.

El desarrollo está enfocado en aplicar buenas prácticas de ingeniería frontend: arquitectura mantenible, tipado seguro, componentes reutilizables, accesibilidad, diseño responsive y testing.

## Funcionalidades

- Resumen general de ingresos, gastos y balance
- Gestión de transacciones
- Creación, edición y eliminación de transacciones
- Categorías de ingresos y gastos
- Búsqueda, filtrado y ordenamiento de transacciones
- Visualización de datos financieros mediante gráficos
- Persistencia local de datos
- Configuración básica de preferencias
- Diseño responsive y accesible

## Fases del proyecto

- ✓ **Fase 0 — Inicialización del proyecto**
- ○ **Fase 1 — Fundamentos + React + Setup**
- ○ **Fase 2 — Arquitectura + Layout + UI**
- ○ **Fase 3 — Transacciones + Estado + Formularios**
- ○ **Fase 4 — Persistencia + Dashboard + Gráficos**
- ○ **Fase 5 — Filtros + Categorías + Settings**
- ○ **Fase 6 — Responsive + UX + Accesibilidad**
- ○ **Fase 7 — Testing + Refactoring**
- ○ **Fase 8 — Producción + Portfolio**

## Tecnologías

| Tecnología            | Uso                               |
| --------------------- | --------------------------------- |
| React                 | Construcción de la interfaz       |
| TypeScript            | Tipado estático                   |
| Vite                  | Desarrollo y build                |
| React Router          | Navegación                        |
| Recharts              | Visualización de datos            |
| CSS                   | Estilos y diseño responsive       |
| Vitest                | Testing                           |
| React Testing Library | Testing de componentes            |
| ESLint                | Calidad y consistencia del código |
| Prettier              | Formateo del código               |
| Git / GitHub          | Control de versiones              |

## Arquitectura

La aplicación seguirá una arquitectura orientada a funcionalidades, separando la interfaz de usuario, la lógica de negocio y la infraestructura.

La persistencia inicial utilizará `localStorage` mediante una capa de servicios independiente. Esto permitirá reemplazar posteriormente la persistencia local por una API REST sin realizar cambios importantes en la interfaz.

> La arquitectura y estructura definitiva se documentarán a medida que avance el desarrollo.

## Instalación

### Requisitos

- Node.js
- npm
- Git

### Clonar el proyecto

```bash
git clone <URL_DEL_REPOSITORIO>
cd personal-finance-dashboard
```

### Instalar dependencias

```bash
npm install
```

### Ejecutar en desarrollo

```bash
npm run dev
```

## Testing

El proyecto utilizará Vitest y React Testing Library para validar la lógica de negocio y el comportamiento de los componentes.

La documentación de testing se ampliará a medida que se implemente la suite de pruebas.

## Estado del proyecto

El proyecto se desarrolla de forma incremental, priorizando:

- Arquitectura mantenible
- TypeScript y tipado seguro
- Componentización
- Accesibilidad
- Diseño responsive
- Testing automatizado
- Calidad de código
- Preparación para producción

## Mejoras futuras

Entre las posibles evoluciones del proyecto se encuentran:

- Integración con una API REST
- Persistencia en una base de datos
- Autenticación de usuarios
- Sincronización de datos en la nube
- Análisis financieros más avanzados

Autor

Sabrina Jeria Figueroa

Desarrolladora Full Stack con orientación al desarrollo Frontend, con conocimientos en desarrollo backend y enfoque en la creación de aplicaciones web modernas, mantenibles y escalables.
