# Todo App

A simple Todo application built with TypeScript and OOP principles demonstrating SOLID design patterns.

## Overview
This project was developed as part of a live coding mentoring session for [The Rolling Scopes](https://rs.school) course. The application implements a Todo list management system using Object-Oriented Programming (OOP) concepts and SOLID design principles.

## Features

- Create new tasks with title and description
- View all existing tasks
- Delete tasks
- Clean architecture based on SOLID principles

## Architecture

The application follows SOLID design principles:

- **Single Responsibility**: Each class has a single responsibility
- **Open/Closed**: Code is open for extension but closed for modification
- **Liskov Substitution**: Child classes can replace parent classes without breaking functionality
- **Interface Segregation**: Interfaces are client-specific rather than general-purpose
- **Dependency Inversion**: High-level modules depend on abstractions, not concrete implementations

## Getting Started

### Prerequisites

- Node.js (v20 or higher)
- npm installed

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/todo-app.git
cd to-do
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5176`
