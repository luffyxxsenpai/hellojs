import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>luffy senpai</Title>
      <h1>Hello Space!</h1>
      <p><a href="https://ai.luffysenpai.space" target="_blank">ONE-IMAGE</a></p>
      <p><a href="https://notes.luffysenpai.space" target="_blank">NOTES</a></p>
      <p><a href="https://drive.google.com/drive/folders/1MA3LTJ1yhpo0P0yRCWHktQSlFBKvFeH2" target="_blank">BCA</a></p> 
      <Counter />
    </main>
  );
}
