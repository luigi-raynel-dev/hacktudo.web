import { Stack } from '@mui/material'
import React from 'react'
import { MainButton } from '../layout/MainButton'
import { AiOutlineHeart } from 'react-icons/ai'
import { PiShareNetworkDuotone } from 'react-icons/pi'
import { FiFlag } from 'react-icons/fi'

export default function ActionButtons() {
  const buttons = [
    {
      icon: <AiOutlineHeart size={24} />,
      label: 'Favoritar'
    },
    {
      icon: <PiShareNetworkDuotone size={24} />,
      label: 'Compartilhar'
    },
    {
      icon: <FiFlag size={24} />,
      label: 'Denunciar'
    }
  ]

  return (
    <Stack
      direction="row"
      gap={2}
      justifyContent="space-between"
      alignItems="center"
    >
      {buttons.map((button, index) => (
        <MainButton
          key={index}
          sx={{
            color: '#F28000',
            border: '1px solid #F28000',
            ':hover': {
              background: '#fff3e6',
              border: '1px solid #fff3e6',
              boxShadow: 'none'
            }
          }}
        >
          <Stack direction="row" gap={1} alignItems="center">
            {button.icon}
            {button.label}
          </Stack>
        </MainButton>
      ))}
    </Stack>
  )
}
