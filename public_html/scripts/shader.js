/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//var canvas = document.getElementById('canvas');
//var context = canvas.getContext('2d');

var img = new Image(),
        $img = $(img);

//window.addEventListener('resize', resize, false);

$img.onload = function () {
    alert(img.scr);
    //context.drawImage(img, 0, 0, canvas.width, canvas.height);
};

/*function resize() {
    //alert("");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context.drawImage(img, 0, 0, canvas.width, canvas.height);
};*/

img.scr = "http://www.bradwalkercan.com/assets/london-zoom.jpg";
//alert(img.scr);