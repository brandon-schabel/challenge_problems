// https://leetcode.com/problems/clone-graph/
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

 visited = new Map()
var cloneGraph = function(node) {
    // base case - if node is falsy return it
    if(!node)return node
    
    // if visited has node, then we just want to return that because we are done.
    if(visited.has(node)) {
        return visited.get(node)
    }
    
    // create a new node with the value of the current node
    const clonedNode = new Node(node.val)
    
    
    // add current code as key, clonedNode as value for visited, so once we come back to a visited node, line 19 will return that node.
    visited.set(node, clonedNode)
    
    node.neighbors.forEach(neighbor => {
        // recursively pass neighbor nodes to this function
        const newNeighborNode = cloneGraph(neighbor)
        
        // push result of newNeighborNode to neighbor array
        clonedNode.neighbors.push(newNeighborNode)
    })
    
    // final return 
    return clonedNode
};