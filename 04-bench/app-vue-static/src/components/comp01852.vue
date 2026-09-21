<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01476A, calcu00741A, calcu01175A } from '../lib/index.js';

const seed = 50;
const total = computed(() => calcu01476A(seed) - calcu00741A(seed) + calcu01175A(seed));
</script>

<template>
  <div class="blk">comp01852: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(351 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(171 50% 50%);
  display: inline-block;
}
</style>
