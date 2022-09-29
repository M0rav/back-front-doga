//import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

function init()
{
    document.getElementById("darkMode").addEventListener("click", darkmode);
    document.getElementById("pixelInput").addEventListener("keyup", kep);
    document.getElementById("frameInput").addEventListener("keyup", kep);
    document.getElementById("color").addEventListener("input", kep);
    document.getElementById("linkInput").addEventListener("input",submit);
}

 let link;

    function submit(){
         link = document.getElementById("linkInput");
        document.getElementById("showPic").src = link; 
    };
    function kep() {
        document.getElementById("showPic").style.width = document.getElementById("pixelInput").value + 'px';
        document.getElementById("showPic").style.border = document.getElementById("frameInput").value + 'px solid';
        document.getElementById("showPic").style.borderColor = document.getElementById("color").value;
     }
    
    function darkmode(){
        var element = document.body;
        element.classList.toggle("darkMode");
    }

   

    document.addEventListener('DOMContentLoaded', init);
    
    
    

//let picPixel = parseFloat( document.getElementById(pixelInput).value);
//let framePixel = parseFloat( document.getElementById(frameInput).value);