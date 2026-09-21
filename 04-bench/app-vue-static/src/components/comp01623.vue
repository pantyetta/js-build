<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01581B, calcu00891B, calcu01591A, calcu00579B, calcu00001A } from '../lib/index.js';

const seed = 36;
const total = computed(() => calcu01581B(seed) - calcu00891B(seed) + calcu01591A(seed) - calcu00579B(seed) + calcu00001A(seed));
</script>

<template>
  <div class="blk">comp01623: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(262 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(82 50% 50%);
  display: inline-block;
}
</style>
