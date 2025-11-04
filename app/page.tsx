import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.linkedin} target="_blank">
        <Image
          src="/profile.webp"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium">
        Hey, I'm Tyler!
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>         
          I'm a recent graduate from the University of Central Florida's Burnett Honors College with a Bachelor of Science in Computer Science. 
          I'm now actively seeking opportunities as a Software Engineer or Machine Learning Engineer. 
          I'm eager to join a team where I can contribute to impactful projects and learn from experienced pros. 
          I love coding, especially with Python, JavaScript, TypeScript, Java, and C. 
          I am passionate about the training of language models, and the field of natural langauge processing.
        </p>
      </div>
    </section>
  );
}
