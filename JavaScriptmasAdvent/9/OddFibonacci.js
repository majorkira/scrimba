function sumOddFibonacciNumbers(num) {
let total=[0,1];
let i=2;
while (total[i-2]+total[i-1]  < num) {
total.push(total[i-2]+total[i-1]);
i+=1;

};
return total.filter(a=>a%2).reduce((a,b) => {
return (a+b)
});
}