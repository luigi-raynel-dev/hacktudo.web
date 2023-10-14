import { Button, Stack } from '@mui/material'
import Image from 'next/image'
import olxLogo from '../../assets/olx-logo.png'

export default function Header() {
  return (
    <Stack
      className="w-full"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      px={3}
      borderTop="1px solid #cfd4dd"
      borderBottom="1px solid #cfd4dd"
    >
      <Image src={olxLogo} alt="OLX" title="OLX LOGO" width={60} height={60} />
      <Stack gap={2} direction="row">
        <Button
          variant="contained"
          sx={{
            backgroundColor: 'white',
            color: 'black',
            borderRadius: 50,
            padding: '8px 24px',
            boxShadow: 'none',
            border: '1px solid #cfd4dd',
            textTransform: 'none',
            ':hover': {
              backgroundColor: 'white',
              boxShadow: 'none',
              border: '1.6px solid #6e0ad6'
            }
          }}
        >
          Entrar
        </Button>
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
          Anunciar
        </Button>
      </Stack>
    </Stack>
  )
}
