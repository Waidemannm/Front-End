export default function Card(props:{nomeProps:string,emailProps:string,telProps:string,imgProps:string}){
  return(
    <div>
      <h2>Nome do cliente:{props.nomeProps}</h2>
      <p>Email:{props.emailProps}</p>
      <p>Telefone:{props.telProps}</p>
      <img src={props.imgProps} alt={props.nomeProps} width={50} />
      <hr />
    </div>
  );
}