# Flight Search Application

## Overview

This project is a Flight Search Application that allows users to search for flights between different airports and view available routes. The frontend is built with React using Vite, Tailwind CSS, and Material UI, while the backend is built with Node.js and Express.

## Features

- Select origin and destination airports
- Choose cabin class
- Toggle additional filters
- Display search results in card format
- Show a message if no routes are found

## Technologies Used

### Frontend

- React
- Vite
- Tailwind CSS
- Material UI

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
    npm run dev
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
