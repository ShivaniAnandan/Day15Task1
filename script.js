
const formContainer = document.getElementById('form-container');

const form = document.createElement('form');
form.id = 'dataForm';

const fields = [
    { label: 'First Name', id: 'firstname', type: 'text' },
    { label: 'Last Name', id: 'lastname', type: 'text' },
    { label: 'Email', id: 'email', type: 'email' },
    { label: 'Address', id: 'address', type: 'text' },
    { label: 'Pincode', id: 'pincode', type: 'text' },
    { label: 'Gender', id: 'gender', type: 'radio', options: ['Male', 'Female', 'Other'] },
    { label: 'Choice of Food', id: 'food', type: 'checkbox', options: ['Pizza', 'Burger', 'Pasta', 'Salad', 'Sushi'] },
    { label: 'State', id: 'state', type: 'text' },
    { label: 'Country', id: 'country', type: 'text' }
];

fields.forEach(field => {
    const div = document.createElement('div');
    const label = document.createElement('label');
    label.innerHTML = field.label;
    label.htmlFor = field.id;

    if (field.type === 'radio' || field.type === 'checkbox') {
        label.style.display = 'block';
        div.appendChild(label);
        field.options.forEach(option => {
            const optionLabel = document.createElement('label');
            const input = document.createElement('input');
            input.type = field.type;
            input.name = field.id;
            input.value = option;
            optionLabel.appendChild(input);
            optionLabel.appendChild(document.createTextNode(option));
            div.appendChild(optionLabel);
        });
    } else {
        const input = document.createElement('input');
        input.type = field.type;
        input.id = field.id;
        input.name = field.id;
        div.appendChild(label);
        div.appendChild(input);
    }

    form.appendChild(div);
});

const submitButton = document.createElement('button');
submitButton.type = 'button';
submitButton.innerText = 'Submit';
submitButton.addEventListener('click', handleSubmit);
form.appendChild(submitButton);

formContainer.appendChild(form);

// Create the table elements
const tableContainer = document.getElementById('table-container');
const table = document.createElement('table');
table.id = 'dataTable';

const thead = document.createElement('thead');
const headerRow = document.createElement('tr');
const headers = ['First Name', 'Last Name', 'Email', 'Address', 'Pincode', 'Gender', 'Food', 'State', 'Country'];

headers.forEach(header => {
    const th = document.createElement('th');
    th.innerText = header;
    headerRow.appendChild(th);
});

thead.appendChild(headerRow);
table.appendChild(thead);

const tbody = document.createElement('tbody');
table.appendChild(tbody);

tableContainer.appendChild(table);


function handleSubmit() {
    const formData = {};
    let valid = true;

    fields.forEach(field => {
        if (field.type === 'radio' || field.type === 'checkbox') {
            const selected = Array.from(form.querySelectorAll(`input[name=${field.id}]:checked`)).map(input => input.value);
            if (field.id === 'food' && selected.length < 2) {
                alert('Please select at least two food options.');
                valid = false;
                return;
            }
            formData[field.id] = selected.join(', ');
        } else {
            formData[field.id] = form.querySelector(`#${field.id}`).value;
        }
    });

    if (!valid) return;

    
    const newRow = document.createElement('tr');
    headers.forEach(header => {
        const td = document.createElement('td');
        td.innerText = formData[header.toLowerCase().replace(' ', '')];
        newRow.appendChild(td);
    });

    tbody.appendChild(newRow);

    
    form.reset();
}