
function findShort(s){
    const strString = s.split('');
    console.log(strString) 

    let short_word = 0;
    for(let i = 0; i < strString[i].length; i++){
    if(strString[i].length < short_word){
        short_word = strString;
        }
    }
}
findShort('Hello this is Jyothi');






