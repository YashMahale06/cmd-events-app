const mongoose = require('mongoose')

const connectDB = async () =>{
    try{
        mongoose.Promise = global.Promise;
        await mongoose.connect(process.env.MONGO_DB);
        console.log(`connected to mongo database ${mongoose.connection.host}`);

    } catch(error)
    {
        console.log(`mongodb error ${error}`);
    } 
};

module.exports = connectDB;