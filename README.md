# js-collections

This is a JavaScript implementation of the most common data structures used in programming.
All these data structures can store unlimited amount of objects. Different data types can be stored in the same instance. Each has its own iterator, therefore they can be iterated over with a for... of loop.

## [LinkedList](./linkedList.js)

### Methods:

### add
` add(item: any):void ` adds an item to the end of the list. 

 ```JavaScript

  const LinkedList = require('./linkedList');

  const myList = new LinkedList();

  const myNumber = 10;

  myList.add(myNumber);

 ```
 multiple calls of these method can be chained as shown in the example below:
 
 ```JavaScript

  myList.add(32).add('I am a string').add({foo: 'bar'});
    
  for(let item of myList){
    console.log(item); // 10  32  I am a string  {foo: 'bar'}
  }

 ```
 
### addAt 
` addAt(index: number, item: any):void ` adds an item to an specified position. Throws `Index out of bounds` if the specified index is out of range (index < 0 || index >= size()).
 ```JavaScript

  myList.addAt(2, 'foo');

  for(let item of myList){
    console.log(item); // 10  32  foo  I am a string  {foo: 'bar'}
  }
  
 ```
### remove
`remove(index:number):any` removes item from a specified position in the list. Throws `This list is empty` if there are no items in the list. Throws `Index out of bounds` if the specified index is out of range (index < 0 || index >= size()).

 ```JavaScript

  const deleted = myList.remove(2);
  
  console.log(deleted); // foo

  
 ```
### removeFirst
`removeFirst():any` removes the first item in the list. Throws `This list is empty` if there are no items in the list. 

```JavaScript

  const first = myList.removeFirst();
  
  console.log(first); // 10

  
 ```

### removeLast
`removeLast():any` removes the last item in the list. Throws `This list is empty` if there are no items in the list.

```JavaScript

  const last = myList.removeLast();
  
  console.log(last); // {foo: 'bar'}

  
 ```
### set
`set(index: number, value: any):void` updates a specified item in the list. Throws `This list is empty` if there are no items in the list.

```JavaScript
  
  for(let item of myList){
    console.log(item); // 32   I am a string
  }
  
  myList.set(1, 'new value');
  
  for(let item of myList){
    console.log(item); // 32   new value
  }
 
 ```
### size
`size():number` returns the size of the list. 

```JavaScript
  
  const size = myList.size();
  
  console.log(size) // 2
  
 ```
<br>

## [Queue](./queue.js)

### Methods:

### enqueue
`enqueue(item:any):void` adds an item to the end of the queue. 

 ```JavaScript

  const Queue = require('./queue');

  const myQueue = new Queue();

  myQueue.enqueue({key:'value'});

 ```
 multiple calls of these method can be chained as shown in the example below:
 
 ```JavaScript

  myQueue.enqueue('bar').enqueue('foo').enqueue(33);
    
  for(let item of myQueue){
    console.log(item); // {key:'value'}  bar  foo  33
  }

 ```

### dequeue
`dequeue():any` removes the first item in the queue. Throws `There are no items in the queue.` if the queue is empty.

```JavaScript

  const deleted = myQueue.dequeue();
  
  console.log(deleted); // {key:'value'} 
  

 ```

### getIndexOf
 `getIndexOf(item:any):number` returns the index of a specified item. Throws `There are no items in the queue.` if the queue is empty. Throws `Not Found.` if the specified item is not in the queue.
 
 ```JavaScript

  const index = myQueue.getIndexOf(33);
  
  console.log(index); // 2 
  

 ```
 > Note: Objects are compared by reference and not by value. 
 
  ```JavaScript
  const obj = {foo: 'bar'};
  
  myQueue.enqueue(obj);   //first we add a new object to the queue
  
  console.log(myQueue.getIndexOf({foo: 'bar'})); //This will throw Not Found. error because even though it has the same value, this object we are passing as argument is not the same object that was stored in the queue.
  
  console.log(myQueue.getIndexOf(obj)); // 3   Here we are referring to the same object. Therefore; we get its index. 

 ```
### peek
 `peek():any` returns the first item of the queue, without removing it. Throws `There are no items in the queue.` if the queue is empty.
 
 
 ```JavaScript

  const firstItem = myQueue.peek();
  
  console.log(firstItem); // bar 
  

 ```
 
<br>

## [Stack](./stack.js)

### Methods:

### push
`push(item:any):void` adds an item on top of the stack. it is chainable.

```JavaScript

  const Stack = require('./stack');
  
  const myStack = new Stack();
  
  myStack.push({name: 'foo'}).push(35).push({name:'bar});
  
  for(let item of myStack){
    console.log(item);    // {name: 'foo'}   35    {name:'bar}
  }
  
```

### pop
`pop():any` removes and returns the item that is on top of the stack. Throws 'Stack is empty' if there are no items in the stack.

```JavaScript

  const deleted = myStack.pop();
  
  console.log(deleted)  // {name: 'foo'}
  
```
### peek
`peek():any` returns the item that is on top of the stack, without removing it. Throws 'Stack is empty' if there are no items in the stack.

```JavaScript

  const top = myStack.pop();
  
  console.log(top)  // 35
  
```

### isEmpty 
`isEmpty():boolean` returns true if the stack is empty, returns false otherwise. 


```JavaScript

  myStack.isEmpty(); // true   ||   false
  
  
```

### search
`search(item:any):number` returns the index of a specified item.  Throws 'Stack is empty' if there are no items in the stack. Throws 'Not found.' if the specified object is not in the stack.

```JavaScript

  myStack.search(35); // 0
  
  
```
 > Note: Objects are compared by reference and not by value. 





