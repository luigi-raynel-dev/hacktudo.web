import React from 'react'
import {
  Button,
  Card,
  CardContent,
  Rating,
  Stack,
  Typography
} from '@mui/material'
import Header from '../components/layout/Header'
import ImageGallery from '../components/product/ImageGallery'
import Stamps from '../components/product/Stamps'
import ActionButtons from '../components/product/ActionButtons'
import { SquaresFour, Medal } from 'phosphor-react'
import { RiStackLine } from 'react-icons/ri'
import { AiOutlineStar } from 'react-icons/ai'
import { BsBox, BsCart, BsChat } from 'react-icons/bs'
import { LiaPaintRollerSolid } from 'react-icons/lia'
import InfoProduct from '../components/product/InfoProduct'
import Price from '../components/product/Price'
import { MainButton } from '../components/layout/MainButton'
import { BiSolidEnvelope, BiSolidPhone } from 'react-icons/bi'

export default function Product() {
  return (
    <Stack className="w-full">
      <Header />
      <Stack direction="row" p={4} width="100%" gap={2}>
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
          <Card className="sticky top-0" sx={{ background: '#F0E6FF' }}>
            <CardContent>
              <Stack alignItems="center" gap={2}>
                <Typography fontSize={20}>BugBusters</Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  gap={2}
                >
                  <Typography fontSize={18}>5,0</Typography>
                  <Rating
                    name="text-feedback"
                    value={5}
                    readOnly
                    precision={0.5}
                  />
                  <Typography fontSize={12}>4 avaliaçôes</Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  gap={2}
                >
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#F28000 !important',
                      borderRadius: 50,
                      padding: '8px 24px',
                      boxShadow: 'none',
                      textTransform: 'none',
                      ':hover': {
                        backgroundColor: '#DF7400 !important',
                        boxShadow: 'none'
                      }
                    }}
                  >
                    <Stack direction="row" gap={1} alignItems="center">
                      <BsCart />
                      Comprar
                    </Stack>
                  </Button>
                  <MainButton
                    sx={{
                      color: '#F28000',
                      border: '1px solid #F28000',
                      ':hover': {
                        background: '#fff3e6',
                        boxShadow: 'none'
                      }
                    }}
                  >
                    <Stack direction="row" gap={1} alignItems="center">
                      <BsChat />
                      Chat
                    </Stack>
                  </MainButton>
                </Stack>
                <Typography fontSize={12} color="rgb(153, 153, 153)">
                  Último acesso há 6 dias
                </Typography>
                <Stack direction="row" gap={1}>
                  <Typography fontSize={14} color="rgb(74, 74, 74)">
                    Verificado com:
                  </Typography>
                  <Stack
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                      background: 'green',
                      width: 25,
                      height: 25,
                      borderRadius: '50%'
                    }}
                  >
                    <BiSolidPhone color="white" />
                  </Stack>
                  <Stack
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                      background: 'green',
                      width: 25,
                      height: 25,
                      borderRadius: '50%'
                    }}
                  >
                    <BiSolidEnvelope color="white" />
                  </Stack>
                </Stack>
                <Typography fontSize={12} color="rgb(153, 153, 153)">
                  Na OLX desde Junho de 2022
                </Typography>
                <Stack direction="row" gap={1}>
                  <RiStackLine width={16} height={16} />
                  <Typography fontSize={12} color="#6E0AD6">
                    Ver todos os anúncios
                  </Typography>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Stack>
    </Stack>
  )
}
