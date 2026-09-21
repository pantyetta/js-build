<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01521A, calcu01348A, calcu01279B, calcu01102A, calcu00569A } from '../lib/index.js';

const seed = 41;
const total = computed(() => calcu01521A(seed) - calcu01348A(seed) + calcu01279B(seed) - calcu01102A(seed) + calcu00569A(seed));
</script>

<template>
  <div class="blk">comp00687: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(185 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(5 50% 50%);
  display: inline-block;
}
</style>
