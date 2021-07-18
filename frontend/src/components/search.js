import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import '../styles/search.scss';

const Search = () => {
    return (
        <div className="search">
            <FontAwesomeIcon className="search-icon" icon={faSearch} />
            <input placeholder="Search" />
        </div>
    )
}

export default Search;