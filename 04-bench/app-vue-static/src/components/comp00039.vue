<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00262A, calcu00860B, calcu00903B, calcu00303A } from '../lib/index.js';

const seed = 14;
const total = computed(() => calcu00262A(seed) - calcu00860B(seed) + calcu00903B(seed) - calcu00303A(seed));
</script>

<template>
  <div class="blk">comp00039: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(357 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(177 50% 50%);
  display: inline-block;
}
</style>
