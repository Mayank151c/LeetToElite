const { MongoClient } = require('mongodb');
const uri = `mongodb+srv://root:${process.env.DB_PASS}@cluster0.1lqtj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

let client, db;

const connectToDb = async (dbName = 'lte') => {
    try {
        if(client && db) return db;
        client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        console.log('Successfully Connected to MongoDB');
        db = client.db(dbName);
  } catch (err) {
    console.error('MongoDB connection failed:', err);
    throw err;
  }
  return db;
};

module.exports = {
  connectToDb,
};
