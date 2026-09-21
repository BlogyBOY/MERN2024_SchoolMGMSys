const express = require ("express");
const cors = require("cors");
const app = express();
const port = 100;

app.use(cors());
app.post("/register",async(requestAnimationFrame, res)=>{
    
    const userName = req.body.name;
    const userEmail = req.body.email;
    const userContact = req.body.contact;
    const userPassword = req.body.password;
    const existingUser = await User.findone({email:userEmail});
    if (existingUser){
        return res.json({"message:already registerd; please login"
            })
    }
    const hashpassword
})
app.listen(port,()=>console.log("server is running"))