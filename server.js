
// var os=require('os');
// var fs=require('fs');

// console.log('server is runing')

// function
// function sum(a,b){
//     return a+b;

// }


///2nd
// var sum=function(a,b){
//     return a+b;
// }

//3rd
// callback is function which is called by another funcion
// function callback(){
   
//     console.log('we doing call back');
// }


// const add=function(a,b,callback){
//     console.log(a+b);
//     callback();
// }
// callback();
// /// here we cannot call by callback() like this is sowing eroor

// add(2,3,callback);
// about the os user information 


// var user=os.userInfo();
// console.log(user.uid); 


/// how to ceate a file andenter the text to the file by fs 

// fs.appendFile('laugh.txt','hi'+user.username+'!\n',()=>{
//     console.log('fie is created');
// });

// fs.appendFile('greeting.txt','hi'+user.username+'!\n',()=>{
//     console.log('fie is created');
// });
//what fs and os can do 
// console.log(fs);
// console.log(os);

// const notes=require('./notes.js');
// var age=notes.age;
// console.log(age);
// console.log(notes.res(10,20));


/// lodash to deal with aaray may be to remove the duplicate elemnt in the array or string many maor

/// converting jason string to object;
//  const jasonstring='{"name": "john","age":30,"city":"newyork"}';
//  const jsonobject=JSON.parse(jasonstring);
//  console.log(jsonobject.name);

// server request the data from database as request from user and data comes under jason format




/// obeect to jason
//  const obj={
//     name:"alice",
//     Age:30
//  }

//  const json=JSON.stringify(obj);
//  console.log(json);
//  console.log(typeof json);

/// we are createing server by express we can also create by http
//  const express = require('express')
// const app = express()
// const port = 3000

//  app.get('/', (req, res) => {
//    const p={
//     name:"ankit",
//     work: "eng",
//     Age:23,
//     salary:120000
//    }


//   res.send(p)
  
//  })

//  app.listen(3000,()=> console.log('server is ruuning on port'+port)

//  )

/// we use postman to get the data  from user 

/// nodejs has a server and mongodb has a server to lonk this we have mongoos
/// its loike a brig

/// mongoose wor ike bridge


/// oongo work


 const express = require('express')
const app = express();
 const db=require('./db');
const port = 3000

const bodyParser=require('body-parser');
app.use(bodyParser.json());
// const Person=require('./models/Person');



 app.get('/', (req, res) => {
   const p={
    name:"ankit",
    work: "eng",
    Age:23,
    salary:120000
   }


  res.send(p)
  
 })
 /// addd data to the database
//  app.post('/person',async(req,res)=>{ 
//    try{
//     const data=req.body;
//     const newperson=new Person(data);
//      const response=await newperson.save();
//      console.log('data saved');
//      res.status(200).json(response);
//    }
//    catch(err){
//     console.log(err);
//     res.status(500).json({error:'internal server error'})
//    }


//  })
/// get the data from data base
// app.get('/person',async(req,res)=>{
//   try{
//      const person=await Person.find();

//     console.log('datafetched');
//     res.status(200).json(person);
//   }catch(err){
//        console.log(err)
//        res.status(500).json({errpr:'internal server '})
//   }
// })
// app.get('/person/:workType',async(req,res)=>{
//     const workType=req.params.workType;
//   try{
//      const person=await Person.find({power_type:workType});

//     console.log('datafetched');
//     res.status(200).json(person);
//   }catch(err){
//        console.log(err)
//        res.status(500).json({errpr:'internal server '})
//   }
// })

//to use worktype for many more we use express router 
// that helps to start same link type after the 3000/person and we go throgh hesam eway 
// actuall the link is also provided by the express router 
/// sp we use the routes









const personroutes=require('./personroutes')

 app.use('/person',personroutes);



 app.listen(3000,()=> console.log('server is ruuning on port'+port)

 )
