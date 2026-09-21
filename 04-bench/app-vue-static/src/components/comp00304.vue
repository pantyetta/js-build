<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01492A, calcu00382A, calcu00863A } from '../lib/index.js';

const seed = 21;
const total = computed(() => calcu01492A(seed) - calcu00382A(seed) + calcu00863A(seed));
</script>

<template>
  <div class="blk">comp00304: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(172 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(352 50% 50%);
  display: inline-block;
}
</style>
