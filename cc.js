let select = document.querySelectorAll('.currency')
let btn = document.getElementById('btn');
let input = document.getElementById('input');

fetch('https://api.frankfurter.app/currencies')
.then(res => res.json())
.then(res => displayDRopDown(res))

function displayDRopDown(res) {
    // console.log(Object.entries(res)[0][0])
    let curr = Object.entries(res)
    for(let i=0; i<curr.length; i++){
        let opt = `<option value="${curr[i][0]}">${curr[i][0]}</option>`
        select[0].innerHTML += opt;
        select[1].innerHTML += opt;
    }
}

btn.addEventListener('click', () => {
    let curr1 = select[0].value
    let curr2 = select[1].value
    let inputValue = input.value 
    if(curr1 === curr2){
        alert("choose different currencies")
    } else {
        convert(curr1,curr2,inputValue)
    }
})

function convert(curr1,curr2,inputValue) {
    const host = 'api.frankfurter.app';
fetch(`https://${host}/latest?amount=${inputValue}&from=${curr1}&to=${curr2}`)
  .then(resp => resp.json())
  .then((data) => {
    // alert(`10 GBP = ${data.rates.USD} USD`);
    let RES = Object.values(data.rates)[0]
    document.getElementById('result').value = RES ;
});
} 
