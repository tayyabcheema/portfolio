'use client'

// Icons
import {RiYoutubeFill, RiLinkedinFill, RiGithubFill, RiFacebookFill, RiInstagramFill} from "react-icons/ri"

import Link from "next/link"

const icons = [
  // {
  //   path: "/",
  //   name: <RiYoutubeFill/>
  // },
  {
    path: "https://www.linkedin.com/in/tayyabcheema/",
    name: <RiLinkedinFill/>
  },
  {
    path: "https://github.com/tayyabcheema/",
    name: <RiGithubFill/>
  },
  {
    path: "https://www.facebook.com/tayyab.cheema.58910",
    name: <RiFacebookFill/>
  },
  {
    path: "https://www.instagram.com/tayyab___cheema/",
    name: <RiInstagramFill/>
  },
]

const Socials = ({containerStyles, iconsStyles}) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index)=>{
        return <Link target="_blank" href={icon.path} key={index}>
        <div className={`${iconsStyles} pt-0 pb-10`}  >{icon.name}</div>
        </Link>
      })}
    </div>
  )
}

export default Socials
