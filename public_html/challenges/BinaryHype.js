function greatestPower(n) {
    var lPow = 0;
    for (var i = 0; i <= n; i++)
    {
        if (Math.pow(2, i) <= n)
        {
            if (Math.pow(2, i) > lPow)
                lPow = i;
        }
    }
    return lPow;
}

function NumberToBinary(n) {
    var t = n;
    for (var i = greatestPower(n); i >= 0; i--)
    {
        t -= Math.pow(2, i);
        if (t < 0)
        {
            document.write(0);
            t += Math.pow(2, i);
        }
        else
        {
            document.write(1);
        }
    }
}

var sample = [];

function NumberToHyperBinary(n, p, r, str) {

    var maths = Math.pow(2, p);

    if(n <= 0)
    {        
        if(p === 0)
            str += "0";
        else if (p >= 1) // if recursive function catches match before going through entire iterations of powers
            str += "0".repeat(p+1);
        
        for (var i = 0; i < sample.length; i++)
        {
            if(sample[i] === str)
                return;
        }
        
        sample.push(str);
        
        return;
    }
    
    if(p < 0)
            return;
        
    if (n >= Math.pow(2, p))
        NumberToHyperBinary(n-maths, p-1, r, str+"1");
    else
    {
        if (n === r) // if n is the same as r then no bits have been added and tailing 0's need to apply
            NumberToHyperBinary(n, p-1, r, str+" ");
        else
            NumberToHyperBinary(n, p-1, r, str+"0");
    }

    if (n >= (Math.pow(2, p)*2))
        NumberToHyperBinary(n-(maths*2), p-1, r, str+"2");
    else
    {
        if (n === r) // if n is the same as r then no bits have been added and tailing 0's need to apply
            NumberToHyperBinary(n, p-1, r, str+" ");
        else
            NumberToHyperBinary(n, p-1, r, str+"0");
    }
}

//BinaryToNumber("1101");
//document.write('<br>Real Test<br>');
//NumberToBinary(18);
document.write('<h3>Test on value of 18</h3>');
NumberToHyperBinary(18, greatestPower(18), 18, "");
for (var i = 0; i < sample.length; i++)
{
    document.write(sample[i]);
    document.write('<br>');
}
sample = [];

document.write('<br><h3>Test on value of 73</h3>');
NumberToHyperBinary(73, greatestPower(73), 73, "");
for (var i = 0; i < sample.length; i++)
{
    document.write(sample[i]);
    document.write('<br>');
}
sample = [];

document.write('<br><h3>Test on value of 128</h3>');
NumberToHyperBinary(128, greatestPower(128), 128, "");
for (var i = 0; i < sample.length; i++)
{
    document.write(sample[i]);
    document.write('<br>');
}
sample = [];

document.write('<br><h3>Test on value of 239</h3>');
NumberToHyperBinary(239, greatestPower(239), 239, "");
for (var i = 0; i < sample.length; i++)
{
    document.write(sample[i]);
    document.write('<br>');
}
sample = [];