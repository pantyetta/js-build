<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00423A, calcu00672A, calcu00555A, calcu00599A, calcu01353B } from '../lib/index.js';

const seed = 15;
const total = computed(() => calcu00423A(seed) - calcu00672A(seed) + calcu00555A(seed) - calcu00599A(seed) + calcu01353B(seed));
</script>

<template>
  <div class="blk">comp01495: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(312 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(132 50% 50%);
  display: inline-block;
}
</style>
