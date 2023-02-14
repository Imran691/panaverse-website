import Image from 'next/image'
import React from 'react'
import Logo from"../../../public/Logo.png"

export default function img() {
  return (
    <Image src={Logo} alt="pic"></Image>
  )
}
