// 数字，支持两位小数
const PATTERN_PRICE_FLOAT = /^(([1-9]{1}\d*)|(0{1}))(\.\d{1,2})?$/
// 0 ~ 100 整数
const PATTERN_BETWEEN_0_100 = /((^[1-9]{1}[0-9]?$)|(^100$)|(^0$))/
// 正整数
const PATTERN_INTEGER = /^[1-9]\d*$/
// [0, 10] 且可以有一位小数
const PATTERN_BETWEEN_0_10 = /^((\d{1})|(^10$))(\.\d?)?$/