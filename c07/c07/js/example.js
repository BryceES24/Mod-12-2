// ADDING A NEW LIST ITEM
    $newItemForm.on('submit', function(e) {                    //When a new item is submitted
        e.preventDefault();                                     //Prevent form being submitted
        var text = $('input:text').val();                       //Get value of text input
        $list.append('<li>'+ text + '</li>');                  //Add item to end of the list
        $('input:text').val('');                                //Empty the text input
        updateCount()                                          //Update the count


    });


    //CLICK HANDLING - USES DELEGATION ON <ul> ELEMENT
    $list.on('click', 'li', function() {
     var $this =$(this);                                       //Cache the element in a JQuery object
     var complete = $this.hasClass('complete');                // Is item complete
     
     if (complete === true) {                                  // Check if item is complete
        $this.animate({                                        //If so, animate opacity + padding
            opacity:0.0,
            paddingLeft: '+=180'
}, 500, 'swing', function() {                                  //Use callback when animation completes
    $this.remove();                                            //Then completely remove this item

} );
 } else {                                                       //Otherwise idicate it is complete
    item = $this.text();                                        //Get the text from the list item
    $this.remove();                                             //Remove the list item
    $list                                                       // Add back to end of list as complete
    .append('<li class=\"complete\">' + item + '</li>')
    .hide().fadeIn(300);                                        //Hide it so it can be faded in
    updateCount();                                              //Update the counter
}
    });

