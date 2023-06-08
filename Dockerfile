# Base Image
# - Define the base image for Node.js
FROM node:latest

# Working Directory
# - Set the working directory in the Docker container
WORKDIR /usr/src/app

# Metadata
# - Add metadata to the Docker image
LABEL authors="Noey Ignacio"
LABEL version="1.0.0"
LABEL description="Zoiquery is a versatile and powerful repository that combines the strengths of TypeScript, Node.js, and the openai npm library."

# Copies
# - Copy the package.json files into the Docker container
COPY server/package.json ./
COPY ./client/package.json ./client/
COPY ./server/package.json ./server/

# Installation Scripts
# - Install all the dependencies using npm
RUN npm install
RUN cd client && npm install
RUN cd server && npm install

# Copies
# - Copy the rest of your code into the Docker container
COPY . .

# Installation Scripts
# - Transpile the TypeScript code to JavaScript
RUN cd server && npx tsc

# Terminal Scripts
# - Start the server
CMD ["npm", "run", "dev"]

# Other Scripts
# NOTE: Don't uncomment these scripts!

# - Build the Docker image
# $ docker build -t zoiquery .

# - Rebuild the Docker iamge
# $ docker build -t zoiquery:latest .

# - Run the Docker container
# -p 3000:3000 maps the host port 3000 to the Docker container's port 3000 (for the client)
# -p 5000:5000 maps the host port 5000 to the Docker container's port 5000 (for the server)
# $ docker run --name zoiquery-container -p 3000:3000 -p 8000:8000 zoiquery
