let userName = document.querySelector('#user-name')
let userPassword = document.querySelector('#user-password')
let login = document.querySelector('.login-btn')
let signUp = document.querySelector('.sign-up')
let btc = document.querySelector('.btc')
let eth = document.querySelector('.eth')
let balanceP = document.querySelector('.balance-p')
let balanceCurency = document.querySelector('.curency-p')

fetch('https://crypto-wallet-server.mock.beeceptor.com/api/v1/exchange_rates')
    .then(res => res.json())
    .then(data => {
        btc.textContent = data.BTC
        eth.textContent = data.ETH
    }
    )

fetch('https://crypto-wallet-server.mock.beeceptor.com/api/v1/balance')
    .then(res => res.json())
    .then(balance => {
        balanceP.textContent = balance.balance + ' BTC'
    })

signUp.addEventListener('click', () => {
    let arr = JSON.parse(localStorage.getItem('userInfo')) || []
    arr.push({
        userName: userName.value.trim(),
        userPassword: userPassword.value.trim()
    })
    localStorage.setItem('userInfo', JSON.stringify(arr))
})

login.addEventListener('click', () => {
    let arr = JSON.parse(localStorage.getItem('userInfo')) || []

    let found = arr.find(user => 
        user.userName === userName.value.trim() && 
        user.userPassword === userPassword.value.trim()
    )

    if(found){
        window.location.href = "./main.html"
    }
})
