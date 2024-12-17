const mongoose = require("mongoose")


async function connectDB(){
    try{
        await mongoose.connect('mongodb+srv://<venda_shop_31>:<1dDNxzkuz4d7M22e>@cluster0.xkgoy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    }catch(err){
        console.log(err)
    }
}

module.exports = connectDB