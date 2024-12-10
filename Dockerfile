# Use Node.js base image
FROM node:20-alpine AS base

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build application
RUN npm run build

# Set environment and expose port
ENV NODE_ENV=development
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
