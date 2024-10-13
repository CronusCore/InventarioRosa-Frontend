

const SearchBar = ({Width, Height, Placeholder})=>{
    return(
        <input className='search-bar' type='text' placeholder={Placeholder} style={{maxWidth: Width, height: Height, flexGrow:3}}/>
    );
};

export default SearchBar;