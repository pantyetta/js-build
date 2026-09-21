<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00284B, calcu00752B, calcu00713B } from '../lib/index.js';

const seed = 36;
const total = computed(() => calcu00284B(seed) - calcu00752B(seed) + calcu00713B(seed));
</script>

<template>
  <div class="blk">comp00568: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(242 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(62 50% 50%);
  display: inline-block;
}
</style>
