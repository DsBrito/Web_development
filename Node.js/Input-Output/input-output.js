
//
const a = process.argv[2];
const b = process.argv.indexOf('-a')!== -1;


console.log("- result -> " + a);    
console.log("- result -> \n\n" + b);


if(b){
    process.stdout.write(" process stdout =>  Hello :  " + a + "\n");

    //for kill proccess
    process.exit();    
}else{
    process.stdout.write(" Report the error: \n ");
    process.stdin.on('data', data => {
        const error = data.toString().replace('\n',''); //for remove enter key
        process.stdout.write(`thank you for report => : ${error}\n`);
        process.exit();
})
}