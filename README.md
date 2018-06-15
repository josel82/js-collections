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


