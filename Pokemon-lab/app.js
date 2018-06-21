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
    cardPicked: {},
    discard: [],
    cardDealerTracker: true
}
const computer = {
    cardsInHandNumber: 0,
    score: 0,
    cardsInDeck: [],
    cardsInHand: [],
    cardPicked: {},
    discard: [],
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



const newHands = () => {
    if (player.cardsInHandNumber > 0) {

        player.cardsInHand.forEach((curr) => {
            player.discard.push(curr)
        })
        player.cardsInHand = [];
        player.discard.push(player.cardPicked);
        player.cardPicked = {};
        player.cardsInHandNumber = 0;

        computer.cardsInHand.forEach((curr) => {
            computer.discard.push(curr)
        })
        computer.cardsInHand = [];
        computer.discard.push(player.cardPicked);
        computer.cardPicked = {};
        computer.cardsInHandNumber = 0;
    }
    for (let i = 0; i < 3; i++) {
        // Catching to make sure we don't draw infitently (Edge Case)
        if (player.cardsInDeck.length === 0) {
            return console.log("The Game is Over")
        }
        const randomNumberP = Math.floor(Math.random() * ((player.cardsInDeck.length - 1) + 1));
        const randomNumberC = Math.floor(Math.random() * ((computer.cardsInDeck.length - 1) + 1));

        player.cardsInHand.push(player.cardsInDeck[randomNumberP]);
        player.cardsInHandNumber++;

        player.cardsInDeck = player.cardsInDeck.filter(ele => ele.name !== player.cardsInDeck[randomNumberP].name)

        computer.cardsInHand.push(computer.cardsInDeck[randomNumberP]);
        computer.cardsInHandNumber++;

        computer.cardsInDeck = computer.cardsInDeck.filter(ele => ele.name !== computer.cardsInDeck[randomNumberP].name)
    }

}


// player.cardsInHand[i]
const playFromHand = (indexNum) => {
    player.cardPicked = player.cardsInHand[indexNum];
    player.cardsInHand.splice(indexNum, 1);
    player.cardsInHandNumber--

        const randomizer = Math.floor(Math.random() * (2 + 1));

    computer.cardPicked = computer.cardsInHand[randomizer];
    computer.cardsInHand.splice(randomizer, 1);
    computer.cardsInHandNumber--;
}

const resolvePlayedCards = () => {
    if (player.cardPicked.damage === computer.cardPicked.damage) {
        console.log(`${player.cardPicked.name} and ${computer.cardPicked.name} are equal matches. It is a draw this round`);
    } else if (player.cardPicked.damage > computer.cardPicked.damage) {
        console.log(`${player.cardPicked.name} is stronger than ${computer.cardPicked.name}, Player has won`);
        player.score++;
    } else {
        console.log(`${computer.cardPicked.name} is stronger than ${player.cardPicked.name}, Computer has won`);
        computer.score++;
    }
    if (player.cardsInDeck.length < 3) {
        console.log(`The game is over kiddo`)
    }
}


dealDecks();
newHands();
playFromHand(1);
resolvePlayedCards();
newHands();

console.log(player.cardPicked);
console.log(computer.cardPicked);