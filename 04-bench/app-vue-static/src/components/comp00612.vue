<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01440A, calcu00427B, calcu01044B, calcu00464A, calcu00130A } from '../lib/index.js';

const seed = 13;
const total = computed(() => calcu01440A(seed) - calcu00427B(seed) + calcu01044B(seed) - calcu00464A(seed) + calcu00130A(seed));
</script>

<template>
  <div class="blk">comp00612: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(206 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(26 50% 50%);
  display: inline-block;
}
</style>
