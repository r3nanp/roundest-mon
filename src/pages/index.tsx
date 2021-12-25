export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="my-2 text-2xl text-center">Which pokémon is Rounder?</div>
      <div className="border rounded p-8 flex items-center justify-between max-w-2xl">
        <div className="w-16 h-16 bg-red-200"></div>
        <div className="p-8">Vs</div>
        <div className="w-16 h-16 bg-red-200"></div>
      </div>
    </div>
  )
}
