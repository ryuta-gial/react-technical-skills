# Name

- react-technical-skills

# Overview

1. Route on Google Map function
2. Count numbers
3. Number trivia
4. Get Qiita Api function
5. Get Covid Api function
6. Pass the state
7. Test the modal

# Requirement

- macOS 10.15.7 or later is required.
- Docker version 20.10.17 

# Installation

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)

# Usage

1. container start
```
docker-compose up --build
```

2. URL

[http://localhost:3050/map](http://localhost:3050/map)

# Note

## docker-compose up [Error handling](https://github.com/docker/compose/issues/3927)

```
1. export DOCKER_CLIENT_TIMEOUT=120
2. export COMPOSE_HTTP_TIMEOUT=120
3. killall Docker && open /Applications/Docker.app
```

## Memo

- local

```
yarn install
```

## build: container

### client

```
//build
$ docker build --no-cache -t client/shift:v1 -f ./client/Dockerfile.dev .

//http://localhost:8888/
$ docker run -d -p 8888:3000 -it client/shift:v1

```
### server

```
//build
$ docker build --no-cache -t server/shift:v1 -f ./server/Dockerfile.dev .

//http://localhost:8888/
$ docker run -d -p 8888:3000 -it server/shift:v1
```