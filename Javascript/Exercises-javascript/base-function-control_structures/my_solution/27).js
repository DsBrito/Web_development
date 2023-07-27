/**
 * 
 * 27)​ Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas 
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em 
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida. 
 

 */


const solve_height =  (height_1, rate_1, height_2, rate_2) =>{
    if(height_1 == height_2){
        if (rate_1 > rate_2) {
            return console.log('- result -> Child 1 will surpass child 2 in 1 year.');
        } else if(rate_1 < rate_2) {
            return console.log('- result -> Child 2 will surpass child 1 in 1 yea');
        }else{
            return console.log('- result ->Children have equal height and growth rate.');
        }
    } else {
        if (height_1 > height_2) {
            if(rate_1 >= rate_2){
                return console.log('- result -> The smaller child will not surpass the older one.');
            }else{
               return console.log(`- result -> The smaller child will surpass the older one in ${solve_time(height_2, rate_2, height_1, rate_1)} anos`);
            }
        } else {
            if(rate_2 >= rate_1){
                return console.log('The lesser child shall not surpass the greater.');
            }else{
               return console.log(`The younger child will surpass the older one in ${solve_time(height_1, rate_1, height_2, rate_2)} years`); 
            }
        }
    }
}

const solve_time = (height_smaller, rate_heightSmaller, height_greater, rate_heightGreater)=>{
    let count_years = 0
    while (height_smaller < height_greater) {
        height_smaller += rate_heightSmaller
        height_greater += rate_heightGreater
        count_years++
    }
    //console.log(qtdAnos)
    return count_years;
}

console.log(solve_height(150, 2, 130, 4));
