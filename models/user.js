var mongoose = require('mongoose');

let userSchema = new.mongoose.Schema({
    itemName: String,
    currentBid: {
        userId: String,
        price: Integer
    },
    bidExperation: Timestamp,
    imageUrl: String
})

>db.User.insert({

})



module.exports = User;