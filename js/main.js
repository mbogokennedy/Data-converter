document.getElementById('output').style.visibility = 'hidden';
document.getElementById('output2').style.visibility = 'hidden';
let gb = document.getElementById('gbInput');

gb.addEventListener('input', product);

function product(e) {
    document.getElementById('output').style.visibility = 'visible';
    document.getElementById('output2').style.visibility = 'visible';
    let gbs = e.target.value;
    document.getElementById('kbOutput').innerHTML = gbs * 1048576 + " KB";
    document.getElementById('mbOutput').innerHTML = gbs * 1024 + " MB";
    document.getElementById('tbOutput').innerHTML = gbs / 1024 + " TB";
    document.getElementById('pbOutput').innerHTML = gbs / 1048576 + " PB";
    document.getElementById('kBOutput').innerHTML = gbs * 8388608 + " Kb";
    document.getElementById('mBOutput').innerHTML = gbs * 8192 + " Mb";
    document.getElementById('tBOutput').innerHTML = gbs / 100 + " Tb";
    document.getElementById('gBOutput').innerHTML = gbs * 8 + " Gb";
    document.getElementById('floppy').innerHTML = gbs * 706.56;
    document.getElementById('dvd').innerHTML = gbs * 0.21279297;
}