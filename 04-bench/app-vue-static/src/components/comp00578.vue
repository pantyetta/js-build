<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00621B, calcu01165B, calcu00707B, calcu00722A } from '../lib/index.js';

const seed = 18;
const total = computed(() => calcu00621B(seed) - calcu01165B(seed) + calcu00707B(seed) - calcu00722A(seed));
</script>

<template>
  <div class="blk">comp00578: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(247 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(67 50% 50%);
  display: inline-block;
}
</style>
