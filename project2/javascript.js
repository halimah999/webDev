
const form = document.getElementById("form");
const textarea = document.getElementById("textarea-tag");
const user = document.getElementById("name");

// let lisComments = document.querySelector(".p-info");


let lisComments = document.querySelector(".comments-info");


// console.log(lisComments.innerHTML);
// console.log(form.innerHTML);




form.addEventListener("submit",addComment);

function addComment(e){
    console.log("here");

    e.preventDefault();
    let valueName = user.value;

    let valueComment = textarea.value;

    let commentP = document.createElement("p");
    let commentH6 = document.createElement("h6");

    let divP = document.createElement("div");
    let divH6 = document.createElement("div");


    divP.classList.add("p-info");
    divH6.classList.add("h6-info");
    commentP.textContent = valueComment;
    commentH6.textContent = valueName;
    divP.append(commentP)
    divH6.append(commentH6)
    lisComments.append(divH6)
    lisComments.append(divP)
    textarea.value="";
    user.value = "";

}
