import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello Space!</h1>
      <p><a href="https://ai.luffysenpai.space">ONE-IMAGE</a></p> <br />
      <p><a href="https://nots.luffysenpai.space">NOTES</a></p>    
      <Counter />
    </main>
  );
}
