let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let num = Math.floor(Math.random() * 100);
    if (num % 2 == 0) {
      resolve("雙數"); //參數可以在.then裡被使用
    } else {
      reject("單數"); //參數可以在.catch裡被使用
    }
  }, 2000);
});

promise
  .then(function (msg) {
    //msg代表從resolve()得到的東西，在這裡是num
    console.log("resolve:" + msg);
  })
  .catch(function (msg) {
    //msg代表從reject()得到的東西，在這裡是num
    console.log("reject:" + msg);
  });
