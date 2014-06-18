'use strict';
var spinner = new Spinner({color: '#EEA12F'});
var firebaseRef = 'https://resplendent-fire-2473.firebaseio.com/TVScreenCast/';

//takes care of storing the image you've selected
function handleFileSelect(evt) {
  var f = evt.target.files[0];
  var reader = new FileReader();
  reader.onload = (function(theFile) {
    return function(e) {
      filePayload = e.target.result;
      // Generate a location that can't be guessed using the file's contents and a random number
      var hash = CryptoJS.SHA256(Math.random() + CryptoJS.SHA256(filePayload));
      var f = new Firebase(firebaseRef + 'img/' + hash + '/filePayload');
      spinner.spin(document.getElementById('spin'));
      // Set the file payload to Firebase and register an onComplete handler to stop the spinner and show the preview
      f.set(filePayload, function() {
        spinner.stop();
        document.getElementById("pano").src = e.target.result;
        $('#file-upload').hide();
        // Update the location bar so the URL can be shared with others
        // window.location.hash = hash;
      });
    };
  })(f);
  reader.readAsDataURL(f);
}
