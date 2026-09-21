<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00091B, calcu01363B, calcu01182B } from '../lib/index.js';

const seed = 10;
const total = computed(() => calcu00091B(seed) - calcu01363B(seed) + calcu01182B(seed));
</script>

<template>
  <div class="blk">comp01292: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(152 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(332 50% 50%);
  display: inline-block;
}
</style>
