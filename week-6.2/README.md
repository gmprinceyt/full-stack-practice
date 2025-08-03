list of the **most commonly used and important hooks**, along with what they do and real-world use cases:

---

## 🏆 Top Essential React Hooks (Used Daily in Production)

### 1. **`useState`**

* **What it does**: Adds local state to functional components.
* **Use case**: Managing input fields, toggle states, modal visibility, etc.

```tsx
const [count, setCount] = useState(0);
```

> Used in **almost every component**.

---

### 2. **`useEffect`**

* **What it does**: Runs side effects (e.g., data fetching, event listeners).
* **Use case**: Fetching API data, setting document titles, cleaning up intervals.

```tsx
useEffect(() => {
  fetchData();
}, []);
```

> Used in components that do **side effects** like API calls or subscriptions.

---

### 3. **`useContext`**

* **What it does**: Accesses global data (like theme, auth, user).
* **Use case**: User authentication, theme switchers, language preferences.

```tsx
const user = useContext(UserContext);
```

> Great for **global/shared state** without prop drilling.

---

### 4. **`useMemo`**

* **What it does**: Memoizes expensive calculations.
* **Use case**: Caching filtered lists, large computations, derived state.

```tsx
const filteredList = useMemo(() => {
  return items.filter(...);
}, [items]);
```

> Helps **optimize performance** by avoiding recalculations.

---

### 5. **`useCallback`**

* **What it does**: Memoizes callback functions.
* **Use case**: Preventing re-renders in memoized child components, stable refs in `useEffect`.

```tsx
const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);
```

> Use when passing **callbacks to memoized children**.

---

### 6. **`useRef`**

* **What it does**: References DOM elements or persists mutable values.
* **Use case**: Accessing DOM nodes, storing timers or previous values.

```tsx
const inputRef = useRef<HTMLInputElement>(null);
```

> Common in **form handling, animations, or timers**.

---

### 7. **`useReducer`**

* **What it does**: Manages complex state logic (alternative to useState).
* **Use case**: Handling forms, toggle systems, step flows, etc.

```tsx
const [state, dispatch] = useReducer(reducer, initialState);
```

> Best for **large/structured state**.

---

## ⚙️ Bonus Hooks You’ll See Often

| Hook                  | When to Use                                                     |
| --------------------- | --------------------------------------------------------------- |
| `useLayoutEffect`     | For DOM reads/writes before paint (like animations)             |
| `useImperativeHandle` | When exposing functions to parent (e.g., `ref.current.focus()`) |
| `useTransition`       | For deferring non-urgent updates                                |
| `useId`               | For generating unique IDs (accessibility)                       |
| `useDeferredValue`    | For delaying updates to improve UI responsiveness               |

---

## ✅ TL;DR: Must-Know Hooks for Daily Use

| Category         | Hooks                          |
| ---------------- | ------------------------------ |
| **State**        | `useState`, `useReducer`       |
| **Side Effects** | `useEffect`, `useLayoutEffect` |
| **Context**      | `useContext`                   |
| **Performance**  | `useMemo`, `useCallback`       |
| **Refs**         | `useRef`                       |
| **UI Behavior**  | `useTransition`, `useId`       |

---

