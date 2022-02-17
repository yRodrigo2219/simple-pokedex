import { useEffect, useRef } from "react";

export default function ErrorMessage({ show }) {
  const message = "PokéDex request error. Reload the page to try again!";
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current !== null && !!show) {
      if (typeof ref.current.showModal === "function") ref.current.showModal();
      else alert(message);
    }
  }, [show]);

  return (
    <section>
      <dialog className="nes-dialog" ref={ref}>
        <form method="dialog">
          <p className="title">PokéDex Error!</p>
          <p>{message}</p>
          <menu className="dialog-menu">
            <button className="nes-btn is-disabled" disabled>
              Make-me!
            </button>
            <button className="nes-btn is-error">Okay!</button>
          </menu>
        </form>
      </dialog>
    </section>
  );
}
