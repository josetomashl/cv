import "./index.css";
import Image from "next/image";
import Link from "next/link";
import profilePicture from "../../../../public/images/profile.jpg";
import { routes } from "../../routes";

export default function Sidebar() {
  return (
    <nav>
      <div className='profile-picture'>
        <Image src={profilePicture} width={160} height={160} alt='Picture of the author' priority />
      </div>
      <div className='nav-container'>
        {routes.map((route, index) => (
          <div className='nav-item' key={index}>
            <Image src={route.icon} width={24} height={24} alt={route.name + " section"} priority />
            <Link href={route.href}>{route.name}</Link>
          </div>
        ))}
      </div>
      <div className='contact-container'>
        <p>MORE INFO HERE</p>
      </div>
    </nav>
  );
}
