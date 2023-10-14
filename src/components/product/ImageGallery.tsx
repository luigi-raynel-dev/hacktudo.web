import Image from 'next/image'
import fotoPrincipal from '../../assets/foto1.png'
import foto1 from '../../assets/foto1.jpg'
import foto2 from '../../assets/foto2.jpg'
import foto3 from '../../assets/foto3.jpg'
import { Stack } from '@mui/material'

export default function ImageGallery() {
  return (
    <Stack gap={2} width="100%" direction="row">
      <Image
        src={fotoPrincipal}
        alt=" Xiaomi Redmi Note 7"
        title=" Xiaomi Redmi Note 7"
        className="w-11/12 max-h-sm"
      />
      <Stack gap={1}>
        <Image
          src={foto1}
          alt=" Xiaomi Redmi Note 7"
          title=" Xiaomi Redmi Note 7"
          className="w-14 h-14"
        />
        <Image
          src={foto2}
          alt=" Xiaomi Redmi Note 7"
          title=" Xiaomi Redmi Note 7"
          className="w-14 h-14"
        />
        <Image
          src={foto3}
          alt=" Xiaomi Redmi Note 7"
          title=" Xiaomi Redmi Note 7"
          className="w-14 h-14"
        />
      </Stack>
    </Stack>
  )
}
