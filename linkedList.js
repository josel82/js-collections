

function LinkedList(){}

LinkedList.prototype = {
    add: function(value){
        let prev = this._tail;
        this._tail = {
            value
        }
        if(prev){
            prev.next = this._tail;
        }else{
            this._head = this._tail;
        }
        return this;
    },
    addAt: function(pos,value){
        let currentNode = this._head;
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
            this._head = newNode;
        }else if(!currentNode || pos < 0){
            throw new Error('Index out of bounds.');
        }else{        
            newNode.next = currentNode;
            prev.next = newNode;
        }

        return this;
    },
    remove:function(pos){
        if(!this._head) throw new Error('This list is empty.');
        let currentNode = this._head;
        
        for(let i = 0; i < pos-1 && currentNode.next; i++){
            currentNode = currentNode.next;
        }
        
        if(pos === 0){
            let holder = this._head;
            this._head = this._head.next;
            return holder.value;
        }else{
            if(!currentNode.next || pos < 0){
                throw new Error('Index out of bounds.');
            }
            let holder = currentNode.next;
            currentNode.next = currentNode.next.next;
            return holder.value;
        }
    },
    removeFirst:function(){
        if(!this._head) throw new Error('This list is empty.');
        let holder = this._head;
        this._head = this._head.next;
        return holder.value;
    },
    removeLast:function(){
        if(!this._head) throw new Error('This list is empty.');
        let current = this._head;
        let prev;
        while(current.next){
            prev = current;
            current = current.next;
        }
        prev.next = null;
        this._tail = prev;
        return current.value;
    },
    set:function(pos, value){
        let current = this._head;
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
    },
    size:function(){
        if(!this._head) return 0;
        let currentNode = this._head;
        let index = 0;
        while(currentNode.next){
            currentNode = currentNode.next;
            index++;
        }
        return index+1;
    },
    [Symbol.iterator]: function(){
        let current = this._head;
        return {
            next: function(){
                if(!current) return {done:true}
                let {value} = current;
                current = current.next;
                return {value};
            }
        }
    }
}


module.exports = LinkedList;