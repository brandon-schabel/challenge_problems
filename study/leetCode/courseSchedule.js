// canFinish problem https://leetcode.com/problems/course-schedule/

// First create a directed graph

// Create graph based on the prerequisites

// Create visited and visiting set

// Create DFS function 
// 	- check if visiting has u, if it does then return false because then it’s invalid
// 	- if visited has u return true

// 	- add u to visited and visiting 
	
// 	- get paths from graph at u
// 		- const paths = graph[u] || []
// 	-  iterate over paths 
// 		- if v === pre return false
// 		- recursively call dfs and return false - if (!dfs(v,u)) return false
// 	- delete “u” from from visiting
// 	- return  true from dfs at end


// Iterate up to numCourses 
// 	  for(let n = 0; n < numCourses; n++ ) {
//             if (!dfs(n, null)) return false
//   	  }

// return true 

// RESULT: 

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const graph = createGraph(prerequisites)
    const visited = new Set()
    const visiting = new Set()
    
    
    const dfs = (currentNode, prevNode) => {
        if(visiting.has(currentNode)) return false
        if(visited.has(currentNode)) return true
        
        visited.add(currentNode)
        visiting.add(currentNode)
        
        
        const paths = graph[currentNode] || []
        
        for(let path of paths) { 
            if(path === prevNode) return false
            // if dfs return false then current path is invalid
            if(!dfs(path, currentNode )) return false
        }
        
        visiting.delete(currentNode)
        
        
        return true 
    }
    
    for(let i = 0; i < numCourses; i++) {
        if(!dfs(i, null)) return false
    }
    
    return true
};

const createGraph = (edges) => {
    const graph = {}
    
    for(let [u, v] of edges) {
        graph[u] = graph[u] || []
        graph[u].push(v)
    }
    
    return graph
    
}



// self attempt 3

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const graph = createGraph(prerequisites)
    const visited = new Set()
    const visiting = new Set()
    

    const dfs = (u, pre) => {
        if(visiting.has(u)) return false
        if(visited.has(u)) return true
        
        visiting.add(u)
        visited.add(u)
        
        const paths = graph[u] || []
         
        for(let path of paths) {
            if(path === pre) return false
            
            // new path recursively called and passed in, u will be the prev next time it runs,
            if(!dfs(path, u)) return false
            
        }
        
        visiting.delete(u)
        
        return true
    }
    
    for(let n = 0; n < numCourses; n++) {
        if(!dfs(n, null)) return false
    }
    
    return true
};

const createGraph = (edges) => {
    const graph = {}
    
    for(let [u, v] of edges) {
         graph[u] = graph[u] || []
        graph[u].push(v)
    }
    
    return graph
} 