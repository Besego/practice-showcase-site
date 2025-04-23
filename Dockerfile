# Use official Node.js LTS image as base
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the rest of the application code
COPY . .

# Copy public folder explicitly
COPY public ./public

# Build the React app
RUN npm run build