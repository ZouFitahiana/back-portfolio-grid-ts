import { config } from "dotenv";
import app from "./app";

config()
const PORT = process.env.PORT || 8002

app.listen(PORT,()=>{
    console.log("seveur run at http://127.0.0.1:"+PORT+"" )
} )