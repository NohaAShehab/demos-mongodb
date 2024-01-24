/// aggregate functions ===> 


// instructors 


// db.instructors.aggregate([]) //  in the array the stages will added   ...empty array 000> like find all ,

// aggregate function 
// db.instructors.aggregate([
//     {
//         "$match": {"age": {$gt: 21}} // stage one find by condition
//         
//      } , 
//      
//      {
//         "$sort" : {"firstName":1, "lastName":1}
//          
//       } // sort the data --> in stage 02 
//       ,{
// //           $project : {firstName:1, lastName:1, salary:1},
//           $project : {fullname: {$concat:["firstName", ' ', "lastName"]}, salary:1 }
//           
//           
//        } // then projection 
// 
// ])
// 



/////


// db.instructors.aggregate([
//     {
//         "$match": {"age": {$gt: 21}} // stage one find by condition
//         
//      } , 
//      
//      {
//         "$sort" : {"firstName":1, "lastName":1}  
//          
//       } /// sort the output of stage one -> in stage 02 
//       ,{
//           $project : {fullname: {$concat:["$firstName", ' ', "$lastName"]}, salary:1 }
//           
//        } // then projection 
// 
// ])

/// to save the stage output


db.instructors.aggregate([
    {
        "$match": {"age": {$gt: 21}} // stage one find by condition
        
     } , 
     
     {
        "$sort" : {"firstName":1, "lastName":1}  
         
      } /// sort the output of stage one -> in stage 02 
      ,{
          $project : {fullname: {$concat:["$firstName", ' ', "$lastName"]}, salary:1 }
          
       }, // then projection 
       {
           $out: "instructors_data"  /// save the data to new collection 
           
        }
      

])














