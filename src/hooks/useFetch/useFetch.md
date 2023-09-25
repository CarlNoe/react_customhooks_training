## Exercise: Create a `useFetch` React Hook

### Objective
The goal of this exercise is to create a custom React hook named `useFetch` that will make it easier to fetch data from APIs in your React components.

### Parameters

- **url (`string`)**: The URL from which data needs to be fetched.
- **options (`RequestInit`)**: An optional object that allows you to control various settings of the fetch request (e.g., method, headers).

### Return Values

- **data (`any`)**: The data retrieved from the API. This will be `null` if the data is not yet fetched.
- **loading (`boolean`)**: Indicates whether the data is currently being fetched.
- **error (`Error | null`)**: An Error object if the fetch fails, otherwise `null`.

### Guidelines

1. **TypeScript**: Use TypeScript to enforce types on the parameters, return values, and inside the hook. This will make the code more robust.
  
2. **React Hooks**: Utilize React's `useState` and `useEffect` hooks to manage state and side-effects.
  
3. **Fetch API**: Use JavaScript's native `fetch` API to handle the HTTP request.

4. **Loading State**: The hook should maintain a loading state that indicates whether data is being fetched.

5. **Error Handling**: The hook should be capable of catching and returning errors if the fetch operation fails.

### Example Usage

Your hook should be usable in the following manner:

```typescript
const { data, loading, error } = useFetch("https://api.example.com/items");
```