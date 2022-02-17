import usePoke from "./hooks/usePoke";
import "nes.css/css/nes.min.css";

export default function App() {
  const { data, isFetching, error } = usePoke(150, 0);

  return <span className="nes-text is-primary">PokéDex</span>;
}
