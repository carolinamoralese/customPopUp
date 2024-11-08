# popup-custom

texto- descripcion  

## Configuration

```json
"dependencies": {
   "itgloberspartnercl.popup-custom": "0.x",
}
```

## Propeties
Este componente acepta las siguientes propiedades


| Property   | Type      | Description                                         |
|------------|-----------|-----------------------------------------------------|
| `skuList`       | `[SkuList]`  | The unique identifier for the menu item.            |
| `img`    | `Image`  | The title of the menu item.                         |
| `textAlert`  | `string`  | The content to be displayed when the menu item is expanded. |
| `activeAlert` | `boolean` |  descripcion de ..... |
| `timeToShowOffer` | `number` | descripcion de .....  |

 
 ### SkuList object

| Property   | Type      | Description                                         |
|------------|-----------|-----------------------------------------------------|
| `skudId`       | `number`  | The unique identifier for the menu item.            |
| `collectionId`    | `number`  | The title of the menu item.                         |


## Usage

descripcion de como se usa puueba

```json
"popup-offers":{
    "props": {
      "img": "assets/img/gif.jpg",
      "skuList": [{
        "skudId": 89249,
        "collectionId": 153
      },
      {
        "skudId": 89139,
        "collectionId": 151
      },
      {
         "skudId": 89135,
         "collectionId": 150
       }
    ],
      "textAlert": "Este producto está disponible en combos a un precio especial",
      "activeAlert": true,
      "width": 80,
      "height": 80,
      "timeToShowOffer":3
    }
  }

```

## CSS Handles
Descripcion

- container-modal

