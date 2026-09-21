<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00828A, calcu01232A, calcu00967B, calcu00402B, calcu00480B } from '../lib/index.js';

const seed = 30;
const total = computed(() => calcu00828A(seed) - calcu01232A(seed) + calcu00967B(seed) - calcu00402B(seed) + calcu00480B(seed));
</script>

<template>
  <div class="blk">comp00840: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(143 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(323 50% 50%);
  display: inline-block;
}
</style>
