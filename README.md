# Cast Fetching

repo: **react-api**

E’ arrivato il momento di mettere insieme i concetti appresi creiamo una piccola app che ci mostri un elenco di attori o attrici.

### Endpoint

Lista di Attrici:   ```https://lanciweb.github.io/demo/api/actresses/```
Lista di Attori:  ```https://lanciweb.github.io/demo/api/actors/```

#### Answer:

```
[
    {
        "id": 1,
        "name": "Marlon Brando",
        "birth_year": 1924,
        "death_year": 2004,
        "nationality": "American",
        "known_for": [
            "The Godfather",
            "A Streetcar Named Desire",
            "On the Waterfront"
        ],
        "awards": [
            "Oscar",
            "Golden Globe"
        ],
        "biography": "Marlon Brando was an American actor and one of the most influential performers in the history of film. He is widely regarded as one of the greatest actors of all time.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Marlon_Brando_publicity_for_One-Eyed_Jacks.png/220px-Marlon_Brando_publicity_for_One-Eyed_Jacks.png"
    },
    {
        "id": 2,
        "name": "Robert De Niro",
        "birth_year": 1943,
        "nationality": "American",
        "known_for": [
            "Taxi Driver",
            "Raging Bull",
            "Goodfellas"
        ],
        "awards": [
            "Oscar",
            "Golden Globe"
        ],
        "biography": "Robert De Niro is an American actor, producer, and director known for his intense performances and collaborations with Martin Scorsese.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Robert_De_Niro_Cannes_2016_2.jpg/220px-Robert_De_Niro_Cannes_2016_2.jpg"
    }
]
```

## MILESTONE 1

Al caricamento dell'applicazione, recuperiamo la lista degli attori e delle attrici dalle API e stampiamoli in console.

## MILESTONE 2

Prepariamo una card per ciascun attore/attrice, mostrandone le seguenti informazioni:

- nome
- anno nascita
- nazionalità
- biografia
- immagine
- riconoscimenti

## MILESTONE 3

Mostriamo in pagina una card per ciascun attore, con grafica a piacimento!