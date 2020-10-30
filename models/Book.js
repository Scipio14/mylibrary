const mongoose = require("mongoose");



const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
   description: {
    type: String
  },
  
    publishDate:{
      type:Date,
      required:true
     },
  pageCount: {
    type:Number,
    required:true
  },
  createdAt:{
    type:Date,
    required:true,
    default: Date.now

  },
  author:{
    /*Para este campo se requiere referenciar al autor 
    de que se halla dentro de la colección de autores*/
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref:'Author'// Debe de coincidir con el nombre puesto pora el modelo
  }

});

module.exports = mongoose.model("Book", bookSchema);