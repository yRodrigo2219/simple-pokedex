export default function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++)
    pageNumbers.push(i);

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber}>
            <a
              href="#"
              onClick={() => paginate(pageNumber)}
              className="nes-btn"
            >
              {pageNumber}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
