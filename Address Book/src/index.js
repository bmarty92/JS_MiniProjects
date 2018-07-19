let addressList = [];

const setLocalStorage = () => {
  window.localStorage.setItem('contacts', JSON.stringify(addressList));
};

const formAddrList = (addrName, telNumber, isFavourite) => {
  const existingContact = addressList.some(person => person.personName === addrName && person.personTelephoneNumber === telNumber);
  if (!existingContact) {
    addressList.push({
      personName: addrName,
      personTelephoneNumber: telNumber,
      editing: false,
      favourites: isFavourite,
    });
    setLocalStorage();
  }
};
const searchAddr = (searchValue) => {
const searchList = addressList.filter(element => element.personName === searchValue || !searchValue);
console.log(searchList)
drawList(searchList);
}

function drawList() {
  const contacts = addressList || searchList ;
  const tableBody = document.createElement('tbody');
  const selectedTbody = document.querySelector('#addrTable tbody');
  if (selectedTbody) {
    selectedTbody.innerHTML = '';
  } else {
    document.getElementById('addrTable').appendChild(tableBody);
  }
  addressList.forEach((element, index) => {

    // generate ID to prevent same entries in our list, some regex stuff to remove gaps between elements
    const id = element.personName.replace(/ /g, '') + element.personTelephoneNumber.replace(/ /g, '');
    // function that checks for values with ID in array, and if it don't find any, executes code block below

    // delete button creation
    const deleteButton = document.createElement('button');
    const deleteButtonTextNode = document.createTextNode('Delete entry');
    deleteButton.appendChild(deleteButtonTextNode);
    // edit button creation
    const editButton = document.createElement('button');
    const editButtonTextNode = document.createTextNode('Edit Entry');
    editButton.appendChild(editButtonTextNode);
    // save changes button creation
    const saveButton = document.createElement('button');
    const saveButtonTextNode = document.createTextNode('Save changes');
    saveButton.appendChild(saveButtonTextNode);
    // deletes element on click function
    deleteButton.addEventListener('click', () => {
      addressList.splice(index, 1);
      setLocalStorage();
      drawList();
    });
    // edit element on click function (changes false to true)
    editButton.addEventListener('click', () => {
      addressList[index].editing = true;
      drawList();
    });
    // save changes click function
    saveButton.addEventListener('click', () => {
      const newNameValue = document.getElementById(id).getElementsByClassName('classChangeName')[0].value;
      const newTelNumberValue = document.getElementById(id).getElementsByClassName('classChangeTelNumber')[0].value;
      addressList[index].personName = newNameValue;
      addressList[index].personTelephoneNumber = newTelNumberValue;
      addressList[index].editing = false;
      setLocalStorage();
      drawList();
    });
    // adds to favourites 

    
    // insert JSON elements into table
    const tableRow = document.createElement('tr');
    tableRow.id = id;
    const nameTd = document.createElement('td');
    const telNumberTd = document.createElement('td');
    const favouriteTd = document.createElement('td');
    

    if (element.editing) {
      tableRow.appendChild(saveButton);
      const changeName = document.createElement('input');
      const changeTelNumber = document.createElement('input');
      changeName.classList.add("classChangeName");
      changeTelNumber.classList.add("classChangeTelNumber");
      changeName.value = element.personName;
      changeTelNumber.value = element.personTelephoneNumber;
      nameTd.appendChild(changeName);
      telNumberTd.appendChild(changeTelNumber);
    } else {
      nameTd.innerHTML = element.personName;
      telNumberTd.innerHTML = element.personTelephoneNumber;
      favouriteTd.innerHTML = element.favourites;
      tableRow.appendChild(editButton);
      tableRow.appendChild(deleteButton);
    }
    tableRow.appendChild(nameTd);
    tableRow.appendChild(telNumberTd);
    tableRow.appendChild(favouriteTd);
    document.querySelector('#addrTable tbody').appendChild(tableRow);
  });
}
const getAddrList = () => {
  addressList = JSON.parse(window.localStorage.getItem('contacts')) || [];
  drawList();
};
// perrasyti koda?????

function formAddressList(action) {
  const addrName = document.getElementById('addrName').value;
  const telNumber = document.getElementById('telNumber').value;
  const isFavourite = document.getElementById('isFavourite').value;
  const searchValue = document.getElementById('searchValue').value;
  switch (action) {
    case 'formAddrList':
      formAddrList(addrName, telNumber, isFavourite);
      break;
      case 'searchAddr':
      searchAddr(searchValue);
      break;
  }
  drawList();
}


document.querySelectorAll('button').forEach((button) => {
  button.addEventListener('click', (e) => {
    formAddressList(e.target.id);
  });
});

window.addEventListener('load', getAddrList);
