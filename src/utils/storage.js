/**
 * storage 二次封装-本地存储封装
 * @author amy
 * @time 2022-1-29
 */
import config from "../config/index";

export default {
  /**
   * 在config对象中配置一个命名空间，‘’‘将新增的属性添加到该命名空间下’‘’‘，防止储存的变量较多造成混乱
   * 先获取已存在的命名空间，根据新增的key与val值动态添加
   * 储存时转化为字符串形式
   */
  setItem (key, val) {
    const storage = this.getStorage()
    storage[key] = val
    window.localStorage.setItem(config.namespace, JSON.stringify(storage))
  },

  /**
   * 动态获取--已存在的命名空间的属性
   */
  getItem (key) {
    return this.getStorage()[key]
  },

  /**
   * 获取config对象中namespace的属性信息，若有值则返回，无值时返回 空字符串对象
   */
  getStorage () {
    return JSON.parse(window.localStorage.getItem(config.namespace) || "{}")
  },

  /**
   * 清理对应key的val，并重新赋值命名空间的值
   */
  clearItem (key) {
    const storage = this.getStorage()
    delete storage[key]
    window.localStorage.setItem(config.namespace, JSON.stringify(storage))
  },

  /**
   * 全部清理
   */
  clearAll () {
    window.localStorage.clear()
  }
}