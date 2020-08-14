import React from 'react';

// This usePrevious differs from react-use since it uses the provided state as initial value
function usePrevious(state: any) {
  const ref = React.useRef(state);
  React.useEffect(function() {
    ref.current = state;
  });
  return ref.current;
}

export default usePrevious;
