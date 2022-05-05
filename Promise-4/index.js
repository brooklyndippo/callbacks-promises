const food = new Promise((resolve, reject) => {
  setTimeout(()=> {
      resolve('Nav Ratan Korma');
      // reject('Would you like something else instead?')
  }, 2000);
});

food.then((message) => {
    console.log(message);
    console.log('YUM! 😀');
  }).catch((err) => {
    console.log('Sorry, all out. 😞');
    console.log(err);
  });
  

// resolve food here: 



// chicken

// **Challenge 1** Resolve your promise with the name of your favorite food. 
// Do this by calling the `resolve` with an argument. 

// **Challenge 2** Resolve the `food` promise with that `.then()` syntax 
// and print your favorite food to the console. 