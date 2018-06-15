const expect = require('chai').expect;
const Stack = require('../stack');


describe('Stack', ()=>{

    let testStack;

    context('push',()=>{

        beforeEach(()=>{
            testStack = new Stack();
        });

        it('should add an item to the top of the stack', ()=>{
            
            testStack.push({name: 'foo'});
            expect(testStack._head.value).to.be.an('object').to.deep.equal({name: 'foo'});
            testStack.push({name:'bar'});
            expect(testStack._head.value).to.be.an('object').to.deep.equal({name: 'bar'});
            expect(testStack._head.next.value).to.be.an('object').to.deep.equal({name: 'foo'});
        });

    });

    context('pop', ()=>{
        beforeEach(()=>{
            testStack = new Stack();
        });

        it('should remove and return the item on top of the stack', ()=>{
            testStack.push({name: 'foo'}).push({name:'bar'}).push('I am a string');
            expect(testStack.pop()).to.be.a('string').to.equal('I am a string');
            expect(testStack._head.value).to.be.an('object').to.deep.equal({name: 'bar'});
            expect(testStack._head.next.value).to.be.an('object').to.deep.equal({name: 'foo'});
            expect(testStack._head.next.next).to.not.exist; 
        });

        it('should throw error if the stack is empty', ()=>{
            expect(testStack.pop.bind(testStack)).to.throw(Error);
            expect(testStack.pop.bind(testStack)).to.throw('Stack is empty'); 
        });
    });

    context('peek', ()=>{
        beforeEach(()=>{
            testStack = new Stack();
        });

        it('should return the item on top of the stack without removing it', ()=>{
            testStack.push({name: 'foo'}).push({name:'bar'}).push('I am a string');
            expect(testStack.peek()).to.be.a('string').to.equal('I am a string');
            expect(testStack._head.value).to.be.a('string').to.equal('I am a string');
            expect(testStack._head.next.value).to.be.an('object').to.deep.equal({name: 'bar'});
            expect(testStack._head.next.next.value).to.be.an('object').to.deep.equal({name: 'foo'});
            expect(testStack._head.next.next.next).to.not.exist;
        });
    });
    context('isEmpty', ()=>{
        beforeEach(()=>{
            testStack = new Stack();
        });
        it('should return true if the stack is empty', ()=>{
            expect(testStack.isEmpty()).to.exist;
            expect(testStack.isEmpty()).to.equal(true);
        });
        it('should return false if the stack is not empty', ()=>{
            testStack.push({name: 'foo'});
            expect(testStack.isEmpty()).to.exist;
            expect(testStack.isEmpty()).to.equal(false);
        });
    });

    context('search', ()=>{
        beforeEach(()=>{
            testStack = new Stack();
        });
        it('should return the index of a specified item', ()=>{
            const item1 = {name: 'foo'};
            const item2 = {name:'bar'};
            const item3 = 'I am a string';
            testStack.push(item1).push(item2).push(item3);
            expect(testStack.search(item1)).to.equal(2);
            expect(testStack.search(item2)).to.equal(1);
            expect(testStack.search(item3)).to.equal(0);
        });
        it('should throw error if the stack is empty', ()=>{
            expect(testStack.search.bind(testStack, 'test')).to.throw(Error);
            expect(testStack.search.bind(testStack, 'test')).to.throw('Stack is empty');
        });
        it('should throw error if the specified item is not in the stack', ()=>{
            const item1 = {name: 'foo'};
            testStack.push(item1);
            expect(testStack.search.bind(testStack, 'test')).to.throw(Error);
            expect(testStack.search.bind(testStack, 'test')).to.throw('Not found.');
        });
    });
});

//=================== chai ===================
//to.deep.equal() for assering properties of objects
//methods can be chained like so -> expect({name:'foo}).to.have.property('name').to.equal('foo');
//asserting a result is null -> expect(null).to.be.null;
//asserting a result is undefined -> expect(undefined).to.not.exist;
//asserting that something exists -> expect(3).to.exist;


//cross-env