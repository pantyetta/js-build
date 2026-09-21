<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01126A, calcu00363A, calcu00141B, calcu01063B } from '../lib/index.js';

const seed = 41;
const total = computed(() => calcu01126A(seed) - calcu00363A(seed) + calcu00141B(seed) - calcu01063B(seed));
</script>

<template>
  <div class="blk">comp00863: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(300 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(120 50% 50%);
  display: inline-block;
}
</style>
