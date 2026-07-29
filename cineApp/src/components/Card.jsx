import { Link } from "react-router-dom";
import PlaceHolder from "../assets/images/placeholder.jpg";
import BackupImg from "../assets/images/backupImg2.avif";

export const Card = ({ id, title, original_title, overview, poster_path }) => {
  const TMDB_IMG = "https://image.tmdb.org/t/p/w300";
  const img_path = TMDB_IMG ? `${TMDB_IMG}${poster_path}` : BackupImg;

  return (
    <div
      id="movie-card"
      className="dark:border-none bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs">
      <Link to="#">
        <img
          className="rounded-base"
          src={img_path || PlaceHolder}
          alt="movie-img"
        />
      </Link>
      <Link to="#">
        <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
          {title || original_title}
        </h5>
      </Link>
      <p className="mb-6 text-body">{overview}</p>
      <Link
        to="#"
        className="inline-flex items-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
        Read more
        <svg
          className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 12H5m14 0-4 4m4-4-4-4"
          />
        </svg>
      </Link>
    </div>
  );
};
