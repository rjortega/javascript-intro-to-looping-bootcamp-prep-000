function forLoop(array){
  for (var i = 0; i < 25; i++){
    if (i === 1){
<<<<<<< HEAD
      array.push("I am 1 strange loop.")
    } else {
      array.push(`I am ${i} strange loop${i === 0 ? '' : 's'}.`)
    }
  }
  return array
}

function whileLoop(n){
  while(n > 0){
    console.log(n--)
  }
  return "done"
}

function doWhileLoop(num){
  var i = 0
  function incrementVariable() {
    i = i + 1;
    return i;
  }
  do {
    console.log("I run once regardless.")
  } while (incrementVariable() < num)
=======
      array.push(`I am 1 strange loop.`)
    } else {
      array.push(`I am ${i} strange loops.`)
    }
  }
>>>>>>> 41d8a1d278ebdbc4b41fde0311944c50deeff953
}
