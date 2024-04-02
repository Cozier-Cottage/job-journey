import { atom } from 'jotai';

export const pokemonAtom = atom(async () =>
	fetch(URL).then((resp) => resp.json())
);
export const filterAtom = atom('');
export const selectedPokemonAtom = atom(null);
export const filteredPokemonAtom = atom((get) =>
	get(pokemonAtom).filter((pokemon) =>
		pokemon.name.toLowerCase().includes(get(filterAtom).toLowerCase())
	)
);