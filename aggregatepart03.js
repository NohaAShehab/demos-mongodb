// aggregate part03


// db.instructors.aggregate([
// {
//     $match: {"age": {$gt:20}}
// }, 
// {
//     $group: {"_id":"$age", total:{"$sum":1}, "salaries":{$sum: "$salary"}, 
//         "max_salary":{$max:"$salary"}
//  
//     
//     }
//   }
// 
// 
// ])


/// have the same city and age --> complex grouping 

// db.instructors.aggregate([
// {
//     $match: {"age": {$gt:20}}
// }, 
// {
//     $group: {"_id":{"age":"$age", "city":"$address.city", "total": {$sum:1}} /// number of people
//     
//     }
//   }
// 
// 
// ])

//// need to add projection 
// display users grouped by city , age 
// db.instructors.aggregate([
// {
//     $match: {"age": {$gt:20}}
// }, 
// 
// {
//    $group : {_id:{"age":"$age", "city":"$address.city"},
//             "total": {"$sum":1}
//    } 
// }
// ])  

/// now need to add projection to the data 

// db.instructors.aggregate([
// {
//     $match: {"age": {$gt:20}}
// }, 
// 
// {
//    $group : {_id:{"age":"$age", "city":"$address.city"},
//             "total": {"$sum":1}
//    } 
// }, 
// {
//         $project : { _id:0 , 
//             "grouping_data":{"age":"$_id.age", "city":"$_id.city"},
//             "totalnumber": "$total"
//             }
//    
//  }
// ])  

//// joining referenced Data
// $lookup


// db.students.aggregate([
// {
//     
//     $lookup: {
//         
//         from : "departments", 
//         localField: "department", // field name in instructors collection
//         foreignField: "_id" ,// field name in departments collecion
//         as : "departmentttttttttttttt"
//         }
// 
// }
// 
// ]) // this will add the full info of the department  in array of objects 
// 

/// let's do project 
db.students.aggregate([
{
   
    $lookup: {
        
        from : "departments", 
        localField: "department", // field name in instructors collection
        foreignField: "_id" ,// field name in departments collecion
        as : "departmentttttttttttttt"
        }

}, {
    
        $project: {"fullName": {"$concat": ["$firstName"," ", "$lastName"]},
                    "dept": {"$arrayElemAt": 
                        ["$departmentttttttttttttt", 0]}
                
                }
    }

]) // this will add the full info of the department 








































































































