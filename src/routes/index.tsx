import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello Space!</h1>
      <p><a href="https://ai.luffysenpai.space" target="_blank">ONE-IMAGE</a></p>
      <p><a href="https://notes.luffysenpai.space" target="_blank">NOTES</a></p>    
      <Counter />
    </main>
  );
}
