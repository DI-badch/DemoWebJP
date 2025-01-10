export function TitleComponent({ title = "" }: { title: string }) {
  return (
    <h1 className="font-mplus di-font-bold xl:di-text-[64px] lg:di-text-[56px] md:di-text-[40px] di-text-[32px] di-from-main-blue di-via-main-gradientB di-to-main-gradientA di-bg-gradient-to-r di-bg-clip-text di-text-transparent">
      {title}
    </h1>
  );
}
