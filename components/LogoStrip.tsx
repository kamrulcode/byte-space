import { Waves, Sun, Zap, CircleDot, Globe } from "lucide-react";

const brands = [
  { name: "Logoipsum", Icon: Waves },
  { name: "Logoipsum", Icon: Sun },
  { name: "Logoipsum", Icon: Zap },
  { name: "Logoipsum", Icon: CircleDot },
  { name: "Logoipsum", Icon: Globe },
];

export default function LogoStrip() {
  return (
    <section className="logo-strip mainContainer">
      <div className="flex  items-center justify-between gap-10 px-4">
        {brands.map(({ name, Icon }, index) => (
          <div
            key={index}
            className="flex shrink-0 items-center gap-1 text-[#858991]"
          >
            <Icon size={41} strokeWidth={3} />
            <span className="text-xl font-bold tracking-tight">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
