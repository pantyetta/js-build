<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01167A, calcu00925A, calcu01137B, calcu01515B, calcu01095B } from '../lib/index.js';

const seed = 41;
const total = computed(() => calcu01167A(seed) - calcu00925A(seed) + calcu01137B(seed) - calcu01515B(seed) + calcu01095B(seed));
</script>

<template>
  <div class="blk">comp00140: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(26 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(206 50% 50%);
  display: inline-block;
}
</style>
