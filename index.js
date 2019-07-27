let textInput = document.querySelector('#newTodo')
let workList = document.querySelector('.work-list')
let todoList = document.querySelector('#my-todo')
let doneList = document.querySelector('#my-done')
const addBtn = document.querySelector('#addBtn')
const delBtn = document.querySelector('#delBtn')
const todoCheckedAll = document.querySelector('.todoCheckedAll')
const doneCheckedAll = document.querySelector('.doneCheckedAll')
let inputValue = document.querySelector('#newTodo')

/*=============================================
              add new element li
================================================*/
function addItem(text) {
  let newItem = document.createElement('li')
  newItem.innerHTML = `
    <input type="checkbox" name="vehicle1" value="check" class="checked todoList">
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `
  todoList.appendChild(newItem)
}
/*=============================================
            check input empty
================================================*/

function checkInputEmpty(value) {
  if (value === '') {
    alert('Please enter your item')
    return false
  }
  return true
}

/*=============================================
            click button for Input
================================================*/
addBtn.addEventListener('click', function (event) {
  if (checkInputEmpty(inputValue.value)) {
    addItem(inputValue.value)
    textInput.value = ''
  }
})
/*=============================================
            press enter for Input
================================================*/
textInput.addEventListener('keypress', function (event) {
  if (event.keyCode == 13 && checkInputEmpty(inputValue.value)) {
    addItem(inputValue.value)
    textInput.value = ''
  }
})

/*=============================================
              delete item
              check to done
              back to todo
================================================*/
workList.addEventListener('click', function (event) {
  let li = event.target.parentElement
  if (event.target.classList.contains('delete')) {
    li.remove()
  } else if (event.target.tagName === 'LABEL') {
    event.target.classList.toggle('checked')
    if (li.parentElement.id === 'my-todo') {
      doneList.appendChild(li)
      li.firstElementChild.classList.remove('todoList')
      li.firstElementChild.classList.add('doneList')
    } else if (li.parentElement.id === 'my-done') {
      todoList.appendChild(li)
      li.firstElementChild.classList.remove('doneList')
      li.firstElementChild.classList.add('todoList')
    }
  }
})

/*=============================================
              todo and done choice all
================================================*/
function choiceAll(choiceTarget, event) {
  if (event.target.checked) {
    for (let i = 0; i < choiceTarget.length; i++) {
      choiceTarget[i].checked = true
    }
  } else {
    for (let i = 0; i < choiceTarget.length; i++) {
      choiceTarget[i].checked = false
    }
  }
}
//todo
todoCheckedAll.addEventListener('click', function (event) {
  const todoItem = document.querySelectorAll('.todoList')
  choiceAll(todoItem, event)
})
//done
doneCheckedAll.addEventListener('click', function (event) {
  const doneItem = document.querySelectorAll('.doneList')
  choiceAll(doneItem, event)
})


/*=============================================
              delete item choice item
================================================*/

delBtn.addEventListener('click', function (event) {
  const checkItem = document.querySelectorAll('.checked')
  for (let i = 0; i < checkItem.length; i++) {
    if (checkItem[i].checked === true) {
      checkItem[i].parentElement.remove()
    }
  }
  todoCheckedAll.checked = false
  doneCheckedAll.checked = false
})
