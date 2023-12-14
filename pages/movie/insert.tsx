import MovieForm from "@/components/movie-form/movie-form";
import PageLayout from "@/components/page-layout/page-layout";

export default function Insert() {
  return (
    <PageLayout>
      <h2 className="title">Add movie</h2>
      <MovieForm />
    </PageLayout>
  );
}
