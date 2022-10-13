
const form = document.getElementById("form");
const commentsRender = document.querySelector(".comments-render");
const textarea = document.getElementById("textarea-tag");
const user = document.getElementById("name");
const cloneImage = document.querySelector(".img-gender").cloneNode(true);



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

        

        let elemName = document.createElement("p");
        let elemReview = document.createElement("p");
        let divP = document.createElement("div");
        let divComment = document.createElement("div");


        divComment.classList.add("comments-info")
        divP.classList.add("user-review");
        cloneImage.classList.add('img-gender');
        cloneImage.setAttribute('id', lisComments.children.length)



        elemName.textContent = valueName;
        elemReview.textContent = valueComment;
        divComment.appendChild(cloneImage);
        divP.append(elemName);
        divP.append(elemReview);
        divComment.append(divP);

        let position =  (lisComments.children.length)-2;

        lisComments.insertBefore(divComment,lisComments.children[position]);}

    textarea.value="";
    user.value = "";
    commentsRender.style.display = "none";

}


