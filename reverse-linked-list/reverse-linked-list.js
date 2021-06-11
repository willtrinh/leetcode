/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// I: head of singly linked list
// O: reversed list
// C: none
// E: empty list

var reverseList = function(head) {
    let prev = null;
    let curr = head;
    
    while (curr !== null) {
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }
    return prev;
};