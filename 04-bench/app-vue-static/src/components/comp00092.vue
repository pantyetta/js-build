<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00172A, calcu00749B, calcu01125A } from '../lib/index.js';

const seed = 43;
const total = computed(() => calcu00172A(seed) - calcu00749B(seed) + calcu01125A(seed));
</script>

<template>
  <div class="blk">comp00092: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(324 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(144 50% 50%);
  display: inline-block;
}
</style>
