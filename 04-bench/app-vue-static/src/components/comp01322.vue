<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00239B, calcu00661B, calcu01421B } from '../lib/index.js';

const seed = 6;
const total = computed(() => calcu00239B(seed) - calcu00661B(seed) + calcu01421B(seed));
</script>

<template>
  <div class="blk">comp01322: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(138 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(318 50% 50%);
  display: inline-block;
}
</style>
