import 'bootstrap-icons/font/bootstrap-icons.css';
import {Input, SearchContainer} from './styledComponents';


const SearchForm = () =>{


    const handle = (evt) => {
if (evt.keyCode === 32) {
    evt.preventDefault();
    console.log
}

return(
    <SearchContainer>
        <input onKeyDown={handle} />
        <SearchIcon />
    </SearchContainer>
)    

}

export default SearchForm