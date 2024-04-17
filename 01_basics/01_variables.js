const accountId = 144553
let accountEmail = "harsh@gmail.com"
var accountPass = 1234
accountCity = "RJK"
let accountState;

// accountId = 25
accountEmail = "lol@gmail.com"
accountCity = "bengaluru"

// prefer not to use var
// because of issue in block and functional scope

console.log(accountId, accountEmail, accountPass, accountCity, accountState)
console.table([accountId, accountEmail, accountPass, accountCity, accountState])