import React, { useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';

export const TransitionFadeInOnMount = props => {
  const [inProp, setInProp] = useState(false);

  const duration = 300;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0
  };

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 }
  };

  useEffect(() => {
    setInProp(true);
  }, []);

  return (
    <Transition in={inProp} timeout={500}>
      {state =>
        props.render({
          ...defaultStyle,
          ...transitionStyles[state]
        })
      }
    </Transition>
  );
};
