import { HTMLAttributes, ReactNode } from 'react'
import Image, { ImageProps } from 'next/image'
import { motion, MotionProps } from 'framer-motion'

import { inferQueryResponse } from 'pages/api/trpc/[trpc]'
import { Button } from 'components'

type PokemonFromServer = inferQueryResponse<'get-pokemon-by-id'>

type Props = MotionProps & HTMLAttributes<HTMLDivElement>

export type CardProps = Props & {
  pokemon: PokemonFromServer
  width: number
  height: number
  vote: () => void
  image?: ImageProps
}

export const Card = ({
  pokemon,
  height,
  width,
  image,
  vote,
  ...rest
}: CardProps) => {
  return (
    <motion.div
      {...rest}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="h-64 w-64 flex flex-col items-center"
    >
      <Image
        {...image}
        src={pokemon.sprites.front_default ?? '/blur.png'}
        width={width}
        height={height}
        alt={pokemon.name}
        blurDataURL="/blur.png"
        placeholder="blur"
        className="w-full"
      />

      <div className="text-xl text-center capitalize mt-2">{pokemon.name}</div>

      <Button onClick={vote} variant="inverse" size="sm">
        Rounder
      </Button>
    </motion.div>
  )
}
