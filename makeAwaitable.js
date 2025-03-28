// transform an async function which relies on a callback into a Promise-based function
// so it can be called with async/await

// make functions with callbacks awaitable
function makeAwaitable(fnWithCallback) {
    return function (...args) {
      return new Promise((resolve, reject) => {
          fnWithCallback(...args, (callback) => resolve(callback));
      });
    };
  }
  
  // definition, relies on callback
  function delayAdd(a, b, callbackFn) {
      setTimeout(function() {
        callbackFn(a + b);
    }, 1000);
  }
  
  // normal implementation using callback
  delayAdd(5, 5, function(data) {
    console.log(data); // 10
  });
  
  // made awaitable
  (async () => {
    const awaitableAdd = makeAwaitable(delayAdd);
    let res = await awaitableAdd(6, 5); // 11
    console.log(res);
    
    // or with immediate invocation
      res = await makeAwaitable(delayAdd)(7, 5);
    console.log(res); // 12
  })();