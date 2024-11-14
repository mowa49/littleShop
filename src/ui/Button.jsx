function Button({
  children,
  text = "Click Me!",
  color = "blue",
  fontSize = 12,
  handleClick,
}) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px",
  };

  return (
    <button onClick={handleClick} style={buttonStyle}>
      {children}
    </button>
  );
}

export default Button;
