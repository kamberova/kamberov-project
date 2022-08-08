
const Button = (props) => {

//     const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
//   const cartCtx = useContext(CartContext);

//   const { items } = cartCtx;

//   const numberOfCartItems = items.reduce((curNumber, item) => {
//     return curNumber + item.amount;
//   }, 0);

//   const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

//   useEffect(() => {
//     if (items.length === 0) {
//       return;
//     }
//     setBtnIsHighlighted(true);

//     const timer = setTimeout(() => {
//       setBtnIsHighlighted(false);
//     }, 300);

//     return () => {
//       clearTimeout(timer);
//     };
//   }, [items]);

//   return (
//     <button className={btnClasses} onClick={props.onClick}>
//       <span className={classes.icon}>
//         <CartIcon />
//       </span>
//       <span>Your Cart</span>
//       <span className={classes.badge}>{numberOfCartItems}</span>
//     </button>
//   );


return (
    <button className='custom-btn hover focus bg-color book-a-session'>Book now</button>
);

};

export default Button;