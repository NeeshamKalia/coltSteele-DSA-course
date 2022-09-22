//print a rectangle pattern using * with taking an input n

function square(symbol,n) {
    for(let i =1; i<=n; i++){
        symbol = "*"
        for(j =1; j<=n; j++){
            symbol += symbol
        }
        console.log(symbol)
}
}
console.log(square("*",4))
