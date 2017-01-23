FROM alpine:latest
LABEL maintainer "siggame@mst.edu"

ARG repo=https://github.com/siggame/Cerveau
ARG branch=master

# Install dependencies
RUN apk add --no-cache nodejs git

# Clone server
RUN git clone -b ${branch} ${repo} cerveau

# Setup for run
WORKDIR cerveau
RUN npm install

# Expose the game port
EXPOSE 3000

CMD ["node", "./main.js"]