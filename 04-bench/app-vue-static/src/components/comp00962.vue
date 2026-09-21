<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00111B, calcu00849B, calcu01193B, calcu00452B, calcu01180A } from '../lib/index.js';

const seed = 39;
const total = computed(() => calcu00111B(seed) - calcu00849B(seed) + calcu01193B(seed) - calcu00452B(seed) + calcu01180A(seed));
</script>

<template>
  <div class="blk">comp00962: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(52 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(232 50% 50%);
  display: inline-block;
}
</style>
