<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01239B, calcu00253B, calcu00535B, calcu01360B, calcu01026B } from '../lib/index.js';

const seed = 24;
const total = computed(() => calcu01239B(seed) - calcu00253B(seed) + calcu00535B(seed) - calcu01360B(seed) + calcu01026B(seed));
</script>

<template>
  <div class="blk">comp01188: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(291 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(111 50% 50%);
  display: inline-block;
}
</style>
