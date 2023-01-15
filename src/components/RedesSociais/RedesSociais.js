import './RedesSociais.css'

const RedesSociais = () => {

  const ListaRedes = [
    {id: 1, urlNome: 'Github', url: 'https://www.github.com/saulo'},
    {id: 2, urlNome: 'Linkedin', url: 'https://www.github.com/saulo'},
    {id: 3, urlNome: 'Whatsapp', url: 'https://www.github.com/saulo'}
  ]

  const LinksRedes = ListaRedes.map((props) => 
    <div key={props.id} className='conteudo_links'> 
      <a href={props.url}> {props.urlNome} </a>
    </div>
  )

  return (
    <>
      {LinksRedes}
    </>
  );
}

export default RedesSociais;
