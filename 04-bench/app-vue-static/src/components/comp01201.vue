<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00246B, calcu01207B, calcu00610A } from '../lib/index.js';

const seed = 35;
const total = computed(() => calcu00246B(seed) - calcu01207B(seed) + calcu00610A(seed));
</script>

<template>
  <div class="blk">comp01201: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(132 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(312 50% 50%);
  display: inline-block;
}
</style>
