<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00796A, calcu01581B, calcu00969B, calcu00982B } from '../lib/index.js';

const seed = 30;
const total = computed(() => calcu00796A(seed) - calcu01581B(seed) + calcu00969B(seed) - calcu00982B(seed));
</script>

<template>
  <div class="blk">comp00806: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(25 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(205 50% 50%);
  display: inline-block;
}
</style>
