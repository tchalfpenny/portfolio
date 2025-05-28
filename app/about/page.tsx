import { Metadata} from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Tyler's About Me",
};

export default function AboutMe(){
    return (
      <section>
        <h1 className="mb-8 text-2xl font-medium">About Me</h1>
          <div className="prose prose-neutral dark:prose-invert">
            <p>     
              Beyond my passion for coding, here are a few other things that make me, me.
              I have been playing piano for about 8 years.
              I am particularly fond of Chopin and currently working on Ballade No. 4 in F Minor, Op. 52.
              I enjoy traveling and have visited California, Peru, London, and Paris.
              In high school, I reached rank 1 on the Overwatch competitive ladder.
              In college I reached Diamond as an AD Carry main on League of Legends, while making the Dean's list each semester.
            </p>
          </div>
      </section>

    );
}