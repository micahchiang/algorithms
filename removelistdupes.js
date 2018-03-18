// another leetcode problem. Remove all duplicates from a linked list. This approach uses recursion. 
// If next.value === current.value, current.next = current.next.next. 
// Then, just call the function on current.next.

var deleteDuplicates = function(head) {
    if(!head) return head;
    while(head.next && head.next.val === head.val) {
        head.next = head.next.next;
    }
    deleteDuplicates(head.next);
    return head;
};