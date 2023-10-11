import { useSelector } from 'react-redux/es/hooks/useSelector';
import Selector from '../redux/selectors/Selector';
import { useDispatch } from 'react-redux';
import { setActiveCategory } from '../redux/slices/filter';

export const Categories = ({ activeCategory }) => {
  const categoriItems = useSelector(Selector.categoryItems);
  const dispatch = useDispatch();

  return (
    <div className="categories">
      <ul>
        {categoriItems &&
          categoriItems.map((item, index) => {
            return (
              <li
                className={activeCategory === index ? 'active' : ''}
                onClick={() => dispatch(setActiveCategory(index))}
                key={item}>
                {item}{' '}
              </li>
            );
          })}
      </ul>
    </div>
  );
};
