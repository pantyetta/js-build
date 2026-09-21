<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00148B, calcu01328B, calcu00405B, calcu00489A } from '../lib/index.js';

const seed = 18;
const total = computed(() => calcu00148B(seed) - calcu01328B(seed) + calcu00405B(seed) - calcu00489A(seed));
</script>

<template>
  <div class="blk">comp00367: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(131 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(311 50% 50%);
  display: inline-block;
}
</style>
