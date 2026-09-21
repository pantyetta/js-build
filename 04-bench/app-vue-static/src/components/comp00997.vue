<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01261A, calcu00535A, calcu01347A } from '../lib/index.js';

const seed = 48;
const total = computed(() => calcu01261A(seed) - calcu00535A(seed) + calcu01347A(seed));
</script>

<template>
  <div class="blk">comp00997: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(51 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(231 50% 50%);
  display: inline-block;
}
</style>
