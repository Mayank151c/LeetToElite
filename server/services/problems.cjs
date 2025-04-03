const { ObjectId } = require('mongodb');
const { connectToDb } = require('./database.cjs');

const getAll = async () => {
  try {
    const database = await connectToDb();
    const collection = database.collection('problems');
    const events = await collection.find().toArray();
    return events;
  } catch (err) {
    console.error('Error fetching problems:', err);
    throw err;
  }
};

const insert = async (data) => {
  try {
    const database = await connectToDb();
    const collection = database.collection('problems');
    const result = await collection.insertOne(data);
    console.log(`\nProblem inserted with _id: ${result.insertedId}`);
  } catch (err) {
    console.error('\nError inserting event:', err);
  }
};

const update = async (_id, updatedData) => {
  try {
    const database = await connectToDb();
    const collection = database.collection('problems');

    const result = await collection.updateOne(
      { _id:  new ObjectId(_id) },
      { $set: updatedData }
    );

    if (result.modifiedCount === 1) {
      console.log(`Problem: ${_id} updated.`);
      return { success: true, message: `Problem: ${_id} updated.` };
    } else {
      console.log(`No problem found or no changes made for problem with _id: ${_id}.`);
      return { success: false, message: `No problem found or no changes made for problem with _id: ${_id}.` };
    }
  } catch (err) {
    console.error('Error updating problem:', err);
    throw new Error('Failed to update problem');
  }
};

const remove = async (problemId) => {
  try {
    const database = await connectToDb();
    const collection = database.collection('problems');
    const result = await collection.deleteOne({ _id: new ObjectId(problemId) });
    if (result.deletedCount === 1) {
      return {
        success: true,
        message: `Problem: ${problemId} deleted.`
      };
    } else {
      return {
        success: false,
        message: `No problem found: ${problemId}.`
      };
    }
  } catch (err) {
    console.error('Error deleting problem:', err);
    return {
      success: false,
      message: `Error deleting problem: ${err.message}`,
    };
  }
};

module.exports = {
  getAll,
  insert,
  update,
  remove,
};