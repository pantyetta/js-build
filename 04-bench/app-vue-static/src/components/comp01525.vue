<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01019A, calcu01118A, calcu01400B, calcu01042B, calcu00832B } from '../lib/index.js';

const seed = 34;
const total = computed(() => calcu01019A(seed) - calcu01118A(seed) + calcu01400B(seed) - calcu01042B(seed) + calcu00832B(seed));
</script>

<template>
  <div class="blk">comp01525: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(234 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(54 50% 50%);
  display: inline-block;
}
</style>
