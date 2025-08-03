import { memo, useCallback,  useState } from "react";


/**
* | `useCallback` is useful when:                           |
| --------------------------------------------------------  |
| ✅ Passing functions to memoized child components         |
| ✅ Preventing unnecessary re-renders                      |
| ✅ Avoiding re-triggering of effects that depend on funcs |

*/


/**
 * | `useCallback vs useMemo` Difference Between
 * -----------------------------------------------  
 * `UseMemo` Use For *String ,Number , Object Array etc. - its Memorize expensive calculation. its Runs When You Given A Dipendency *  Changed  |
 * `UseCallBack` Use For Function Return - its Memorize Function if Components Re-render. its Runs When You Given A Dipendency * * *  Changed   |
 */
const UseCallback = () => {
  const [count, setCount] = useState(0);

  const click = useCallback(() => {
    console.log("Click ME !");
  }, []);

  return (
    <div>
      UseCallBack
      <br></br>
      <br></br>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
      <br></br>
      <br></br>
      <Demo click={click} />
    </div>
  );
};

const Demo = memo(function ({ click }) {
  return <button onClick={click}>console</button>;
});

export default UseCallback;
