/*
In terms of user experience, your shopping list app must allow users to:

    enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
    check and uncheck items on the list by clicking the "Check" button
    permanently remove items from the list

Additionally:

    You must use a CDN-hosted version of jQuery
    Put your application code in a file called index.js and link to it in index.html
    Be sure to put both script elements at the bottom of the <body> element.
    Do not alter index.html or main.css other than adding the links to the external JavaScript inside index.html. Write JavaScript code that works with the existing HTML and CSS to implement the required features.

*/

function addItem(itemName){
    //add item from input filed to list
    
    //add a list item for the itemName
      $(".shopping-list").append(
        `<li>
            <span class="shopping-item">${itemName}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>`);
    }

//delete item from list
$("body").on('click', ".shopping-item-delete",function(){
    //find parent "li" then delete it
    $(this).parents("li").remove();
});
    
//Add item to list
$("#js-shopping-list-form").submit(function(event){
    //when Add item is clicked get the field value and pass to addItem
    event.preventDefault();
    //console.log(event)
    let itemName = $(this).find("#shopping-list-entry")[0].value;    
    //clear the input
    $(this).find("#shopping-list-entry").val('');

    //console.log(itemName);
    addItem(itemName);
});
    
$("body").on('click', ".shopping-item-toggle",function(){
    //console.log($(this));
    //find parent "li" then find child shopping-item. Then toggle the class
    $(this).parents("li").find(".shopping-item").toggleClass("shopping-item__checked");
    //console.log(itemText);
});