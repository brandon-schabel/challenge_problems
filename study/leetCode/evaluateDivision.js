// graph
// https://leetcode.com/problems/evaluate-division/
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */

// given an equation 
// ["a", "b"]  and value 2.0
// a / b = 2.00
var calcEquation = function(equations, values, queries) {
    const graph = {}

    for(let i = 0; i < equations.length; i++) {
        const [u, v] = equations[i]
        const value = values[i]
        
        // we want object instead of array, because we want to quickly match waht u/v is.
        graph[u] = graph[u] ||  {}
        graph[u][v] = value
        
        
        graph[v] = graph[v] || {}
        // since a / b above is 2.0, b / a is 1/2.0
        graph[v][u] = 1 / value
    }
    
    // set becasue we dont' need key/value
    const visited = new Set()
    
    // target is a string char
    // product is current result at u, product is resultSoFar
    const dfs = (u, target, resultSoFar = 1) => {
        if(!graph[u]) return
        if(visited.has(u)) return false
        visited.add(u) // node is visited
        
        // find path from u
        const children = Object.keys(graph[u]) || [] 
        
    
    
        for(let v of children) {
            // current result at u value, think of currency problem, here we are converting the currency
            // to the next currency 
            const currentResult = graph[u][v] * resultSoFar
            
            // if in currency, if it is the target is the currency we want, return the calculated value
            if(v === target) {
                return currentResult
            }
            
            // recursively because we want to go until we find the target that matches children (aka finds the currency)
            const outcome = dfs(v, target, currentResult)
            
            
            // return final result 
            if(outcome) {
                return outcome
            }
            
        }
        
    }
    
    const res = []
    
    
    for(let [u, v] of queries) {
        const result = dfs(u, v)
        
        if(result) {
            res.push(result)
            
            // this is not 100% needed, but this is a way of caching so if needed we can just lookup the value
            graph[u][v] = result
            graph[v][u] = 1 / result
        } else {
            res.push(-1.0)
        }
        
        // each query is contained, so we want to clear the visited after each one.
        visited.clear()
    }

  return res     
};

