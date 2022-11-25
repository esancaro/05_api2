const mongoose = require("mongoose");

mongoose
  .connect(
    process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
	)
  .then((x) => console.log('Connected to the DB'))
  .catch(err => console.error('Error while connecting to DB', err));

// const MongoMemoryServer = require('mongodb-memory-server').MongoMemoryServer;

// MongoMemoryServer.create()
//   .then((mongoServer) => mongoose.connect(mongoServer.getUri(), {
//     useNewUrlParser: true,
//     dbName: "05_api_2",
//     useUnifiedTopology: true
//   }))
//   .then(() =>
//     console.info(`Successfully connected to the database`)
//   )
//   .catch((error) => {
//     console.error("An error occurred trying to connect to the database", error);
//     process.exit(1);
//   });

// process.on("SIGINT", () => {
//   mongoose
//     .disconnect()
//     .then(() => {
//       console.info("Successfully disconected mongodb");
//       process.exit(0);
//     })
//     .catch((error) => {
//       console.error("An error ocurred trying to disconect mongoose", error);
//       process.exit(1);
//     });
// });
