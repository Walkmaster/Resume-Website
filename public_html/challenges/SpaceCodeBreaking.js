/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function htraeCheck(str)
{
    var strA = str.split(' ');
    var strv = "";
    
    var regex = /^[a-zA-Z0-9\s]+$/;
    
    for (var i = 0; i < strA.length; ++i) {
        strv += String.fromCharCode(parseInt(strA[i]));
    }
    
    if(/^[a-zA-Z0-9\s]+$/.test( strv ))
        document.write("Htrae: " + strv.split('').reverse().join('') + "<br>");
}

function omicronCheck(str)
{
    var strA = str.split(' ');
    var strv = "";
    
    for (var i = 0; i < strA.length; ++i) {
        strv += String.fromCharCode(parseInt(strA[i])^16); // since the bit to be flipped is the 5th bit (2^4 / 16) we can just take the char code and 
    }
    
    if(/^[a-zA-Z0-9\s]+$/.test( strv ))
        document.write("Omicron: " + strv + "<br>");
}

function hothCheck(str)
{
    var strA = str.split(' ');
    var strv = "";
    for (var i = 0; i < strA.length; ++i) {
        strv += String.fromCharCode(parseInt(strA[i])-10);
    }
    
    if(/^[a-zA-Z0-9\s]+$/.test( strv ))
        document.write("Hoth: " + strv + "<br>");
}

function ryzaCheck(str)
{
    var strA = str.split(' ');
    var strv = "";
    for (var i = 0; i < strA.length; ++i) {
        strv += String.fromCharCode(parseInt(strA[i])+1);
    }
    
    if(/^[a-zA-Z0-9\s]+$/.test( strv ))
        document.write("Ryza: " + strv + "<br>");
}

function spaceDecoder(str)
{
    document.write("Message: " + str + "<br>");
    htraeCheck(str);
    omicronCheck(str);
    hothCheck(str);
    ryzaCheck(str);
    document.write("<br>");
}

document.write("<h3>Test 1</h3>");
spaceDecoder("71 117 48 115 127 125 117 48 121 126 48 96 117 113 115 117");

document.write("<h3>Test 2</h3>");
spaceDecoder("97 111 42 109 121 119 111 42 115 120 42 122 111 107 109 111");

document.write("<h3>Test 3</h3>");
spaceDecoder("86 100 31 98 110 108 100 31 104 109 31 111 100 96 98 100");

document.write("<h3>Test 4</h3>");
spaceDecoder("101 99 97 101 112 32 110 105 32 101 109 111 99 32 101 87");

document.write("<h3>Test 5</h3>");
spaceDecoder("84 113 121 124 105 48 64 98 127 119 98 113 125 125 117 98 48 121 99 48 99 96 105 121 126 119 48 127 126 48 101 99");

document.write("<h3>Test 6</h3>");
spaceDecoder("78 107 115 118 131 42 90 124 121 113 124 107 119 119 111 124 42 115 125 42 125 122 131 115 120 113 42 121 120 42 127 125");

document.write("<h3>Test 7</h3>");
spaceDecoder("67 96 104 107 120 31 79 113 110 102 113 96 108 108 100 113 31 104 114 31 114 111 120 104 109 102 31 110 109 31 116 114");

document.write("<h3>Test 8</h3>");
spaceDecoder("115 117 32 110 111 32 103 110 105 121 112 115 32 115 105 32 114 101 109 109 97 114 103 111 114 80 32 121 108 105 97 68");

document.write("<h3>Test 9</h3>");
spaceDecoder("86 121 98 117 48 100 120 117 48 93 121 99 99 124 117 99");

document.write("<h3>Test 10</h3>");
spaceDecoder("80 115 124 111 42 126 114 111 42 87 115 125 125 118 111 125");

document.write("<h3>Test 11</h3>");
spaceDecoder("69 104 113 100 31 115 103 100 31 76 104 114 114 107 100 114");

document.write("<h3>Test 12</h3>");
spaceDecoder("115 101 108 115 115 105 77 32 101 104 116 32 101 114 105 70");