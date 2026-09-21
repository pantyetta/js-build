<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01061B, calcu00162A, calcu01281A, calcu00046B, calcu01557B } from '../lib/index.js';

const seed = 47;
const total = computed(() => calcu01061B(seed) - calcu00162A(seed) + calcu01281A(seed) - calcu00046B(seed) + calcu01557B(seed));
</script>

<template>
  <div class="blk">comp00119: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(193 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(13 50% 50%);
  display: inline-block;
}
</style>
