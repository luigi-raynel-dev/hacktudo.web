import React, { useEffect, useState } from 'react'
import { Card, CardContent, Skeleton, Stack, Typography } from '@mui/material'
import { publicApi } from '../../lib/axios'

type Props = {
  product: string
}

export default function InfoProduct({ product }: Props) {
  const [text, setText] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const getInfoProduct = async () => {
    try {
      setIsLoading(true)
      const response = await publicApi.post('/infoProduct', {
        product
      })

      console.log(response)

      if (
        response.data?.response &&
        Array.isArray(response.data?.response) &&
        response.data?.response?.length > 0
      ) {
        if (
          response.data.response[0].predictions[0].structValue.fields.content
            .stringValue
        ) {
          setText(
            response.data.response[0].predictions[0].structValue.fields.content
              .stringValue
          )
        }
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getInfoProduct()
  }, [product])

  return (
    <Card sx={{ background: '#F0E6FF' }}>
      <CardContent>
        <Typography mb={2} variant="h3" fontSize={24} color="#6e0ad6">
          OLX informa:
        </Typography>
        {isLoading ? (
          <Stack gap={1}>
            <Skeleton variant="text" width="100%" />
            <Skeleton variant="text" width="90%" />
            <Skeleton variant="text" width="100%" />
            <Skeleton variant="text" width="80%" />
          </Stack>
        ) : (
          <Typography>{text}</Typography>
        )}
      </CardContent>
    </Card>
  )
}
