Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
    });
    
    camera = document.getElementById("camera");
    
    Webcam.attach( '#camera' );
    
    function take_snapshot()
    {
      Webcam.snap(function(data_uri){
      document.getElementById("result").innerHTML = '<img id="captured_image" src=" '+data_uri+' "/> ';
    
      })  
    }
    
    console.log('ml5 version',ml5.version);
    
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/1if-w5AUW/model.json',modelLoaded)
    
    function modelLoaded(){
      console.log('Model Loaded! Lets Go!');  
    }
    
    function speak() {
    var synth = window.speechSynthesis;
    speak1 = "The first prediction is" + predicted1;
    speak2 = "And the second prediction is" + predicted2;
    var utterThis = new SpeechSynthesisUtterance(speak1+speak2);
    synth.speak(utterThis);
    }
    function check(){
      img = document.getElementById('captured_image');
      classifier.classify(img, getResult);  
      }
      
      function getResult(error, results) {
      if (error){
      console.log(error)  
      }
      else {
      console.log(results);
      document.getElementById("result_gesture").innerHTML = results[0].label;
      document.getElementById("result_gesture2").innerHTML = results[1].label;
      predicted1 = results[0].label;
      predicted2 = results[1].label;
      speak();

      if(results[0].label == "Ok")
      {
         document.getElementById("update_gesture").innerHTML = "&#128077;";  
      }
      if(results[0].label == "Amazing")
      {
         document.getElementById("update_gesture").innerHTML = "&#128076;";  
      }
      if(results[0].label == "Victory")
      {
         document.getElementById("update_gesture").innerHTML = "&#9996;";  
      }
      if(results[0].label == "Fist")
      {
         document.getElementById("update_gesture").innerHTML = "&#9994;";  
      }

      if(results[1].label == "Ok")
      {
         document.getElementById("update_gesture2").innerHTML = "&#128077;";  
      }
      if(results[1].label == "Amazing")
      {
         document.getElementById("update_gesture2").innerHTML = "&#128076;";  
      }
      if(results[1].label == "Victory")
      {
         document.getElementById("update_gesture2").innerHTML = "&#9996;";  
      }
      if(results[1].label == "Fist")
      {
         document.getElementById("update_gesture2").innerHTML = "&#9994;";  
      }
      
     
      }
      
      }