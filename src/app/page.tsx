/* eslint-disable @next/next/no-html-link-for-pages */
import { Bars3Icon, GlobeAltIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Home() {
  return (
    <div
      className="
        flex flex-col                /* layout en colonne */
        min-h-screen                /* hauteur min = écran */
        overflow-x-hidden           /* empêche scroll horizontal */
        font-sans                   /* police sans-serif */
        bg-black text-white         /* fond noir, texte blanc */
      "
    >
      {/* Header avec nav */}
      <header
        className="
          flex items-center          /* aligne verticalement */
          w-11/12 mx-auto           /* largeur + centré */
          justify-between           /* espace entre éléments */
          py-6                      /* padding vertical */
        "
      >
        {/* Lien page d'accueil sur logo */}
        <nav
          className="
            flex flex-row           /* ligne */
            gap-6                   /* espace entre éléments */
            items-center            /* alignement vertical */
          "
        >
          <a href="/">
            <Image
              className="dark:invert" /* inverse couleurs en dark mode */
              src="/next.svg"
              alt="Next.js logo"
              width={100}
              height={20}
              priority
            />
          </a>

          {/* Navigation */}
          <ul
            className="
              gap-10                 /* espace entre liens */
              hidden md:flex         /* caché mobile, visible desktop */
              items-center           /* alignement vertical */
            "
          >
            <li>
              <a href="#" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Learn
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Nav secondaire */}
        <ul
          className="
            hidden md:flex           /* caché mobile */
            gap-6                    /* espace entre icônes */
            items-center             /* alignement vertical */
          "
        >
          <li>
            <a className="icon-link">
              <GlobeAltIcon className="icon" /> {/* icône stylée */}
            </a>
          </li>
          <li>
            <a className="icon-link">
              <GlobeAltIcon className="icon" />
            </a>
          </li>
          <li>
            <a className="icon-link">
              <GlobeAltIcon className="icon" />
            </a>
          </li>
        </ul>

        {/* menu burger en mobile */}
        <button
          className="
            md:hidden               /* visible uniquement mobile */
            icon-link               /* style bouton/icône */
          "
        >
          <Bars3Icon className="icon" />
        </button>
      </header>

      <main
        className="
          flex w-full               /* prend toute la largeur */
          flex-col                  /* colonne */
          items-center              /* centre horizontalement */
          py-12                     /* padding vertical */
        "
      >
        {/* Hero Section */}
        <section
          className="
            flex flex-col           /* colonne */
            gap-12                  /* espace vertical */
            w-11/12 mx-auto         /* largeur + centré */
          "
        >
          <h1
            className="
              text-[12vw]           /* taille responsive */
              scale-150             /* zoom du texte */
              text-center           /* centré */
              flex-1                /* prend espace dispo */
              uppercase             /* majuscules */
              font-bold             /* gras */
            "
          >
            The blog
          </h1>

          {/* Articles à la une */}
          <div
            className="
              w-full
              flex flex-col         /* colonne mobile */
              lg:flex-row           /* ligne desktop */
              gap-14                /* espace */
              py-10
            "
          >
            {/* Article principale */}
            <div
              className="
                flex flex-col
                gap-4
                w-full
                lg:w-1/2            /* moitié écran en desktop */
              "
            >
              {/* image */}
              <div
                className="
                  relative           /* parent pour image fill */
                  w-full
                  aspect-video       /* ratio 16:9 */
                "
              >
                <Image
                  className="object-cover" /* image recadrée */
                  src="/blog.webp"
                  alt="Article Image"
                  fill
                />
              </div>

              {/* date */}
              <span className="opacity-65 text-xs">
                {/* texte discret + petit */}
                Mardi 03 Mars 2026
              </span>

              {/* titre article */}
              <strong className="article-title text-2xl">
                {/* style custom + taille */}
                Titre article
              </strong>

              <p className="opacity-65 line-clamp-3">
                {/* texte atténué + limité à 3 lignes */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae alias totam, ut quos suscipit doloribus, molestiae
                dolor qui veritatis, officiis in. Repellat est obcaecati dolore
                veniam qui commodi quis eos?
              </p>
            </div>

            {/* Liste des articles secondaires */}
            <div
              className="
                flex flex-col
                gap-4
                w-full
                lg:w-1/2
              "
            >
              <ul
                className="
                  flex flex-col
                  gap-10
                  w-full
                "
              >
                {/* Article card */}
                <li className="flex gap-2">
                  {/* layout horizontal + espace */}
                  <div className="relative w-1/3 aspect-video">
                    <Image
                      className="object-cover"
                      src="/blog.webp"
                      alt="Article Image"
                      fill
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <span className="opacity-65 text-xs">
                      Mardi 03 Mars 2026
                    </span>

                    <strong className="article-title text-2xl">
                      Titre article
                    </strong>
                  </div>
                </li>

                {/* article 2 */}
                <li className="flex gap-2">
                  <div className="relative w-1/3 aspect-video">
                    <Image
                      className="object-cover"
                      src="/blog.webp"
                      alt="Article Image"
                      fill
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <span className="opacity-65 text-xs">
                      Mardi 03 Mars 2026
                    </span>

                    <strong className="article-title text-2xl">
                      Titre article
                    </strong>
                  </div>
                </li>

                {/* article 3 */}
                <li className="flex gap-2">
                  <div className="relative w-1/3 aspect-video">
                    <Image
                      className="object-cover"
                      src="/blog.webp"
                      alt="Article Image"
                      fill
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <span className="opacity-65 text-xs">
                      Mardi 03 Mars 2026
                    </span>

                    <strong className="article-title text-2xl">
                      Titre article
                    </strong>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/*Section Liste d'articles */}
        <section
        className="flex flex-col py-10 w-full bg-white text-black gap-10"
        >
          <div className="flex flex-col gap-6 w-11/12 mx-auto">
          <h2
          className="section-title"
          >
            Articles
          </h2>

          <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <li
            className="w-full flex flex-col gap-3 "
            >
              {/* image */}
              <div
                className="
                  relative           /* parent pour image fill */
                  w-full
                  aspect-video       /* ratio 16:9 */
                "
              >
                <Image
                  className="object-cover" /* image recadrée */
                  src="/blog.webp"
                  alt="Article Image"
                  fill
                />
              </div>

              {/* date */}
              <span className="opacity-65 text-[10px]">
                {/* texte discret + petit */}
                Mardi 03 Mars 2026
              </span>

              {/* titre article */}
              <strong className="article-title text-2xl">
                {/* style custom + taille */}
                Titre article
              </strong>

              <p className="opacity-65 line-clamp-4 text-xs">
                {/* texte atténué + limité à 3 lignes */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae alias totam, ut quos suscipit doloribus, molestiae
                dolor qui veritatis, officiis in. Repellat est obcaecati dolore
                veniam qui commodi quis eos?
              </p>
            
            </li>

            <li
            className="w-full flex flex-col gap-3 "
            >
              {/* image */}
              <div
                className="
                  relative           /* parent pour image fill */
                  w-full
                  aspect-video       /* ratio 16:9 */
                "
              >
                <Image
                  className="object-cover" /* image recadrée */
                  src="/blog.webp"
                  alt="Article Image"
                  fill
                />
              </div>

              {/* date */}
              <span className="opacity-65 text-[10px]">
                {/* texte discret + petit */}
                Mardi 03 Mars 2026
              </span>

              {/* titre article */}
              <strong className="article-title text-2xl">
                {/* style custom + taille */}
                Titre article
              </strong>

              <p className="opacity-65 line-clamp-4 text-xs">
                {/* texte atténué + limité à 3 lignes */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae alias totam, ut quos suscipit doloribus, molestiae
                dolor qui veritatis, officiis in. Repellat est obcaecati dolore
                veniam qui commodi quis eos?
              </p>
            
            </li>

            <li
            className="w-full flex flex-col gap-3 "
            >
              {/* image */}
              <div
                className="
                  relative           /* parent pour image fill */
                  w-full
                  aspect-video       /* ratio 16:9 */
                "
              >
                <Image
                  className="object-cover" /* image recadrée */
                  src="/blog.webp"
                  alt="Article Image"
                  fill
                />
              </div>

              {/* date */}
              <span className="opacity-65 text-[10px]">
                {/* texte discret + petit */}
                Mardi 03 Mars 2026
              </span>

              {/* titre article */}
              <strong className="article-title text-2xl">
                {/* style custom + taille */}
                Titre article
              </strong>

              <p className="opacity-65 line-clamp-4 text-xs">
                {/* texte atténué + limité à 3 lignes */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae alias totam, ut quos suscipit doloribus, molestiae
                dolor qui veritatis, officiis in. Repellat est obcaecati dolore
                veniam qui commodi quis eos?
              </p>
            
            </li>

            <li
            className="w-full flex flex-col gap-3 "
            >
              {/* image */}
              <div
                className="
                  relative           /* parent pour image fill */
                  w-full
                  aspect-video       /* ratio 16:9 */
                "
              >
                <Image
                  className="object-cover" /* image recadrée */
                  src="/blog.webp"
                  alt="Article Image"
                  fill
                />
              </div>

              {/* date */}
              <span className="opacity-65 text-[10px]">
                {/* texte discret + petit */}
                Mardi 03 Mars 2026
              </span>

              {/* titre article */}
              <strong className="article-title text-2xl">
                {/* style custom + taille */}
                Titre article
              </strong>

              <p className="opacity-65 line-clamp-4 text-xs">
                {/* texte atténué + limité à 3 lignes */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae alias totam, ut quos suscipit doloribus, molestiae
                dolor qui veritatis, officiis in. Repellat est obcaecati dolore
                veniam qui commodi quis eos?
              </p>
            
            </li>
          </ul>
          </div>
        </section>
      </main>
    </div>
  );
}