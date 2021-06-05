//callbck -> Promise -> Async and Await 使程式碼越來越直觀
// async 定義這個函式是異步函式
// 只有在async function 裡可以使用await，等待異步函式完成


function sendRequest() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let num = Math.floor(Math.random() * 10);
      if (num % 2 === 0) {
        resolve(num);
      } else {
        reject(num);
      }
    }, 2000);
  });
}


//使用Promise, .then(), .catch()
/*
let p = sendRequest();
p.then(function (num) {
  console.log(num + ": 複數");
}).catch(function (num) {
  console.log(num + ": 單數");
});
*/


//使用async await
//需使用try catch來捕捉錯誤
async function getName() {
  try {
    let num = await sendRequest();
    console.log(num + ": 複數");
  } catch (num) {
    console.log(num + ": 單數");
  }
}

getName();
