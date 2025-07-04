# startups-list-api

An API that provides data on startups from around the world.

## About the Project

This project is a simple Express.js API that provides data on startups. The data is stored in a `data.js` file and includes information such as the startup's name, industry, country, and more.

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/startups-list-api.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the server
   ```sh
   npm start
   ```

## How to Use the API

The API is simple to use. You can make GET requests to the following endpoints:

### Endpoints

* **`GET /api`**

  This endpoint returns a JSON object containing all of the startup data.

* **`GET /api/:field/:term`**

  This endpoint returns a JSON object containing startup data filtered by a specific field and term.

  **Filterable Fields:**

  * `industry`: The industry the startup is in.
  * `country`: The country the startup is located in.
  * `continent`: The continent the startup is located in.
  * `is_seeking_funding`: Whether or not the startup is seeking funding (true/false).
  * `has_mvp`: Whether or not the startup has a minimum viable product (true/false).

  **Example:**

  To get all startups in the "AI" industry, you would make a GET request to the following URL:

  ```
  /api/industry/AI
  ```

## Dependencies

* [Express](https://expressjs.com/)
* [cors](https://www.npmjs.com/package/cors)
* [nodemon](https://www.npmjs.com/package/nodemon)