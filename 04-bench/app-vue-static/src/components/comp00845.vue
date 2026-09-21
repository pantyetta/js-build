<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00572B, calcu01171B, calcu01191B } from '../lib/index.js';

const seed = 46;
const total = computed(() => calcu00572B(seed) - calcu01171B(seed) + calcu01191B(seed));
</script>

<template>
  <div class="blk">comp00845: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(2 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(182 50% 50%);
  display: inline-block;
}
</style>
