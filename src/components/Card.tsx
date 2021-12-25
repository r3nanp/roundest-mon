import { HTMLAttributes } from 'react'
import Image, { ImageProps } from 'next/image'
import { capitalizeFirstLetter } from 'utils/capitalizeFirstLetter'

type Props = HTMLAttributes<HTMLDivElement>

type CardProps = Props & {
  name: string
  image_url: string
  width: number
  height: number
  image?: ImageProps
}

export const Card = ({
  name,
  image_url,
  width,
  height,
  image,
  ...rest
}: CardProps) => {
  return (
    <div {...rest} className="h-64 w-64 flex flex-col">
      <Image
        {...image}
        src={image_url}
        width={width}
        height={height}
        alt={name}
        className="w-full"
      />

      <div className="text-xl text-center mt-[-2rem]">
        {capitalizeFirstLetter(name)}
      </div>
    </div>
  )
}
