import Paginate from '../components/Pagination';
import { Categories } from '../components/Categories.jsx';
import { Sort } from '../components/Sort.jsx';
import { PizzaBlock } from '../components/PizzaBlock/index.tsx';
import { Skeleton } from '../components/PizzaBlock/Skeleton.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllPizzasFromDb } from '../redux/thunk/thunkPizzas';

import Selector from '../redux/selectors/Selector';
import { NavLink } from 'react-router-dom';

export const Home = () => {
  const activeIndex = useSelector(Selector.sortIndex);
  const sortItems = useSelector(Selector.sortItems);
  const activeCategory = useSelector(Selector.categoryIndex);

  const pizzaItems = useSelector(Selector.memoPizzaItems);
  const isLoading = useSelector(Selector.isLoading);

  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // const categoryIndex = activeCategory ? `category=${activeCategory}` : '';
    // const sortBy = activeIndex
    //   ? `sortBy=${sortItems[activeIndex].requestValue}&order=${sortItems[activeIndex].order}`
    //   : '';
    // const url = `https://62f600ee612c13062b4441c2.mockapi.io/sneakers/pizzas?page=${currentPage}&limit=8&${categoryIndex}&${sortBy}`;
    dispatch(getAllPizzasFromDb(currentPage));

    window.scrollTo(0, 0);
  }, [activeCategory, activeIndex, currentPage, sortItems, dispatch]);

  const skeleton = [...new Array(7)].map((_, index) => {
    return <Skeleton key={index} />;
  });

  const pizzas = pizzaItems.map((item) => {
    return (
      // <NavLink key={item?.id} to={`/${item.id}`}>
      <PizzaBlock key={item.id} {...item} />
      // </NavLink>
    );
  });

  return (
    <>
      <div className="content__top">
        <Categories activeCategory={activeCategory} />
        <Sort sortItems={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeleton : pizzas}</div>
      <Paginate setCurrentPage={setCurrentPage} />
    </>
  );
};
