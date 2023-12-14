import React from "react";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { INSERT_MOVIE } from "@/queries/insertMovie";
import { MovieFormData } from "@/types";
import styles from "./movie-form.module.scss";

const MovieForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MovieFormData>();
  const [insertMovie] = useMutation(INSERT_MOVIE);
  console.log(errors);

  const onSubmit: SubmitHandler<MovieFormData> = async (data) => {
    try {
      await insertMovie({
        variables: {
          episodeID: data.episodeID,
          director: data.director,
          releaseDate: data.releaseDate,
          title: data.title,
        },
      });
      router.push("/movie/success");
    } catch {
      router.push("/movie/fails");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Title:</label>
        <input
          {...register("title", { required: "Title field is required" })}
        />
        {errors.title && (
          <span className={styles.error}>{errors.title.message as string}</span>
        )}
      </div>
      <div>
        <label>Episode id:</label>
        <input
          {...register("episodeID", {
            required: "Episode ID field is required",
          })}
        />
        {errors.episodeID && (
          <span className={styles.error}>
            {errors.episodeID.message as string}
          </span>
        )}
      </div>
      <div>
        <label>Director:</label>
        <input
          {...register("director", { required: "Director field is required" })}
        />
        {errors.director && (
          <span className={styles.error}>
            {errors.director.message as string}
          </span>
        )}
      </div>
      <div>
        <label>Release Date:</label>
        <input
          type="date"
          {...register("releaseDate", {
            required: "Release Date field is required",
          })}
        />
        {errors.releaseDate && (
          <span className={styles.error}>
            {errors.releaseDate.message as string}
          </span>
        )}
      </div>
      <button type="submit" className={styles.submit}>
        Add Movie
      </button>
    </form>
  );
};

export default MovieForm;
