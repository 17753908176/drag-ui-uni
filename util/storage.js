const storage = {
  /**
   * @function 存储值
   * @param {*} key
   * @param {*} value
   */
  setItem(key, value) {

    if (typeof value == 'object') {
      value = JSON.stringify(value)
    }
  uni.setStorageSync(key, value);
  },
  /**
   * @function 获取值
   * @param {*} key
   * @returns
   */
  getItem(key) {
    const val = uni.getStorageSync(key);
    try {
      return val?JSON.parse(val):''
    } catch (error) {
      return val?val:''
    }
  },
  /**
   * @function 删除某一个值
   * @param {*} key
   */
  removeItem(key) {
	  uni.removeStorageSync(key);
  },
  /**
   * @function 删除所有值
   */
  removeAll() {
    uni.clearStorageSync();
  }
}
export default storage
