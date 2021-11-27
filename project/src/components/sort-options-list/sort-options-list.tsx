import SortOptionItem from '../sort-option-item/sort-option-item';
import { SortType } from '../../const';

type SortOptionsListProps = {
  isSortOptionsOpen: boolean,
}

function SortOptionsList({ isSortOptionsOpen }: SortOptionsListProps): JSX.Element {
  return (
    <ul className={isSortOptionsOpen ?
      'places__options places__options--custom places__options--opened' :
      'places__options places__options--custom'}
    >
      {Object.values(SortType).map((sortType) => (
        <SortOptionItem
          sortType={sortType}
          key={sortType}
        />))}
    </ul>
  );
}

export default SortOptionsList;
