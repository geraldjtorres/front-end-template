

// initialise range slider

jQuery(function($) {
  $('.input-range').asRange({
    tip: false
  });
});

// Show PDF sheets so users can delete it

function togglePdf(showPdf, hideButton) {
  // console.log('which pdf: ', pdf);
  console.log('fjgfsg');

  $('div .' + showPdf).show();
  $('div .' + hideButton).hide();
}


// HIDE or display loan slider

$('.red-edit-btn-mobile').click(function(event){
    event.preventDefault();
  $('.loan-slider-mobile').slideDown();
  $('.red-hide-btn-mobile').show();
  $('.red-edit-btn-mobile').hide();
});

$('.red-hide-btn-mobile').click(function(event){
  event.preventDefault();
  $('.red-hide-btn-mobile').hide();
  $('.red-edit-btn-mobile').show();
  $('.loan-slider-mobile').slideUp();
});

$('.red-edit-btn-desktop').click(function(event){
  event.preventDefault();
  $('.loan-slider-desktop').slideDown();
  $('.red-hide-btn-desktop').show();
  $('.red-edit-btn-desktop').hide();
});

$('.red-hide-btn-desktop').click(function(event){
  event.preventDefault();
  $('.red-hide-btn-desktop').hide();
  $('.red-edit-btn-desktop').show();
  $('.loan-slider-desktop').slideUp();

});

// Sign in buttons show and hide

$('.links-internet-banking').click(function(){

  console.log('jdkanda');
  $('.links-otp').removeClass('sign-in-active');
  $('.links-not-registered').removeClass('sign-in-active');
  $('.links-internet-banking').addClass('sign-in-active');

  $('.internet-banking-sign-in').show();
  $('.otp-sign-in').hide();
  $('.not-registered').hide();

});

$('.links-otp').click(function(){

  console.log('jdkanda');
  $('.links-internet-banking').removeClass('sign-in-active');
  $('.links-not-registered').removeClass('sign-in-active');
  $('.links-otp').addClass('sign-in-active');

  $('.internet-banking-sign-in').hide();
  $('.not-registered').hide();
  $('.otp-sign-in').show();
});

$('.links-not-registered').click(function(){

  console.log('jdkanda');
  $('.links-otp').removeClass('sign-in-active');
  $('.links-internet-banking').removeClass('sign-in-active');
  $('.links-not-registered').addClass('sign-in-active');

  $('.internet-banking-sign-in').hide();
  $('.otp-sign-in').hide();
  $('.not-registered').show();

});


// Show next calc accordian

// $('.accordian-button').click(function(){
//   console.log('this accordion: ', $(this));
//
//   var isCollapsed = this.attributes[3].value;
//
//   console.log('is Collapsed? ', isCollapsed);
//
//   if(isCollapsed) {
//     $('.accordion-icon-required').addClass('hide-accordion-icon');
//     $('.accordion-icon-complete').removeClass('hide-accordion-icon');
//
//     $(this).removeClass('active-accordion')
//       .addClass('accordion-completed-border');
//   } else {
//     $('.accordion-icon-required').removeClass('hide-accordion-icon');
//     $('.accordion-icon-complete').addClass('hide-accordion-icon');
//   };
//
// });


function nextCalcForm(event) {
  event.preventDefault();
  $('.calc-form-collapse-2').collapse('show');
  $('.calc-form-collapse-1').collapse('hide');
}

// tooltip funcationality
$('.custom-tooltip').hover(function () {
    $('.tooltip-box', this).toggle();
});



// Hide and reveal content
$('.option-1').click(function(event) {
  event.preventDefault();
  var hiddenElement = this.dataset.form;
  var optionBox = $(this).parent();
  var optionBoxType = optionBox[0].className.split(' ');

  $('div .' + hiddenElement).slideDown();
  $('div .' + optionBoxType[1]).children(".option-1").addClass('is-active');
  $('div .' + optionBoxType[1]).children(".option-2").removeClass('is-active');

 });

 $('.option-2').click(function(event) {
   event.preventDefault();
   var hiddenElement = this.dataset.form;
   var optionBox = $(this).parent();
   var optionBoxType = optionBox[0].className.split(' ');


   $('div .' + hiddenElement).slideUp();
   $('div .' + optionBoxType[1]).children(".option-1").removeClass('is-active');
   $('div .' + optionBoxType[1]).children(".option-2").addClass('is-active');
});

// Hide and show secure key or password elements

$('.secure-key').click(function() {
  event.preventDefault();
  var optionBox = $(this).parent();
  var optionBoxType = optionBox[0].className.split(' ');

  $('div .' + optionBoxType[1]).children(".secure-key").addClass('is-active');
  $('div .' + optionBoxType[1]).children(".existing-password").removeClass('is-active');

  $('.secure-key-container').show();
  $('.existing-password-container').hide();
});

$('.existing-password').click(function() {
  event.preventDefault();
  var optionBox = $(this).parent();
  var optionBoxType = optionBox[0].className.split(' ');

  $('div .' + optionBoxType[1]).children(".secure-key").removeClass('is-active');
  $('div .' + optionBoxType[1]).children(".existing-password").addClass('is-active');

  $('.secure-key-container').hide();
  $('.existing-password-container').show();
});



// Iterate over each select element
$('select').each(function (i) {

    // Cache the number of options
    var $this = $(this),
        numberOfOptions = $(this).children('option').length;

    var ignoreOption = $(this).children('option');

    // console.log('ignore', ignoreOption[i]);

    // Hides the select element
    $this.addClass('s-hidden');

    // Wrap the select element in a div
    $this.wrap('<div class="select"></div>');

    // Insert a styled div to sit over the top of the hidden select element
    $this.after('<div class="styledSelect"></div>');

    // Cache the styled div
    var $styledSelect = $this.next('div.styledSelect');

    // Show the first select option in the styled div
    $styledSelect.text($this.children('option').eq(0).text());

    // Insert an unordered list after the styled div and also cache the list
    var $list = $('<ul />', {
        'class': 'options'
    }).insertAfter($styledSelect);

    // Insert a list item into the unordered list for each select option
    for (var i = 0; i < numberOfOptions; i++) {

        console.log('ignore', ignoreOption[i].dataset.ignore);

        if(!ignoreOption[i].dataset.ignore) {
          $('<li />', {
              text: $this.children('option').eq(i).text(),
              rel: $this.children('option').eq(i).val()
          }).appendTo($list);
        }




    }

    // Cache the list items
    var $listItems = $list.children('li');

    // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
    $styledSelect.click(function (e) {
        e.stopPropagation();
        $('div.styledSelect.active').each(function () {
            $(this).removeClass('active').next('ul.options').hide();
        });
        $(this).toggleClass('active').next('ul.options').toggle();
    });

    // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
    // Updates the select element to have the value of the equivalent option
    $listItems.click(function (e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        /* alert($this.val()); Uncomment this for demonstration! */
    });

    // Hides the unordered list when clicking outside of it
    $(document).click(function () {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});
