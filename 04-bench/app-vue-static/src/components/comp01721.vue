<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01215B, calcu01290A, calcu00271A, calcu00184A } from '../lib/index.js';

const seed = 8;
const total = computed(() => calcu01215B(seed) - calcu01290A(seed) + calcu00271A(seed) - calcu00184A(seed));
</script>

<template>
  <div class="blk">comp01721: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(181 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(1 50% 50%);
  display: inline-block;
}
</style>
