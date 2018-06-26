const asyncFun = (time, str) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`这是第${str}`)
    }, time);
  })
  return promise
}

// async
const run = async () => {
  const result = await asyncFun(1000, '一次')
  console.log(result)

  const result1 = await asyncFun(2000, '二次')
  console.log(result1)

  const result2 = await asyncFun(1000, '三次')
  console.log(result2)
}
run()