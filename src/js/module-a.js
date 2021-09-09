class animal {
	constructor(properties) {
		this.type = properties.type;
		this.kind = properties.kind;
		this.legs = properties.legs;
		this.name = properties.name;
	}
}

const animalList = [];
const animalPropertiesList = [
	{
		type: "reptile",
		kind: "crocodile",
		legs: 4,
		name: "Juancho",
	},
	{
		type: "mammal",
		kind: "bear",
		legs: 4,
		name: "Winnie the Poo",
	},
];

animalPropertiesList.forEach((animalProperties) => {
	animalList.push(new animal(animalProperties));
});

animalList.forEach((animal) => {
	console.log(`${animal.name} is a ${animal.kind}, so it has ${animal.legs}`);
});
