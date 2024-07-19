import { MapPin, Calendar, Users, ArrowRight, Trash } from 'lucide-react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export function App() {
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false);
  const [guests, setGuests] = useState('');
  const [savedData, setSavedData] = useState<{ destination: string; date: Date | null; guests: string } | null>(null);

  const handleContinue = () => {
    if (destination && startDate) {
      setIsGuestInputOpen(true);
    }
  };

  const handleSave = () => {
    const travelData = {
      destination,
      date: startDate,
      guests,
    };
    setSavedData(travelData); // Salva os dados no estado
    console.log('Travel Data:', travelData);
  };

  const handleReset = () => {
    setDestination('');
    setStartDate(null);
    setGuests('');
    setIsGuestInputOpen(false);
    setSavedData(null); // Limpa os dados salvos ao resetar
  };

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>

          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape">
            <div className="flex items-center gap-2 flex-1">
              <MapPin className="w-5 h-5 text-zinc-400" />
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Para onde você vai?"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              />
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-zinc-400" />
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText="Quando?"
                className="bg-transparent text-lg placeholder-zinc-400 w-auto outline-none"
                dateFormat="dd/MM/yyyy"
              />
            </div>

            <button
              onClick={handleContinue}
              className="bg-lime-300 text-lime-950 rounded-lg px-3 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
            >
              Continuar
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {isGuestInputOpen && (
            <div className="mt-4 bg-zinc-800 p-4 rounded-lg text-left space-y-4">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-zinc-400" />
                <input
                  type="text"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  placeholder="Quantos convidados?"
                  className="bg-transparent text-lg placeholder-zinc-400 w-auto outline-none"
                />
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={handleSave}
                  className="bg-blue-500 text-blue-50 rounded-lg px-3 py-2 font-medium flex items-center gap-2 hover:bg-blue-600"
                >
                  Salvar
                </button>
                <button
                  onClick={handleReset}
                  className="bg-red-500 text-red-50 rounded-lg px-3 py-2 font-medium flex items-center gap-2 hover:bg-red-600"
                >
                  Resetar
                  <Trash className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {savedData && (
            <div className="mt-4 bg-zinc-800 p-4 rounded-lg text-left">
              <h2 className="text-xl text-zinc-300 mb-2">Detalhes da Viagem</h2>
              <p className="text-zinc-400">Destino: {savedData.destination}</p>
              <p className="text-zinc-400">Data: {savedData.date?.toLocaleDateString()}</p>
              <p className="text-zinc-400">Convidados: {savedData.guests}</p>
            </div>
          )}

          <p className="text-sm text-zinc-500">
            Ao planejar sua viagem pela plann.er você automaticamente concorda com nossos <br />
            <a className="text-zinc-300 underline" href="#">
              termos de uso
            </a>{' '}
            e{' '}
            <a className="text-zinc-300 underline" href="#">
              políticas de privacidade
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
