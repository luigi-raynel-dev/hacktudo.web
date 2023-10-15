import React from 'react'
import { Card, CardContent, Stack, Typography } from '@mui/material'
import Header from '../components/layout/Header'
import ImageGallery from '../components/product/ImageGallery'
import Stamps from '../components/product/Stamps'
import ActionButtons from '../components/product/ActionButtons'
import { SquaresFour, Medal } from 'phosphor-react'
import { RiStackLine } from 'react-icons/ri'
import { AiOutlineStar } from 'react-icons/ai'
import { BsBox } from 'react-icons/bs'
import { LiaPaintRollerSolid } from 'react-icons/lia'
import InfoProduct from '../components/product/InfoProduct'
import Price from '../components/product/Price'

export default function Product() {
  return (
    <Stack className="w-full">
      <Header />
      <Stack direction="row" p={4} width="100%">
        <Stack gap={3} width="50%">
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
          <Stack gap={3}>
            <Typography>
              O Redmi Note 7 é um Android bom para fotos, 6.3 polegadas, bateria
              e câmera boa.
            </Typography>
            <InfoProduct
              product={`
              Titulo: Xiaomi Redmi Note 7 (48 Mpx) Dual SIM 64 GB neptune blue 4 gb ram\n Descrição: O Redmi Note 7 é um Android bom para fotos, 6.3 polegadas, bateria
              e câmera boa.
            `}
            />
          </Stack>
          <ActionButtons />
          <Stack gap={2}>
            <Typography fontWeight="bold" variant="h3" fontSize={20}>
              Detalhes
            </Typography>
            <Stack gap={2}>
              <Stack
                direction="row"
                flexWrap="wrap"
                alignItems="center"
                justifyContent="space-between"
              >
                <Stack className="1/3">
                  <Stack direction="row" gap={1}>
                    <SquaresFour size={24} />
                    <Typography fontSize={12}>Categoria</Typography>
                  </Stack>
                  <Stack direction="row" justifyContent="end" gap={1}>
                    <SquaresFour size={24} color="transparent" />
                    <Typography fontSize={14}>Celulares e telefonia</Typography>
                  </Stack>
                </Stack>
                <Stack className="1/3">
                  <Stack direction="row" gap={1}>
                    <Medal size={24} />
                    <Typography fontSize={12}>Marca</Typography>
                  </Stack>
                  <Stack direction="row" justifyContent="end" gap={1}>
                    <Medal size={24} color="transparent" />
                    <Typography fontSize={14}>XIAOMI</Typography>
                  </Stack>
                </Stack>
                <Stack className="1/3">
                  <Stack direction="row" gap={1}>
                    <RiStackLine size={24} />
                    <Typography fontSize={12}>Modelo</Typography>
                  </Stack>
                  <Stack direction="row" justifyContent="end" gap={1}>
                    <RiStackLine size={24} color="transparent" />
                    <Typography fontSize={14}>OUTROS</Typography>
                  </Stack>
                </Stack>
              </Stack>
              <Stack
                direction="row"
                flexWrap="wrap"
                alignItems="center"
                justifyContent="space-between"
              >
                <Stack className="1/3">
                  <Stack direction="row" gap={1}>
                    <AiOutlineStar size={24} />
                    <Typography fontSize={12}>Condição</Typography>
                  </Stack>
                  <Stack direction="row" justifyContent="end" gap={1}>
                    <AiOutlineStar size={24} color="transparent" />
                    <Typography fontSize={14}>Usado - Excelente</Typography>
                  </Stack>
                </Stack>
                <Stack className="1/3">
                  <Stack direction="row" gap={1}>
                    <BsBox size={24} />
                    <Typography fontSize={12}>Memória interna</Typography>
                  </Stack>
                  <Stack direction="row" justifyContent="end" gap={1}>
                    <BsBox size={24} color="transparent" />
                    <Typography fontSize={14}>64GB</Typography>
                  </Stack>
                </Stack>
                <Stack className="1/3">
                  <Stack direction="row" gap={1}>
                    <LiaPaintRollerSolid size={24} />
                    <Typography fontSize={12}>Cor</Typography>
                  </Stack>
                  <Stack direction="row" justifyContent="end" gap={1}>
                    <LiaPaintRollerSolid size={24} color="transparent" />
                    <Typography fontSize={14}>Azul</Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Stack gap={2}>
            <Typography fontWeight="bold" variant="h3" fontSize={20}>
              Localização
            </Typography>
            <Stack gap={2}>
              <Stack direction="row" justifyContent="space-between">
                <Stack>
                  <Typography fontSize={14} color="#3c4453">
                    CEP
                  </Typography>
                  <Typography>72638721</Typography>
                </Stack>
                <Stack>
                  <Typography fontSize={14} color="#3c4453">
                    Município
                  </Typography>
                  <Typography>Guaratinguetá</Typography>
                </Stack>
                <Stack>
                  <Typography fontSize={14} color="#3c4453">
                    Bairro
                  </Typography>
                  <Typography>Vila Paraíba</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack gap={2} width="25%">
          <Price />
        </Stack>
      </Stack>
    </Stack>
  )
}
