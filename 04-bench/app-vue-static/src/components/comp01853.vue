<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01575B, calcu01106A, calcu00423B, calcu00710A, calcu00193B } from '../lib/index.js';

const seed = 17;
const total = computed(() => calcu01575B(seed) - calcu01106A(seed) + calcu00423B(seed) - calcu00710A(seed) + calcu00193B(seed));
</script>

<template>
  <div class="blk">comp01853: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(266 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(86 50% 50%);
  display: inline-block;
}
</style>
