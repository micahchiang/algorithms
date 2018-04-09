var mergeTwoLists = function(l1, l2) {
    if(!l1 && !l2) return null;
    let head = new ListNode(0);
    let node = head;
    let l1current = l1;
    let l2current = l2;
    while(l1current && l2current) {
        node.next = new ListNode(0);
        if(l1current.val <= l2current.val) {
            node.val = l1current.val;
            l1current = l1current.next;
        } else {
            node.val = l2current.val;
            l2current = l2current.next;
        }
        node = node.next;
    }
    while(l1current) {
        node.val = l1current.val;
        l1current = l1current.next;
        if(l1current) {
            node.next = new ListNode(0);
            node = node.next;   
        }
    }
    while(l2current) {
        node.val = l2current.val;
        l2current = l2current.next;
        if(l2current) {
            node.next = new ListNode(0);
            node = node.next;   
        }
    }
    return head;
};