import NextHead from 'next/head'
import { useRouter } from 'next/router'

type HeadProps = {
  [x: string]: string
}

export const Head = (props: HeadProps) => {
  const router = useRouter()

  const { ...customMeta } = props

  const meta = {
    title: 'Roundest Pokémon',
    description: `Wanna find out what is the most roundest pokemon?.`,
    image: `https://roundest-poke.vercel.app/images/banner.png`,
    type: 'website',
    ...customMeta,
  }

  return (
    <>
      <NextHead>
        <title>{meta.title}</title>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="keywords" content="pokemon, r3nanp, roundest" />
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://roundest-poke.vercel.app/${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://roundest-poke.vercel.app/${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Roundest Pokemon" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </NextHead>
    </>
  )
}
