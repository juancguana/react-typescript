import { useEffect, useRef, useState } from 'react';

type TimmerArgs = {
  milisegundos: number;
};

export const Timer = ({ milisegundos }: TimmerArgs) => {
  const [segundos, setSegundos] = useState(0);
  const ref = useRef<NodeJS.Timeout>();

  useEffect(() => {
    ref.current && clearInterval(ref.current);
    ref.current = setInterval(() => setSegundos((s) => s + 1), milisegundos);
  }, [milisegundos]);

  return (
    <>
      <h4>
        Timer: <small>{segundos}</small>
      </h4>
    </>
  );
};
