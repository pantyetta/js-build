<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01516B, calcu01192A, calcu01297A, calcu01059B } from '../lib/index.js';

const seed = 20;
const total = computed(() => calcu01516B(seed) - calcu01192A(seed) + calcu01297A(seed) - calcu01059B(seed));
</script>

<template>
  <div class="blk">comp00206: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(82 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(262 50% 50%);
  display: inline-block;
}
</style>
