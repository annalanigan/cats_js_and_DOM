// create method to call after DOM is loaded
var app = function(){
  addNewCat("Skimble", "biscuits", "https://78.media.tumblr.com/dac36e229eb82bb67d4df709f87cffee/tumblr_oqe5k399Lv1r2fvxjo1_500.jpg");
}

// create new ul of class "cats"
var createNewUl= function (){
  let newUl = document.createElement('ul');
  newUl.className = "cat";
  return newUl;
}

// create new li for name
var newNameLi = function(name){
  let nameLi = document.createElement('li');
  nameLi.innerHTML = "Name: " + name;
  return nameLi;
}

// create new li for favourite food
var newFoodLi = function(food){
  let newFoodLi = document.createElement('li');
  newFoodLi.innerHTML = "Favourite food: " + food;
  return newFoodLi;
}

// create new li for image (watch the order)
var newImageLi = function(imageSrc){
  // let newImageRow = document.createElement('li');
  let newImage = document.createElement('img');
  newImage.width = "500";
  newImage.src = imageSrc;
  return newImage;
}

// append all elements in order
var combineElements = function(section, newUl, nameLi, newFoodLi, newImageLi){
    let newImageRow = document.createElement('li');
    newImageRow.appendChild(newImageLi);
    newUl.appendChild(nameLi);
    newUl.appendChild(newFoodLi);
    newUl.appendChild(newImageRow);
    section.appendChild(newUl);
  }

// add new cat
var addNewCat = function(name, food, image){
  var newUl = createNewUl();
  var newName  = newNameLi(name);
  var newFood = newFoodLi(food);
  var newImage = newImageLi(image);
  var location = document.querySelector('#cats');
  combineElements(location, newUl, newName, newFood, newImage);
}


document.addEventListener("DOMContentLoaded", app)
