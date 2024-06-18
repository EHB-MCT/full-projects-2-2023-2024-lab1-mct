# Project Title

Website Make it.Brussels

## Description

De bedoeling van ons project is om een website te maken over medialab.brussel Het is een onderling van Erasmus hogeschool Brussel waarin alle labs zijn van de school. Op de site moet je alles kunnen weten over wie ze zijn, de 3 labs, de workshops, de uitleendienst

ons doelpubliek is vooral externe mensen of ze nu kennis hebben in multimedia zoals proffesionelen/docenten of mensen zonder kennis zoals studenten/leerkrachten. We willen een afstellen van de ip Erasmus Hogeschool en de site zijn eigen identiteit geven door er een futuristishe vibe te geven. die vibe hebben we dan toegepast op de hele site en geeft goed aan waar de site over gaat.

# Getting Started

## Screenshots           //////////////////////////////////////////////

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

## Acknowledgements

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

## Authors

- [@ArnoBaeck](https://github.com/ArnoBaeck)
- [@SophiaRahmoun ](https://github.com/SophiaRahmoun)
- [@MatteoGiambarresi](https://github.com/MatteoGiambarresi)
- [@Ralf564](https://github.com/Ralf564)
- [@AhmedBelaouchi](https://github.com/AhmedBelaouchi)

## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Black | ![#000000](https://via.placeholder.com/10/000000?text=+) #000000 |
| Lighter Black | ![#1F1F1F](https://via.placeholder.com/10/1F1F1F?text=+) #1F1F1F |
| White | ![#FFFFFF](https://via.placeholder.com/10/FFFFFF?text=+) #FFFFFF |
| Grey | ![#6F6F6F](https://via.placeholder.com/10/6F6F6F?text=+) #6F6F6F |
| Red | ![#FF0000](https://via.placeholder.com/10/FF0000?text=+) #FF0000 |
| Purple | ![#9D00FF](https://via.placeholder.com/10/9D00FF?text=+) #9D00FF |
| Green | ![#1DA814](https://via.placeholder.com/10/1DA814?text=+) #1DA814 |

## Features

- reserveer een workshop
- leen iets via uitleendienst

## License

This project is licensed under the [Erasmushogeschoolbrussel] License - (https://www.erasmushogeschool.be/en)








## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.