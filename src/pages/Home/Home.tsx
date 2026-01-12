import Counter from '@/features/counter/Counter';
import { Button } from '@fluentui/react-components';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Button appearance="primary">Fluent UI Button</Button>
      <br />
      <Counter />
    </div>
  );
}
