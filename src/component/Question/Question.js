import React from "react";

const Question = () => {
  return (
    <div>
      <h1>Questions & Answers</h1>
      <div>
        <h3>How Does React work?</h3>
        <p>
          React implements a virtual DOM that is basically a DOM tree
          representation in JavaScript. So when it needs to read or write to the
          DOM, it will use the virtual representation of it.Then the virtual DOM
          will try to find the most efficient way to update the browser’s DOM.
          <br />
          It uses diff algorithms to counter changes. The core of diff
          algorithms to compare two sequences and to discover how the first can
          be transformed into the second by a sequence of operations using the
          primitives delete-subsequence, and insert-subseqence.
        </p>
      </div>
      <div>
        <h3>What are the differences between Props and State?</h3>
        <p>
          State: 1. states are mutable. <br /> 2. states are associated with the
          individual components can't be used by other components. <br /> 3.
          states are initialize on component mount. <br /> 4. states are used
          for rendering dynamic changes within component.
          <br /> <br />
          Props: 1. props are immutable. 2. We can pass props between
          components. 3. We can pass from parent to child directly. For passing
          from child to parent we need use concept of lifting up states.
        </p>
      </div>
      <div>
        <h3>What are the uses of useEffect hook in React?</h3>
        <p>
          1. Dependencies argument: dependencies argument of useEffectcallback,
          dependencies let us control when the side-effect runs. <br /> 2.
          Component lifecycle <br /> 3. Side-effect cleanup: Some side-effects
          need cleanup: close a socket, clear timers.
        </p>
      </div>
    </div>
  );
};

export default Question;
