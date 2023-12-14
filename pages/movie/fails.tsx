import React from "react";
import { useRouter } from "next/router";
import PageLayout from "@/components/page-layout/page-layout";

export default function Fails() {
  const router = useRouter();

  return (
    <PageLayout>
      <h1>Movie Submission Failed</h1>
      <p>There was an error submitting the movie.</p>
      <button onClick={() => router.push("/insert")}>
        Go back to submission page
      </button>
    </PageLayout>
  );
}
