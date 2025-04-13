# Group 3 - Article Summarizer & Analyzer

## Description

This web application, developed by Group 3, provides a summary and analysis of a predefined text article. It features a Node.js backend that uses the Google Gemini large language model via the LangchainJS library to generate content. The frontend is built with React (using Vite) and styled with react-bootstrap, offering a clean and responsive user interface.

## Features

- Fetches text from a predefined article file (`backend/data/article2.txt`).
- Connects to a backend API endpoint (`/summarize`).
- Utilizes Google Gemini via LangchainJS for advanced text summarization and analysis.
- Displays results clearly in a modern web interface.
- Includes loading indicators during processing and handles potential errors gracefully.
- Responsive design using react-bootstrap components.

## Technologies Used

- **Backend:**
  - Node.js (v18+)
  - Express.js
  - LangchainJS (`@langchain/google-genai`)
  - Google Gemini API (`gemini-1.5-flash` model)
  - `dotenv` for environment variable management
- **Frontend:**
  - React 19
  - Vite
  - react-bootstrap
  - Bootstrap 5 CSS
- **Language:** JavaScript (ES Modules for backend, JSX for frontend)

Okay, here is a comprehensive README.md file for your project, incorporating details about the backend, frontend, setup, and usage. You can create a new file named README.md in the root directory of your Group3Lab5 project and paste the content below into it.

## Project Structure

Group3Lab5/
├── backend/
│ ├── data/
│ │ └── article2.txt # The article to be summarized
│ ├── generator.js # Contains logic for Langchain/Gemini interaction
│ ├── server.js # Express.js API server
│ ├── package.json
│ ├── package-lock.json
│ └── .env # <-- User must create this for API Key
└── frontend/
│ ├── public/
│ ├── src/
│ │ ├── App.jsx # Main React UI Component
│ │ └── main.jsx # React application entry point
│ ├── index.html
│ ├── package.json
│ ├── package-lock.json
│ ├── vite.config.js
│ └── eslint.config.js
├── README.md
└── image_71fc3d.png

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js:** Version 18.0.0 or later is recommended. Download from [nodejs.org](https://nodejs.org/)
- **npm** or **yarn:** Included with Node.js or install separately.
- **Google Gemini API Key:** An API key is required for the backend to access the Gemini model.
  - You can obtain one from [Google AI Studio](https://aistudio.google.com/app/apikey).

## Setup and Installation

1.  **Clone the Repository:**

    ```bash
    git clone <Assignment5_Group3>
    cd Group3Lab5
    ```

2.  **Install Backend Dependencies:**
    Navigate to the backend directory and install the required packages.

    ```bash
    cd backend
    npm install
    ```

3.  **Configure Backend Environment:**

    - In the `backend` directory, create a file named `.env`.
    - Add your Google Gemini API Key to this file:
      ```dotenv
      # backend/.env
      GOOGLE_API_KEY=YOUR_ACTUAL_GEMINI_API_KEY
      ```
    - Replace `YOUR_ACTUAL_GEMINI_API_KEY` with the key you obtained.

4.  **Install Frontend Dependencies:**
    Navigate to the frontend directory and install its packages.
    ```bash
    cd ../frontend
    npm install
    ```

## Running the Application

You need to run both the backend and frontend servers concurrently in separate terminal windows.

1.  **Start the Backend Server:**

    - Open a terminal in the `/backend` directory.
    - Run the command:
      ```bash
      node server.js
      ```
    - The console should output:
      ```
      Backend server (server.js) listening at http://localhost:3000
      API endpoint available at http://localhost:3000/summarize
      ```

2.  **Start the Frontend Development Server:**
    - Open a _second_ terminal in the `/frontend` directory.
    - Run the command:
      ```bash
      npm run dev
      ```
    - Vite will compile the application and provide a URL, typically `http://localhost:5173`. Open this URL in your browser.

## Usage

1.  Ensure both the backend server (`node server.js` in `/backend`) and the frontend server (`npm run dev` in `/frontend`) are running.
2.  Open the frontend URL (e.g., `http://localhost:5173`) in your web browser.
3.  You will see the "Article Summarizer" interface.
4.  Click the "Summarize Article" button.
5.  A loading spinner will appear while the backend processes the request with the Gemini API.
6.  Once complete, the generated "Summary and Analysis" will appear in the text box below the button.
7.  If any errors occur (e.g., backend server not running, API key issue), an error message will be displayed in an alert box.

## Authors

- Group 3
