<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00171A, calcu00848A, calcu00363A, calcu00526A, calcu00900A } from '../lib/index.js';

const seed = 4;
const total = computed(() => calcu00171A(seed) - calcu00848A(seed) + calcu00363A(seed) - calcu00526A(seed) + calcu00900A(seed));
</script>

<template>
  <div class="blk">comp01949: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(313 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(133 50% 50%);
  display: inline-block;
}
</style>
