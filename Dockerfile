# Use the official Node.js image as the base image
FROM node:16

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Copy migration scripts
COPY src/db/migrations /usr/src/app/src/db/migrations

# Copy Sequelize configuration file
COPY src/configs/database.config.js /usr/src/app/src/configs/database.config.js

# Expose the port the app runs on
EXPOSE 5000

# Start the application with migrations and seeds
CMD ["sh", "-c", "npm run db:migrate && npm run db:seed && npm start"]
