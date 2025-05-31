import css from './ErrorMessage.module.css';
export default function ErrorMessage({
  message = 'Whoops, something went wrong! Please try reloading this page!',
}) {
  return (
    <>
      <p className={css.error}>{message}</p>
    </>
  );
}
