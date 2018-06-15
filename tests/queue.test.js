const expect = require('chai').expect;
const Queue = require('../queue');

let testQueue;
const head = {name: 'Jose'}

describe('Queue', ()=>{

    beforeEach(()=>{
        testQueue = new Queue();
        testQueue.enqueue(head);
    });

    describe('enqueue', ()=>{
        it('shoud add a new item and this should be both the head and the tail',()=>{
        
            expect(testQueue.head.value).to.equal(head);
            expect(testQueue.tail.value).to.equal(head);
        });

        it('should add new item at the end of the queue',()=>{
            const newItem = {name: 'Manuel'};
            testQueue.enqueue(newItem);
            expect(testQueue.tail.value).to.equal(newItem);
            expect(testQueue.head.next.value).to.equal(newItem);
            expect(testQueue.head.value).not.to.equal(newItem);
        });
    });

    describe('dequeue',()=>{
        it('should remove the first item of the queue and let the next item become the new head', ()=>{
            const item2 = {name: 'Manuel'};
            const item3 = {name: 'April'};
            testQueue.enqueue(item2).enqueue(item3);

            const del = testQueue.dequeue();
            expect(del).to.equal(head);
            expect(item2).to.equal(testQueue.head.value);

        });
        it('should throw an error if there are no items in the queue', ()=>{
            const newQueue = new Queue();
            expect(newQueue.dequeue).to.throw(Error);
            expect(newQueue.dequeue).to.throw('There are no items in the queue.');
        });
    });

    describe('getIndexOf', ()=>{
        it('should find the object and return its index', ()=>{
            const item2 = {name: 'Manuel'};
            const item3 = {name: 'April'};
            testQueue.enqueue(item2).enqueue(item3).enqueue(22);

            expect(testQueue.getIndexOf(head)).to.equal(0);
            expect(testQueue.getIndexOf(item2)).to.equal(1);
            expect(testQueue.getIndexOf(item3)).to.equal(2);
            expect(testQueue.getIndexOf(22)).to.equal(3);
        });
        it('should throw an error if there are no items in the queue', ()=>{
            const newQueue = new Queue();
            expect(newQueue.getIndexOf.bind(newQueue, {})).to.throw(Error);
            expect(newQueue.getIndexOf.bind(newQueue, {})).to.throw('There are no items in the queue.');
        });

        it('should throw an error if the item is not in the queue', ()=>{
            
            expect(testQueue.getIndexOf.bind(testQueue, {})).to.throw(Error);
            expect(testQueue.getIndexOf.bind(testQueue, {})).to.throw('Not Found.');
        });

    });
    describe('peek', ()=>{
        it('should return the first item in the queue',()=>{
            const item2 = {name: 'Manuel'};
            const item3 = {name: 'April'};
            testQueue.enqueue(item2).enqueue(item3);
            expect(testQueue.peek()).to.equal(head);
        });
        it('should throw an exception if there are no items in the queue', ()=>{
            const newQueue = new Queue();
            expect(testQueue.peek).to.throw(Error);
            expect(testQueue.peek).to.throw('There are no items in the queue.');
        });
    });
    describe('Iterator', ()=>{
        it('should return next item', ()=>{
            const item2 = {name: 'Manuel'};
            const item3 = {name: 'April'};
            testQueue.enqueue(item2).enqueue(item3);
            const iterator = testQueue[Symbol.iterator]();
            expect(iterator.next().value).to.equal(head);
            expect(iterator.next().value).to.equal(item2);
            expect(iterator.next().value).to.equal(item3);
            expect(iterator.next()).to.deep.equal({value:undefined, done:true});
        });
    });
});