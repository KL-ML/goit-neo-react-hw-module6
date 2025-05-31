import { Suspense } from 'react';
import css from './NotFoundPage.module.css';
import { Link, Outlet } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <>
      <div className={css.notFoundContainer}>
        <h1 className={css.headerNotFound}>404</h1>
        <p className={css.textNotFound}>Ow No! The page is not found...</p>
        <img
          className={css.notFoundImg}
          // src="./src/images/animation-337.gif"
          src='https://i.ibb.co/dJfRPr3k/animation-337.gif'
          width="400"
          height="400"
        />
        <Link to="/" className={css.goBack}>
          Go back
        </Link>
      </div>
    </>
  );
}
