"use client";
import styles from "./page.module.css";
import { usePathname } from "next/navigation";

export default function Home() {
  const path = usePathname();
  console.log("path", path);
  return <p>HOME</p>;
}
