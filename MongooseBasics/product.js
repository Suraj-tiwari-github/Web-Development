const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/shopApp")
  .then(() => {
    console.log("Connection Open");
  })
  .catch((err) => {
    console.log("Oh No Error");
    console.log(err);
  });

const productSchema = new mongoose.Schema({
  // name: String,
  name: {
    //* creating an object for the name of name.
    type: String,
    required: true, //* required is true, while creating a product, we do have to name it.
    //* adding a one more validation.
    maxlength: 20,
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price cannot be in Negative"], //* The array string will be the custom error validation message.
  },
  onSale: {
    type: Boolean,
    default: false,
  },
  //* adding a validation where the array of string should be there.
  categories: [String],
  qty: {
    //* Defining the schema for qty where onlineBike and inStore wil have their separate schema.
    onlineBike: {
      type: Number,
      default: 0,
    },
    inStore: {
      type: Number,
      default: 0,
    },
  },
  size:{
    type: String,
    enum: ['S', "M", "L"],
  }
});

//*creating our own Instance methods.
//* It should be placed before the mongoose.model

productSchema.methods.greet=function(){
  console.log("Hello from greet");
  console.log(`-from ${this.name}`);
}

productSchema.methods.toggleOnSale=function(){
  //* this is a function where we can toggle(change) the sale from true to false
  //* or false to true.
  this.onSale=!this.onSale; //* Assigning !(Not) which will make from false to true.
  return this.save();
}

productSchema.methods.addCategory=function(newCategory){
  this.categories.push(newCategory); //* Push: adding the new category which by into our array.
  return this.save(); //* saving the changes.
}

productSchema.statics.fireSale=function(){
  return this.updateMany({}, {onSale: true, price: 0});
  //* here this is Product which is a mongoose model with schema.
  //* we are updating for the sale, {} -> stands for every field in the data base and change the price to 0
  //* for every field in our db.
}

const Product = mongoose.model("Product", productSchema); //* Remember the name of the model should be singular and should begin with captial letter, mongoose will return the model as plural with small letter.

const bike = new Product({
  name: "Hero Cycle",
  price: -12,
  categories: ["Cycling", "Fitness"],
  size: "S",
});
bike
  .save() 
  .then((data) => {
    console.log("It worked");
    console.log(data);
  })
  .catch((err) => {
    console.log("Oh no Error!!");
    console.log(err);
  });

// Product.findOneAndUpdate({name: "Tire Pump"}, {price: -19}, {new : true,runValidators: true})
//   .then((data) => {
//     console.log("It worked");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("Oh no Error!!");
//     console.log(err);
//   });

const findProduct=async()=>{
  const foundProduct=await Product.findOne({name: "Mountain Bike"});
  console.log(foundProduct); //* Just for seeing whether it is true or false.
  await foundProduct.toggleOnSale(); //* To change the state from false to true, it takes time.
  console.log(foundProduct); //* This will display true. If it were false.
  await foundProduct.addCategory('OutDoor')
  console.log(foundProduct);
}

// findProduct();

Product.fireSale().then(res=>{
  console.log(res);
})

