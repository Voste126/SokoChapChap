const watchModels = {
  Sport: [
    { name: 'Rolex Daytona', price: 12400 },
    { name: 'Omega Seamaster Planet Ocean', price: 6550 },
    { name: 'TAG Heuer Carrera Calibre 16', price: 4200 },
    { name: 'Breitling Superocean Heritage II', price: 4300 },
    { name: 'Audemars Piguet Royal Oak Offshore', price: 27900 },
  ],
  Dress: [
    { name: 'Patek Philippe Calatrava', price: 18000 },
    { name: 'Jaeger-LeCoultre Master Ultra Thin', price: 8500 },
    { name: 'Rolex Datejust', price: 9150 },
    { name: 'Cartier Tank Solo', price: 2730 },
    { name: 'IWC Portugieser Automatic', price: 7950 },
  ],
  Casual: [
    { name: 'Casio G-Shock', price: 100 },
    { name: 'Seiko 5 Sports', price: 250 },
    { name: 'Timex Weekender', price: 40 },
    { name: 'Citizen Eco-Drive', price: 200 },
    { name: 'Tissot Everytime', price: 250 },
  ],
};

const watchTypeSelect = document.getElementById('watchType');
const watchModelSelect = document.getElementById('watchModel');
const watchForm = document.getElementById('watchForm');
const displayArea = document.getElementById('displayArea');

watchTypeSelect.addEventListener('change', function () {
  const selectedType = this.value;

  // Clear previous options
  watchModelSelect.innerHTML = '';

  if (selectedType) {
    const models = watchModels[selectedType];

    models.forEach(function (model) {
      const option = document.createElement('option');
      option.value = model.name;
      option.textContent = `${model.name} - $${model.price}`;
      watchModelSelect.appendChild(option);
    });

    watchModelSelect.disabled = false;
  } else {
    watchModelSelect.disabled = true;
  }
});

watchForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const firstName = document.getElementById('firstName').value;
  const watchType = document.getElementById('watchType').value;
  const watchModel = document.getElementById('watchModel').value;
  const color = document.getElementById('color').value;
  const quantity = document.getElementById('quantity').value;

  const watchData = {
    firstName: firstName,
    watchType: watchType,
    watchModel: watchModel,
    color: color,
    quantity: quantity,
  };

  // Display the submitted data on the form for changes
  document.getElementById('displayFirstName').textContent = `First Name: ${watchData.firstName}`;
  document.getElementById('displayWatchType').textContent = `Watch Type: ${watchData.watchType}`;
  document.getElementById('displayWatchModel').textContent = `Watch Model: ${watchData.watchModel}`;
  document.getElementById('displayColor').textContent = `Color: ${watchData.color}`;
  document.getElementById('displayQuantity').textContent = `Number of Watches: ${watchData.quantity}`;

  // Send POST request to the server
  fetch('http://localhost:3000/watches', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(watchData),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Data saved successfully:', data);
      alert('Your order has been placed and payment is on delivary.Incase of changes you can press Retrive previous data');
    })
    .catch(error => {
      console.log('Error:', error);
    });
});

const retrieveDataButton = document.getElementById('retrieveDataButton');
const displayFirstName = document.getElementById('displayFirstName');
const displayWatchType = document.getElementById('displayWatchType');
const displayWatchModel = document.getElementById('displayWatchModel');
const displayColor = document.getElementById('displayColor');
const displayQuantity = document.getElementById('displayQuantity');

retrieveDataButton.addEventListener('click', function () {
  fetch('http://localhost:3000/watches')
    .then(response => response.json())
    .then(data => {
      if (data.length > 0) {
        const latestData = data[data.length - 1];
        displayFirstName.textContent = `First Name: ${latestData.firstName}`;
        displayWatchType.textContent = `Watch Type: ${latestData.watchType}`;
        displayWatchModel.textContent = `Watch Model: ${latestData.watchModel}`;
        displayColor.textContent = `Color: ${latestData.color}`;
        displayQuantity.textContent = `Number of Watches: ${latestData.quantity}`;
        displayArea.style.display = 'block';
      } else {
        displayArea.style.display = 'none';
      }
    })
    .catch(error => {
      console.log('Error:', error);
    });
});
const shopButton = document.getElementById('shopbutton');

shopButton.addEventListener('click', () => {
  window.location.href = 'SOKOCHAPCHAP/store.html'; 
});





  
  
  