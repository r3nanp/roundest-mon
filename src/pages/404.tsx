import { useRouter } from 'next/router'
import { Button } from 'components'

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h2 className="tracking-wide text-xl">Not Found :(</h2>
      <p className="tracking-wide">
        The page that you&#8217;re looking for was not found.
      </p>

      <Button
        variant="inverse"
        className="my-2"
        onClick={() => router.push('/')}
      >
        Go to homepage
      </Button>
    </div>
  )
}
