export default function Title({title, subtitle}) {
  return (
    <div>
      <h1 className="title"> {title} </h1>
      <h2 className="subTitle">{subtitle}</h2>
      <h1>{subtitle}</h1>
    </div>
  );
}
