/* Custom JS goes here. */

// For this assignment you'll need to do a few things:
// 1. Create a document ready handler.
// 2. Define a validation object for use on your page.
// 3. Connect the validation object to an event handler tied to the submit button.

// Refer to the `index.html` file for the validation rules that must be enforced.


///Find add method example     jQuery.validator.addMethod( name, method [, message ] )






$(document).on('ready', function(){

  $.validator.methods.NoNum = function( value, element ) {  //Custom Method
    return this.optional( element ) || /[^0-9]/.test( value );
  }



  $('#order-form').validate({
      submitHandler: function(X) {
          // If form is valid, submit it!
          X.submit();
      },
      onfocusout: function(element) {
        $(element).valid();
      },
      rules: {
          "your-name": {
              required: true,
              maxlength: 2,
              NoNum: true

          },
          "div.form-group .required": {
            required: true
          },
          "your-state": {
              required: true,
              maxlength: 3
          }



        }
    });
});



jQuery.extend(jQuery.validator.messages, {
    NoNum: "XXXXXXXXXXX."

});
