import React, { useState, useEffect, useMemo } from 'react';

import { Blocks } from './Blocks';

const Clock = React.memo(() => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, []);

  const hours = dateTime.getHours().toString().padStart(2, '0');
  const minutes = dateTime.getMinutes().toString().padStart(2, '0');
  const seconds = dateTime.getSeconds().toString().padStart(2, '0');

  const binaryHours10 = useMemo(() => toBinaryString(hours[0]).padStart(3, '0'), [dateTime]);
  const binaryHours1 = useMemo(() => toBinaryString(hours[1]).padStart(4, '0'), [dateTime]);
  const binaryMinutes10 = useMemo(() => toBinaryString(minutes[0]).padStart(3, '0'), [dateTime]);
  const binaryMinutes1 = useMemo(() => toBinaryString(minutes[1]).padStart(4, '0'), [dateTime]);
  const binarySeconds10 = useMemo(() => toBinaryString(seconds[0]).padStart(3, '0'), [dateTime]);
  const binarySeconds1 = useMemo(() => toBinaryString(seconds[1]).padStart(4, '0'), [dateTime]);

  return (
    <div>
      <div className="BlockArea">
        <Blocks value={binaryHours10} />
        <Blocks value={binaryHours1} />
        <Blocks value={binaryMinutes10} />
        <Blocks value={binaryMinutes1} />
        <Blocks value={binarySeconds10} />
        <Blocks value={binarySeconds1} />
      </div>
    </div>
  );
});

Clock.displayName = 'Clock';

const toBinaryString = (string: string) => parseInt(string, 10).toString(2);

export default Clock;
