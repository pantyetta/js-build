<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01106A, calcu00622B, calcu00822B, calcu00457A } from '../lib/index.js';

const seed = 46;
const total = computed(() => calcu01106A(seed) - calcu00622B(seed) + calcu00822B(seed) - calcu00457A(seed));
</script>

<template>
  <div class="blk">comp00764: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(228 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(48 50% 50%);
  display: inline-block;
}
</style>
