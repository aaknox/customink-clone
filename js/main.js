//***********Design Lab Palette*****************
//variable declarations
var selectedColorName = $('#header2');
var tshirtImg = $('.blank-tee');

var saveBtn = $(".submit-btn");
console.log(saveBtn);
saveBtn.click(function(){
  console.log('clicked save button');
  var notify = $(".notification");
  notify.removeClass('notify-inactive');
  setTimeout(function(){ notify.addClass('notify-inactive');}, 3000);
 });

//user selects a color button
$(document).ready(function(){
  /****/
  $(".color-btn").click(function(){
    //variables
    var color = $( this ).css( "background-color" );
    //add selected feature if and only if color has not been selected yet
    //if color has been selected previously --> removed selected feature off of previous color & select new color
    if ($(this).hasClass("userCurrentChoice")){
      $(this).removeClass("userCurrentChoice");
      //$('.color-btn').not(this).removeClass('userCurrentChoice');
      $('.fas').remove();
      $(this).css( "border", 'none' );
      tshirtImg.css("background-color", 'transparent');
      $( ".selected" ).css( "background", "#ffffff" );
    } else {
      //$('.color-btn').not(this).removeClass('userCurrentChoice');
      $(this).addClass("userCurrentChoice");
      $(this).append('<i class="fas fa-check-circle"></i>');
      $(this).css( "border", '5px solid #29fd00' );
      tshirtImg.css("background-color", color);
      $( ".selected" ).css( "background", color );
    }
    //***********************
    /************/
    switch (color) {
      case 'rgb(255, 105, 201)':
        selectedColorName.html("Pink");
        break;
      case 'rgb(73, 70, 70)':
        selectedColorName.html("Charcoal");
        break;
      case 'rgb(0, 0, 0)':
        selectedColorName.html("Black");
        break;
      case 'rgb(60, 60, 241)':
        selectedColorName.html("Royal Blue");
        break;
      case 'rgb(251, 153, 6)':
        selectedColorName.html("Orange");
        break;
      case 'rgb(10, 10, 121)':
        selectedColorName.html("Navy Blue");
        break;
      case 'rgb(75, 83, 32)':
        selectedColorName.html("Military Green");
        break;
      case 'rgb(144, 186, 224)':
        selectedColorName.html("Light Blue");
        break;
      case 'rgb(243, 0, 0)':
        selectedColorName.html("Red");
        break;
      case 'rgb(73, 16, 81)':
        selectedColorName.html("Purple");
        break;
      case 'rgb(231, 252, 0)':
        selectedColorName.html("Yellow");
        break;
      case 'rgb(255, 255, 255)':
        selectedColorName.html("White");
        if ($(this).hasClass("userCurrentChoice")) {
          $(this).css( "border", '5px solid #000000' );
          $('.fas').css('color', '#000000')
        } else{
          $(this).css( "border", 'none' );
        }
        break;
    }
})

  // $(".submit-btn").click = function(){
  //   console.log('save button clicked');
  //   $(this).textContent = $('.saved').textContent;
  //   if (notify.hasClass('notify-inactive')) {
  //     notify.removeClass('notify-inactive');
  //   } else{
  //     setTimeout(function(){
  //       notify.addClass('notify-inactive');
  //     }, 3000);
  //   }
  // };

});

/**********END LOOP *********/

//**********************************
