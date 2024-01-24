/// index __inventory 


/// indexing  /// speed up search in mongo db 
// not best in mongo --> as make overhide in update 
/// used when we search ---> website  --> find product 


// db.product.find().count()
// 


// db.product.find({"brand_name": "Denny"}).count()
// 

// to check how the operation executed

db.product.find().explain("executionStats")
/// used the default collscan :  "stage" : "COLLSCAN",



/// if I know that brand will be searched most 


db.product.createIndex({"brand_name":1})


/// {
//     "numIndexesBefore" : 1, 
//     "numIndexesAfter" : 2,// after creating the index 
//     "createdCollectionAutomatically" : false,
//     "ok" : 1.0
// }

/// what is meant by 2 ?  /// represent the indexes 
// db.product.getIndexes() 


db.product.find({"brand_name": "Denny"}).explain("executionStats")


/// 

// db.product.dropIndex({"brand_name":1})
// 


????/// indexess types --> 
// unique index  , ttl --->timetolive ===>


//// for your info 
// db.exampleCollection.createIndex(
//   { fieldName: 1 },
//   {
//     background: true,
//     unique: true,
//     sparse: true,
//     name: "customIndexName",
//     expireAfterSeconds: 3600, // TTL index, documents expire after 1 hour
//     partialFilterExpression: { status: "active" } // Partial index
//   }
// );
// 
// 





















