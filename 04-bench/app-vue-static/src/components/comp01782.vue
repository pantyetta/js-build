<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00386B, calcu01101B, calcu00324B, calcu01578B, calcu00689A } from '../lib/index.js';

const seed = 26;
const total = computed(() => calcu00386B(seed) - calcu01101B(seed) + calcu00324B(seed) - calcu01578B(seed) + calcu00689A(seed));
</script>

<template>
  <div class="blk">comp01782: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(258 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(78 50% 50%);
  display: inline-block;
}
</style>
