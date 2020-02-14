import { generateRandomGuid, shuffle } from "utils/Utils";

interface ICard {
    imageurl: string;
    id: string;
    suite: string;
    value: string;
    power: number;
}

export enum Suits {
    DIAMONDS = "DIAMOND",
    HEARTS = "HEART",
    SPADES = "SPADE",
    CLUBS = "CLUB"
}

export const cardValues = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    Jack: 11,
    Queen: 12,
    King: 13,
    Ace: 14
};

export const generateDeckOfCards = (): Card[] =>
    Object.keys(Suits)
    .reduce(
        (acc, cur) =>
            [...acc, ...Object.keys(cardValues).map(val => new Card(cur, val))]
    , []);

class Card implements ICard {
    public id: string;
    public suite: string;
    public value: string;
    public power: number;
    public imageurl: string;
    // image of back of card if facedown
    public backOfCard: string = "card_background.png";

    public showBack: boolean = true;

    public showFront = () => {
        this.showBack = false;
    }

    public showBackOfCard = () => {
        this.showBack = true;
    }

    constructor(suite: string, value: string) {
        this.id = generateRandomGuid();
        this.suite = suite;
        this.value = value;
        this.power = cardValues[value];
        this.imageurl = this.suite.toLowerCase() + "-" + this.value.toLowerCase();
    }
}

export class Deck {
    private deck: Card[] = generateDeckOfCards();
    constructor() { }

    public shuffle = () => {
        this.deck = shuffle(this.deck);
        return this.deck;
    }

    public newDeal = () => {
        this.deck = shuffle(generateDeckOfCards());
        return this.deck;
    }

    public dealCard = () => {
        if (this.deck.length === 0) { return; }
        const [firstCard, ...rest] = this.deck;

        this.deck = rest;

        return firstCard;
    }
}