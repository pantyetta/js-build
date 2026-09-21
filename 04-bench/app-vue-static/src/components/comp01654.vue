<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01021A, calcu00793B, calcu00171A } from '../lib/index.js';

const seed = 35;
const total = computed(() => calcu01021A(seed) - calcu00793B(seed) + calcu00171A(seed));
</script>

<template>
  <div class="blk">comp01654: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(353 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(173 50% 50%);
  display: inline-block;
}
</style>
