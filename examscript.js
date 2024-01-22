// db.instructors.find({"age":21})
// 
// db.instructors.find({"age":{"$eq":21}})
// 
// comparasion operator

// db.instructors.find({"age":{"$gt":21}})
// 

// db.instructors.find({"age": {"$gt":21 },  "salary": {"$eq": 6200}}, {})

/// in operator
// db.instructors.find({"age": {"$in": [21,22,23]}})

////// logical operators   === Top level operators 
// select where firstName='badr" or age =  21 
// db.instructors.find(
// {"$or": [{"age":21}, {"firstName": "badr"}] }, {"age":1, "firstName":1}
// )

// or and check this 

// db.instructors.find(
//     {"$or": [
//         {"firstName": "badr", "age":22},    // inner and 
//         {"age": 21}
//         
//     ]}
// )

/////   embdedded objects ////////////////////    
// how get instructors whose city is cairo ? 

// db.instructors.find({
//         "address.city": "cairo"
//     
// })

// get instructors who is in cairo in street 10 or 20 ? 


// db.instructors.find({
//         "address.city": "cairo" , "address.street": {"$in": [10, 20]}
//     })
// 

///// arrays  and array operators 
// check this 
// db.instructors.find({"courses": "mvc"}, {"courses":1}) // this a shortcut from mongo.


// says that show knows that you are searching about values in the array 

// let's move to array operator I need to get instructors who teach courses mvc and signal
// db.instructors.find({"courses": {"$all": ["mvc", "signalR"]}}) // instructor teaches alll 

// instructors teach 3 courses?  ---> array size 
// db.instructors.find({"courses": {$size:3}})


// elements operators 
// $type , $exists 

// get avg salaries ?

// db.instructors.find({"salary": {"$type": "number"}})  // get sum --> if string ? undefined 
// 
// db.instructors.find({"firstName": {"$exists": true}})


/// need fullname ? 


print("I am like console")


db.instructors.find({})  // output from find ? js array of objects /// if array 
// foreach , sort , filter 


// to confirm the datatype returned from find ? 


// db.instructors.find({}).constructor.name  // to find the returned datatype .. --> DBQuery

// mongodb knows that you need to fetch data in form of array 

// db.instructors.find({}).toArray().constructor.name

// to display fullname
// 
// db.instructors.find({}).toArray().forEach((document)=> {
//     
//         print(`full name : ${document.firstName} ${document.lastName}`)
//     })

// here the need of exists --> appears 


//// mongo db knows that we may need to use foreach much so you can use it directly 
// without converting to toArray 


// 
// db.instructors.find({})
// //         .toArray()
//         .forEach((document)=> {
//         print(`full name : ${document.firstName} ${document.lastName}`)
//     })
    
    
  // performance issue -->loop in find /// then loop in foreach // solution --> aggregate function 
  
  
 // performace issue  --> all data are received 
 
// db.instructors.find({}, {"firstName":1, "lastName":1})
// // //         .toArray()
//         .forEach((document)=> {
//         print(`full name : ${document.firstName} ${document.lastName}`)
//     })
//  
//  
    
   // display number of courses 
   
   
  db.instructors.find({"courses":{"$exists":1}}, {"firstName":1, "lastName":1, "courses":1})
// //         .toArray()
        .forEach((document)=> {
        print(`full name : ${document.firstName} ${document.lastName} ${document.courses.length} `)
    })
 
 
 
