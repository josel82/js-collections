
function Stack(){}

Stack.prototype = {
    push: function(value){
        let prev = this._head;
        this._head = {
            value
        }
        if(prev){
           this._head.next = prev;
        }
        return this;
    },
    pop: function(){
        if(!this._head) throw new Error('There are no items in the stack.');
        let prev = this._head;
        this._head = this._head.next;
        return prev.value;
    },
    peek: function(){
        if(!this._head) throw new Error('There are no items in the stack.');
        return this._head.value;
    },
    isEmpty: function(){
        if(!this._head) {
            return true;
        } else {
            return false;
        }
    },
    search:function(item){
        if(!this._head) throw new Error('There are no items in the stack.');
        let currentNode = this._head;
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


module.exports = Stack;