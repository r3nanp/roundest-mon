import { HTMLAttributes, ReactNode } from 'react'
import Image, { ImageProps } from 'next/image'

type Props = HTMLAttributes<HTMLDivElement>

type CardProps = Props & {
  name: string
  image_url: string
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
        src={image_url}
        width={width}
        height={height}
        alt={name}
        className="w-full"
      />

      <div className="text-xl text-center capitalize mt-[-2rem]">{name}</div>

      {children}
    </div>
  )
}
