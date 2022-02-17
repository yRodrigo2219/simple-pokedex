export default function Pokemon({ name, url }) {
  const betterName = name.charAt(0).toUpperCase() + name.slice(1);
  const pokeId = url.match(/\b[0-9]+/g)[0];
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`;

  return (
    <section className="pokemon">
      <img src={imgUrl} alt={name} />
      <div>
        <span>{betterName}</span>
        <span className="poke-id">#{pokeId.padStart(3, "0")}</span>
      </div>
    </section>
  );
}
