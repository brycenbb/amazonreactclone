import { createContext } from 'react';

export const searchContext = createContext();

//The shape of this object is unknown as of now, but i imagine it would include item IDs, pics, count they want to buy, and price
export const cartContext = createContext();
export const laterContext = createContext();
