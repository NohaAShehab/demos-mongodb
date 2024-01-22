??
/// validate schema before insert 
// db.createCollection("employees", 
// { validator: { 
//         $jsonSchema: {
//             bsonType: "object", // document
//             properties: {
//                 firstName: {bsonType:"string"},
//                 lastName: {bsonType: "string"}
//                 }// properties 
//             }// json schema
//     
//     }// validator 
//     
// })

/// find schema for any collection 
// db.getCollectionInfos({"name":"employees"})
// test it 
// db.employees.insertOne({"firstName":"noha"})
// 

// schema properties means that these properties are optional but the type is mandatory 

// db.employees.insertOne({"firstName":192}) // document failed validation 


/// validate schema after insert 


// db.employees.runCommand("collMod",
// { validator: { 
//         $jsonSchema: {
//             bsonType: "object", // document
//             properties: {
//                 firstName: {bsonType:"string"},
//                 lastName: {bsonType: "string"}
//                 }// properties 
//             }// json schema
//     
//     }// validator 
//     
// })

/// required


// db.employees.runCommand("collMod",
// { validator: { 
//         $jsonSchema: {
//             bsonType: "object", // document,
//             required: ["firstName", "lastName"],
//             properties: {
//                 firstName: {bsonType:"string"},
//                 lastName: {bsonType: "string"}, 
//                 age : {bsonType: "number", maximum:40}
//                 }// properties 
//             }// json schema
//     
//     }// validator 
//     
// })


// additional property 


// db.employees.runCommand("collMod",
// { validator: { 
//         $jsonSchema: {
//             bsonType: "object", // document,
//             required: ["firstName", "lastName"],
//             additionalProperties: false,
//             properties: {
//                 firstName: {bsonType:"string"},
//                 lastName: {bsonType: "string"}, 
//                 age : {bsonType: "number", maximum:40}
//                 }// properties 
//             }// json schema
//     
//     }// validator 
//     
// })

// issue of id 


// db.employees.runCommand("collMod",
// { validator: { 
//         $jsonSchema: {
//             bsonType: "object", // document,
//             required: ["firstName", "lastName"],
//             additionalProperties: false,
//             properties: {
//                 _id: {},
//                 firstName: {bsonType:"string"},
//                 lastName: {bsonType: "string"}, 
//                 age : {bsonType: "number", maximum:40}
//                 }// properties 
//             }// json schema
//     
//     }// validator 
//     
// })

/// change id type 
// db.employees.runCommand("collMod",
// { validator: { 
//         $jsonSchema: {
//             bsonType: "object", // document,
//             required: ["firstName", "lastName"],
//             additionalProperties: false,
//             properties: {
//                 _id: {bsonType: "number"},
//                 firstName: {bsonType:"string"},
//                 lastName: {bsonType: "string"}, 
//                 age : {bsonType: "number", maximum:40}
//                 }// properties 
//             }// json schema
//     
//     }// validator 
//     
// })

// enum 


db.employees.runCommand("collMod",
{ validator: { 
        $jsonSchema: {
            bsonType: "object", // document,
            required: ["firstName", "lastName"],
            additionalProperties: false,
            properties: {
                _id: {bsonType: "number"},
                firstName: {bsonType:"string",description: 'The name of the item  for developer help'},
                lastName: {bsonType: "string"}, 
                age : {bsonType: "number", maximum:40}, 
                gender :{enum: ["male","female"]}
                }// properties 
            }// json schema
    
    }// validator 
    
})






























