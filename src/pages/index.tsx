import { useState } from 'react'

import { Card, Head, Spinner, Button } from 'components'
import { getOptionsForVote } from 'utils/getRandomPokemon'
import { trpc } from 'utils/trpc'

export default function Home() {
  const [ids, setIds] = useState(() => getOptionsForVote())

  const [first, second] = ids

  const firstPokemon = trpc.useQuery(['get-pokemon-by-id', { id: first }])
  const secondPokemon = trpc.useQuery(['get-pokemon-by-id', { id: second }])

  if (firstPokemon.isLoading && secondPokemon.isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Spinner className="text-slate-300" />
      </div>
    )
  }

  if (!firstPokemon.data || !secondPokemon.data) return null

  const voteForRoundest = (selected: number) => {
    //fires mutation

    setIds(getOptionsForVote())
  }

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <Head title="Roundest Pokémon" />

      <div className="my-2 text-2xl text-center">Which pokémon is Rounder?</div>
      <div className="border rounded p-8 flex items-center justify-between max-w-2xl">
        <Card
          image_url={firstPokemon.data?.sprites.front_default}
          name={firstPokemon.data?.name}
          width={500}
          height={500}
        >
          <Button
            variant="inverse"
            size="sm"
            onClick={() => voteForRoundest(first)}
          >
            Rounder
          </Button>
        </Card>

        <div className="p-8">VS</div>
        <Card
          image_url={secondPokemon.data?.sprites.front_default}
          name={secondPokemon.data?.name}
          width={500}
          height={500}
        >
          <Button
            variant="inverse"
            size="sm"
            onClick={() => voteForRoundest(second)}
          >
            Rounder
          </Button>
        </Card>
        <div className="p-2"></div>
      </div>
    </div>
  )
}
