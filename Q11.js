function outerFunction() {
    let message = "My name is Nikhil";

    function innerFunction() {
        console.log(message);
    }
    return innerFunction; 
}
const res=outerFunction();
res();
