<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01342B, calcu01466A, calcu00250B, calcu01028B } from '../lib/index.js';

const seed = 37;
const total = computed(() => calcu01342B(seed) - calcu01466A(seed) + calcu00250B(seed) - calcu01028B(seed));
</script>

<template>
  <div class="blk">comp01656: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(251 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(71 50% 50%);
  display: inline-block;
}
</style>
