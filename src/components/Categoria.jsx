export default function Categoria(props) {
  console.log(props.categoria.nombre);
  return (
    <div>{props.categoria.nombre}</div>
  )
}
