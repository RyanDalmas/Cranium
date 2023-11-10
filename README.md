# My Senior Design Project in Computer Science for Prof. Eamon Keogh at the University of California, Riverside 2023
Code From: https://github.com/Quidifer/Cranium

Video Demo: https://www.youtube.com/watch?v=K4nmO4AdhR0&pp=ygURY2hyaXN0b3BoZXIgbW91cmk%3D

Training Video Demo: https://www.youtube.com/watch?v=putMakfWRXw&pp=ygURY2hyaXN0b3BoZXIgbW91cmk%3D

## Getting started

This project is a combination of a basic NodeJS server & a React native app.

To get started, run `yarn prep`.
- This will install dependencies for both the server & the client.

After this has completed, make sure to start the database with `yarn db:start`
- This requires the `docker-compose` command. If you do not have docker-compose installed, use `sudo apt-get install docker docker-compose` or download it [here](https://docs.docker.com/compose/install/).
- After installing docker-compose, you may have an issue with `yarn db:start` depending on the configuration of your system. You can try `yarn db:fix` to resolve these issues. Make sure to open a fresh terminal if this does not resolve your issue.

### Once the dependencies are installed and the database is online, you are ready!
- Running `yarn start` will start up the NodeJS server. Opening a web browser to the address generated (ie: https://localhost:3001) will display the client.

## Development Environment

### Client
- To edit the React client and recompile the program after each change, run `yarn dev:client`.

### Server
- To edit the NodeJS server and recompile the program after each change, run `yarn dev`.

### Clean
- Run `yarn clean` to remove build & cache files. This command will also shut down the database.