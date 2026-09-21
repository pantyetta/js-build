<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01031B, calcu01193A, calcu00749A, calcu00419A, calcu00350A } from '../lib/index.js';

const seed = 17;
const total = computed(() => calcu01031B(seed) - calcu01193A(seed) + calcu00749A(seed) - calcu00419A(seed) + calcu00350A(seed));
</script>

<template>
  <div class="blk">comp00441: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(147 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(327 50% 50%);
  display: inline-block;
}
</style>
