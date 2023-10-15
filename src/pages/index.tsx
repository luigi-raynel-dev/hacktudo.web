import React from 'react'
import { Chip, Stack, Typography } from '@mui/material'
import Header from '../components/layout/Header'
import ImageGallery from '../components/product/ImageGallery'
import Stamps from '../components/product/Stamps'

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
          <Stamps />
          <Stack gap={1}>
            <Typography className="line-through" color="#3c4453" fontSize={14}>
              R$ 639
            </Typography>
            <Typography variant="h2" fontSize={24}>
              R$ 599
            </Typography>
            <Typography fontSize={14}>
              Em até <strong>5x sem juros de R$ 119,80</strong>
            </Typography>
          </Stack>
          <Stack>
            <Typography>
              O Redmi Note 7 é um smartphone Android de bom nível, ótimo para
              fotos. Tem uma enorme tela Touchscreen de 6.3 polegadas com uma
              resolução de 2340x1080 pixel.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}
