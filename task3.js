let user1 = {}; 
user1.firstName = "John";    
function fullName (surName){
    user1.surName = surName;
    console.log(`Hello ${user1.firstName} ${user1.surName}`);
};
fullName("Mark");
// Hello John Mark

