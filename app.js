// Global Scope Variables
console.log('name', name0)
name0 = 'Nathan';
console.log('name', name0)

var name0;

// Function Scope
(function runForFunctionScope() {
    name1 = 'Nathan in Function Scope';
    nameAtBottomOfPage = 'Nathan is at the bottom of the page';
    console.log('name', name);

    var name1;
})();

// Function Block Scope
(function runForBlockScope() {
    name2 = 'Nathan in Function Scope -- Part 2';
    {
        let name3 = "Nathan in Block Scope";
        console.log('name', name3);
    }
    console.log('name1', name2);
    // This will break because name2 is declared in the Block Scope
    // console.log('name2', name2);

    var name2;
})();

(function runForBlockScopeWithForLoop() {
    for (var i = 0; i < 10; i++) {

    }
    for (let j = 0; j < 10; j++) {

    }

    console.log('i', i);
    // This will break because j is declarded in a Block Scope
    // console.log('j', j);

    
})();

// to show global scope variable
var nameAtBottomOfPage;
console.log('name', nameAtBottomOfPage);

// Lexical Scope

(function lexicalScope (ele) {
    const allLowerCase = ele.toLowerCase()
    function innerFunctionToCall() {
        const allUpperCase = ele.toUpperCase();
        console.log(ele, allUpperCase, allLowerCase);
    }

    innerFunctionToCall();
})('Something Passed In');

class Person {
    constructor(name) {
        this.name = name;
        this.comments = [];
    }

    getName() {
        return this.name;
    }

    getComments() {
        return this.comments;
    }

}

const person1 = getPerson('Nathan')

person1.addComment("Nathan -- First Comment")
person1.addComment("Nathan -- Second Comment")

const person2 = getPerson("Scott");

person2.addComment("Scott -- First Comment")
person2.addComment("Scott -- Second Comment")

function getPerson(name) {
    const comments = [];
    return {
        getName: () => name,
        getComments: () => comments,
        addComment: (comment) => {
            comments.push(comment);
        }
    }
}