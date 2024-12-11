```javascript
// pages/about.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/', undefined, { shallow: true }); // Use shallow: true 
  };
  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Go back to Home</button>
    </div>
  );
}
```
The solution involves adding the `shallow: true` option to the `router.push()` method. This option ensures that only the query parameters are updated during navigation, preventing the page from being fully reloaded. This can resolve the unexpected routing behavior issue.