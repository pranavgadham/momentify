import app from "./index.js";

app.listen(3000,()=>{
    console.log(`Server started at ${process.env.PORT}`);
})