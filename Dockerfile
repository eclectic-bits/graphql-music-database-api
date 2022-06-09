# ----------
# BASE IMAGE
# ----------
FROM node:16.15.1-alpine AS base
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH


# ----------
# BUILD/TEST IMAGE
# ----------
FROM base AS build

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
FROM base AS production

# configure environment
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

# copy code, and install production only dependencies
COPY --from=build /app/package*.json ./
RUN npm clean-install --production --silent
COPY --from=build /app/dist ./src
COPY --from=build /app/data ./data

# run application using node
CMD ["node", "./src/index.js"]