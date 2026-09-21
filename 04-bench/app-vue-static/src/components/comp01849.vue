<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00564B, calcu00132A, calcu01055B } from '../lib/index.js';

const seed = 18;
const total = computed(() => calcu00564B(seed) - calcu00132A(seed) + calcu01055B(seed));
</script>

<template>
  <div class="blk">comp01849: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(352 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(172 50% 50%);
  display: inline-block;
}
</style>
