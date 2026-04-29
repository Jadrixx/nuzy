<script lang="ts">
  import { goto } from "$app/navigation";
</script>

<div
  class="h-screen w-full bg-slate-950 flex flex-col items-center justify-center gap-6"
>
  <h1
    class="text-white text-xl font-mono opacity-50 uppercase tracking-[0.3em]"
  >
    Modo Desarrollo
  </h1>

  <button
    on:click={() => goto("/dashboard/rutaspokemon")}
    class="bg-blue-600 hover:bg-blue-500 text-white font-black px-10 py-6 rounded-2xl text-2xl shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all active:scale-95 border-2 border-blue-400"
  >
    PROBAR MENÚ LATERAL (IR A RUTAS)
  </button>

  <p class="text-slate-500 text-sm italic">
    Este botón te lleva a: routes/dashboard/rutaspokemon/+page.svelte
  </p>
</div>
