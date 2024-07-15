import { MapPin, Calendar, ArrowRight } from 'lucide-react'
import { useState } from 'react'

export function App() {
  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false)

  function openGuestsInput() {
    setIsGuestInputOpen(true)
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">

          <div className="flex flex-col items-center gap-3">
            <img src="/logo.svg" alt="plann.er" />
            <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
          </div>

          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape">
            <div className="flex items-center gap-2 flex-1">
              <MapPin className="w-5 h-5 text-zinc-400" />
              <input type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
            </div>

            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape">
              <Calendar className="w-5 h-5 text-zinc-400" />
              <input type="text" placeholder="Quando?" className="bg-transparent text-lg placeholder-zinc-400 w-auto outline-none" />
            </div>
            
            <div className="w-px h-6 bg-zinc-800" />

            <button onClick={openGuestsInput} className="bg-lime-300 text-lime-950 rounded-lg px-3 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
              Continuar
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {isGuestInputOpen ? 'aberto' : 'fechado'}
        </div>

        <p className="text-sm text-zinc-500">Ao planejar sua viagem pela plann.er você automaticamente concorda com nossos <br />
          <a className="text-zinc-300 underline" href="#">termos de uso</a> e <a className="text-zinc-300 underline" href="#">políticas de privacidade.</a>
        </p>
      </div>
    </div>
  )
}
