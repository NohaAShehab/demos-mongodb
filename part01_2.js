

/// one to many 

// A- 
// departments (_id, name, location, etc)

// students (id, ... , department:_id)

// when I need to update the department ---> one query 
/// when to need to read the students and dept info --> we need 2 queries


/// ---> reference relation 

// B- Students (_id , name, ,,, , department(id, name))  /// we take the field =--> most probably will not change.
// update department  one query 
// read student one query 

// db.students.find({"department":1})  // you need to decide --> planning -> full info form the client 



/// Many to Many relation 

// 1-student(_id), subject(_id) ---> student_subject (std_id, sub_id)

//// another solution 

// 2-embedded_object ::students ===> (id , subjects: [{}, {}, {}]) ----> size problem

/// 3- embedded_objects ---> subjects ==> (id, students: [{}, {}, {} ])  ---> size problem 

/// 4- students ===> (id, ==> subjects:[ids])    ---> 

// 5- subjects  ===> (id , students [ids ])

// 6- students ===> (id, ==> subjects:[ids])
  // subjects  ===> (id , students [ids ])


///////////////////////// what about saving the grade of the student in each subject ? 







































