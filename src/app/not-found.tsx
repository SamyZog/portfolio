import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/button";
import { paths } from "@/constants/paths";
import { getUserLocale } from "@/i18n/locale";
import seo from "@/i18n/seo.json";

const NotFound = async () => {
  const locale = await getUserLocale();

  const text = seo[locale]["not-found"];

  return (
    <div className="flex flex-col justify-center items-center space-y-5 text-center">
      <h2 className="font-bold text-lg">{text.title}</h2>

      <Image
        src="/obi.gif"
        alt={text.title}
        width={320}
        height={180}
        className="rounded-lg overflow-hidden object-contain"
        unoptimized
      />

      <Button variant="destructive" asChild>
        <Link href={paths.home} replace>
          {text.action}
        </Link>
      </Button>
    </div>
  );
};

export default NotFound;
