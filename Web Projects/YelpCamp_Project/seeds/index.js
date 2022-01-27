const mongoose=require('mongoose');
const cities=require('./cities');
const {places, descriptors}=require('./seedHelpers');
const campground=require('../models/campground');//! here we have used .. (two dots) which is to back up two directory because the models is a separete directory and seeds is a separate directory.

mongoose.connect('mongodb://localhost:27017/yelp-camp',{
    
});

const db=mongoose.connection;
db.on('error', console.error.bind(console, "connection error:"));
db.once("open", ()=>{
    console.log("Database Connected");
})

//* To select a random descriptor
const sample=array=>array[Math.floor(Math.random()*array.length)];

const seedDB=async()=>{
    await campground.deleteMany({});
    //* inserting some cities in the db.
    for(let i=0; i<50; i++){
        const random1000=Math.floor(Math.random()*1000);
        const price=Math.floor(Math.random()*30)+10;
        const camp = new campground({
          location: `${cities[random1000].city} , ${cities[random1000].state}`,
          title: `${sample(descriptors)} ${sample(places)}`,
          image: "https://source.unsplash.com/collection/483251",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero natus animi ratione repellat aspernatur quae voluptates. Inventore, exercitationem sequi amet illo aliquid dolor vel quisquam at distinctio minus assumenda fugiat.",
            price
        });
        await camp.save();
    }
    
}

//* close the database.
seedDB().then(()=>{
    mongoose.connection.close();
})

