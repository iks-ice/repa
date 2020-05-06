import * as React from 'react';
import { ListItem } from './ListItem'

type ListProps = { arr: Array<any> };

const List = ({ arr }: ListProps) => {
  return (
    <div>
      {arr.map((el, index) => <ListItem key={index} el={el} />)}
    </div>
  )
}

export { List };
