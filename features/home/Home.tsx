import Image from "next/image";
import Logo from "./components/Logo";
import DeployButton from "./components/DeployButton";
import DocsButton from "./components/DocsButton";
import FooterLink from "./components/FooterLink";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Logo />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <DeployButton />
          <DocsButton />
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <FooterLink
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          icon="/file.svg"
          alt="File icon"
        >
          Learn
        </FooterLink>
        <FooterLink
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          icon="/window.svg"
          alt="Window icon"
        >
          Examples
        </FooterLink>
        <FooterLink
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          icon="/globe.svg"
          alt="Globe icon"
        >
          Go to nextjs.org →
        </FooterLink>
      </footer>
    </div>
  );
}
