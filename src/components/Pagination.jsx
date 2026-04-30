import "./Pagination.css"

const Pagination = ({ current, setPage, total = 100 }) => {

    const handlePageStart = () => setPage(1);
    const handlePageEnd = () => setPage(total);
    const handlePageNum = (num) => setPage(num);
    const handlePrev = () => setPage(prev => Math.max(prev - 1, 0));
    const handleNext = () => setPage(prev => Math.min(prev + 1, total));

    const indices = current === 1
        ? [1, 2, 3]
        : current === total
            ? [total - 2, total - 1, total]
            : [current - 1, current, current + 1];

    return (
        <div className="pagination-container">
            <button
                className="pagination-btn"
                onClick={handlePageStart}
                disabled={current === 1}
            >
                {"<<"}
            </button>
            <button
                className="pagination-btn"
                onClick={handlePrev}
                disabled={current === 1}
            >
                {"<"}
            </button>
            {indices.map(pageNum => (
                <button
                    key={pageNum}
                    className={`pagination-btn ${pageNum === current ? "active" : ""}`}
                    onClick={() => handlePageNum(pageNum)}
                >
                    {pageNum}
                </button>
            ))}
            <button
                className="pagination-btn"
                onClick={handleNext}
                disabled={current === total}
            >
                {">"}
            </button>
            <button
                className="pagination-btn"
                onClick={handlePageEnd}
                disabled={current === total}
            >
                {">>"}
            </button>
        </div>
    )
}

export default Pagination