import { Food } from "./Food";

export const BUNCHOFFOOD: Food[] = [{
    id: 0,
    type: "fruit",
    name: 'Apple',
    imageUrl: "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202201181338",
    body: "An apple a day is delicious",
    taste: "Sweet",
    tags: ["mutsu"]
},
{
    id: 1,
    name: 'Sushi',
    imageUrl: "",
    body: "Everybody loves sushi, apparently",
    taste: 'general',
    tags: ["sashimi", "hand roll"]
},
{
    id: 2,
    name: 'Potato',
    type: 'vegetable',
    imageUrl: '',
    body: 'The basis of many good dishes'
}];
