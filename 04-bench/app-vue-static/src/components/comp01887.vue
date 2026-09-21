<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00870B, calcu01159A, calcu00060A } from '../lib/index.js';

const seed = 19;
const total = computed(() => calcu00870B(seed) - calcu01159A(seed) + calcu00060A(seed));
</script>

<template>
  <div class="blk">comp01887: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(336 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(156 50% 50%);
  display: inline-block;
}
</style>
