type SortOptionItemProps = {
  sortType: string,
}

function SortOptionItem({ sortType }: SortOptionItemProps): JSX.Element {
  return (
    <li className="places__option" tabIndex={0}>{sortType}</li>
  );
}

export default SortOptionItem;
