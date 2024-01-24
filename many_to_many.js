// to implement if the student has grade for each subject


/// students ===>  {_id, name , address, subjects: [{_id, name , grade}.{_id, name , grade}]}
// subjects ===> {_id, name, lecturehours, lab hours}


/// display fullname , department name 

db.students.find(
    {
        
    }, 
    {"firstName":1, "lastName":1, "department":1 }
).forEach((document)=> {
//     print(document)
//     // we need to get department name 
        dept_obj=db.departments.findOne({_id:document.department})     // I need the object
//         print(dept_obj)
        print(`${document.firstName} ${document.firstName} at
            dept ${dept_obj.name}`)
        
        })
/// this is bad solution ---> as at some time I will duplicate the 
        // finding dept_name process at some cases like sd .
        
        
 // to solve it ? 
 /// let we can say to the js engine search in these data ---> 
 let departments= db.departments.find({}, {name:1}).toArray(); 
//that is faster 
        

print(departments)
db.students.find(
    {
        
    }, 
    {"firstName":1, "lastName":1, "department":1 }
).forEach((document)=> {
        
    dd = departments.find(dept=> dept._id === document.department)
//     print(dd)
     print(`${document.firstName} ${document.firstName} at
            dept ${dd.name}`)
   })

// in ecma6 --> array update --> array.find , array.findindex
        
  /// best performance than before
        
        
        
        
        
        
        
        