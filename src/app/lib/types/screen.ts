
import { Member } from './member';
import { Product } from './product';


/** React App State */

export interface AppRootState {
  homePage: HomePageState;
}
/** homepage */
export interface HomePageState {
    PopularDishes:Product[];
    NewDishes:Product[];
    topUsers:Member[];
}

/**products */
/** orders page */