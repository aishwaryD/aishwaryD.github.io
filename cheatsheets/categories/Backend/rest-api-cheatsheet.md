---
id: rest-api-cheatsheet
title: REST API Cheatsheet
sidebar_label: REST API Cheatsheet
slug: /rest-api
---

Welcome to the REST API Cheatsheet! This guide provides a quick reference for working with REST APIs, covering essential concepts, HTTP methods, status codes, and common best practices.

## Table of Contents

- [Introduction to REST API](#introduction-to-rest-api)
- [HTTP Methods](#http-methods)
- [Common HTTP Status Codes](#common-http-status-codes)
- [Request Headers](#request-headers)
- [Response Headers](#response-headers)
- [Authentication](#authentication)
- [Common Best Practices](#common-best-practices)

## Introduction to REST API

REST (Representational State Transfer) is an architectural style for designing networked applications. Key principles include stateless communication, resource-based URLs, and the use of standard HTTP methods.

## HTTP Methods

### GET

- **Description**: Retrieve data from a specified resource.
- **Example**: `GET /api/users`

### POST

- **Description**: Submit data to be processed to a specified resource.
- **Example**: `POST /api/users`

### PUT

- **Description**: Update a resource or create a new resource if it doesn't exist.
- **Example**: `PUT /api/users/123`

### DELETE

- **Description**: Delete a specified resource.
- **Example**: `DELETE /api/users/123`

### PATCH

- **Description**: Apply partial modifications to a resource.
- **Example**: `PATCH /api/users/123`

### OPTIONS

- **Description**: Retrieve information about the communication options available for a resource.
- **Example**: `OPTIONS /api/users`

### HEAD

- **Description**: Retrieve the headers of a resource without the actual data.
- **Example**: `HEAD /api/users`

### TRACE

- **Description**: Perform a message loop-back test along the path to the target resource.
- **Example**: `TRACE /api/users`

### CONNECT

- **Description**: Establish a network connection to a resource (typically for SSL/TLS tunneling).
- **Example**: `CONNECT /api/users`

## Common HTTP Status Codes

- **200 OK**: Successful request
- **201 Created**: Resource successfully created
- **204 No Content**: Successful request with no additional content
- **400 Bad Request**: Invalid request format or parameters
- **401 Unauthorized**: Authentication failed or not provided
- **403 Forbidden**: Authentication succeeded, but the authenticated user doesn't have access
- **404 Not Found**: Requested resource not found
- **500 Internal Server Error**: Server encountered an error while processing the request

## Request Headers

- **Authorization**: Include authentication credentials (e.g., Bearer token)
- **Content-Type**: Specify the format of the request payload (e.g., application/json)
- **Accept**: Specify the desired response format (e.g., application/json)

## Response Headers

- **Content-Type**: Indicates the format of the response payload
- **Location**: URL of the newly created resource (for 201 Created status)

## Authentication

- **Bearer Token**: Include a token in the `Authorization` header for authentication.

## Common Best Practices

1. **Use Plural Nouns for Resources**: `/api/users` instead of `/api/user`
2. **Versioning**: Include API versioning in the URL (e.g., `/v1/api/users`)
3. **Consistent Endpoint Naming**: Follow a consistent naming convention for endpoints.
4. **Use HTTP Status Codes Correctly**: Provide meaningful status codes in responses.
5. **Pagination**: Implement pagination for large result sets.

This cheatsheet covers the basics of working with REST APIs. For more detailed information, refer to the official API documentation.

Happy coding!