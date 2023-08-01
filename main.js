var form = document.getElementById('addForm');
var item = document.getElementById('items');

//form submit an event
form.addEventListener('submit',addItem);
item.addEventListener('click',removeItem);
var filter = document.getElementById('filter');


function addItem(e){
e.preventDefault();

//get input value
var newItem = document.getElementById('item').value;

//create new element
var li = document.createElement('new');
// given class name
li.className='list-group-item';

//create text node
var text = document.createTextNode(newItem);

li.appendChild(text);
item.appendChild(li);

//create button
var deleteBtn = document.createElement('button');

deleteBtn.className='btn btn-danger btn-sm float-right delete';

var addSign = document.createTextNode('X');

deleteBtn.appendChild(addSign);

li.appendChild(deleteBtn);

}

// to remove from list 

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you Sure?'))
        {
        var li = e.target.parentElement;
        item.removeChild(li);
        }
    }
    }


    // Filter Items
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
