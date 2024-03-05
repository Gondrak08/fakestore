import Banner from "@/components/Banner";
export default function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Banner />
      {children}
    </>
  );
}
