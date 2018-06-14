
function Queue(){};

Queue.prototype =  {
     enqueue: function(value){
        let prev = this.tail;
        this.tail = {
            value
        }
        if(prev){
            prev.next = this.tail;
        }else{
            this.head = this.tail;
        }
        return this;
    },
    dequeue: function(){
        if(!this.head){
            throw new Error('There are no items in the queue.');
        }else{
            let prev = this.head;
            this.head = this.head.next;
            return prev.value;
        }
    },
    getIndexOf: function(item){

        if(!this.head) throw new Error('There are no items in the queue.');
        let currentNode = this.head;
        let i = 0;
        while(currentNode.next){
            if(currentNode.value === item) return i;
            currentNode = currentNode.next;
            i++
        }
        if(currentNode.value === item) {
            return i;
        }else{
            throw new Error('Not Found.');
        }
    },
    peek: function(){
        if(!this.head) throw new Error('There are no items in the queue.');
        return this.head.value;
    },
    [Symbol.iterator]: function*(){ //Generator
        let current = this.head;
        while(true){
            if(!current) return
            let {value} = current;
            current = current.next;
            yield value;
        }
    }
}

module.exports = Queue;