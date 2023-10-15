import { Button, ButtonProps } from '@mui/material'
import React from 'react'

interface Props extends ButtonProps {
  children: React.ReactNode
}

export const MainButton = ({ children, ...rest }: Props) => {
  return (
    <Button
      {...rest}
      variant="contained"
      sx={{
        borderRadius: 50,
        padding: '8px 24px',
        boxShadow: 'none',
        ...rest.sx
      }}
    >
      {children}
    </Button>
  )
}
