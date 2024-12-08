import { title, subtitle } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Best &nbsp;</span>
        <span className={title({ color: "violet" })}>
          Monitoring Apps &nbsp;
        </span>
        <br />
        <span className={title()}>for hydroponic IOT</span>
        <div className={subtitle({ class: "mt-4" })}>
          Welcome to FindHydroPro Monitoring App
        </div>
      </div>
    </section>
  );
}
