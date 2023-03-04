
function addToList() {
    const textString = document.getElementById('text-field');
    const text = textString.value;
    if (text.length > 0) {

        const listArea = document.getElementById('list-area');
        const ul = document.createElement('ul');
        ul.classList.add('d-flex');
        ul.classList.add('justify-content-between');
        const li = document.createElement('li');
        li.innerText = text;
        ul.appendChild(li);


        const div = document.createElement('div');
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('btn')
        deleteButton.classList.add('btn-danger')
        deleteButton.innerText = 'Delete';
        div.appendChild(deleteButton);

        const updateButton = document.createElement('button');
        updateButton.classList.add('btn')
        updateButton.classList.add('btn-primary')
        updateButton.innerText = 'Update';
        div.appendChild(updateButton);

        ul.appendChild(div);
        listArea.appendChild(ul);

        deleteButton.addEventListener('click', function () {
            listArea.removeChild(ul);
        })
        li.addEventListener('dblclick', function () {
            textString.value = text;
        })

        updateButton.addEventListener('click', function () {
            const textString = document.getElementById('text-field');
            const text = textString.value;
            if (text.length > 0) {
                li.innerText = text;
            }
        })

        textString.value = '';

    }
}

