<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01162A, calcu01531A, calcu00925B, calcu01265A } from '../lib/index.js';

const seed = 36;
const total = computed(() => calcu01162A(seed) - calcu01531A(seed) + calcu00925B(seed) - calcu01265A(seed));
</script>

<template>
  <div class="blk">comp00993: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(309 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(129 50% 50%);
  display: inline-block;
}
</style>
