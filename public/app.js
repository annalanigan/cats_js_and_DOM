// create method to call after DOM is loaded
var app = function(){
  addNewCat(CATS_ARRAY);
};

var CATS_ARRAY = [
  {name: "Boba", food: "Sock fluff", image: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"},
  {name: "Barnaby", food: "Tuna", image: "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg"},
  {name: "Max", food: "Whiskas Temptations", image: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"},
  {name: "Skimble", food: "biscuits", image: "https://78.media.tumblr.com/dac36e229eb82bb67d4df709f87cffee/tumblr_oqe5k399Lv1r2fvxjo1_500.jpg"}
];

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
var addNewCat = function(array){
  var newUl = createNewUl();
  for (var cat of array){
    var newName  = newNameLi(cat.name);
    var newFood = newFoodLi(cat.food);
    var newImage = newImageLi(cat.image);
    var location = document.querySelector('#cats');
    combineElements(location, newUl, newName, newFood, newImage);
  }
}


document.addEventListener("DOMContentLoaded", app)
