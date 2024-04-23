import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center min-h-96">
      <h1 className="text-5xl">💣 404 💣</h1>
      <p className="text-3xl">
        Zurück zur{' '}
        <Link to="/">
          <span className="underline">Homepage</span>
        </Link>
      </p>
    </div>
  );
}
export default NotFound;
