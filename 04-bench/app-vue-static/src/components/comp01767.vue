<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00333B, calcu01188A, calcu01596B, calcu01275B, calcu00521A } from '../lib/index.js';

const seed = 16;
const total = computed(() => calcu00333B(seed) - calcu01188A(seed) + calcu01596B(seed) - calcu01275B(seed) + calcu00521A(seed));
</script>

<template>
  <div class="blk">comp01767: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(164 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(344 50% 50%);
  display: inline-block;
}
</style>
