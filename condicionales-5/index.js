var n;
var i;
var sp;
var cp;
var ci;

i=1;
cp = 0;
sp = 0;
ci = 0;

for (var i=1; i <=5; ){
    n=21;
    if(n % 2 == 0){
        sp = sp + n;
        cp = cp + 1;

    }else {
        ci = ci + 1; 
    }
    i = 1 +1;

}
console.log(ci/(ci +cp))
if (cp != 0){
    console.log(sp/cp)
}