const promiseFun = (time) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`这是第${time}`)
    }, time)
  })
  return promise
}

// promise 解决地狱回调的问题
promiseFun(1000).then(res => {
  console.log(res)
  return promiseFun(2000)
}).then(res => {
  console.log(res)
  return promiseFun(3000)
}).then(res => {
  console.log(res)
  return promiseFun(1000)
}).then(res => {
  console.log(res)
})