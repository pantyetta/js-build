<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00690B, calcu00597B, calcu00774A, calcu00048A } from '../lib/index.js';

const seed = 33;
const total = computed(() => calcu00690B(seed) - calcu00597B(seed) + calcu00774A(seed) - calcu00048A(seed));
</script>

<template>
  <div class="blk">comp00701: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(66 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(246 50% 50%);
  display: inline-block;
}
</style>
