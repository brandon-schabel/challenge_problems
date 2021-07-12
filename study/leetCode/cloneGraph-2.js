
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */

const visited = new Map()
var cloneGraph = function(node) {
    // if node is falsy return that node
    if(!node) return node
    
    // check if visited has the node, if it does, 
    // return the node at that key in the map
    if(visited.has(node)) {
       return visited.get(node)
    }
    
    // clone the current node
    const clonedNode = new Node(node.val)
    
    // set the current cloned node as visited in visited map
    visited.set(node, clonedNode)
    
    node.neighbors.forEach(neighborNode => {
        // recursively call function on all neighbor nodes
        const clonedNeighborNode = cloneGraph(neighborNode)
        
        // once neighbor nodes are cloned push to current cloned node array
        clonedNode.neighbors.push(clonedNeighborNode)
    }) 
    
    
    return clonedNode
   
};