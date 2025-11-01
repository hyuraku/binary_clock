import React, { FC, memo } from 'react';
import { Block } from './Block';

type BlocksProps = {
  value: string;
};

export const Blocks: FC<BlocksProps> = memo(({ value }) => {
  const valueArr = value.split('');
  const number = parseInt(value, 2);
  const blockList = valueArr.map((value: string, index: number) => (
    <Block key={index} value={value} />
  ));

  return (
    <div className="Blocks">
      {blockList}
      <h1>{number}</h1>
    </div>
  );
});

Blocks.displayName = 'Blocks';
