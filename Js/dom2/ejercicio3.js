const superHeroes = {
    "squadName": "Super Hero Squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
        {
            "name": "Molecule Man",
            "age": 29,
            "secretIdentity": "Dan Jukes",
            "powers": [
                "Radiation resistance",
                "Turning tiny",
                "Radiation blast"
            ]
        },
        {
            "name": "Madame Uppercut",
            "age": 39,
            "secretIdentity": "Jane Wilson",
            "powers": [
                "Million tonne punch",
                "Damage resistance",
                "Superhuman reflexes"
            ]
        },
        {
            "name": "Eternal Flame",
            "age": 25,
            "secretIdentity": "Alex Johnson",
            "powers": [
                "Flame manipulation",
                "Immortality",
                "Teleportation"
            ]
        }
    ]
};

document.getElementById('cargarSuperHeroes').addEventListener('click', function() {
    const eternalFlame = superHeroes.members[2];
    const superHeroInfoDiv = document.getElementById('superHeroInfo');
    
    if (superHeroInfoDiv) {
        superHeroInfoDiv.innerHTML = `
            <h2>${eternalFlame.name}</h2>
            <p>Identidad secreta: ${eternalFlame.secretIdentity}</p>
            <p>Edad: ${eternalFlame.age}</p>
            <p>Superpoderes: ${eternalFlame.powers.join(', ')}</p>
        `;
    }
});