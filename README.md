# Flight Search Application

This project is a flight search application built with React (using Vite), Node.js, and Express.js. The application allows users to select origin and destination airports, choose a cabin section, and search for available flight routes. The results are displayed in a card format.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [License](#license)

## Features

- Select origin and destination airports.
- Choose a cabin section (Economy, Business, First).
- Toggle to show pro filters.
- Search for flight routes.
- Display results in a card format.
- Handle cases where no data is available by showing a user-friendly message.

## Prerequisites

- Node.js (>=14.x)
- npm or yarn

## Installation

### Frontend

1. Clone the repository:

```sh
git clone https://github.com/your-username/flight-search-app.git
cd flight-search-app
```

2. Navigate to the `frontend` directory and install the dependencies:

```sh
cd frontend
npm install
```

or

```sh
yarn install
```

3. Install Tailwind CSS and MUI:

```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
```

### Backend

1. Navigate to the `backend` directory and install the dependencies:

```sh
cd backend
npm install
```

2. Create a `.env` file in the `backend` directory with the following content:

```env
PORT=5000
```

## Usage

### Running the Frontend

1. Start the frontend development server:

```sh
npm run dev
```

The application will be available at `http://localhost:5173`.

### Running the Backend

1. Start the backend server:

```sh
node server.js
```

The backend server will be available at `http://localhost:5000`.

## API

### Endpoint

`POST /api/search-flights`

### Request Body

```json
{
  "origin": "SYD",
  "destination": "JFK",
  "cabinSection": "Business"
}
```

### Response

```json
{
  "data": [
    {
      "min_business_miles": null,
      "min_business_tax": null,
      "min_economy_miles": 53500,
      "min_economy_tax": 189,
      "min_first_miles": null,
      "min_first_tax": null,
      "partner_program": "KLM"
    },
    {
      "min_business_miles": 144600,
      "min_business_tax": 177,
      "min_economy_miles": 55200,
      "min_economy_tax": 158,
      "min_first_miles": null,
      "min_first_tax": null,
      "partner_program": "Qantas"
    }
  ]
}
```

## Project Structure

```
flight-search-app/
├── backend/
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Card.jsx
│   │   │   └── ...
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── ...
│   ├── public/
│   ├── package.json
│   ├── tailwind.config.js
│   └── ...
├── README.md
└── ...
```

## Dependencies

### Frontend

- React
- Vite
- Tailwind CSS
- Material UI
- Axios

### Backend

- Express
- Cors
- Dotenv

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
