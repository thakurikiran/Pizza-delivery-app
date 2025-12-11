import React from "react";

function Button({ children, disabled, to, type }) {
  const base =
    " inline-block rounded-full bg-yellow-400  font-semibold tracking-wide text-stone-800 uppercase transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed  ";

  const styles = {
    primary: base + "px-4 py-3 sm:px-6 sm:py-4",

    small: base + " px-2 py-2 text-xs  md:px-5 md:py-2.4",
  };

  if (to)
    return (
      <button className={styles[type]} to={to}>
        {children}
      </button>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
