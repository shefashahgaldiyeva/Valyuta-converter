// let eskinaslar =[5,10,20,50,100,200];
// function convert(){
//    let a = document.getElementById('inp').value;
//     let say = 0;
//     let inp = Number(document.getElementById('inp').value);
//     let len = eskinaslar.length;
//     for(i=len-1; i>=0; i--){
//         say += parseInt(inp/eskinaslar[i]*1.7);
//         inp -= parseInt(inp/eskinaslar[i]*1,7)*eskinaslar[i];
//     }
//     document.getElementById('ekran').innerHTML = inp;
// }



// function convert(){
//     let a = document.getElementById('inp').value;
//     document.getElementById('ekran').innerHTML = parsInt(a*1,7) +'Manat'+(a*1,7)+'Qepik';
// }
let eskinaslar =[5,10,20,50,100,200];
document.getElementsByTagName('img')[0] = eskinaslar[0]; 
document.getElementsByTagName('img')[1] = eskinaslar[1]; 
document.getElementsByTagName('img')[2] = eskinaslar[2]; 
document.getElementsByTagName('img')[3] = eskinaslar[3]; 
document.getElementsByTagName('img')[4] = eskinaslar[4]; 
document.getElementsByTagName('img')[5] = eskinaslar[5]; 
function convert() {
    let a = document.getElementById('inp').value;
    document.getElementById('ekran').innerText = parseInt(a* 1.7) + 'Manat' + ((a * 1.7-(parseInt(a * 1.7))).toFixed(2)+'Qəpik')
}