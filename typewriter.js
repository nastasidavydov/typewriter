const sentence = "hello there from lighthouse labs";



// for (let i = 0; i < sentence.length; i++) {
//   let char = sentence[i]
//   let interval = 50 * i
//   setTimeout(() => {
//     console.log(`${char} => ${interval}ms`)
//   }, interval )  
// }



for (let i = 0; i < sentence.length; i++) {
  
  let char = sentence[i]
  let interval = 50 * i
  setTimeout(() => {
    process.stdout.write(char)
    if (i === sentence.length -1){
      process.stdout.write('\n')
    }
  }, interval )
  
}




