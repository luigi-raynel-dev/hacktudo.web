import { Chip, Stack } from '@mui/material'
import { ShieldCheck } from 'phosphor-react'
import { TbTruckDelivery } from 'react-icons/tb'
import { FiCreditCard, FiShoppingBag } from 'react-icons/fi'

export default function Stamps() {
  const stamps = [
    {
      icon: <ShieldCheck weight="regular" size={16} />,
      label: 'Garantia da OLX'
    },
    {
      icon: <TbTruckDelivery size={16} />,
      label: 'Entrega fácil'
    },
    {
      icon: <FiCreditCard size={16} />,
      label: 'Parcelamento sem juros'
    },
    {
      icon: <FiShoppingBag size={16} />,
      label: 'Pague online'
    }
  ]

  return (
    <Stack gap={1} direction="row">
      {stamps.map((stamp, index) => (
        <Chip
          key={index}
          label={
            <Stack direction="row" gap={0.5} alignItems="center">
              {stamp.icon}
              {stamp.label}
            </Stack>
          }
          sx={{
            background: '#e1e9ff',
            color: '#14596b',
            borderRadius: 1
          }}
        />
      ))}
    </Stack>
  )
}
