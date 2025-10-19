# 🃏 Memory Card Game

> Un juego de memoria interactivo construido con Next.js que desafía tu capacidad de recordar pares de emojis

## 🚧 Estado del Proyecto

**En Desarrollo Activo** - Este proyecto está actualmente en construcción. Nuevas características y mejoras se están implementando regularmente.

## 📋 Descripción

Memory Card Game es una aplicación web moderna que combina el clásico juego de memoria con tecnologías web de última generación. Los jugadores deben encontrar pares de cartas con emojis idénticos, poniendo a prueba su memoria y concentración.

## ✨ Características

- 🎮 Interfaz de usuario intuitiva y responsiva
- 🔐 Sistema de autenticación seguro con Kinde Auth
- 🎨 Emojis dinámicos obtenidos de la API externa EmojiHub
- 📊 Persistencia de datos con Prisma ORM y Supabase
- ⚡ Renderizado optimizado con Next.js 14
- 🎯 Uso de HTML entities para representación de emojis

## 🛠️ Stack Tecnológico

### Frontend
- **Next.js 14** - Framework React con App Router
- **React** - Biblioteca de UI
- **HTML Entities** - Renderizado de caracteres especiales

### Backend & Base de Datos
- **Prisma ORM** - Object-Relational Mapping
- **Supabase** - Base de datos PostgreSQL en la nube
- **Kinde Auth** - Autenticación y gestión de usuarios

### APIs Externas
- **EmojiHub API** - Proveedor de emojis aleatorios

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/nextjs-memo-game.git

# Navegar al directorio
cd nextjs-memo-game

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
```

## ⚙️ Configuración

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
# Database
DATABASE_URL="postgresql://..."

# Kinde Auth
KINDE_CLIENT_ID="..."
KINDE_CLIENT_SECRET="..."
KINDE_ISSUER_URL="..."
KINDE_SITE_URL="..."
KINDE_POST_LOGOUT_REDIRECT_URL="..."
KINDE_POST_LOGIN_REDIRECT_URL="..."

# Next.js
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

## 🚀 Uso

```bash
# Sincronizar base de datos con Prisma
npx prisma db push

# Generar cliente de Prisma
npx prisma generate

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar servidor de producción
npm start
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

## 📁 Estructura del Proyecto

```
nextjs-memo-game/
├── app/                # App Router de Next.js
├── components/         # Componentes React reutilizables
├── prisma/            # Esquema y migraciones de Prisma
├── public/            # Archivos estáticos
├── lib/               # Utilidades y configuraciones
└── .env               # Variables de entorno (no incluido en git)
```

## 🎯 Roadmap

- [ ] Sistema de puntuación
- [ ] Diferentes niveles de dificultad
- [ ] Tabla de clasificación global
- [ ] Temporizador de juego
- [ ] Efectos de sonido
- [ ] Animaciones mejoradas
- [ ] Modo multijugador
- [ ] Temas personalizables

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu característica (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📧 Contacto

Tu Nombre - [@tu_usuario](https://twitter.com/tu_usuario)

Link del Proyecto: [https://github.com/tu-usuario/nextjs-memo-game](https://github.com/tu-usuario/nextjs-memo-game)

## 🙏 Agradecimientos

- [EmojiHub](https://github.com/cheatsnake/emojihub) - API de emojis
- [Kinde](https://kinde.com) - Solución de autenticación
- [Supabase](https://supabase.com) - Backend as a Service
- [Prisma](https://www.prisma.io) - ORM de próxima generación
- [Next.js](https://nextjs.org) - Framework React

---

⭐ Si este proyecto te resulta útil, considera darle una estrella en GitHub