/**
 * Initialize your data structure here.
 */
// var WordDictionary = function() {
    
// };

// /** 
//  * @param {string} word
//  * @return {void}
//  */
// WordDictionary.prototype.addWord = function(word) {
    
// };

// /** 
//  * @param {string} word
//  * @return {boolean}
//  */
// WordDictionary.prototype.search = function(word) {
    
// };

// .ad 

class WordDictionary {
    constructor() {
        this.root = {}
    }
    
    search(word, root = this.root) {
        
        
        for(let i = 0; i < word.length; i++) {
            const ch = word[i]
            
            if(ch === '.') {
                for(const branch in root) {
                  const value = this.search(word.substring(i+1), root[branch])
                  
                  if(value) return true 
                }
                
                return false
            } else {
                if(root[ch]){
                    root = root[ch]
                } else {
                    return false
                }
                
            }
        }
        
        // or !!root.done
        if(root.done) {
            return true
        }
        
        return false
    }
    
    addWord(word) {
        let root = this.root 
        
        for(const ch of word) {
            if(!root[ch]) {
                root[ch] = {}
            } 
            
            root = root[ch]
        }
        
        // root[word] = word
        root.done = true
    }
}

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */