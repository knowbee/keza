FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# install all dependencies
RUN npm install

# Bundle app source
COPY . .

# Map port to Docker daemon
EXPOSE 3000

# Run start script
CMD [ "npm", "dev" ]
