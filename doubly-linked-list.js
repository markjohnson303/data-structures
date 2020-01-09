class Node {
    constructor(val) {
        this.val = val;
        this.next = null; //"the next node -- null if tail",
        this.prev = null; //"the previous node -- null if head"
    }
    }
    
    class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        const newNode = new Node(val)
        if(!this.head){
        this.head = newNode
        this.tail = newNode
        } else {
        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
        }
        this.length++ 
        return this
    }
    pop() {
        if(!this.head){
        return false
        } else if (this.length === 1) {
        this.popped = this.head
        this.head = null
        this.tail = null
        return this.popped
        } else {
        let lastNode = this.tail
        let newTail = this.tail.prev
        this.tail.prev.next = null
        this.tail.prev = null
        this.tail = newTail
        this.length --
        return lastNode
        }
    }
    shift() {
        if(!this.head){
        return false
        } else if (this.head == this.tail){
        const popped = this.head
        this.head.next = null
        this.tail.prev = null
        this.head = null
        this.tail = null
        this.length--
        return popped
        } else {
        const popped = this.head
        const newHead = this.head.next
        this.head.next.prev = null
        this.head.next = null
        this.head = newHead
        this.length--
        return popped
        }
    }
    unshift(val){
        const newNode = new Node(val)
        if (!this.head) {
        this.head = newNode
        this.tail = newNode
        this.length++
        return this
        } else {
        this.head.prev = newNode
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
        }
    }
    instertAtIndex(index, val) {
        if(index == 0 ){
        this.unshift(val)
        } else if (index == this.length-1){
        this.push(val)
        } else {
        const newNode = new Node(val)
        let currentIndex = 0
        let currentNode = this.head
        while(currentIndex !== index){
            currentNode = currentNode.next
            currentIndex++
        }
        const before = currentNode.prev
        const after = currentNode
        after.prev = newNode
        newNode.next = currentIndex
        before.next = newNode
        newNode.prev = before
        this.length++
        }
        return this
    }
    removeAtIndex() {}
    getIndex() {}
    setIndex() {}
    search() {}
    }
    
    let list = new DoublyLinkedList
    
    list.push(1).push(2).push(3)
    console.log(list.instertAtIndex(1, 50))