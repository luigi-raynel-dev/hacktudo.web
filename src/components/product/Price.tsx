import { Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import cardFlags from '../../assets/cardFlags.png'

export default function Price() {
  return (
    <Stack gap={1}>
      <Stack
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        gap={1}
        className="bg-[url(../assets/priceFlag.png)] bg-no-repeat bg-center bg-cover h-16 rounded-r-lg"
      >
        <Typography fontSize={24} color="white">
          R$ 599
        </Typography>
        <Typography fontSize={12} color="white">
          Pague online <br /> com garantia da OLX
        </Typography>
      </Stack>
      <Stack justifyContent="center" alignItems="center">
        <Image src={cardFlags} alt="bandeiras aceitas" />
      </Stack>
    </Stack>
  )
}
