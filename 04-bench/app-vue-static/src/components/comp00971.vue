<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01221B, calcu00391B, calcu01088B, calcu01182A, calcu00753A } from '../lib/index.js';

const seed = 14;
const total = computed(() => calcu01221B(seed) - calcu00391B(seed) + calcu01088B(seed) - calcu01182A(seed) + calcu00753A(seed));
</script>

<template>
  <div class="blk">comp00971: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(315 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(135 50% 50%);
  display: inline-block;
}
</style>
