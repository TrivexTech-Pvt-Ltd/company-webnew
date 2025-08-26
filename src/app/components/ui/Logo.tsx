import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/assets/images/company/logo-new.png"
        alt="TrivexTech Logo"
        width={120}
        height={120}
        priority
        className="md:w-28 md:h-28 w-20 h-20"
      />
    </Link>
  );
}
