const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json())
mongoose.connect('mongodb+srv://sinhaujjwal175:4QBo2yPeE3jKRSC6@cluster0.ooybj7m.mongodb.net/userappnew');

const User = mongoose.model('Users', { name: String, email: String, password: String });

app.post("/signup", async function(req, res){
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;
    
    const extinguisher = await User.findOne({email:username});
    //crud
    if(extinguisher){
      return res.status(400).send("Username already exists");
    }
      const user = new User({ 
          name: 'Ujjwal Sinha',
          email:'tzirw@email.com',
          password:'12345'
       });
       user.save();
       res.json({
         "msg":"user created succesdfully"
       })
})