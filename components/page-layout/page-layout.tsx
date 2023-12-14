import Head from "next/head";
import { ReactNode } from "react";
import Navigation from "../navigation/navigation";

interface PageLayoutProps {
  children?: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <Head>
        <title>IMDb-style-app</title>
        <meta name="description" content="IMDb-style-app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header>
        <Navigation />
      </header>
      <main className="layout">{children}</main>
    </>
  );
}
