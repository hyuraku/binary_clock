import React, { FC, memo } from 'react';

type BlockProps = {
  value: string;
};

export const Block: FC<BlockProps> = memo(({ value }) => {
  const blockColor = value === '1' ? 'BlackBlock' : 'WhiteBlock';
  return <div className={blockColor}></div>;
});

Block.displayName = 'Block';
