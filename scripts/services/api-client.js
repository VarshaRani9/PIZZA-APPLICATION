// get, post
/*
    Network talk
    http / https
    async call, Promise
    a) then b)catch
*/


/*function makeNetworkCall(URL) {
  const promise = fetch(URL); // JS - ES6(2015), before this - XML http request (for n/w calls)
  promise
    .then((response) => {
      const promise2 = response.json();
      promise2.then((data)=>{

      }).catch(()=>{

      });
    })
    .catch(() => {});
}*/

// makeNetworkCall('https://gist.githubusercontent.com/kshirsagarps/36fade16fa39202715656ef487aaf7b0/raw/2b682e589ef283f06be42d2799dfa54f57794a6e/Pizza.json');

async function makeNetworkCall(URL) {
    try{
        const response = await fetch(URL);
        const data = await response.json();
        console.log("data: ",data);
        return data;
    }
    catch(err){
        console.log("error : ",err);
        throw err;
    }
}
export default makeNetworkCall;