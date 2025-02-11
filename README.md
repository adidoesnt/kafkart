# KafKaRT

## Overview

KafKaRT is a mock e-commerce platform built using React, Bun and Solace.

It is a simple application that showcases the use of Solace for real-time messaging.

## Architecture

The **frontend** is built using React, Bun, SolclientJS, TailwindCSS, ShadcnUI and Vite.

The **backend** is built using Bun, Express, SolclientJS, MongoDB, and Mongoose.

Solace and MongoDB are both run locally using Docker Compose.

## Features

- **User authentication:** This is very basic, as it is not the main focus of the project.
- **Product listing:** A simple list of products with their details.
- **Product viewing [NOT IMPLEMENTED]:** A feature that allows users to view product details in a modal and add them to their cart. **Currently, the button click is registered and sent to a Solace topic**, but no action is trigerred on the frontend.
- **Recently viewed products:** The 3 most recently viewed products are displayed on the home page for each user.
- **Featured products:** The 3 most popular products are displayed on the home page for each user. Popularity is determined by the number of views each product has received.

## How does it work?

When a user clicks "View Product" on a product card, a message is sent to a Solace topic.

The backend listens to the topic, and updates the product's view count and add the product to the user's recent product views.

The frontend then displays updated sets of popular and recently viewed products.
