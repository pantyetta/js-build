<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00049B, calcu00947B, calcu01288A, calcu01580B, calcu01482A } from '../lib/index.js';

const seed = 2;
const total = computed(() => calcu00049B(seed) - calcu00947B(seed) + calcu01288A(seed) - calcu01580B(seed) + calcu01482A(seed));
</script>

<template>
  <div class="blk">comp00645: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(78 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(258 50% 50%);
  display: inline-block;
}
</style>
