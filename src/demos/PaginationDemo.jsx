import { useState } from "react"
import Pagination from "../components/Pagination";

const PaginationDemo = () => {
  const [page, setPage] = useState(1);
  return (
    <Pagination
      current={page}
      setPage={setPage}
      total= {50}  
    />
  )
}

export default PaginationDemo