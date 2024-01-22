
// find and find one ? 

// db.instructors.findOne({_id:6}).constructor.name  // object // json object 

// db.instructors.findOne({_id:6}).firstName


/// update .. + options one or many  , updateMany // all elements , updateOne ---> the first objects 

// updateOne

// db.instructors.updateOne(
// 
//     {"_id":6,
//      "age" : {"$gt":20}, 
//      "salary" : {"$in" :[2000, 3000, 5000] }
//       }// condition ---> all conditions u used in the find 
//     , 
//     {   
//             // update existing properties // 
//               // use update operator 
//         
//         "$set": {"lastName":"Ahmed", "age":100}
//         
//         } // update operation
// )
// 
//
// if the property doesn't exists 


// db.instructors.updateOne(
// 
//     {"_id":6,
//      "age" : {"$gt":20}, 
//       }// condition ---> all conditions u used in the find 
//     , 
//     {   
//             // update existing properties // 
//               // use update operator 
//         
//         "$set": {"lastName":"Ahmed", "age":100, "gender": "female"}
//         
//         } // update operation
// )
// 

// rename property name (field)? 


// db.instructors.updateOne(
// 
//     {"_id":6,
//      "age" : {"$gt":20}, 
//       }// condition ---> all conditions u used in the find 
//     , 
//     {   
//             // update existing properties // 
//               // use update operator 
//         
//         "$rename": {"gender":"instructorgender"}
//         
//         } // update operation
// )
// 

// now i need to add gender to all documents 
// db.instructors.updateMany({}, {"$set": {"gender":"female"}})



/// to remove field ===> $unser 

// db.instructors.updateMany({}, {"$unset": {"gender":""}}) // you should complete the json structure 


/// updateOne ---> update existing documents 

// db.instructors.updateOne({_id:22}, {"$set": {"name":"mostafa", "salary":2000}}) // issue here that document
// // is not exists 

// I need to perform if the document is not exists  ---> add it 

// db.instructors.updateOne({_id:22} //condition
// 
// , {"$set": {"name":"mostafa", "salary":2000}}, // updated data 
// {"upsert": true}  /// property 
// ) // added now if not exists 
// 
// 
// 
// update embedded object 

// db.instructors.updateOne({"_id":6},  {"$set":{"address.building":2000}})

// if you want to add another property to the object 

// db.instructors.updateOne({"_id":6},  
// 
// {"$set":{"address.floor":3, "address.building":100}} // add field
// )

/// unset field in the embedded 
// db.instructors.updateOne({"_id":6},  
// 
// {"$unset":{"address.floor":3}} // remove field --> embedded objects 
// )



/// $increment 
// db.instructors.updateOne({_id:6}, 
// {"$inc": {"salary":500}})  /// $inc --> increment or decrement
// 
// 


/// update arrays ? 
// update operators 
/// change course value at specified index ? 

// db.instructors.updateOne({_id:6}, 
// {"$set": {"courses.0": "updated"}}  // like embededded ---> mongo knows that courses is an array
// 
// )
// 
// I need to change mvc to js ---> I don't know the index 

// db.instructors.updateOne({_id:6, "courses":"mvc"}, // I need to add it to the condition
// {"$set": {"courses.$": "updated_js"}}  
// 
// )
// add new course to the array ? push

// db.instructors.updateOne({_id:6}, // 
// {"$push": {"courses": "added_course"}}  
// 
// )

/// check this 
// db.instructors.updateOne({_id:6}, // 
// {"$push": {"courses": ["x", "y"]}}  // push the array to courses array 
// )
// 
// I need to add them seperatly 

// db.instructors.updateOne({_id:6}, // 
// {"$set": {"courses": ['x', 'y']}}  )// this will override the data 
// 
// 
// db.instructors.updateOne({_id:6}, // 
// {"$addToSet": {"courses": 'fff'}
// 
// }  )// this will override the data 
// 
// push to the array 
// db.instructors.updateOne({_id:6}, 
// {"$push": {"courses": {$each: ["added01", "added2"]}}})
// 

// remove  only one eleement from the array 

// db.instructors.updateOne({_id:6}, {
//     "$pop": {courses:1} // remove the last element
//     })
// 

// db.instructors.updateOne({_id:6}, {
//     "$pop": {courses:-1} // remove the first element
//     })
// 


/// remove specified item 

// db.instructors.updateOne({_id:6}, {"$push": {"courses": "6"}})

// db.instructors.updateOne({_id:6}, {"$pull": {"courses": "fff"}})


//////////////////// delete 

db.instructors.deleteOne({_id:7})

















