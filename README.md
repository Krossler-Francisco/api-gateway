# API Gateway with Node.js and Express

This project implements the concept of an API Gateway server using Node.js and Express. Its purpose is to centralize and organize requests to different microservices through a single entry point. This solution improves scalability, maintenance, and backend organization in complex applications.

## Objective

To demonstrate explanatory knowledge based on a **microservices** environment.

-   One service handles returning users.
-   Another service is exclusively responsible for products.
-   The **API Gateway** centralizes client requests and automatically redirects each one to the corresponding service.

This allows for decoupling application functionalities, separate system maintenance, and independent scaling as needed.

![apigateway_2-678x381](https://github.com/user-attachments/assets/687935b1-9d70-464c-a3e9-d5dcb12a2403)

## Microservices

As a project grows, maintaining all server logic in a single environment becomes complicated, especially when features are implemented by a team. Also, when we want to push a new update to production, we don't want the server to be inactive for a single moment; inactivity means loss. So the team decides to implement a second server to handle secondary functions, and then a third.

With a **microservices** architecture, each part of the application lives in its own environment, which allows for:

-   Independently scaling each service.
-   Assigning different teams to different services without interference.
-   Implementing different technologies as best suits each module.

## API Gateway

In a microservices-based architecture, the **API Gateway** acts as a **single entry point** between the client and all internal services. Instead of the client having to communicate with each microservice separately, it does so exclusively through the gateway.

### Benefits

-   Centralize security, authentication, and validation.
-   Reduce coupling between the client and the server.
-   Simplify routes and allow the application of cross-cutting business logic.
-   Hide the complexity of the internal infrastructure.

## My Project

-   We have a **Gateway** listening on port `3000`.
-   A **users** service on port `3001`.
-   A **products** service on port `3002`.

### How it Works

When the client accesses:
`GET http://localhost:3000/users`
The Gateway detects that the route starts with `/users` and forwards the request to:
 `GET http://localhost:3001/` 
 The same happens with:
 `GET http://localhost:3000/products → http://localhost:3002/`

## Technologies Used

-   Node.js
-   Express
-   http-proxy-middleware

## Project Structure

```
api-gateway/
├── gateway.js # Main Gateway server
├── services/
│   ├── users.js
│   └── products.js
└── package.json
```
