

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

```sh
http://localhost:3001
```

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).
- Node 6.13.0
- npm 6.14.2
- MySQL 2.1.0
- React 16.13.0
- Express 4.17.1
- Axios 0.19.2


### Installing Dependencies

To get started:

From within the root directory in the terminal:
```sh
npm install
npm run db:setup
npm run react-dev
npm start
```


## Development

