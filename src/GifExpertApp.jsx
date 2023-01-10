
import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState(['ONE PUNCH','GOKU']);
  
  const onAddCategory = ( newCategory ) => {


    if (categories.includes(newCategory)) return; 
    //categories.push(newCategory);
    setCategories ([ newCategory, ...categories ]); //1 forma para poder hacerla
    //setCategories ( cat => [ ...cat, 'Valorant' ]); //2 forma para poder hacerla

  } 

    return (
          <>
            <h1>GifExperApp</h1>
              
            < AddCategory 
               onNewCategory = {  event => onAddCategory(event)  }
            /> 
            {
              categories.map(( category ) => (
                <GifGrid 
                  key={ category } 
                  category={ category }  
                />
                  ))
            }
          </>
        )
}
