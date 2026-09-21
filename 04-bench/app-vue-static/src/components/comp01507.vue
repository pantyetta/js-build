<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01203A, calcu00725A, calcu00331B, calcu00880A, calcu01433B } from '../lib/index.js';

const seed = 34;
const total = computed(() => calcu01203A(seed) - calcu00725A(seed) + calcu00331B(seed) - calcu00880A(seed) + calcu01433B(seed));
</script>

<template>
  <div class="blk">comp01507: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(36 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(216 50% 50%);
  display: inline-block;
}
</style>
