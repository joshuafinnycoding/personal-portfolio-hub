# Portfolio Website Application

## Overview

This is a full-stack portfolio website application built with React, Express, and TypeScript. The application serves as a personal portfolio showcasing professional experience, skills, and projects. It features a modern, responsive design using Tailwind CSS and shadcn/ui components.

## System Architecture

The application follows a full-stack architecture with clear separation between frontend and backend:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui component library built on Radix UI
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Built-in session handling capabilities
- **API Design**: RESTful API with /api prefix convention

## Key Components

### Frontend Components
- **Navigation**: Fixed header with smooth scrolling navigation
- **Hero Section**: Introduction with call-to-action buttons
- **About Section**: Personal information and statistics
- **Experience Section**: Professional timeline with visual indicators
- **Skills Section**: Technical and design skills with progress bars
- **Projects Section**: Portfolio showcase with project cards
- **Contact Section**: Contact form with form validation
- **Footer**: Links and additional information

### Backend Components
- **Storage Layer**: Abstracted storage interface with in-memory fallback
- **Route Registration**: Centralized route management system
- **Error Handling**: Global error handling middleware
- **Request Logging**: Comprehensive request/response logging

### Database Schema
- **Users Table**: Basic user authentication structure
- **Extensible Design**: Schema designed for future feature expansion

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **Server Processing**: Express routes handle requests and interact with storage
3. **Database Operations**: Drizzle ORM manages database queries and transactions
4. **Response Handling**: Structured JSON responses with proper error handling
5. **Client Updates**: React Query manages cache invalidation and UI updates

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Unstyled, accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **wouter**: Lightweight routing library

### Development Dependencies
- **vite**: Fast build tool and development server
- **tsx**: TypeScript execution environment
- **esbuild**: Fast JavaScript bundler for production builds

## Deployment Strategy

### Development Environment
- **Hot Module Replacement**: Vite HMR for instant development feedback
- **TypeScript Checking**: Real-time type checking during development
- **Error Overlays**: Runtime error display in development

### Production Build
- **Frontend**: Vite builds optimized static assets
- **Backend**: esbuild bundles Node.js application
- **Database**: Drizzle handles schema migrations
- **Environment**: Configurable for different deployment targets

### Build Process
1. Frontend assets built to `dist/public`
2. Backend bundled to `dist/index.js`
3. Database schema pushed using Drizzle migrations
4. Single Node.js server serves both frontend and API

## Changelog

```
Changelog:
- July 03, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```