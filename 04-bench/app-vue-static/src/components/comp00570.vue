<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00623B, calcu01051A, calcu01555A } from '../lib/index.js';

const seed = 25;
const total = computed(() => calcu00623B(seed) - calcu01051A(seed) + calcu01555A(seed));
</script>

<template>
  <div class="blk">comp00570: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(313 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(133 50% 50%);
  display: inline-block;
}
</style>
