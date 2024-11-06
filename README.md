# datawise-assignment

This is a weather application, created as a part of the interview process for the position of Senior React Developer in Datawise.

## Main technologies

- Vite
- React
- Typescript
- Tailwind CSS
- Mantine UI

## Prerequisites

Before you begin, ensure you have the following installed:
• Node.js (v20.x or later)
• npm
• Docker (optional, for running in a container)

## Installation

Clone the repository to your local machine

```bash
git clone git@github.com:KMavr/datawise-assignment.git
cd datawise-assignment
```

Install dependencies

```bash
npm install
```

## Running the Project

### 1. Development Mode

To start the project in development mode, which includes hot-reloading:

```bash
npm run dev
```

This will run the project locally at http://localhost:5173 (by default).

### 2. Production Mode

To build the application for production:

```bash
npm run build
```

After that, to preview the production build:

```bash
npm run preview
```

This will serve the built project at http://localhost:4173.

### Docker Setup (Recommended)

To run the application in a Docker container, follow these steps:

#### 1. Build the Docker image by running:

```bash
docker build -t datawise-assignment .
```

#### 2. Run the Docker container

To start the Docker container, use:

```bash
docker run -p 5173:5173 datawise-assignment
```

This will run the application inside a container and expose it on port 5173. You can access the application at http://localhost:5173.
