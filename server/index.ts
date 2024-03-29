import Container from "typedi";
import Server from "./services/Server";
import DatabaseManager from "./services/DatabaseManager";

const server: Server = Container.get(Server);
process.on('uncaughtException', (error: Error) => {
  // Close listener gracefully
  server.close();
  console.error(error);
  process.exit(1);
});

process.on('unhandledRejection', (error: Error) => {
  // Close listener gracefully
  server.close();
  console.error(error);
  process.exit(1);
});

console.log("Starting Cranium Server...");
Container.get(DatabaseManager).resetDatabase()
.then(() => Container.get(DatabaseManager).up())
.then(() => // Start backend
  server
  .start()
  .catch((error: Error) => {
    console.log(error);
    process.exit(1);
  })
);