"use client";
import "./index.css";
import Image from "next/image";
import Link from "next/link";
import profilePicture from "../../../../public/images/profile.jpg";
import pictureOn from "../../../../public/svg/picture-on.svg";
import pictureOff from "../../../../public/svg/picture-off.svg";
import { routes } from "../../routes";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Sidebar() {
  const [isPictureShown, setIsPictureShown] = useState<boolean>(false);
  const path = usePathname();
  return (
    <nav>
      <div className='profile-picture' onClick={() => setIsPictureShown(!isPictureShown)}>
        <Image
          src={isPictureShown ? profilePicture : pictureOff}
          width={160}
          height={160}
          alt='Picture of the author'
          priority
        />
        {!isPictureShown && <div>Click to reveal my profile picture</div>}
      </div>
      <div className='nav-container'>
        {routes.map((route, index) => (
          <Link href={route.href} className={route.href === path ? "nav-item current" : "nav-item"} key={index}>
            <Image src={route.icon} width={24} height={24} alt={route.name + " section"} priority />
            <p>{route.name}</p>
          </Link>
        ))}
      </div>
      <div className='contact-container'>
        <p>MORE INFO HERE</p>
      </div>
    </nav>
  );
}
