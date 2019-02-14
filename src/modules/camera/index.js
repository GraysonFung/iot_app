import React from 'react';

import { connect } from 'dva';

class myCamera extends React.Component {
  //自己定义的拍照函数


  componentDidMount(){
    // Grab elements, create settings, etc.
    var video = document.getElementById('video');
    const errBack= ()=>{console.log('相机出错')}

  // Get access to the camera!
  if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      // Not adding `{ audio: true }` since we only want video now
      navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
          //video.src = window.URL.createObjectURL(stream);
          video.srcObject = stream;
          video.play();
        });
  }else if(navigator.getUserMedia) { // Standard
    navigator.getUserMedia({ video: true }, function(stream) {
      video.src = stream;
      video.play();
    }, errBack);
} else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
  navigator.webkitGetUserMedia({ video: true }, function(stream){
    video.src = window.webkitURL.createObjectURL(stream);
    video.play();
  }, errBack);
} else if(navigator.mozGetUserMedia) { // Mozilla-prefixed
  navigator.mozGetUserMedia({ video: true }, function(stream){
    video.srcObject = stream;
    video.play();
  }, errBack);
}
  // Elements for taking the snapshot
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');


// Trigger photo take
document.getElementById("snap").addEventListener("click", function() {
  context.drawImage(video, 0, 0, 640, 480);
});


function cameraTakePicture() {
  //  navigator.camera.getPicture(onSuccess, onFail, { 
  //     quality: 50,
  //     destinationType: Camera.DestinationType.DATA_URL
  //  });

   function onSuccess(imageData) {
      var image = document.getElementById('myImage');
      image.src = "data:image/jpeg;base64," + imageData;
   }

   function onFail(message) {
      alert('Failed because: ' + message);
   }
}
document.getElementById("cameraTakePicture").addEventListener("click", cameraTakePicture);

// document.getElementById("captureImage").addEventListener("click", captureImage);


// function captureImage(){
//   var cmr = plus.camera.getCamera();
//   var res = cmr.supportedImageResolutions[0];
//   var fmt = cmr.supportedImageFormats[0];
//   console.log("Resolution: "+res+", Format: "+fmt);
//   cmr.captureImage(
//     function( path ){
//       document.getElementById('imgShow').innerHTML = '<img src="'+plus.io.convertLocalFileSystemURL(path)+'" width="100%" />';
//     },
//     function( error ) {
//       alert( "Capture image failed: " + error.message );
//     },
//     {resolution:res, format:fmt}
//   );
// }
document.addEventListener('plusready',function(){});

  }



  render() {
    return (
      <div>
          <video id="video" width="640" height="480" autoplay></video>
          <button id="snap">Snap Photo</button>
          <canvas id="canvas" width="640" height="480"></canvas>
          <button id = "cameraTakePicture">TAKE PICTURE</button>
          <img id = "myImage" width="42" height="42"></img>

          <div id="imgShow"></div>
          <button id='captureImage' >拍照</button>

      </div>
    );
  }
}










export default (connect(({})=>({}))(myCamera));