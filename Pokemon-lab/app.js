const cards = [{
    name: "Bulbasaur",
    damage: 60
}, {
    name: "Caterpie",
    damage: 40
}, {
    name: "Charmander",
    damage: 60
}, {
    name: "Clefairy",
    damage: 50
}, {
    name: "Jigglypuff",
    damage: 60
}, {
    name: "Mankey",
    damage: 30
}, {
    name: "Meowth",
    damage: 60
}, {
    name: "Nidoran - female",
    damage: 60
}, {
    name: "Nidoran - male",
    damage: 50
}, {
    name: "Oddish",
    damage: 40
}, {
    name: "Pidgey",
    damage: 50
}, {
    name: "Pikachu",
    damage: 50
}, {
    name: "Poliwag",
    damage: 50
}, {
    name: "Psyduck",
    damage: 60
}, {
    name: "Rattata",
    damage: 30
}, {
    name: "Squirtle",
    damage: 60
}, {
    name: "Vulpix",
    damage: 50
}, {
    name: "Weedle",
    damage: 40
}]

const player = {
    cardsInHandNumber: 0,
    score: 0,
    cardsInDeck: [],
    cardsInHand: [],
    cardDealerTracker: true
}
const computer = {
    cardsInHandNumber: 0,
    score: 0,
    cardsInDeck: [],
    cardsInHand: [],
    cardDealerTracker: false
}
const dealDecks = () => {

    for (let i = 0; i < cards.length; i++) {
        const randomNumber = Math.floor(Math.random() * ((cards.length - 1) + 1))

        if (player.cardDealerTracker) {
            if (player.cardsInDeck.includes(cards[randomNumber])) {
                i--
            } else {
                player.cardsInDeck.push(cards[randomNumber])
                player.cardDealerTracker = false;
                computer.cardDealerTracker = true;
            }

        } else {
            if (computer.cardsInDeck.includes(cards[randomNumber])) {
                i--
            } else {
                computer.cardsInDeck.push(cards[randomNumber])
                player.cardDealerTracker = true;
                computer.cardDealerTracker = false;
            }
        }
    }
}

dealDecks();

const newHands = () => {
    for (let i = 0; i < 3; i++) {
        const randomNumberP = Math.floor(Math.random() * ((player.cardsInDeck.length - 1) + 1));
        const randomNumberC = Math.floor(Math.random() * ((computer.cardsInDeck.length - 1) + 1));

        player.cardsInHand.push(player.cardsInDeck[randomNumberP]);

        player.cardsInDeck = player.cardsInDeck.filter(ele => ele.name !== player.cardsInDeck[randomNumberP].name)

        computer.cardsInHand.push(computer.cardsInDeck[randomNumberP]);

        computer.cardsInDeck = computer.cardsInDeck.filter(ele => ele.name !== computer.cardsInDeck[randomNumberP].name)
    }

}

newHands();