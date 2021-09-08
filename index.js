/*
 * @Author: zhoule
 * @Date: 2021-09-07 16:59:59
 * @Description: 入口文件
 */
exports.showMsg = function (arr) {
  const result =[...new Set(arr.flat(Infinity))]
  console.log("This is my second module",result)
  //展开去重
  return result
};