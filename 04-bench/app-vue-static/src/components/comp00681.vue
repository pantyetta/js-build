<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00546A, calcu00889B, calcu01511B, calcu01164B, calcu00217A } from '../lib/index.js';

const seed = 42;
const total = computed(() => calcu00546A(seed) - calcu00889B(seed) + calcu01511B(seed) - calcu01164B(seed) + calcu00217A(seed));
</script>

<template>
  <div class="blk">comp00681: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(6 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(186 50% 50%);
  display: inline-block;
}
</style>
