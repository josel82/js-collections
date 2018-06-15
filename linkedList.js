

module.exports = function LinkedList(){
    let head;
    let tail;

    this.add = function(value){
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
    }

    this.addAt = function(pos,value){
        let currentNode = head;
        let prev;
        const newNode = {value}
        for(let i = 0; i< pos && currentNode; i++){
            prev = currentNode;
            currentNode = currentNode.next;
        }
        if(pos === 0 && !currentNode){
            this.add(value);
        }else if(pos === 0 && currentNode){
            newNode.next = currentNode;
            head = newNode;
        }else if(!currentNode || pos < 0){
            throw new Error('Index out of bounds.');
        }else{        
            newNode.next = currentNode;
            prev.next = newNode;
        }

        return this;
    }

    this.remove = function(pos){
        if(!head) throw new Error('This list is empty.');
        let currentNode = head;
        
        for(let i = 0; i < pos-1 && currentNode.next; i++){
            currentNode = currentNode.next;
        }
        
        if(pos === 0){
            let holder = head;
            head = head.next;
            return holder.value;
        }else{
            if(!currentNode.next || pos < 0){
                throw new Error('Index out of bounds.');
            }
            let holder = currentNode.next;
            currentNode.next = currentNode.next.next;
            return holder.value;
        }
    }

    this.removeFirst = function(){
        if(!head) throw new Error('This list is empty.');
        let holder = head;
        head = head.next;
        return holder.value;
    }

    this.removeLast = function(){
        if(!head) throw new Error('This list is empty.');
        let current = head;
        let prev;
        while(current.next){
            prev = current;
            current = current.next;
        }
        prev.next = null;
        tail = prev;
        return current.value;
    }

    this.set = function(pos, value){
        let current = head;
        let prev;
        let newNode = {value};
        for(let i = 0; i < pos && current; i++){
            prev = current;
            current = current.next;
        }
        
        if(!current || pos < 0){
            throw new Error('Index out of bounds.')
        }
        newNode.next = current.next;
        prev.next = newNode;    
    };

    this.size = function(){
        if(!head) return 0;
        let currentNode = head;
        let index = 0;
        while(currentNode.next){
            currentNode = currentNode.next;
            index++;
        }
        return index+1;
    };

    this.getHead = function (){
        return {...head};
    };

    this.getTail = function (){
        return {...tail};
    };

    this[Symbol.iterator] = function*(){
        let current = head;
        while(true){
            if(!current) return
            let {value} = current;
            current = current.next;
            yield value;
        }
    }

}