import { Code } from "./Code";
import { OpenLogo } from "./icons/OpenLogo";
import { ReactLogo } from "./icons/ReactLogo";
import { TailwindLogo } from "./icons/TailwindLogo";
import { Section } from "./Section";
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Skills</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {" "}
        I love working on...
      </h2>
      <div className="flex max-md:flex-col gap-4">
        <div className="flex flex-col gap-2">
          <ReactLogo
            size={42}
            className="animate-spin"
            style={{
              animationDuration: "10s",
            }}
          />
          <h3 className="text-2xl font-semibold tracking-tight">React</h3>
          <p className="text-sm text-muted-foreground">
            My main framework is <Code>React</Code>. I also <Code>Next.js</Code>{" "}
            as a backend and frontend framework
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <OpenLogo
            size={42}
            style={{
              animationDuration: "10s",
            }}
          />
          <h3 className="text-2xl font-semibold tracking-tight">OpenAI</h3>
          <p className="text-sm text-muted-foreground">
            I am an expert of integrating AI in your application to create a
            perfect <u>use experience</u>.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <TailwindLogo
            size={42}
            style={{
              animationDuration: "10s",
            }}
          />
          <h3 className="text-2xl font-semibold tracking-tight">Tailwind</h3>
          <p className="text-sm text-muted-foreground">
            I can create <u>Beautiful</u> application <i>in seconds</i> using{" "}
            <Code>TailwindCSS</Code>.
          </p>
        </div>
      </div>
    </Section>
  );
};
