import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import aonline from '../public/aonline.png';
import blackb from '../public/blackb.png';
import conline from '../public/conline.png';
import donline from '../public/donline.png';
import LogoPO from '../public/logoportalonl.png'
import Style from '../styles/Home.module.css'

const index = () => {

  const Photos = [
    { Img: aonline, Link: '' },
    { Img: blackb, Link: '' },
    { Img: conline, Link: '' },
    { Img: donline, Link: '' },
  ]
  return (
    <>
      <Image src={LogoPO} className={Style.Logo} />
      <section>
        <div className={Style.Block}>
          {Photos.map((item, i) => (
            <div className={Style.BlockIni}>
              <Link href={item.Link}><Image src={item.Img} className={Style.Img} /></Link>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default index