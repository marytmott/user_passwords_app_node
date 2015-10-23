// verify on submit
$(function() {
  var $form = $('form');

  function checkPW(e) {
    var $pw1 = $('#pw1');
    var $pw2 = $('#pw2');
    var pw1Val = $pw1.val();
    var pw2Val = $pw2.val();
    var emailVal = $('#email').val();
    var $errDiv = $('#errors');
    var errMsgs = [];

    e.preventDefault();
    // check for conditions that match
    if (pw1Val !== pw2Val) {
      errMsgs.push('<p>The passwords do not match.</p>');
    }
    if (pw1Val.length < 5 && pw2Val.length < 5) {
      errMsgs.push('<p>The password must be at least 5 characters long.</p>');
    }
    if (emailVal === pw1Val) {
      errMsgs.push('<p>Password cannot be the same as email.</p>');
    }
    //clear out pw fields and any messages
    if (errMsgs.length) {
      $pw1.val('');
      $pw2.val('');
      $errDiv.html('');
      //append new messages
      errMsgs.forEach(function(errMsg) {
        $errDiv.append(errMsg);
      });
      $pw1.focus();
    } else {
      // console.log($form);
      $form[0].submit();
    }
  }

  $form.on('submit', checkPW);
});

// // using jquery validate
// $(function() {
//   $signupForm = $('#signup');

//   //call the validate plugin
//   $signupForm.validate({
//     //set the rules, keys are name attribute value
//     rules: {
//       //rules for email field
//       "user[email]": {
//         required: true, //require email field to be completed, you can also write this as "required" for the value email if it's not in an object
//         email: true //require it to be in an email form
//       },
//       "user[password]": {
//         required: true,
//         minlength: 5
//       },
//       "pw2": {
//         required: true,
//         equalTo: '#pw1' //equal to id of field
//       }
//     },
//     //add custom messages
//     messages: {
//       //rules for email field
//       "user[email]": {
//         required: 'Email address is required.',
//         email: 'Please enter a valid email address.' //require it to be in an email form
//       },
//       "user[password]": {
//         required: 'Please enter a password.',
//         minlength: 'Password must be at least 5 characters.'
//       },
//       "pw2": {
//         required: 'Please enter your password again.',
//         equalTo: 'Password confirmation must match password.' //equal to id of field
//       }
//     }
//   });
// });



//verify on keypress
// $(function() {
//   $input = $('input');

//   function validateInput(e) {
//     var $eTarg = $(e.target);
//     var eTargVal = $eTarg.val();
//     var $pw1 = $('#pw1');
//     var pw1Val = $pw1.val();
//     var $pw2 = $('#pw2');
//     var pw2Val = $pw2.val();
//     var $email = $('#email');
//     var emailVal = $email.val();
//     var $errDiv = $('#errors');
//     var $emailSpan= $('#email-span');
//     var $pw1Span = $('#pw1-span');
//     var $pw2Span = $('#pw2-span');
//     var errMsgs = [];

//     e.stopPropagation;
//     e.preventDefault();

//     // validate email
//     if($eTarg.is($email)) {
//       // console.log(eTargVal);
//       $
//     }

//   }

//   $input.on('keyup', validateInput);

// });