const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://food:eHUjzWQYJvWsRrKS@cluster0.fes33yn.mongodb.net/foodpms?retryWrites=true&w=majority')
.then(() => console.log("DB Connection Successful!"))
.catch((err) => {
    console.log(err)
});

//Models
require('./Category');
require('./Recipe');
