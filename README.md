# Poster Generation Service Documentation

## Introduction:

The Poster Generation Service is a Node.js application that generates custom posters based on an HTML template and user-defined parameters. This documentation provides an overview of the service's functionality and instructions on how to use it.

## Installation:

- Install dependencies:
```
npm install
```
- Start the server:
```
npm start
```

## Usage

### Generate a Poster
Endpoint: GET /generate-poster

Generates a custom poster based on an HTML template and user-defined parameters.

### Query Parameters
scale (optional): A floating-point number representing the scaling factor for the poster. Default is 1.0.

Example
```
GET http://localhost:3000/generate-poster?scale=1.5
```

### Response
The server responds with a json key "poster" which points to poster url. You may use that url in the client to display the image.

Status Code: 200 OK

Body: (json)

Body: json object

```
{
  "status": "ok",
  "data": {
    "poster": "http://localhost:3000/poster/screenshot.png"
  }
}
```

## Configuration

The service uses the following configuration:

Port: 3000

Base URL: `http://localhost:3000`

## Dependencies
The Poster Generation Service relies on the following dependencies:

- Express: A web application framework for Node.js.
- Playwright: A library for automating web browsers.
- JSDOM: A JavaScript implementation of the DOM and HTML standards.
- fs.promises: A Node.js module for working with the file system asynchronously.
