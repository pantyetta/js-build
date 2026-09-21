<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01230A, calcu00633B, calcu00107B, calcu00819B } from '../lib/index.js';

const seed = 18;
const total = computed(() => calcu01230A(seed) - calcu00633B(seed) + calcu00107B(seed) - calcu00819B(seed));
</script>

<template>
  <div class="blk">comp01225: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(191 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(11 50% 50%);
  display: inline-block;
}
</style>
