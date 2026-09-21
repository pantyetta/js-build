<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00396A, calcu01560B, calcu01564B, calcu00000B } from '../lib/index.js';

const seed = 40;
const total = computed(() => calcu00396A(seed) - calcu01560B(seed) + calcu01564B(seed) - calcu00000B(seed));
</script>

<template>
  <div class="blk">comp01594: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(150 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(330 50% 50%);
  display: inline-block;
}
</style>
