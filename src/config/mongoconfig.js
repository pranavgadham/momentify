import mongoose from 'mongoose';

export default connectUsingMongoose = async () =>{
    try {
        await mongoose.connect(process.env.mongoURL);
        console.log('Connected to database');
    } catch (error) {
        console.log('Error in connecting to database', error);
    }
}