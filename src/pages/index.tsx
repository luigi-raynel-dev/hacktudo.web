import React from 'react'
import { Stack, Typography } from '@mui/material'
import Header from '../components/layout/Header'
import ImageGallery from '../components/product/ImageGallery'

export default function Product() {
  return (
    <Stack className="w-full">
      <Header />
      <Stack direction="row" p={4} width="100%">
        <Stack gap={2} width="50%">
          <Stack gap={1}>
            <Typography variant="h1" fontSize={24}>
              Xiaomi Redmi Note 7 (48 Mpx) Dual SIM 64 GB neptune blue 4 gb ram{' '}
            </Typography>
            <Typography fontSize={12} color="#3C4453">
              Publicado em 13/10 às 20:00 - cód. 863219322
            </Typography>
          </Stack>
          <ImageGallery />
        </Stack>
      </Stack>
    </Stack>
  )
}
