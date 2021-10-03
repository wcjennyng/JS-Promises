let favNum = 2
let api = "http://numbersapi.com/"

//Fact about my Favorite Number
$.getJSON(`${api}${favNum}?json`).then(res => {
    fact = res.text;
    $('#results1').append(fact)
})

//Facts about multiple Numbers
let favNums = [4, 10, 859]
favNums.forEach(function (num) {
    $.getJSON(`${api}${num}?json`).then(res => {
        fact = res.text;
        $('#results2').append($('<p>'), fact)
    })
})

//4 Facts about Favorite Number

const promises = []

for (let i = 1; i < 5; i++) {
    promises.push($.getJSON(`${api}${favNum}?json`))

}

Promise.all(promises)
    .then(arr => {
        for(res of arr) {
            fact = res.text
            console.log(fact)
            $('#results3').append($('<p>'), fact)
        }
    })
    .catch(err => console.log(err))




