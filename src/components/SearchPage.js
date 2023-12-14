export default function SearchPage(props) {
    
   const theproducts = props.theproducts; 
    
    return (
        <div id="search-page">
            <h2 id="catálogo">Catálogo</h2>
            <div className="search-input-section">
            <p>Buscar</p>
            <input id="filtro"></input>
            <button id="buscador">Buscar</button>
            <p>Filtrar</p>
            <option>list of items</option>
            
            </div>
           
          <div id="productosresultados">
            <ul>
                {theproducts.map(item=>{
                    return <li className="unproducto" key={item.id}>
                        <p><img className="productoimg" alt={item.title} src={item.thumbnail} /></p>
                        <p><b>{item.title}</b></p>
                        <p>{item.description}</p>
                        <button>VER</button>
                    </li>
                })}
            </ul>
          </div>



        </div>
    )
}