const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;



class DB {
  constructor() {
    this.UserCard = new Schema({
      id: ObjectId,
      username: String,
      password: String,
      sex: String,
      birthDate: String,
      birthPlace: String,
      country: String,
      documents: Array,
      exams: Array,
    });
    this.UniCard = new Schema({
      id: ObjectId,
      username: String,
      password: String,
      sex: String,
      birthDate: String,
      birthPlace: String,
      country: String,
      documents: Array,
      exams: Array,
    });
  }



  init() {
    mongoose.connect('mongodb://localhost:27017/hack', {useNewUrlParser: true});
  }



  push(collection, data) {
    const CardModel = mongoose.model(collection, this[collection]);
    const model = new CardModel(data);
    model.save().then(() => {
      console.log('added to', collection, data)
    });
  }



  async check(collection, data) {
    const CardModel = mongoose.model(collection, this[collection]);
    return await CardModel.find(data);
  }




  change(collection, id) {

  }



  get(collection) {

  }


}


module.exports = DB

