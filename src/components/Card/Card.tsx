import { HTMLAttributes, ReactNode } from 'react'
import Image, { ImageProps } from 'next/image'

type Props = HTMLAttributes<HTMLDivElement>

export type CardProps = Props & {
  name: string
  image_url: string | null
  width: number
  height: number
  image?: ImageProps
  children: ReactNode
}

export const Card = ({
  name,
  image_url,
  width,
  height,
  image,
  children,
  ...rest
}: CardProps) => {
  return (
    <div {...rest} className="h-64 w-64 flex flex-col items-center">
      <Image
        {...image}
        src={image_url ?? '/blur.png'}
        width={width}
        height={height}
        alt={name}
        blurDataURL="/blur.png"
        placeholder="blur"
        className="w-full"
      />

      <div className="text-xl text-center capitalize mt-2">{name}</div>

      {children}
    </div>
  )
}
