

let userFormDOM = document.querySelector("#userForm")
userFormDOM.addEventListener('submit', formHandler)


function formHandler(event) {
    event.preventDefault()
    const COMMENT = document.querySelector("#comment")

    if (COMMENT.value) {
        addItem(`${COMMENT.value}`)
        COMMENT.value = ""
    }
}

let userListDOM = document.querySelector("#userList")

const addItem = (comment) => {
    let liDOM = document.createElement("li")
    liDOM.innerHTML = `${comment}` + '<button class="btn btn-secondary" onclick="Delete(this);">Sil</button> </li>';
    liDOM.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    userListDOM.append(liDOM)
}

function Delete(currentEl){
    currentEl.parentNode.parentNode.removeChild(currentEl.parentNode);
}