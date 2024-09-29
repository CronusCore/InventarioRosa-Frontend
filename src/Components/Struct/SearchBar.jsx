

const SearchBar = ({Width, Height})=>{
    return(
        <input className='search-bar' type='text' placeholder='Busca tu producto favorito' style={{maxWidth: Width, height: Height, flexGrow:3}}/>
    );
};

export default SearchBar;