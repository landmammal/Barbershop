// function ready() {
//
//   //links
//   $('a').click(function(evnt){
//     console.log('link click');
//     // changing the way the link clicks
//
//     evt.preventDefault();
//     console.log('start get');
//                                               // go and do taht when thats done do this call back
//     $.get('https://apigithub.com/users/land_mammal',function (profile, response, status,  ) {
//       //parses response                                       response happen ,status , xhr: we want to access the response specifcly can ask what we want from taht response
//       console.log(profile);
//       var html = "<dl>";
//
//
//       // GETS THE PROFILE INSIDE THE RESPONSE
//       for (var field in profile) {
//         console.log(field, profile[filed]);
//                           // specifies filed not all fields
//         html += ("<dt>" + field + </dt>)
//                 html += ("<dt>" + profile[field] + </dt>)
//       }
//       html += "</dl>"
//
//
//       console.log('finish get');
//
//       $('body').append(html) // the browser is getting use as the call from method no httparty require sinatra not doing anything
//
//
//     });
//     console.log('done');
//     // xml http request body
//     // console.dir(response)
//
//     for (var i = 0; i < 1000; i++) {
//     console.log(i);
//   }
//
//
//
//
//
//
//     // // when you use prevent default stops somthing from happening w.e the default action is for taht event
//     // var link = $(evnt.target);
//     //
//     // link.hide(); // hides the link in and animation ...this animation is a build in feature of jquery
//     // link.fadeOut(number in miliseconds 3000); // fades
//     // link.slideUp(3000, function(evnt) {    // slid down and slideDown  // elements get the css propertys to slow
//     //               // after this event hapends do this function
//     //   $(link).replaceWith('omg');
//     //
//     // });
//
//   })
//
//
//
//
//
//
//
//   //selecting via element selector the magic of sizzle
//   // can get .legnth .first() .last() when there is nothinf in taht selector it gives you an emty array
//   console.log(ready!);
//   var input = $('input');
//   console.dir(input);
// // hanfler can be on but in java is just without the on
//
//
//  //when event fires do this when change happends do this
//   input.change(function(event){ // on ready ..when event fires do this behavior
//     console.log('change event');// print to the screen to make sure all is good
//     console.dir(event.argumetns.value);
//                 // takes a value from html n do magic with it
//
//
//
//
//
//       // event.target can be call this.    event.target === this
//     // event.target.value = "thanks";            // dom value cahnging      same as $(event.target).val("thanks!");
//     // changes the value of the iput once that event is fire
//     var value = input.value;
//     console.log(value.legnth);
//     if (value.legnth === 0) {   //if there is change int he input selector then do this . it is haopening to all eleemnts int he page.
//       $(input).addClass('red');
//
//     };
//
//
//
//
//
//
//     // same as .... but more permenitnt and its multi browser resposive because of the magic of jquery
//     console.dir($(input).replaceWith("<strong>thnks</strong>"));
//                 // wrapping the code you want to change in the warm embrace of jquery
//
//
//
//
//
//
//
//
//
//   })
//
// }
//
// $(document).on('read page:load', ready);
// //document jquery mechanism to define that the doc has been load it
//
// // as soon as the doc is ready it loads it



  function ready() {
    var divs = $('div');



    // $('a').click(function(e) {
    //   e.preventDefault();
    //   console.log('click');
    //
    // }).hover(function functionName() {
    //   // $('div').text("mouse over");
    //   $('div').text("mouse over");
    // })function () {
    //   $('div').text("mouse leave");
    // }

  //   setTimeout(function() { console.log('timeout'); //can time a function to run on certain amount of seconds
  //
  // }50000); //
  //
  // var some_var = "helo world" // code will print becasue java wil go thru the code first and store this var in the top for next run


  setTimeout(function() { console.log('timeout'); //can time a function to run on certain amount of seconds
            //if setInterval clearInterval will stop it
}50000); //

var some_var = "helo world" // code will print becasue java wil go thru the code first and store this var in the top for next run






  }











$(document).on('read page:load', ready);
