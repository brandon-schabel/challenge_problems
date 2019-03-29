/**
 * Initialize your data structure here.
 */
class MapSum {
  constructor() {
      this.classObj = {};
  }
}

/** 
* @param {string} key 
* @param {number} val
* @return {void}
*/
MapSum.prototype.insert = function(key, val) {
  this.classObj[key] = val;
};

/** 
* @param {string} prefix
* @return {number}
*/
MapSum.prototype.sum = function(prefix) {
  let total = 0;
  for(let key in this.classObj) {
      if( key.slice(0, prefix.length) === prefix){
            total += this.classObj[key]
      }
  }  
  return total;
};

/** 
* Your MapSum object will be instantiated and called as such:
* var obj = new MapSum()
* obj.insert(key,val)
* var param_2 = obj.sum(prefix)
*/