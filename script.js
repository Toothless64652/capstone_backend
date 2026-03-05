// Create a new div element
var newDiv = document.createElement('div');

// Give it width, background color and padding
newDiv.style.width = '300px';
newDiv.style.backgroundColor = 'yellow';
newDiv.style.padding = '20px';

// Add id attribute to the div
newDiv.setAttribute('id', 'myDiv');

// Add the div to the body
var body = document.getElementsByTagName('body')[0];
document.body.appendChild(newDiv);

// Create a ul tag and add it inside the div
var ul = document.createElement('ul');
newDiv.appendChild(ul);

// Create 3 li tags with apple, banana and orange
var liApple = document.createElement('li');
liApple.textContent = 'apple';

var liBanana = document.createElement('li');
liBanana.textContent = 'banana';

var liOrange = document.createElement('li');
liOrange.textContent = 'orange';

// Add li tags to the ul
ul.appendChild(liApple);
ul.appendChild(liBanana);
ul.appendChild(liOrange);

// Remove the li containing orange
var orangeItem = document.getElementsByTagName('li')[2];
var removeElement = ul.removeChild(orangeItem);

// Change the background color of the div
newDiv.style.backgroundColor = 'BlueViolet';

// Add a new custom attribute data-status="updated"
newDiv.setAttribute('data-status', 'updated');

