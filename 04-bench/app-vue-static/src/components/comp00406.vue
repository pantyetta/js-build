<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00298B, calcu00495A, calcu00069B } from '../lib/index.js';

const seed = 50;
const total = computed(() => calcu00298B(seed) - calcu00495A(seed) + calcu00069B(seed));
</script>

<template>
  <div class="blk">comp00406: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(171 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(351 50% 50%);
  display: inline-block;
}
</style>
