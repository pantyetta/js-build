<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01227B, calcu00037A, calcu01046B, calcu01049B } from '../lib/index.js';

const seed = 18;
const total = computed(() => calcu01227B(seed) - calcu00037A(seed) + calcu01046B(seed) - calcu01049B(seed));
</script>

<template>
  <div class="blk">comp01651: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(340 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(160 50% 50%);
  display: inline-block;
}
</style>
