//import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/js/bootstrap.bundle.js'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './style.css';
 let link;
 let pixel;
 let number;


function submit(){
     link = document.getElementById("linkInput").value;
    document.getElementById("showPic").src = link; 
    };

//let picPixel = parseFloat( document.getElementById(pixelInput).value);
//let framePixel = parseFloat( document.getElementById(frameInput).value);