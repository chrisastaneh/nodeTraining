function resolveAfter2Seconds() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('some errror');
    }, 2000);
  });
}

async function asyncCall() {
  try{
    console.log('calling');
    const result = await resolveAfter2Seconds(); // io to complete
    console.log(result);
    // expected output: 'resolved'
  }
  catch(e){
    console.log(e);
  }

}

asyncCall();
