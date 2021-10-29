import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import { changeSortType } from '../../store/action';
import { Actions } from '../../types/action';
import { State } from '../../types/state';

type SortOptionItemProps = {
  sortType: string,
}

const mapStateToProps = ({ currentSortType }: State) => ({
  currentSortType,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onChangeSortType(type: string) {
    dispatch(changeSortType(type));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & SortOptionItemProps;

function SortOptionItem({ sortType, currentSortType, onChangeSortType }: ConnectedComponentProps): JSX.Element {
  const handleOptionClick = () => {
    onChangeSortType(sortType);
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

export default connector(SortOptionItem);
