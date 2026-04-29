<script lang="ts">
    import "../../app.css";
    import {
        equipoActual,
        pokemonDetalleSeleccionado,
        type Pokemon,
    } from "$lib/store";
    import TypeIcon from "$lib/components/TypeIcon.svelte";

    function seleccionar(pokemon: Pokemon) {
        pokemonDetalleSeleccionado.set(pokemon);
    }
</script>

<div
    class="flex h-screen w-full bg-[#1a1c23] text-slate-300 overflow-hidden font-sans"
>
    <main class="flex-1 overflow-y-auto -10 bg-[#242731] shadow-inner">
        <slot />
    </main>

    <aside
        class="w-28 border-l border-black/40 bg-[#1e2128] flex flex-col items-center py-8 gap-6 shadow-[inset_1px_0_0_rgba(255,255,255,0.05)] relative"
    >
        <div class="flex flex-col gap-6 relative z-10">
            {#each Array(6) as _, i}
                {@const pokemon = $equipoActual[i]}
                {@const esSeleccionado =
                    $pokemonDetalleSeleccionado?.idInstancia ===
                    pokemon?.idInstancia}

                {#if pokemon}
                    <button
                        on:click={() => seleccionar(pokemon)}
                        class="relative group flex items-center justify-center"
                    >
                        <div
                            class="w-18 h-18 rounded-full border-2 transition-all duration-300 relative flex items-center justify-center
              {esSeleccionado
                                ? 'border-red-500 bg-slate-800 shadow-[0_0_15px_rgba(239,68,68,0.4)] scale-110'
                                : 'border-slate-700 bg-slate-900/50 hover:border-slate-500'}"
                        >
                            <div
                                class="absolute inset-0 rounded-full bg-gradient-to-tr from-black/40 to-white/5 pointer-events-none"
                            ></div>

                            <img
                                src={pokemon.sprite}
                                alt={pokemon.apodo}
                                class="w-14 h-14 z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                            />

                            <div
                                class="absolute inset-0 rounded-full overflow-hidden flex flex-col opacity-20 group-hover:opacity-30 transition-opacity"
                            >
                                <div class="h-1/2 bg-red-900"></div>
                                <div class="h-1/2 bg-slate-400"></div>
                            </div>
                        </div>

                        <div
                            class="absolute -bottom-1 -right-1 flex -space-x-1.5 z-20"
                        >
                            {#each pokemon.tipos as tipo}
                                <TypeIcon {tipo} size="w-6 h-6" />
                            {/each}
                        </div>

                        {#if esSeleccionado}
                            <div class="absolute -left-5 flex flex-col gap-1">
                                <div class="w-1 h-4 bg-red-500"></div>
                            </div>
                        {/if}
                    </button>
                {:else}
                    <div
                        class="w-18 h-18 rounded-full border-2 border-slate-800 bg-black/20 flex items-center justify-center"
                    >
                        <div class="w-2 h-2 rounded-full bg-slate-800"></div>
                    </div>
                {/if}
            {/each}
        </div>
    </aside>
</div>

<style>
    :global(body) {
        background-color: #1a1c23;
    }
    :global(img) {
        image-rendering: pixelated;
    }
</style>
