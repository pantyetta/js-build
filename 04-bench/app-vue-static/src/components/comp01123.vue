<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01023A, calcu00592A, calcu00108A, calcu00543B } from '../lib/index.js';

const seed = 10;
const total = computed(() => calcu01023A(seed) - calcu00592A(seed) + calcu00108A(seed) - calcu00543B(seed));
</script>

<template>
  <div class="blk">comp01123: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(88 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(268 50% 50%);
  display: inline-block;
}
</style>
