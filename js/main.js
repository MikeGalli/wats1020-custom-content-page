/* Custom JS goes here. */

// For this assignment you'll need to do a few things:
// 1. Create a document ready handler.
// 2. Define a validation object for use on your page.
// 3. Connect the validation object to an event handler tied to the submit button.

// Refer to the `index.html` file for the validation rules that must be enforced.


///Find add method example     jQuery.validator.addMethod( name, method [, message ] )

/*
If jQuery doesn't have a method to accomplish the validation you need...
Make a custom method.
  Step 1)  Make a new validator method called "NoNum"
  Step 2)  Create a message for the new method, "NoNum" (to be shown incase of invalid entry).
  Step 3)  Call for the method in the rules.
              Numbers are not allowed in the Name field, so, we'll call for the NoNum method there.
*/


$(document).on('ready', function(){
  $('#head-but').affix({
  });



});
