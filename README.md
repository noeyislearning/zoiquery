# Zoiquery

## Introduction

Zoiquery, an adept and potent repository, integrates the power of **TypeScript**, **Node.js**, **[NextJS](https://nextjs.org/)**, and the **[OpenAI](https://openai.com/)** npm library. This project provides a smooth pathway to dynamically create SQL queries using TypeScript, harnessing the widely utilized Node.js runtime.

It functions as a complete kit for SQL statements' programmatic construction, eradicating the manual effort in query creation and boosting efficiency. The usage of the OpenAI npm library enables access to state-of-the-art natural language processing, facilitating the conversion of readable queries into sophisticated and optimized SQL codes.

It serves as a versatile solution for web developers, data scientists, or database administrators. The amalgamation of TypeScript and Node.js provides a platform to build reliable, scalable, and maintainable applications with convenience.


## Key Features

- Flexible Query Creation: Generate SQL queries dynamically using TypeScript, allowing for effortless dynamic filtering, sorting, and aggregations.

- NLP Integration: Use the openai npm library to transform human-readable queries into SQL code, facilitating expression of intentions naturally.

- Database Interoperability: Integrate smoothly with renowned database systems like MySQL, PostgresQL, SQLite, and more, ensuring compatibility across various platforms.

- Error Management and Validation: Avail from extensive error management and validation mechanisms, guaranteeing the dependability and accuracy of your generated SQL queries.

- Extensibility: Expand the functionality of the SQL Generator by including custom query builders or incorporating additional libraries, making it suitable for your specific project requirements.


## Gallery

![Zoiquery Snapshot](https://i.imgur.com/fYnCRrZ.png)
<h6 align="center">Version 1.2.0</h6>

## Usage

NOTE: It can be run in development mode for both the client and server using the npm scripts provided. 

Follow the steps below to get started:

1. **Client Development:** Run the client in development mode by executing the following command:

    ```bash
    npm run dev:client
    ```

   This command will navigate to the client directory and start the development server.


2. **Server Development:** To run the server in development mode, use the following command:

    ```bash
    npm run dev:server
    ```

   Similar to the client, this command will navigate to the server directory and start the server in development mode.


3. **Concurrent Development:** If you wish to run both the client and server simultaneously, Zoiquery provides a convenient script. Use the following command:

    ```bash
    npm run dev
    ```

   This command utilizes `concurrently` to run both the client and server in development mode concurrently. The output from the client and server will be displayed in blue and red, respectively.


4. **API Key Setup:** Zoiquery uses the OpenAI npm library, which requires an API key for access. Here are the steps to obtain and set up your API key:

    - Visit the [OpenAI](https://openai.com) website and sign in or create an account if you don't already have one.
    - Navigate to the API section in your dashboard.
    - Generate a new API key, or use an existing one if available.
    - Now, you need to add this API key to the Zoiquery application. Start by navigating to the server directory:
        ```bash
        cd server
        ```
    - Create a new file named `.env` in this directory.
    - Open the `.env` file and add the following line, replacing `your_api_key` with the key you obtained from OpenAI:
        ```bash
        API_KEY=your_api_key
        ```
    - Save and close the `.env` file. Your application is now ready to use the OpenAI library.

Please ensure to keep your API key secret and never commit it to your version control system as it could lead to unauthorized access to your OpenAI account.


## Contribution

This section is pending.

## Roadmap

Refer to the **[ROADMAP](https://github.com/noeyislearning/zoiquery/blob/main/ROADMAP.md)** file for more information.

## License

This project comes under the MIT License. Refer to the **[LICENSE](https://github.com/noeyislearning/zoiquery/blob/main/LICENSE)** file for more information.

## Connect

For any queries, suggestions, or feedback, don't hesitate to reach out to me **[@noeyislearning](https://github.com/noeyislearning)**, you can find all my social links on my profile.
