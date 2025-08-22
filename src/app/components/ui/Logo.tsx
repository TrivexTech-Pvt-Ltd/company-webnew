import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/assets/images/company/trivextech2.svg"
        alt="TrivexTech Logo"
        width={80}
        height={56}
        priority
      />
    </Link>
  );
}
