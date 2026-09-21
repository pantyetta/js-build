<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01028A, calcu00742B, calcu00163A, calcu01116B } from '../lib/index.js';

const seed = 42;
const total = computed(() => calcu01028A(seed) - calcu00742B(seed) + calcu00163A(seed) - calcu01116B(seed));
</script>

<template>
  <div class="blk">comp00352: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(189 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(9 50% 50%);
  display: inline-block;
}
</style>
