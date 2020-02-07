import { Item } from '../component/item/item.component'

export const items:Array<Item> = [{
    "name": "Camera Canon 800D",
    "description" : "L'EOS 800D vous permet de prendre des photos et de réaliser des vidéos des moments-clés de votre vie d'une qualité inégalée. Et parce que c'est un reflex, vous apprécierez particulièrement son viseur optique lumineux, qui montre le monde tel qu'il est.",
    "booked": {
        "2020-02-05": "nicolasf",
        "2020-02-06": "nicolasf"
    }
},{
    "name": "Trotinette",
    "description" : "Après le skate, avant le velo.",
    "booked": {}
},{
    "name": "Trépied",
    "description" : "Pour poser une caméra",
    "booked": {
        "2020-02-07": "nicolasf"
    }
}
]