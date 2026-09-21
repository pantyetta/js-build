<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01441B, calcu01140B, calcu00643A, calcu00739B, calcu00381B } from '../lib/index.js';

const seed = 31;
const total = computed(() => calcu01441B(seed) - calcu01140B(seed) + calcu00643A(seed) - calcu00739B(seed) + calcu00381B(seed));
</script>

<template>
  <div class="blk">comp00262: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(53 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(233 50% 50%);
  display: inline-block;
}
</style>
