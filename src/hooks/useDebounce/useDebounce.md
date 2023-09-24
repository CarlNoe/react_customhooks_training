## Exercise: Create a `useDebounce` React Hook

### Objective
The goal of this exercise is to create a custom React hook named `useDebounce`. This hook will delay the execution of a function or state updates. This is particularly useful in scenarios where you don't want rapid changes in a variable (like user input in a search field) to immediately trigger updates or API calls.

### Parameters

- **value (`any`)**: This is the value that you want to debounce. The value can be of any type—be it a string, a number, an object, or even an array.
  
- **delay (`number`)**: This is the delay time, specified in milliseconds. If the `value` does not change during this delay period, the latest value will be used.

### Return Values

- **debouncedValue (`any`)**: This is the debounced value. After the specified `delay` time has passed without any changes to the `value`, `debouncedValue` will be updated to reflect the latest value.

### Guidelines

1. **TypeScript**: Use TypeScript for type definitions to make the code robust and easier to understand.
  
2. **React Hooks**: Utilize React's `useState` and `useEffect` hooks to manage state and side-effects.
  
3. **Debounce Logic**: Implement the debounce logic using JavaScript's `setTimeout` and `clearTimeout` methods.

### Example Usage

Your hook should be usable in the following manner:

```typescript
const debouncedSearchTerm = useDebounce(searchTerm, 300);
```

### Bonus Points
1. Add JSDoc comments to describe the function, parameters, and return value.
2. Write unit tests to validate your hook's functionality.