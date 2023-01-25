import "./style.css";
import {ReactComponent as SearchIcon} from "./ic-search.svg";
import {ReactComponent as CloseIcon} from "./ic-close-input.svg";
import { useState } from "react";




function Search({onSubmit: propsOnSubmit, onInput}) {
  const [inputText, setInputText] = useState('');
  const handleInput = (e) => {
    setInputText(e.target.value);
    onInput && onInput(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    propsOnSubmit(inputText);
    setInputText("");
  }

  const handleClearInput = (e) => {
    e.stopPropagation();
    setInputText("");
    onInput && onInput("");
  }
  return (
    <form className="search" onSubmit={handleFormSubmit}>
        <input type="text" className="search__input" placeholder="Поиск" value={inputText} onInput={handleInput}/>
        <button type="button" className="search__btn">
           {inputText && <SearchIcon className='search__icon' onClick={handleFormSubmit}/>}
           {inputText && <CloseIcon onClick={handleClearInput} className='search__icon-clear'/>} 
        </button>
    </form>
  )
}


export default Search;
