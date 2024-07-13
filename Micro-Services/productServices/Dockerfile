# Use the base Node.js image with your specified version
ARG NODE_VERSION=20.11.1
FROM node:${NODE_VERSION}-alpine

# Install Nest CLI globally
RUN npm install -g @nestjs/cli

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to leverage Docker's caching mechanism
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the port that the application listens on
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "start:dev"]
