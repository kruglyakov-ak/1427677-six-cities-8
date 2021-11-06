import { useDispatch, useSelector } from 'react-redux';
import { changeSortType } from '../../store/action';
import { getCurrentSortType } from '../../store/offer-property/selectors';

type SortOptionItemProps = {
  sortType: string,
}

function SortOptionItem({ sortType }: SortOptionItemProps): JSX.Element {
  const currentSortType = useSelector(getCurrentSortType);
  const dispatch = useDispatch();

  const handleOptionClick = () => {
    dispatch(changeSortType(sortType));
  };

  return (
    <li className={currentSortType === sortType ?
      'places__option places__option--active' :
      'places__option'}
    tabIndex={0}
    onClick={handleOptionClick}
    >
      {sortType}
    </li>
  );
}

export default SortOptionItem;
