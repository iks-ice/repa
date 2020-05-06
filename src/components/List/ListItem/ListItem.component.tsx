import * as React from 'react';

type ItemProps = { el: any, key: number };

const ListItem = ({ el, key }: ItemProps) => {
  return (
    <div key={key}>
      {el}
    </div>
  )
}

export { ListItem };
