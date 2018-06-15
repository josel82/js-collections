

module.exports = function Stack(){
    var head;

    this.push = function(value){
        let prev = head;
        head = {
            value
        }
        if(prev){
           head.next = prev;
        }
        return this;
    };

    this.pop = function(){
        if(!head) throw new Error('Stack is empty');
        let prev = head;
        head = head.next;
        return prev.value;
    };

    this.peek = function(){
        if(!head) throw new Error('Stack is empty');
        return {...head}.value;
    };

    this.isEmpty = function(){
        if(!head) {
            return true;
        } else {
            return false;
        }
    };

    this.search = function(item){
        if(!head) throw new Error('Stack is empty');
        let currentNode = head;
        let i = 0;
        while(currentNode.next){
            if(currentNode.value === item) return i;
            currentNode = currentNode.next;
            i++
        }
        if(currentNode.value === item){
            return i
        }else{
            throw Error('Not found.');
        }
    };

    this.getHead = function (){
        return {...head};
    };
    this[Symbol.iterator] = function*(){
        let current = head;
        while(true){
            if(!current) return 
            let {value} = current;
            current = current.next;
            yield value;
        }
    };

}