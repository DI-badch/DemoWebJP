export function TitleComponent({ title = "" }: { title: string }) {
  return (
    <h1 className="md:di-pl-8 font-mplus di-font-bold md:di-text-[64px] di-text-[48px] di-from-main-blue di-via-main-gradientB di-to-main-gradientA di-bg-gradient-to-r di-bg-clip-text di-text-transparent">
      {title}
    </h1>
  );
}
