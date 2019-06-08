const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;



class DB {
  constructor() {
    this.UserCard = new Schema({
      id: ObjectId,
      username: String,
      password: String,
      documents: Array,
    });
    this.DocCard = new Schema({
      id: ObjectId,
      username: String,
      password: String,
      documents: Array,
    });
  }



  init() {
    mongoose.connect('mongodb://localhost:27017/hack', {useNewUrlParser: true});
  }



  push(collection, data) {
    const UserCardModel = mongoose.model(collection, this[collection]);
    const kitty = new UserCardModel(data);
    kitty.save().then(() => {
      console.log('added to', collection, data)
    });
  }



  getSimilar(collection, id) {
    const UserCardModel = mongoose.model(collection, this[collection]);
    var dog = new Animal({ type: 'dog' });
    dog.findSimilarTypes(function(err, dogs) {
      console.log(dogs); // woof
    });
  }



  getAll(collection) {

  }


}


module.exports = DB

