import React from "react";
import { useRouter } from "next/router";
import PageLayout from "@/components/page-layout/page-layout";

export default function Success() {
  const router = useRouter();

  return (
    <PageLayout>
      <h1>Movie Submitted Successfully</h1>
      <p>Thank you for submitting the movie!</p>
      <button onClick={() => router.push("/insert")}>
        Go back to movie list
      </button>
    </PageLayout>
  );
}
