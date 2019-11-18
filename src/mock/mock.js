const Mock = require("mockjs");
const data = require("./mock.json");
// 最简单的用法，也是最不推荐的用法，写死，死数据
Mock.mock("http://aa.com", { data: data });
// 基本使用随机写死，单一
Mock.mock("http://aa.com/getUser", {
  name: "ayil",
  "age|18-35": 20
});
// 正则表达式取值 单一
Mock.mock("http://aa.com/regexp", {
  regexp1: /[a-z][A-Z][0-9]/,
  regexp2: /\d{5,10}/
});
// 批量 随机数据列表
Mock.mock("http://aa.com/list", {
  "info|10-20": [
    {
      "index|+1": 1,
      name: "@first @last",
      id: "@integer(10000,99999)",
      date: "@datetime",
      dataImage: '@image("125*125")',
      text: "@sentence(6, 22)"
    }
  ]
});
// 随机量，Random，批量数据
let Random = Mock.Random;
let productData = () => {
  let productList = []; // 存放假数据的数组
  for (let i = 0; i < 100; i++) {
    let product = {
      name: Random.ctitle(5, 20),
      img: Random.dataImage("125x125", Random.cname() + "的农机"),
      price: Random.integer(9999, 9999999),
      owner: Random.cname()
    };
    // console.log(i);
    productList.push(product);
  }
  return productList;
};
Mock.mock("http://aa.com/getVarietyItem", productData);
