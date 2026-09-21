<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00303B, calcu01580B, calcu00805A } from '../lib/index.js';

const seed = 47;
const total = computed(() => calcu00303B(seed) - calcu01580B(seed) + calcu00805A(seed));
</script>

<template>
  <div class="blk">comp01491: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(40 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(220 50% 50%);
  display: inline-block;
}
</style>
