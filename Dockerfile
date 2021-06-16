# ----------
# BUILD/TEST IMAGE
# ----------
FROM node:12.18.4-alpine as build

# configure environment
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

# copy code, install all dependencies
COPY package*.json ./
RUN npm clean-install --silent
COPY . ./

# run eslint
RUN npm run lint

# run tests directly against typescript code
RUN npm run test

# build for production
RUN npm run build


# ----------
# PRODUCTION IMAGE
# ----------
FROM node:12.18.4-alpine

# configure environment
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

# copy code, and install production only dependencies
COPY --from=build /app/package*.json ./
RUN npm clean-install --production --silent
COPY --from=build /app/build ./src

# run application using node
CMD ["node", "./src/app.js"]