export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center">
      <div className="text-2xl text-center">Which pokémon is Rounder?</div>
      <div className="border rounded p-8 flex justify-between max-w-2xl">
        <div className="w-16 h-16 bg-red-200"></div>
        <div>Vs</div>
        <div className="w-16 h-16 bg-red-200"></div>
      </div>
    </div>
  )
}
