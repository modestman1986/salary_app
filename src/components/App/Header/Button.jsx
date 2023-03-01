import classNames from "classnames";

const Button = (props) => {
  const { classFromProp, children, href, ...otherProps } = props;

  return (
    <button
      className={classNames(
        "p-2 hover:scale-110 bg-blue-500 m-2 rounded-md decoration-4 border-2 border-rose-200 text-white flex-1"
      )}
      {...otherProps}
    >
      <a href={href} className="App-link" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </button>
  );
};

export default Button;
