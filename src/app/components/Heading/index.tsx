type headingProps = {
  title: string;
};
export default function Heading(props: headingProps) {
  return <h2>{props.title.toUpperCase()}</h2>;
}
