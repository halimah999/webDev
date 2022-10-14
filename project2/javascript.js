const form = document.getElementById("form");
const commentsRender = document.querySelector(".comments-render");
const textarea = document.getElementById("textarea-tag");
const user = document.getElementById("name");
let lisComments = document.querySelector(".comments");
let addButton = document.getElementById("add-review");



addButton.addEventListener("click", displayForm);
form.addEventListener("submit",addComment);

function displayForm(e){
    e.preventDefault();
    commentsRender.style.display = "flex";
}

function addComment(e){
    let valueName = user.value;
    let valueComment = textarea.value;
    e.preventDefault();
    if(valueName.length!==0 && valueComment.length!==0){
        const cloneCommentsInfo = document.querySelector(".comments-info").cloneNode(true);
        cloneCommentsInfo.setAttribute('id',document.getElementsByClassName('comments-info').length);
        cloneCommentsInfo.children[1].children[0].textContent = valueName;
        cloneCommentsInfo.children[1].children[1].textContent = valueComment;
        let position =  (lisComments.children.length)-2;
        lisComments.insertBefore(cloneCommentsInfo,lisComments.children[position]);

    textarea.value="";
    user.value = "";
    commentsRender.style.display = "none";}
}