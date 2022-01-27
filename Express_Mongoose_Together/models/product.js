//* here we need to require mongoose because we are creating a mongoose model.
const mongoose=require('mongoose');

//* here we don't need to have a connection because we'll be requiring this product.js file in index.js file. The connection will be established in product.js

const productSchema=new mongoose.Schema({
    name:{
        type: String,
        required:true
    }, 
    price:{
        type: Number,
        required:true,
        min: 0
    },
    category:{
        type:String,
        lowercase: true, //* Just for the enum where we may use captial in future, it will convert it into lower case.
        enum:['fruit', 'vegetable', 'dairy']
    }
})

//* now we need to compiled our model.
const Product=mongoose.model('Product', productSchema);

//* now we are exporting the module and need to import the file in index.js
module.exports=Product;
