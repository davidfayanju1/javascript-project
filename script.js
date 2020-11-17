const addForm = document.querySelector('.add');

const finish = document.querySelector('.last-statement');

const search = document.querySelector('.search input');

const list = document.querySelector('.todos');

const generateTemplate = (todo) => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="fas fa-trash-alt delete"></i>
        </li>
    `;

    list.innerHTML += html;
};


addForm.addEventListener('submit', e => {
    e.preventDefault();

    const todo = addForm.add.value.trim();
    
     if(todo.length){

         addForm.reset();
         generateTemplate(todo);
    };

    let x = Array.from(list.children);


    if(x.length > 0){
        finish.style.display = 'none';
    };
        
});



list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    };

    let x = Array.from(list.children);

    if(x.length == 0){
        finish.style.display = 'block';        
    };
    
});



const filterTodos = ((term) => {

    Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add('filtered'));


    Array.from(list.children)
    .filter((todo) => todo.textContent.includes(term))
    .forEach((todo) => todo.classList.remove('filtered'));
    
});

//search field

search.addEventListener('keyup', () => {
    const term = search.value.toLowerCase().trim();

    filterTodos(term);
});