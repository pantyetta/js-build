<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00877A, calcu00353A, calcu01520B, calcu00440B } from '../lib/index.js';

const seed = 18;
const total = computed(() => calcu00877A(seed) - calcu00353A(seed) + calcu01520B(seed) - calcu00440B(seed));
</script>

<template>
  <div class="blk">comp01367: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(356 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(176 50% 50%);
  display: inline-block;
}
</style>
