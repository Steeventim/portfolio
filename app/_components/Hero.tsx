import { ComponentPropsWithoutRef } from "react";
import { Section } from "./Section";
// import { cn } from "@/lib/utils";
import Link from "next/link";
// import { Githubicon } from "./icons/Githubicon";
import { JSicon } from "./icons/JSicon";
import { Xicon } from "./icons/Xicon";
import { Code } from "./Code";

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] flex flex-col grap-2">
        <h2 className="font-bold text-4xl text-primary">Steeve Timnou</h2>
        <h3 className="font-extrabold text-2xl">Software developer</h3>
        <p className="text-base">
          I love creating content on{" "}
          <Link href="#">
            <Code className="inline-flex items-center gap-1">
              <JSicon size={15} className="inline" />
              JavaScript
            </Code>
          </Link>{" "}
          , currently working at
          <Link href="#">
            <Code className="inline-flex items-center gap-1">
              <Xicon size={15} className="inline" />
              Search Engine
            </Code>
          </Link>
          . Living in{" "}
          <Code className="inline-flex items-center gap-1">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Cameroon.svg/255px-Flag_of_Cameroon.svg.png"
              style={{ width: 15, height: "auto" }}
              alt="cmaeroon picture flag"
            />
            Cameroon
          </Code>
          .
        </p>
      </div>
      <div className="flex-[2] max-md:m-auto ml-auto">
        <img
          src="https://imgs.search.brave.com/Et-roXncdoIl8RN9bBPQG7nP7OS7pf3dnr5c-uvtAkQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEz/NTExODExNi9mci9w/aG90by9kcmFwZWF1/LWR1LWNhbWVyb3Vu/LndlYnA_YT0xJmI9/MSZzPTYxMng2MTIm/dz0wJms9MjAmYz0w/S20tekJSMmt3cXc4/ZGl3eVZfcnlqZ0lx/RkFXX1lLOERQbkg5/bUd2T0xNPQ"
          className="w-full h-auto max-w-xs max-md:w-56"
          alt="steeve's picture"
        />
      </div>
    </Section>
  );
};
