import { writable } from 'svelte/store';

// 1. Definición de tu clase Pokemon
export interface Pokemon {
    id: number;           // ID de la PokeAPI
    idInstancia: string;  // ID único para diferenciar capturas
    apodo: string;
    especie: string;
    nivel: number;
    tipos: string[];      // Soporta 1 o 2 tipos: ["agua"] o ["agua", "tierra"]
    sprite: string;
    hpMax: number;
    hpActual: number;
    stats: {
        hp: number;
        atk: number;
        def: number;
        spa: number;
        spd: number;
        spe: number;
    };
    ataques: string[];
}

// 2. Los "Almacenes" (Stores) que importamos en el Layout
// El equipo actual (los 6 círculos de tu dibujo)
export const equipoActual = writable<Pokemon[]>([]);

// El Pokémon que sale arriba en grande (el seleccionado)
export const pokemonDetalleSeleccionado = writable<Pokemon | null>(null);

// --- Extras para el futuro ---
export const juegoSeleccionado = writable<string | null>(null);
export const vidas = writable<number>(10);
export const pc = writable<Pokemon[]>([]);
export const cementerio = writable<Pokemon[]>([]);