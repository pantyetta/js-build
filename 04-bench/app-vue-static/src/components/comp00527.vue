<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01269B, calcu00021B, calcu00872A, calcu01371B } from '../lib/index.js';

const seed = 18;
const total = computed(() => calcu01269B(seed) - calcu00021B(seed) + calcu00872A(seed) - calcu01371B(seed));
</script>

<template>
  <div class="blk">comp00527: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(107 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(287 50% 50%);
  display: inline-block;
}
</style>
