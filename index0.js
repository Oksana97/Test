var name = 'Oksana';
console.log(name);

function toDo () {
    
}




// function to check if a given number is prime
function isPrime( n)
{
      // since 0 and 1 is not prime return false.
      if(n == 1 || n == 0) return false;
   
      // Run a loop from 2 to n-1
      for(var i = 2; i < n; i++)
      {
       
        // if the number is divisible by i, then n is not a prime number.
        if(n % i == 0) return false;
      }
      // otherwise, n is prime number.
      return true;
}

