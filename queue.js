
module.exports = function Queue(){
    let head;
    let tail;
    this.enqueue = function(value){
        let prev = tail;
        tail = {
            value
        }
        if(prev){
            prev.next = tail;
        }else{
            head = tail;
        }
        return this;
    };
    
    this.dequeue = function(){
        if(!head){
            throw new Error('There are no items in the queue.');
        }else{
            let prev = head;
            head = head.next;
            return prev.value;
        }
    }

    this.getIndexOf = function(item){

        if(!head) throw new Error('There are no items in the queue.');
        let currentNode = head;
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
    };

    this.peek = function(){
        if(!head) throw new Error('There are no items in the queue.');
        return {...head}.value;
    }

    this.getHead = function(){
        return {...head};
    }
    this.getTail = function(){
        return {...tail};
    }

    this[Symbol.iterator] = function*(){ //Generator
        let current = head;
        while(true){
            if(!current) return
            let {value} = current;
            current = current.next;
            yield value;
        }
    }
};