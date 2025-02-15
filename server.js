import app from "./index.js";
import connectUsingMongoose from "./src/config/mongoconfig.js";

app.listen(process.env.PORT,async ()=>{
    console.log(`Server started at ${process.env.PORT}`);
    await connectUsingMongoose();
})