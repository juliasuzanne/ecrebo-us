import "/src/css/header.css";

export function MainTitle(props) {
  return <h1 className={`main_header ${props.header_color} ${props.extra_class}`}>{props.children}</h1>;
}
