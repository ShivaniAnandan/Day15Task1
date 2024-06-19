const formContainer = document.getElementById('form-container');
var form = document.createElement("form");
form.setAttribute("id","form");
document.body.append(form);

var br = document.createElement("br");

var fnLabel = document.createElement("label");
fnLabel.setAttribute("for","firstname");
fnLabel.innerText="First Name ";
var fnInput = document.createElement("input");
fnInput.setAttribute("type","text");
fnInput.setAttribute("id","firstname");
form.append(fnLabel,fnInput,br);

var lnLabel = document.createElement("label");
lnLabel.setAttribute("for","lastname");
lnLabel.innerText="Last Name ";
var lnInput = document.createElement("input");
lnInput.setAttribute("type","text");
lnInput.setAttribute("id","lastname");
var brLastName = document.createElement("br");
form.append(lnLabel,lnInput,brLastName);

var emailLabel = document.createElement("label");
emailLabel.setAttribute("for","email");
emailLabel.innerText="Email ";
var emailInput = document.createElement("input");
emailInput.setAttribute("type","email");
emailInput.setAttribute("id","email");
var brEmail = document.createElement("br");
form.append(emailLabel,emailInput,brEmail);

var addressLabel = document.createElement("label");
addressLabel.setAttribute("for","address");
addressLabel.innerText="Address ";
var addressInput = document.createElement("input");
addressInput.setAttribute("type","text");
addressInput.setAttribute("id","address");
var brAddress = document.createElement("br");
form.append(addressLabel,addressInput,brAddress);

var pincodeLabel = document.createElement("label");
pincodeLabel.setAttribute("for","pincode");
pincodeLabel.innerText="Pincode ";
var pincodeInput = document.createElement("input");
pincodeInput.setAttribute("type","number");
pincodeInput.setAttribute("id","pincode");
var brPincode = document.createElement("br");
form.append(pincodeLabel,pincodeInput,brPincode);

var genderDiv = document.createElement("div");
genderDiv.setAttribute("id","genderDiv");
form.append(genderDiv);

var genderLabel = document.createElement("label");
genderLabel.setAttribute("for","genderLabel");
genderLabel.setAttribute("name","gender");
genderLabel.innerText="Gender ";
genderLabel.style.display = 'block';
genderDiv.append(genderLabel);

var genderLabel1 = document.createElement("label");
genderLabel1.setAttribute("for","female");
genderLabel1.setAttribute("name","gender");
genderLabel1.innerText="Female ";
var genderInput1 = document.createElement("input");
genderInput1.setAttribute("type","radio");
genderInput1.setAttribute("name","gender");
genderInput1.setAttribute("value","Female");
// var brGender1 = document.createElement("br");
genderDiv.append(genderInput1,genderLabel1);

var genderLabel2 = document.createElement("label");
genderLabel2.setAttribute("for","gender");
genderLabel2.setAttribute("name","gender");
genderLabel2.innerText="Male ";
var genderInput2 = document.createElement("input");
genderInput2.setAttribute("type","radio");
genderInput2.setAttribute("name","gender");
genderInput2.setAttribute("value","Male");
var brGender = document.createElement("br");
genderDiv.append(genderInput2,genderLabel2);

var genderLabel3 = document.createElement("label");
genderLabel3.setAttribute("for","gender");
genderLabel3.setAttribute("name","gender");
genderLabel3.innerText="Other ";
var genderInput3 = document.createElement("input");
genderInput3.setAttribute("type","radio");
genderInput3.setAttribute("name","gender");
genderInput3.setAttribute("value","Other");
var brGender = document.createElement("br");
genderDiv.append(genderInput3,genderLabel3);

var checkboxDiv = document.createElement("div");
checkboxDiv.setAttribute("id","checkboxDiv");
form.append(checkboxDiv);

var checkboxLabel = document.createElement("label");
checkboxLabel.setAttribute("for","checkboxLabel");
checkboxLabel.innerText="choice of food ";
var brCheckbox = document.createElement("br");
checkboxDiv.append(checkboxLabel,brCheckbox);

var checkboxLabel1 = document.createElement("label");
checkboxLabel1.setAttribute("for","food");
checkboxLabel1.innerText="Pizza ";
var checkboxInput1 = document.createElement("input");
checkboxInput1.setAttribute("type","checkbox");
checkboxInput1.setAttribute("name","food");
checkboxInput1.setAttribute("value","Pizza");
var brCheckbox1 = document.createElement("br");
checkboxDiv.append(checkboxInput1,checkboxLabel1,brCheckbox1);

var checkboxLabel2 = document.createElement("label");
checkboxLabel2.setAttribute("for","food");
// checkboxLabel1.setAttribute("name","gender");
checkboxLabel2.innerText="Burger ";
var checkboxInput2 = document.createElement("input");
checkboxInput2.setAttribute("type","checkbox");
checkboxInput2.setAttribute("name","food");
checkboxInput2.setAttribute("value","Burger");
var brCheckbox2 = document.createElement("br");
checkboxDiv.append(checkboxInput2,checkboxLabel2,brCheckbox2);

var checkboxLabel3 = document.createElement("label");
checkboxLabel3.setAttribute("for","food");
// checkboxLabel1.setAttribute("name","gender");
checkboxLabel3.innerText="Pasta ";
var checkboxInput3 = document.createElement("input");
checkboxInput3.setAttribute("type","checkbox");
checkboxInput3.setAttribute("name","food");
checkboxInput3.setAttribute("value","Pasta");
var brCheckbox3 = document.createElement("br");
checkboxDiv.append(checkboxInput3,checkboxLabel3,brCheckbox3);

var checkboxLabel4 = document.createElement("label");
checkboxLabel4.setAttribute("for","food");
checkboxLabel4.innerText="Salad ";
var checkboxInput4 = document.createElement("input");
checkboxInput4.setAttribute("type","checkbox");
checkboxInput4.setAttribute("name","food");
checkboxInput4.setAttribute("value","Salad");
var brCheckbox4 = document.createElement("br");
checkboxDiv.append(checkboxInput4,checkboxLabel4,brCheckbox4);

var checkboxLabel5 = document.createElement("label");
checkboxLabel5.setAttribute("for","food");
checkboxLabel5.innerText="Sushi ";
var checkboxInput5 = document.createElement("input");
checkboxInput5.setAttribute("type","checkbox");
checkboxInput5.setAttribute("name","food");
checkboxInput5.setAttribute("value","Sushi");
var brCheckbox5 = document.createElement("br");
checkboxDiv.append(checkboxInput5,checkboxLabel5,brCheckbox5);

var stateLabel = document.createElement("label");
stateLabel.setAttribute("for","state");
stateLabel.innerText="State ";
var stateInput = document.createElement("input");
stateInput.setAttribute("type","text");
stateInput.setAttribute("id","state");
var brState = document.createElement("br");
form.append(stateLabel,stateInput,brState);

var countryLabel = document.createElement("label");
countryLabel.setAttribute("for","country");
countryLabel.innerText="Country ";
var countryInput = document.createElement("input");
countryInput.setAttribute("type","text");
countryInput.setAttribute("id","country");
var brCountry = document.createElement("br");
form.append(countryLabel,countryInput,brCountry);

var button = document.createElement("button");
button.setAttribute("type","submit");
button.innerText="Submit";
form.append(button);
button.addEventListener("click",handleSubmit);

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

// Handle form submission
function handleSubmit(e) {
    e.preventDefault();
    const formData = {
        firstname: document.getElementById('firstname').value !== '' ? document.getElementById('firstname').value : "",
        lastname: document.getElementById('lastname').value !== '' ? document.getElementById('lastname').value : "",
        email: document.getElementById('email').value !== '' ? document.getElementById('email').value : "",
        address: document.getElementById('address').value !== '' ? document.getElementById('address').value : "",
        pincode: document.getElementById('pincode').value !== '' ? document.getElementById('pincode').value : "",
        gender: document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : '',
        food: Array.from(document.querySelectorAll('input[name="food"]:checked')).map(input => input.value).join(', '),
        state: document.getElementById('state').value !== '' ? document.getElementById('state').value : "",
        country: document.getElementById('country').value !== '' ? document.getElementById('country').value :""
    };

    if (formData.food.split(', ').length < 2) {
        alert('Please select at least two food options.');
        return;
    }

    const newRow = document.createElement('tr');
    headers.forEach(header => {
        const td = document.createElement('td');
        td.innerText = formData[header.toLowerCase().replace(' ', '')];
        newRow.appendChild(td);
    });

    tbody.appendChild(newRow);

    form.reset();
}