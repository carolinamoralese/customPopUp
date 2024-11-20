import React, { useEffect, useState } from 'react'
import { useCssHandles } from 'vtex.css-handles'
import PropTypes from 'prop-types'
import { useProduct } from 'vtex.product-context'
import '../../styles.css'

interface SkuList {
  skudId: number
  collectionId: number
}

interface Props {
  skuList: [SkuList]
  img: Image
  textAlert: string
  activeAlert: boolean
  timeToShowOffer: number
}

interface Image {
  imgUrl: string
  width: number
  height: number
}

const CSS_HANDLES = ['container-modal']

const PopUpOfferts = ({
  skuList,
  img,
  textAlert,
  activeAlert,
  timeToShowOffer,
}: Props) => {
  console.log(timeToShowOffer)
  const productContextValue = useProduct()
  const handles = useCssHandles(CSS_HANDLES)
  const [showAlertOffer, setShowAlertOffer] = useState(false)
  const [collectionId, setCollectionId] = useState('')
  const referenceIdValue =
    productContextValue?.selectedItem?.referenceId?.[0]?.Value

  useEffect(() => {
    if (skuList.length > 0 && referenceIdValue) {
      const matchingSku = skuList.find(
        (sku) => sku.skudId.toString() === referenceIdValue
      )

      if (matchingSku) {
        setCollectionId(matchingSku.collectionId.toString())
      }
    }
  }, [skuList, referenceIdValue])

  useEffect(() => {
    let timeOut: ReturnType<typeof setTimeout>

    if (activeAlert) {
      timeOut = setTimeout(() => {
        setShowAlertOffer(true)
      }, 2000)
    }

    return () => clearTimeout(timeOut)
  }, [activeAlert])

  if (activeAlert && showAlertOffer) {
    return (
      <div
        className={`fixed button-2 right-2 flex flex-column z-3000 ${handles['container-modal']}`}
      >
        <img
          src={img.imgUrl}
          alt="Oferta"
          width={img.width}
          height={img.height}
        />
        <p>{textAlert}</p>
        <a href={`/${collectionId}?map=productClusterIds`}>Ver</a>
        <div onClick={() => setShowAlertOffer(false)}>X</div>
      </div>
    )
  }

  return null
}

PopUpOfferts.propTypes = {
  img: PropTypes.shape({
    imgUrl: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
  }).isRequired,
  referencie: PropTypes.string.isRequired,
  colleccion: PropTypes.string.isRequired,
  textAlert: PropTypes.string.isRequired,
  activeAlert: PropTypes.bool.isRequired,
}

PopUpOfferts.defaultProps = {
  img: {
    imgUrl: 'assets/img/gif.jpg',
    width: 100,
    height: 100,
  },
  referencie: '320',
  colleccion: '111',
  textAlert: 'Este producto está disponible en combos a un precio especial',
  activeAlert: true,
}

PopUpOfferts.schema = {
  title: 'Pop Up para ofertas en PDPS',
  type: 'object',
  properties: {
    img: {
      title: 'Imagen para el mensaje de la oferta',
      type: 'object',
      properties: {
        imgUrl: {
          title: 'Imagen para el mensaje de la oferta',
          type: 'string',
          widget: {
            'ui:widget': 'image-uploader',
          },
        },
        width: {
          title: 'ancho del imagen',
          type: 'number',
          description: 'agrega el ancho del logo',
        },
        height: {
          title: 'alto del imagen',
          type: 'number',
          description: 'agrega el alto del logo',
        },
      },
    },
    skuList: {
      type: 'array',
      items: {
        properties: {
          skuId: {
            title: 'ID de SKU',
            type: 'number',
            description: 'ID de la SKU a la que debe dirigirse la alerta',
          },
          collectionId: {
            title: 'ID de colección',
            type: 'string',
            description: 'ID de la colección a la que debe dirigirse la alerta',
          },
        },
      },
    },
    textAlert: {
      title: 'Texto de la alerta',
      type: 'string',
      description: 'Texto específico de la alerta',
      widget: {
        'ui:widget': 'textarea',
      },
    },
    activeAlert: {
      title: 'Activar alerta',
      type: 'boolean',
      default: true,
    },
    timeToShowOffer: {
      title: 'Tiempo de mostrar la alerta',
      type: 'number',
      description: 'Debe poner in numero entero de 1 a 9',
      default: 3,
    },
  },
}

export default PopUpOfferts
