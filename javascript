//身份证校验
function validateRule(value){
    /^\d+[\d|\w]$/.test(value) && value.length==18   //以数字开头，以字母或数字结尾 且 长度==18位
}
