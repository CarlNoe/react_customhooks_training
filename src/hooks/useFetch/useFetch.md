# Exercise: Create an Advanced `useFetch` React Hook

## Objective
Create a custom React hook named `useFetch` to simplify API fetching in your React components. Go beyond the basics to include advanced functionalities like refetching data based on conditions or triggers.

## Parameters
- `url` (`string`): The URL from which data will be fetched.
- `options` (`RequestInit` | `null`): An optional object for customizing the fetch request settings, like method, headers, etc.

## Return Values
- `data` (`any`): The fetched data. Should be `null` if data hasn't been fetched yet.
- `loading` (`boolean`): Whether data is currently being fetched.
- `error` (`Error | null`): An Error object if fetching fails, otherwise `null`.
- `refetch` (`Function`): A function to refetch data manually.

## Guidelines

### TypeScript
- Implement TypeScript for strong typing of parameters, return values, and internal variables.

### React Hooks
- Use `useState` and `useEffect` for state and side-effects management.
  
### Fetch API
- Leverage JavaScript's native fetch API for HTTP requests.

### Loading State
- Include a loading state to indicate if data is being fetched.

### Error Handling
- Implement robust error handling to catch and return errors if the fetch operation fails.

### Refetching Data
- Allow the hook to refetch data manually or based on some condition.

## Example Usage

```tsx
const { data, loading, error, refetch } = useFetch("https://api.example.com/items", null);
// To refetch data
refetch();
```

## Bonus

### JSDoc Comments
- Add JSDoc comments for function, parameters, and return values.

### Unit Tests
- Write unit tests to validate your hook's functionality, including edge cases for loading, error, and refetch scenarios.

### Caching Mechanism (Optional)
- Introduce a simple caching mechanism to avoid redundant API calls.