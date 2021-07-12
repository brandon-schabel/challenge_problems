// linked list
// https://leetcode.com/problems/copy-list-with-random-pointer/

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */


var copyRandomList = function(head, visited = new Map() ) {
    // if no head return head
    if(!head) return head
    
    // if current head has been visited, look up that key and return it(this will return the cloned version)
    if(visited.has(head)) {
        return visited.get(head)
    }
    
    
    // create clone of node
    const newNode = new Node(head.val)
    
    
    // mark current cloned node as visited, with original node as key
    visited.set(head, newNode )
    
    // recursive, copy all next nodes
    newNode.next = copyRandomList(head.next, visited)
    
    // recursive, copy all random nodes
    newNode.random = copyRandomList(head.random, visited)
    
    return newNode
};