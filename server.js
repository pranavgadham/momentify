import app from "./index.js";

app.listen(process.env.PORT,()=>{
    console.log(`Server started at ${process.env.PORT}`);
})