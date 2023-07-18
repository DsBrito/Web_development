/**
    ​Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de 
    modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o 
    conceito B e de 9,0 a 10,0 o conceito A
 */


const gradeConcept = (vet)=> {

    for (let i = 0; i < vet.length; i++) {
        if(vet[i]>=0 && vet[i]<=4.9){
            console.log("-  The concept of this note " + `[${vet[i]}] is  -> D` );
        }
        if(vet[i]>=5 && vet[i]<=6.9){
            console.log("-  The concept of this note " + `[${vet[i]}] is  -> C` );
        }
        if(vet[i]>=7 && vet[i]<=8.9){
            console.log("-  The concept of this note " + `[${vet[i]}] is  -> B` );
        }
        if(vet[i]>=9 && vet[i]<=10){
            console.log("-  The concept of this note " + `[${vet[i]}] is  -> A` );
        }
    }
}
        
vet= [0.1,2.3,4.5,7.7,4.1,8,10];
    
    
gradeConcept(vet);    