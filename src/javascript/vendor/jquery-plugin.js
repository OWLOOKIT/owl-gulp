window.plugin = function() {
  $('body').append('<p>This line was generated by a non common-js plugin that depends on jQuery!</p>');
};

// $(function() {
//   var overCount = 0;
//   $('.wrap, .social__list-item').mouseover(
//     function() {
//       overCount++;
//       (function(self, currentOverCount) {
//         setTimeout(function() {
//           if (overCount == currentOverCount) {
//             $('.hover').removeClass('hover');
//             $(self).addClass('hover');
//           }
//         }, 150);
//       })(this, overCount);

//       return false;
//     });
//     $('.wrap').mouseleave(
//       function() {
//         overCount = 0;
//         $('.hover').removeClass('hover');
//       }
//     );
// });