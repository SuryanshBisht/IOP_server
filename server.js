const express = require('express')
const app = express()
const {PythonShell} = require("python-shell");

// const spawn = require("child_process").spawn;
// const pythonProcess= spawn('python',["./scripts/temp.py",parcel])


let arguments;
let DMResults;
app.use(express.static('public')) 
app.use(express.json())
 
//post request for direct flow method
app.post("/dmMethod", (req,res) => {

   const {parcel} = req.body
   arguments= parcel  
   arguments = JSON.stringify(parcel); 

   let options = { 
    scriptPath: "D:/IOP/server/scripts",
    args: arguments 
   }   

   if(!parcel){ return res.status(400).send({status: 'failed'})}
   PythonShell.run('Direct_Method_1.py', options, function (err,results) { 
    if (err) throw err; 
    console.log('this worked fine'); 
    console.log(results);  
    DMResults = JSON.stringify(results);  
      
     
  });

  res.status(201).send(DMResults)

})

app.listen(5000, () => {console.log("Server Started on port 5000")})