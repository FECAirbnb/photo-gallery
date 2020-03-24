

# StayKay Photo Component

Overview:
This photo microservice renders photo urls to the host page on StayKay, a web app similar to AirBnB. Each host location has several pictures of the property for the user to view.


## Related Projects

  - https://github.com/StayKay/availability-service
  - https://github.com/StayKay/reviews-service


## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage



## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).
- Node 6.13.0
- npm 6.14.2
- MySQL 2.1.0
- React 16.13.0
- Express 4.17.1
- Axios 0.19.2




### Installing Dependencies

From within the root directory:

```sh
npm install
npm install -g webpack
npm install webpack-cli
npm install nodemon
npm install axios
npm install react
npm install react-dom
npm install express
npm install react-bootstrap
npm install mbdreact
```

## Development

From within the root directory:

To seed database

```sh
npm db: seed
```

To run server
```sh
npm start
```

To run dev webpack
```sh
npm run react-dev
```

To run tests
```sh
npm test
```