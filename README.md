# datawise-assignment

This is a weather application, created as a part of the interview process for the position of Senior React Developer in Datawise.

## Main technologies

This project uses the following technologies:

- Vite
- React
- Typescript
- Tailwind CSS
- Mantine UI

## Prerequisites

Before you begin, make sure the following are installed on your system:

- Node.js (version 20.x or later)
- npm (Node package manager)
- Docker (for running the application in a container)

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

To build and serve the application in production mode:

1. Build the production-ready version of the app:

```bash
npm run build
```

2. Preview the production build locally:

```bash
npm run preview
```

This will serve the built project at http://localhost:4173.

### Docker Setup

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

## Project structure and decisions

#### Project Structure

This project is organized around features. This approach isolates each feature, improving both modularity and reusability.
For instance, the Activities feature is used on the home page, and, as indicated by the navigation bar, it also has a dedicated page
that reuses the same components, store, API calls, and assets. Additionally, this structure allows features to be managed more
easily, including potential control via feature flags.

Generic items, such as components, hooks and assets, are placed directly in the src folder, since they are not tied to any single feature.

Within each feature, files are organized following a “least privilege” approach.
Each feature contains its own components, assets, hooks, etc. Inside a component folder, subcomponents, assets, and other
resources are organized into their own folders. If an asset or component is reused outside its original feature, it is moved
to a shared directory accessible by all necessary locations.
While this approach can result in a larger number of smaller files and folders, I find it preferable to a few large files,
as smaller, isolated files are generally easier to manage and debug.
In this assignment I sometimes violate that, for example in the ForecastChart, but the idea is that the ForecastChart is a bit more
generic within the feature. In real life, such cases are usually more clear.

#### Bundling

Vite was used instead of Webpack, not due to a strict preference but as an opportunity to test it in this context.

#### State management

Zustand was selected for state management. Although the assignment includes only hardcoded data without API interactions,
I added Zustand as a demonstration of how I typically structure state in React projects. Each feature has its own slice,
and these slices are combined into a single hook to manage global state.
Why Zustand over Redux? I find it simpler to use, and it offers an easier-to-manage approach compared to Redux Toolkit.
Why not Jotai or Recoil? In large-scale projects, the atom-based approach of Jotai or Recoil can become complex, while I
find Zustand scales more naturally.

#### Testing

For testing, I used Vitest. Given the limited functionality required for this assignment, I focused on testing utility functions.
While store hooks and components could also be tested, I focused on utility functions due to time constraints. In a full project,
I would add comprehensive tests for components and core functionalities.
For component and end-to-end testing, I would normally choose Cypress for its flexibility and ease of use, though it was not
added due to time constraints.

#### Design review

Some parts of the design required significant customization. I used Mantine UI as per the assignment’s instructions, but
found its high-level components less customizable than anticipated. For example, I used Recharts (which Mantine UI is built
on) for the ForecastChart to achieve the required level of customization. In a production scenario, I would recommend consulting
with the design team to adapt complex UI requirements to fit the capabilities of the chosen UI library. Excessive customization can
lead to delays and potential for visual inconsistencies.
