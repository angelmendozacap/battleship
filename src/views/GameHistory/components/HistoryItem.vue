<template>
  <li class="block">
    <div class="px-4 py-4 sm:px-6">
      <div class="sm:flex sm:justify-between">
        <div class="flex items-center">
          <p
            v-if="history.win"
            class="text-md font-bold text-green-300 truncate"
          >
            Victoria
          </p>
          <p v-else class="text-md font-bold text-red-400 truncate">Perdida</p>
          <div class="ml-2 flex-shrink-0 flex">
            <div
              v-if="history.win"
              class="
                h-6
                w-6
                inline-flex
                justify-center
                items-center
                rounded-full
                bg-green-100
                text-green-800
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <div
              v-else
              class="
                h-6
                w-6
                inline-flex
                justify-center
                items-center
                rounded-full
                bg-red-100
                text-red-800
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="mt-2 flex items-center text-sm sm:mt-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
            />
          </svg>
          <p v-if="history.sunkenShipFleet.length">
            Flotas Hundidas
            <span class="text-white">{{
              history.sunkenShipFleet.join(" | ").toUpperCase()
            }}</span>
          </p>
        </div>
      </div>
      <div class="mt-2 sm:flex sm:justify-between">
        <div class="sm:flex">
          <p class="flex items-center text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="flex-shrink-0 mr-1.5 h-5 w-5 text-blue-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
              />
            </svg>
            Intentos: &nbsp;
            <span class="text-white">{{
              history.totalAttempts ?? "Ilimitados"
            }}</span>
          </p>
          <p class="mt-2 flex items-center text-sm sm:mt-0 sm:ml-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="flex-shrink-0 mr-1.5 h-5 w-5 text-yellow-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
              />
            </svg>
            Intentos Restantes: &nbsp;
            <span class="text-white">{{
              history.attemptsRemaining ?? "Ilimitados"
            }}</span>
          </p>
        </div>
        <div class="mt-2 flex items-center text-sm sm:mt-0">
          <svg
            class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clip-rule="evenodd"
            />
          </svg>
          <p>
            Jugado el
            <time :datetime="new Date(history.date).toISOString()">{{
              new Date(history.date).toLocaleDateString()
            }}</time>
          </p>
        </div>
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import Game from "@/types/Game";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "HistoryItem",
  props: {
    history: {
      type: Object as PropType<Game>,
      required: true,
    },
  },
});
</script>
