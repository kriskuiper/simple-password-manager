import { ReactNode } from "react";

function DefaultLayout({ children }: { children: ReactNode }) {
  return <div className="max-w-md mx-auto px-4 py-10">{children}</div>;
}

export default DefaultLayout;
