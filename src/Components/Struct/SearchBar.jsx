import { useContext } from "react";



const SearchBar = ({Width, Height, Placeholder, handlerEnter})=>{

    return(
        <input className='search-bar' type='text' placeholder={Placeholder} style={{maxWidth: Width, height: Height, flexGrow:3}} onKeyDown={handlerEnter} />
    );
};

export default SearchBar;