import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="./tayyab.svg"
        width={54}
        height={54}
        priority
        alt="404 Image not found"
      />
    </Link>
  );
};

export default Logo;
