import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="flex items-center justify-center content-center bg-red-200 min-h-full h-[100%]">
      <div className="self-center">
        <h1>Oh no, this route doesn't exist!</h1>
        <Link to="/">
          <h2>
            You can go back to the home page by
            <strong className="text-red-700"> clicking here </strong>, though!
          </h2>
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
