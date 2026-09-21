<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00396B, calcu00921B, calcu01176A } from '../lib/index.js';

const seed = 5;
const total = computed(() => calcu00396B(seed) - calcu00921B(seed) + calcu01176A(seed));
</script>

<template>
  <div class="blk">comp01704: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(242 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(62 50% 50%);
  display: inline-block;
}
</style>
