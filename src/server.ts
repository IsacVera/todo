import db from "./config/database.config";

db.sync().then(() => {
    console.log('connected to db...');
});
