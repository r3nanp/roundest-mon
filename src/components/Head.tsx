import NextHead from 'next/head'

type HeadProps = {
  title: string
}

export const Head = ({ title }: HeadProps) => {
  return (
    <>
      <NextHead>
        <title>{title}</title>

        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="keywords" content="pokemon, r3nanp, roundest" />
        <meta name="description" content="Check the most roundest pokémon." />
      </NextHead>
    </>
  )
}
