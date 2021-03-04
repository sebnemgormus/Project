

let userFormDOM = document.querySelector("#userForm")
userFormDOM.addEventListener('submit', formHandler)




function formHandler(event) {
    event.preventDefault()
    const COMMENT = document.querySelector("#comment")

    if (COMMENT.value) {
        addItem(`${COMMENT.value}`)
        COMMENT.value = ""

    }else {
        alert("yorum girilmedi")
    }
}

let userListDOM = document.querySelector("#userList")

const addItem = (comment) => {
    let liDOM = document.createElement("li")
    liDOM.innerHTML = `
    ${comment}
    `
    liDOM.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    userListDOM.append(liDOM)
}