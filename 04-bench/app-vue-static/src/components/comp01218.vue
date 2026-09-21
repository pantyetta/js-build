<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01094B, calcu01375A, calcu01493B, calcu00513A, calcu00241A } from '../lib/index.js';

const seed = 22;
const total = computed(() => calcu01094B(seed) - calcu01375A(seed) + calcu01493B(seed) - calcu00513A(seed) + calcu00241A(seed));
</script>

<template>
  <div class="blk">comp01218: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(356 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(176 50% 50%);
  display: inline-block;
}
</style>
