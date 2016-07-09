/**
 * Created by whitney on 2016/7/7.
 */

/**
 * 日期中文化
 * @param value
 * @returns {string}
 */
exports.timeReplace = (value) => {
  return value.replace('-','月')+'日'
};