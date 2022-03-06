import "../App.css";
// delays a function from happening immediately
const myDebounce = (cb, d) => {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, d);
  };
};
const handleChange = myDebounce((e) => {
  console.log(e.target.value);
}, 1000);

export default function Debounce() {
  return (
    <div className="box">
      <p className="p">Input with Debounce</p>
      <input onChange={handleChange} />
    </div>
  );
}
