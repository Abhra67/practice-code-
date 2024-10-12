const { faker } = require('@faker-js/faker');  //requiring faker


const mysql = require('mysql2');

const express= require("express");
const app=express();

// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'ajana',
    password:'abhrakantiajja'
  });
  //inserting values ...............
   
  // let q="INSERT INTO user (id,username,email,password) values ?";
  // let users =[
  //   ["1" ,"Abhra","abhrakanti708@gmail.com","abc"],
  //   ["2" ,"Debnath","debnath708@gmail.com","abcd"]
  // ];


  // try{
  //   connection.query(q,[users],(err , result)=>{
  //         if(err){
  //           throw err ;

  //         } 
  //         console.log(result);
  //         console.log(result.length);
  //         console.log(result[0]);
  //         console.log(result[1]);
  //   }
  //   )
  // }catch(err){
  //   console.log(err);
  // }
  // connection.end();         //auto ending of connection 

 let createRandomUser = () =>{      //generating fake data by faker package
    return {
      userId: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
    };
  }

  console.log(createRandomUser());

  const port =8080;
  app.listen(port,()=>{
    console.log("app listning");
  });
  app.get("/",(req,res)=>{
    res.send("app is responsing");
  })