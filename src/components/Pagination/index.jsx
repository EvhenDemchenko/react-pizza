import ReactPaginate from 'react-paginate';
import styles from './Paginate.module.scss';

const Index = ({ setCurrentPage }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      previousLabel="<"
      nextLabel=">"
      onPageChange={(e) => setCurrentPage(e.selected + 1)}
      pageRangeDisplayed={8}
      pageCount={2}
      renderOnZeroPageCount={null}
    />
  );
};
export default Index;
