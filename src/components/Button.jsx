import classNames from "classnames"

const Button = (props) => {
  const { classFromProp, children, ...otherProps } = props

  return (
    <button className={classNames('p-2 hover:scale-110 bg-blue-500 m-2 rounded-md decoration-4 border-2 border-rose-200 text-white flex-1')} {...otherProps}>
      {children}
    </button>
  )
}

export default Button
