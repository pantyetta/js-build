<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01472B, calcu00886B, calcu01031B, calcu00503B, calcu00108B } from '../lib/index.js';

const seed = 7;
const total = computed(() => calcu01472B(seed) - calcu00886B(seed) + calcu01031B(seed) - calcu00503B(seed) + calcu00108B(seed));
</script>

<template>
  <div class="blk">comp01676: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(25 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(205 50% 50%);
  display: inline-block;
}
</style>
