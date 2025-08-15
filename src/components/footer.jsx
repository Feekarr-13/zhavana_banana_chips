import { useState } from "react"

import { FaLocationDot } from 'react-icons/fa6'
import { BiLogoGmail } from 'react-icons/bi'
import { FaGlobe } from 'react-icons/fa'
import { AiFillInstagram, AiOutlineWhatsApp } from 'react-icons/ai'

import style from "../styles"
import logo from "../assets/Logo21.png";
import { infos } from "../constants"
import { getWaApi } from "../constants"

const Footer = () => {

  const [currentYear] = useState(new Date().getFullYear());
  const [isCopy, setIsCopy] = useState(false);

  const phoneNumber = 'C'; // Ganti dengan nomor telepon yang ingin disalin

  const copyToClipboard = () => {
    navigator.clipboard.writeText(phoneNumber)
      .then(() => {
        console.log('Nomor telepon berhasil disalin ke clipboard');
        setIsCopy(true)
        setTimeout(() => setIsCopy(false), 2000)
      })
      .catch(err => {
        console.error('Gagal menyalin nomor telepon: ', err);
      });
  };

  return (
    <div className={`${style.paddingX} max-w-[1300px] mx-auto flex flex-col`}>
      <div className="w-full h-1 mb-8 bg-yellow-500"></div>
      <div className="flex flex-col ss:flex-row-reverse ss:justify-between mb-8">
        <div className={`${style.paragraph} flex flex-col xs:flex-row xs:justify-between`}>
          <ul className="mb-4 ss:mb-0 ss:mr-1 sm:mr-6 md:mr-10">{
            infos.map(info => {
              if(info.id !== "whatsapp"){
                return(
                  <li
                    className="mb-4 w-fit"
                    key={info.id}
                  >
                    <a
                      href={info.link}
                      target="blank"
                      className="flex items-center"
                    >
                      {setIcon(info.id)}
                      <p className="ml-4">{info.content}</p>
                    </a>
                  </li>
                )
              }
            })
          }</ul>
          <div className="flex flex-col mb-12 ss:mb-0">
            <p className="mb-4 ">Hubungi Kimi di Whatsapp</p>
            {isCopy && (
              <p className="text-base mb-1 bg-primary w-fit py-1 px-2">Nomer tercopy!</p>
            )}
            <p
              onClick={copyToClipboard}
              className="flex items-center mb-4 hover:cursor-copy"
            >
              <div className="w-8">
                {setIcon(infos[infos.length - 1].id)}
              </div>
              <p className="ml-2">
                {infos[infos.length - 1].content}
              </p>
            </p>
            <a
            href={getWaApi(true)}
            target="blank"
            className={`${style.btnYellow} whitespace-nowrap`}
          >
            Hubungi Sekarang
          </a>
          </div>
        </div>
       <div className="w-fit ss:w-44 sm:w-fit flex flex-col justify-between gap-2">
        <a href="/">
         <img className="w-44 sm:w-52" src={logo} alt="Logo Zhavana" />
        </a>
        <p className={`${style.paragraph} text-xs sm:text-sm whitespace-nowrap`}>
        &copy; {currentYear} Zhavana Chips. By{" "}
        <a
          href="https://instagram.com/fekarrwww"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary hover:underline"
        >
          Fekarrwww
        </a>.
      </p>

        </div>

      </div>
    </div>
  );

  function setIcon(id){
    switch (id) {
      case 'location':
        return ( <FaLocationDot className="text-2xl text-yellow-500" /> )
      case 'email':
        return( <BiLogoGmail className="text-2xl text-yellow-500" /> )
      case 'website':
        return( <FaGlobe className="text-2xl text-yellow-500" /> )
      case 'instagram':
        return( <AiFillInstagram className="text-2xl text-yellow-500" /> )
      case "whatsapp":
        return( <AiOutlineWhatsApp className="text-2xl text-yellow-500" /> )
      default:
        return false
    }
  }
}

export default Footer;