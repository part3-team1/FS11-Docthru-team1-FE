import AdaptiveHeader from "@/components/Layout/AdaptiveHeader/AdaptiveHeader";

export default function WithHeaderLayout({ children }) {
  return (
    <>
      <AdaptiveHeader />
      {children}
    </>
  );
}
