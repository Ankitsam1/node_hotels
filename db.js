/// we make this file to make the connectios between node.js and mongodb.js 
const mongoose=require('mongoose');
/// getting te mongodb url
const mongourl='mongodb://localhost:27017/users' ///replace any name database by hoels name 
 
/// settin the connections
// some step;

mongoose.connect(mongourl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

// get the default connection 
const db=mongoose.connection;
// event listeners someone here to listen the what is done as simple language
db.on('connected',()=>{
    console.log('connected to mongodb server');
});

db.on('disconnected',()=>{
    console.log('connected to mongodb server');
});
db.on('error',()=>{
    console.log('connected to mongodb server');
});
module.exports=db;