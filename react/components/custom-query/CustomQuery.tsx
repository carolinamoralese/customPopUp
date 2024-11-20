import { useQuery } from 'react-apollo'
import React, { useEffect } from 'react'

import GET_PRODUCT from '../GraphQl/getProduct.gql'

const CustomQuery = () => {
  const { data, loading, error } = useQuery(GET_PRODUCT, {
    variables: {
      identifier: { field: 'refId', value: 89139 },
    },
    ssr: false, // la query no se ejecuta durante server side rendering
  })

  // eslint-disable-next-line no-console
  console.log(data)
  // eslint-disable-next-line no-console
  console.log(loading) // primero true y si esta todo ok cambia a false- primero validar que loading no exista
  // eslint-disable-next-line no-console
  console.log(error) // si hay algun error automaticamente manda el error - validad que no tenga ningun error

  useEffect(() => {}, [])

  return <h1>prueba</h1>
}

export default CustomQuery
