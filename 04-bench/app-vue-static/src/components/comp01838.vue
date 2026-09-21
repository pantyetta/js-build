<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01472A, calcu00475A, calcu01416A, calcu00397B } from '../lib/index.js';

const seed = 4;
const total = computed(() => calcu01472A(seed) - calcu00475A(seed) + calcu01416A(seed) - calcu00397B(seed));
</script>

<template>
  <div class="blk">comp01838: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(200 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(20 50% 50%);
  display: inline-block;
}
</style>
