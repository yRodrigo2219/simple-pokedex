import usePoke from "./hooks/usePoke";
import Pokemon from "./components/Pokemon";
import Pagination from "./components/Pagination";
import "nes.css/css/nes.min.css";
import { useState } from "react";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";
import Header from "./components/Header";

export default function App() {
  const itemsPerPage = 10;
  const [currentOffset, setCurrentOffset] = useState(0);
  const { data, isFetching, error } = usePoke(itemsPerPage, currentOffset);

  return (
    <>
      <Header />
      <div className="container">
        <section className="nes-container with-title">
          <h3 className="title">PokéDex</h3>
          <ErrorMessage show={error} />

          {isFetching ? (
            <Loading />
          ) : (
            <div className="item" id="poke-list">
              {data?.results.map(({ name, url }) => (
                <Pokemon name={name} url={url} key={name} />
              ))}
            </div>
          )}

          <Pagination
            postsPerPage={itemsPerPage}
            totalPosts={150}
            paginate={(pageNumber) =>
              setCurrentOffset((pageNumber - 1) * itemsPerPage)
            }
          />
        </section>
      </div>
    </>
  );
}
