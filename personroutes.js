const express=require('express')
const router=express.Router();
const Person=require('./models/Person');
router.post('/',async(req,res)=>{ 
    try{
     const data=req.body;
     const newperson=new Person(data);
      const response=await newperson.save();
      console.log('data saved');
      res.status(200).json(response);
    }
    catch(err){
     console.log(err);
     res.status(500).json({error:'internal server error'})
    }
 
 
  })

  router.get('/',async(req,res)=>{
    try{
       const person=await Person.find();
  
      console.log('datafetched');
      res.status(200).json(person);
    }catch(err){
         console.log(err)
         res.status(500).json({errpr:'internal server '})
    }
  })

  router.get('/:workType',async(req,res)=>{
    const workType=req.params.workType;
  try{
     const person=await Person.find({power_type:workType});

    console.log('datafetched');
    res.status(200).json(person);
  }catch(err){
       console.log(err)
       res.status(500).json({errpr:'internal server '})
  }
})

module.exports=router;