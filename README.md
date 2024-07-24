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
=======
## Overview

This project is a Flight Search Application that allows users to search for flights between different airports and view available routes. The frontend is built with React using Vite, Tailwind CSS, and Material UI, while the backend is built with Node.js and Express.

## Features

- Select origin and destination airports
- Choose cabin class
- Toggle additional filters
- Display search results in card format
- Show a message if no routes are found

## Technologies Used
>>>>>>> ddb58fdd7bb8a248ee42e418cc310a34fc3e9730

### Frontend

- React
- Vite
- Tailwind CSS
- Material UI
<<<<<<< HEAD
- Axios

### Backend

- Express
- Cors
- Dotenv

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
=======

### Backend

- Node.js
- Express
- Axios
- dotenv

## Installation and Setup

### Prerequisites

- Node.js and npm installed on your machine
- Git installed on your machine
- Vercel CLI installed (`npm install -g vercel`)

### Frontend

1. Clone the repository:

    ```sh
    git clone https://github.com/sr2808/Flight-Search-App.git
    cd Flight-Search-App/frontend
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Start the development server:

    ```sh
    npm run dev
    ```

### Backend

1. Navigate to the backend directory:

    ```sh
    cd ../backend
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Create a `.env` file and add the following environment variables:

    ```env
    PORT=5000
    API_URL=https://cardgpt.in/apitest
    ```

4. Start the backend server:

    ```sh
    node server.js
    ```

## Deployment

### Deploy to Vercel

#### Frontend

1. Navigate to the frontend directory:

    ```sh
    cd frontend
    ```

2. Deploy to Vercel:

    ```sh
    vercel
    ```

3. Follow the prompts to complete the deployment.

#### Backend

1. Navigate to the backend directory:

    ```sh
    cd ../backend
    ```

2. Deploy to Vercel:

    ```sh
    vercel
    ```

3. Follow the prompts to complete the deployment.

### Environment Variables on Vercel

Make sure to set up the same environment variables (`PORT` and `API_URL`) in the Vercel dashboard for your backend project.

## Usage

1. Open your browser and navigate to the deployed frontend URL.
2. Select the origin and destination airports.
3. Choose the cabin class.
4. Toggle additional filters if necessary.
5. Click the search button to view available routes.

## API

The application sends a POST request to the API endpoint `https://cardgpt.in/apitest` with the following JSON payload:

```json
{
  "origin": "SYD",
  "destination": "JFK",
  "partnerPrograms": [
    "Air Canada",
    "United Airlines",
    "KLM",
    "Qantas",
    "American Airlines",
    "Etihad Airways",
    "Alaska Airlines",
    "Qatar Airways",
    "LifeMiles"
  ],
  "stops": 2,
  "departureTimeFrom": "2024-07-09T00:00:00Z",
  "departureTimeTo": "2024-10-07T00:00:00Z",
  "isOldData": false,
  "limit": 302,
  "offset": 0,
  "cabinSelection": [
    "Business"
  ],
  "date": "2024-07-09T12:00:17.796Z"
}
```

The API response returns a list of available routes which are displayed in the frontend. If no routes are found, a message "Try another search route." is displayed.

## Contributing

Feel free to open issues or submit pull requests for improvements or bug fixes. Contributions are welcome!

## License

This project is licensed under the MIT License.
>>>>>>> ddb58fdd7bb8a248ee42e418cc310a34fc3e9730
