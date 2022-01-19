// let  divisiveisPor5 = 0;
// let  divisiveisPor3 = 0;

function calcular(parametro){
let  divisiveisPor5 = 0;
let  divisiveisPor3 = 0;
for (var i=0; i<=parametro; i++){
        if(i%3===0) {
            divisiveisPor3 = divisiveisPor3 + i
        }
    };
for (var i=0; i<=parametro; i++){
        if(i%5===0){
            divisiveisPor5 = divisiveisPor5 + i
        }
    }
let d = divisiveisPor3+divisiveisPor5;
console.log(d)
};
 calcular(10)