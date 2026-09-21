<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00935B, calcu01437B, calcu01531A, calcu00352A, calcu01280A } from '../lib/index.js';

const seed = 15;
const total = computed(() => calcu00935B(seed) - calcu01437B(seed) + calcu01531A(seed) - calcu00352A(seed) + calcu01280A(seed));
</script>

<template>
  <div class="blk">comp00446: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(218 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(38 50% 50%);
  display: inline-block;
}
</style>
