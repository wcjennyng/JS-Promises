let api = 'https://deckofcardsapi.com/api/deck'

//Draw a card
$.getJSON(`${api}/new/draw`).then(res => {
    value = res.cards[0].value
    suit = res.cards[0].suit;
    console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`)
})

//Draw 2 cards from the same deck
$.getJSON(`${api}/new/draw`).then(res => {
    value1 = res.cards[0].value
    suit1 = res.cards[0].suit
    deckId = res.deck_id
    //console.log(`${value1.toLowerCase()} of ${suit1.toLowerCase()}`)
    return $.getJSON(`${api}/${deckId}/draw`)
})
.then( res => {
    value2 = res.cards[0].value
    suit2 = res.cards[0].suit
    console.log(`${value1.toLowerCase()} of ${suit1.toLowerCase()}, ${value2.toLowerCase()} of ${suit2.toLowerCase()}`)
})

//Draws a pile of cards from the deck with a button
$.getJSON(`${api}/new/shuffle`).then( res => {
    deckId = res.deck_id
}) 

$('#card-btn').on('click', function() {
    $.getJSON(`${api}/${deckId}/draw`).then( res => {
        cardImg = res.cards[0].image
        $('#card-results').append(`<img class='card-img' src="${cardImg}"></img>`
        )
        if (res.remaining === 0) $('#card-btn').remove()
    })
})