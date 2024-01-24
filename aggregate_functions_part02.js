// aggregation 


// db.instructors.aggregate([
//     {
//         "$match": {"age": {$gt:20}}
//     }, // first pipeline
//     {
//         "$sort": {"firstName":1, "lastName":1}
//     }, /// second stage, pipeline ./// 
//     {
//         "$project": {FullName: {"$concat": ["$firstName", " ", "$lastName"]} , salary:1}
//     }, /// third state projection
//     {
//         $out : "InstructorsData"
//         
//     } // fourth stage --> output to anohter collection 
//  
// ]// array of piplines 
// )
/// data returned with id 

///////////// check the problem here /////////////////////
// 
// db.instructors.aggregate([
//     {
//         "$match": {"age": {$gt:20}}
//     }, // first pipeline
//     {
//         "$sort": {"firstName":1, "lastName":1}
//     }, /// second stage, pipeline ./// 
//     {
//         "$project": {FullName: {"$concat": ["$firstName", " ", "$lastName"]} , salary:1, _id:0}
//     }, /// third state projection
// //     {
// //         $out : "InstructorsData"
//         
// //     } // fourth stage --> output to anohter collection 
//  
// ]// array of piplines  ===> delete the connection between the 2 schemas !!
// )




///I need to display the net salary for example 

// db.instructors.aggregate([
//     {
//         "$match": {"age": {$gt:20}}
//     }, // first pipeline
//     {
//         "$sort": {"firstName":1, "lastName":1}
//     }, /// second stage, pipeline ./// 
//     {
//         "$project": {FullName: {"$concat": ["$firstName", " ", "$lastName"]} , 
//             salary:1, "netsalary":"$salary", 
//                 "instructorsData": {"courses":"$courses", "netsalary":"$salary"}
//         }
//     } // flexibility in the changing the output to adapt certain output 
//  
// ]// array of piplines  ===> delete the connection between the 2 schemas !!
// )
// 


///// move to the group stage 

// db.instructors.aggregate([
// 
//     {
//         $match: {age: {$gt: 21}}
//     }, 
//     
//     {
//         $group: {_id: "$age" }  /// the _id we make group with ---> mandatory
//             // need the id to create the grouping 
//             // {_id: $fieldof grouping }
//     }
//     
//  
// ]
// )

////  get sum of members with age --> 20

// db.instructors.aggregate([
// 
//     {
//         $match: {age: {$gt: 20}}
//     }, 
//     
//     {
//         $group: {_id: "$age", "total":{$sum:1} }  /// the _id we make group with ---> mandatory
//         
//     }
//     
//  
// ]
// )

//// --> get the sum of salaries for instructors
db.instructors.aggregate([

    {
        $match: {age: {$gt: 20}}
    }, 
    
    {
        // sum in first :: count ------------ $sum --> $salary  ---.
        $group: {_id: "$age", "total":{$sum:1}, "total_salaries": {"$sum": "$salary"} } 
        
    }

]
)


































































































