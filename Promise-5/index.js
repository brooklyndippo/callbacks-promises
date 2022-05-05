function whatToEat(timeOfDay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (timeOfDay == 'breakfast') {
        resolve('waffles');
      } else if (timeOfDay == 'lunch') {
        resolve('soup & salad')
      } else if (timeOfDay == 'dinner') {
        resolve('pizza')
      } else {
        reject('That is not a proper meal time.')
      }
    }, 1000);
  });
}


// Call yout function and resolve the promise here! 
whatToEat('lunch')
.then(message => console.log(message))
.catch(err => console.log(err))


// If the `timeOfDay` is 'breakfast', 'lunch', or 'dinner' 
// resolve the promise with your favorite food for that time. 
whatToEat('breakfast')
.then(message => console.log(message))
.catch(err => console.log(err))

whatToEat('dinner')
.then(message => console.log(message))
.catch(err => console.log(err))

// If the `timeOfDay` is anything else reject the promise with 
// the 'message' I'm not hungry right now.  

whatToEat('snack')
.then(message => console.log(message))
.catch(err => console.log(err))