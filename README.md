# popup-custom

The PopUpOfferts component is a React component used to display an offer popup on a product detail page (PDP). This pop-up is displayed when a specific product (based on its SKU ID) meets certain conditions. The message includes an image, alert text, and a link to the related product collection.

## Configuration

```json
"dependencies": {
   "itgloberspartnercl.popup-custom": "0.x",
}
```

## Propeties
This component receives the following properties:

skuList ([SkuList]): List of SkuList objects, where each object has a skudId (SKU ID) and a collectionId (collection ID). This list is used to identify the SKU that the pop-up should display based on the referenceId of the selected product.

skudId (number): The SKU ID of a product.
collectionId (number): The ID of the collection related to that SKU.
img (Image): An object containing the image to be displayed in the alert message.

imgUrl (string): The URL of the image.
width (number): The width of the image.
height (number): The height of the image.
textAlert (string): The text that will be displayed in the pop-up alert. This text is configurable.

activeAlert (boolean): A boolean value indicating whether the alert should be active or not. If true, the pop-up will be displayed after a short delay.

timeToShowOffer (number): The time (in seconds) after which the offer pop-up should be shown. This value is used to time the appearance of the alert.


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
- Logic and Behavior
SKU detection and collection: The component obtains the referenceId of the selected product through the useProduct hook. It then searches for a SKU in skuList that matches this referenceId and returns the corresponding collectionId.

Alert Handling: When activeAlert is true, the component shows the pop-up after a delay specified by timeToShowOffer. The pop-up includes the image, text and a link to the product collection.

Close the pop-up: The pop-up includes a close button (X), which disables the display of the alert when clicked.


- Try different scenarios:

Change the values ​​of skuList, img, textAlert, activeAlert and timeToShowOffer to see how the pop-up behaves under different conditions.
Set activeAlert to false to ensure the pop-up is not displayed.

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
The component uses the VTEX useCssHandles hook to apply custom CSS classes. In this case, the only CSS handle defined is:

container-modal: It is the identifier used to apply custom styles to the modal container that displays the offer pop-up. This handle should be used in your CSS file to define the styles.

- container-modal

