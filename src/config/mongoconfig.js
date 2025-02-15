import mongoose from 'mongoose';

const connectUsingMongoose = async () =>{
    try {
        await mongoose.connect(process.env.mongoURL);
        console.log('Connected to database');
    } catch (error) {
        console.log('Error in connecting to database', error);
    }
}

export default connectUsingMongoose