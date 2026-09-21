<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00777A, calcu00173B, calcu00960B, calcu01321B } from '../lib/index.js';

const seed = 40;
const total = computed(() => calcu00777A(seed) - calcu00173B(seed) + calcu00960B(seed) - calcu01321B(seed));
</script>

<template>
  <div class="blk">comp01146: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(43 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(223 50% 50%);
  display: inline-block;
}
</style>
