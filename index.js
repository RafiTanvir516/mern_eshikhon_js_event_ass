// color change body

function makeWhite() {
    document.body.style.backgroundColor = "white"
}

const green = document.querySelector("#green");
green.onclick = function () {
    document.body.style.backgroundColor = "green"
}
const red = document.querySelector("#red");
red.onclick = makeRed;
 function makeRed() {
    document.body.style.backgroundColor = "red"
}

const yellow = document.querySelector("#yellow");
yellow.addEventListener("click",function () {
    document.body.style.backgroundColor ="yellow"
})
const skyBlue = document.querySelector("#skyBlue").addEventListener("click",function () {
    document.body.style.backgroundColor ="skyBlue"
})

// body color end

// comment box

document.querySelector("#comments").addEventListener("click", function () {
    const newComment = document.createElement("p");
    const inputText = document.querySelector("#commentText");
    const commentText = inputText.value;
    newComment.innerText = commentText;
    document.querySelector("#commentDiv").appendChild(newComment);
    inputText.value ="";
})



// event delegate
document.getElementById("grandParent").addEventListener("click", function (e) {
    if(e.target.id === "grandParent"){
        console.log('grandParent is clicked');
    }else if(e.target.id === "parent"){
        console.log('Parent is clicked');
    }else if(e.target.id === "item"){
        console.log('item is clicked');
    }
})

// event bubble
document.getElementById("item-2").addEventListener("click", function (e) {
    console.log("item is clicked");
    e.stopImmediatePropagation();
})
document.getElementById("item-2").addEventListener("click", function () {
    console.log("item  2nd time clicked");
})

document.getElementById("item-2").addEventListener("click", function () {
    console.log("item 3rd time clicked");
})
document.getElementById("itemContainer").addEventListener("click", function () {
    console.log("item container is clicked");
})
document.getElementById("container").addEventListener("click", function () {
    console.log("container is clicked");
})