# js-collections

This is a JavaScript implementation of the most common data structures used in programming.
All these data structures can store unlimited amount of objects. Different data types can be stored in the same instance. Each has its own iterator, therefore they can be iterated over with a for... of loop.

### [LinkedList](./linkedList.js)

__Methods:__

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
` addAt(index: number, item: any):void ` adds an item to an specified position. Throws `Index out of bounds` if the specified index is out of range (index < 0 || index >= size()).
 ```JavaScript

  myList.addAt(2, 'foo');

  for(let item of myList){
    console.log(item); // 10  32  foo  I am a string  {foo: 'bar'}
  }
  
 ```

`remove(index:number):any` removes item from a specified position in the list. Throws `This list is empty` if there are no items in the list. Throws `Index out of bounds` if the specified index is out of range (index < 0 || index >= size()).

 ```JavaScript

  const deleted = myList.remove(2);
  
  console.log(deleted); // foo

  
 ```

`removeFirst():any` removes the first item in the list. Throws `This list is empty` if there are no items in the list. 

```JavaScript

  const first = myList.removeFirst();
  
  console.log(first); // 10

  
 ```
`removeLast():any` removes the last item in the list. Throws `This list is empty` if there are no items in the list.

```JavaScript

  const last = myList.removeLast();
  
  console.log(last); // {foo: 'bar'}

  
 ```

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

`size():number` returns the size of the list. 

```JavaScript
  
  const size = myList.size();
  
  console.log(size) // 2
  
 ```


### [Queue](./queue.js)

__Methods:__

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

`dequeue():any` removes the first item in the queue. Throws `There are no items in the queue.` if the queue is empty.

```JavaScript

  const deleted = myQueue.dequeue();
  
  console.log(deleted); // {key:'value'} 
  

 ```
 
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
 
  `peek():any` returns the first item of the queue, without removing it. Throws `There are no items in the queue.` if the queue is empty.
 
 
 ```JavaScript

  const firstItem = myQueue.peek();
  
  console.log(firstItem); // bar 
  

 ```