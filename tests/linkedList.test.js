const expect = require('chai').expect;
const LinkedList = require('../linkedList');


let testList;

describe('LinkedList', () => {

    context('Adding Items', () => {
        const item1 = {name: 'Jose'};
        const item2 = 20;
        const item3 = 'This is a test'
        beforeEach(() => {
            testList = new LinkedList();
            testList.add(item1);
        });
        context('add', ()=>{
            it('should add an item to the end of the list', () => {

                expect(testList.getHead().value).to.be.an('object');
                expect(testList.getHead().value).to.equal(item1);
                expect(testList.getTail().value).to.equal(item1);
            });    
        });
        context('addAt', ()=>{
            it('should add an item at an specific position', () => {
                
                testList.addAt(0, item2).addAt(1, item3);
                expect(testList.getHead().value).to.be.a('number');
                expect(testList.getHead().value).to.equal(20);
                expect(testList.getHead().next.value).to.be.a('string');
                expect(testList.getHead().next.value).to.equal(item3);
                expect(testList.getHead().next.next.value).to.be.a('object');
                expect(testList.getHead().next.next.value).to.equal(item1);
            });
            it('should throw error if the index is out of bounds', ()=>{
                expect(testList.addAt.bind(testList, 3, item2)).to.throw(Error);
                expect(testList.addAt.bind(testList, 3, item2)).to.throw('Index out of bounds.');
            });
        });
    });

    context('Removing Items', () => {

        const item1 = {name: 'Jose'};
        const item2 = 20;
        const item3 = 'This is a test'

        beforeEach(() => {
            testList = new LinkedList();
            testList.add(item1).add(item2).add(item3);
        });
        context('remove', () => {

            it('should delete item at an specified position', () => {

                const deleted = testList.remove(1);
                expect(deleted).to.be.a('number');
                expect(deleted).to.equal(item2);
                expect(testList.getHead().next.value).to.be.a('string');
                expect(testList.getHead().next.value).to.equal(item3);
            });
            it('should remove the head of the list', () => {

                const deleted = testList.remove(0);
                expect(deleted).to.be.a('object');
                expect(deleted).to.equal(item1);
                expect(testList.getHead().value).to.be.a('number');
                expect(testList.getHead().value).to.equal(item2);
            });

            it('should throw error if the list is empty', () => {
                const emptyList = new LinkedList();
                expect(emptyList.remove).to.throw(Error);
                expect(emptyList.remove).to.throw('This list is empty.');
            });

            it('should thow error if the index is out of bounds', () => {
                expect(testList.remove.bind(testList, 4)).to.throw(Error);
                expect(testList.remove.bind(testList, 4)).to.throw('Index out of bounds.');
                expect(testList.remove.bind(testList, -1)).to.throw('Index out of bounds.');
            });
        });

        context('removeFirst', () => {
            it('should remove the first item from the list and return it', () => {

                const deleted = testList.removeFirst();
                expect(deleted).to.be.a('object');
                expect(deleted).to.equal(item1);
                expect(testList.getHead().value).to.be.a('number');
                expect(testList.getHead().value).to.equal(item2);
            });
            it('should throw error if the list is empty', () => {
                const emptyList = new LinkedList();
                expect(emptyList.removeFirst).to.throw(Error);
                expect(emptyList.removeFirst).to.throw('This list is empty.');
            });
        });

        context('removeLast', () => {
            it('should remove the last item of the list', () => {
                const deleted = testList.removeLast();
                expect(deleted).to.be.a('string');
                expect(deleted).to.equal(item3);
                expect(testList.getTail().value).to.be.a('number').to.equal(item2);
                expect(testList.getHead().value).to.be.an('object').to.equal(item1);
                expect(testList.getHead().next.value).to.equal(item2);
            });
            it('should throw error if the list is empty', () => {
                const emptyList = new LinkedList();
                expect(emptyList.removeLast).to.throw(Error);
                expect(emptyList.removeLast).to.throw('This list is empty.');
            });
        });
    });

    context('set', ()=>{
        const item1 = {name: 'Jose'};
        const item2 = 20;
        const item3 = 'This is a test'
        const newItem = {name: 'Jenny'};
        beforeEach(() => {
            testList = new LinkedList();
            testList.add(item1).add(item2).add(item3);
        });
        it('should update a specified item in the list', ()=>{
            testList.set(1, newItem);
            expect(testList.getHead().next.value).to.be.an('object');
            expect(testList.getHead().next.value).to.equal(newItem);
        });
        it('should throw error if the index is out of bounds', ()=>{
            expect(testList.set.bind(testList, 6, newItem)).to.throw(Error);
            expect(testList.set.bind(testList, 6, newItem)).to.throw('Index out of bounds.');
            expect(testList.set.bind(testList, -1, newItem)).to.throw('Index out of bounds.');
        });
    });

    context('size', ()=>{
        const item1 = {name: 'foo'};
        const item2 = 20;
        const item3 = 'bar'

        it('should return the size of the list', ()=>{
            testList = new LinkedList();
            testList.add(item1).add(item2).add(item3);
            let size = testList.size();
            expect(size).to.equal(3);
           
        });
        it('should return 0 if the list is empty', ()=>{
            let emptyList = new LinkedList();
            expect(emptyList.size()).to.equal(0);
        });
    });

    context('Iterator', ()=>{
        const item1 = {name: 'foo'};
        const item2 = 20;
        const item3 = 'bar'
        it('should return next item', ()=>{
            testList = new LinkedList();
            testList.add(item1).add(item2).add(item3);
            const iterator = testList[Symbol.iterator]();
            expect(iterator.next().value).to.equal(item1);
            expect(iterator.next().value).to.equal(item2);
            expect(iterator.next().value).to.equal(item3);
            expect(iterator.next()).to.deep.equal({value:undefined, done:true});
        });
    });


});