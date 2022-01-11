// Create an object:
const user = {firstName:" ", lastName:" "};
user.firstName = "John";
user["lastName"] = "Name Surname";

alert("Hello, my name is " + user.lastName);






const user = {
    user.firstName = "John";
    user.lastName = "Name Surname";
    fullName:  function() {
      return "Hello, my name is " + this.lastName;
    }
  };

  

  

  