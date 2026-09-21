<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01249B, calcu00666B, calcu01060A } from '../lib/index.js';

const seed = 27;
const total = computed(() => calcu01249B(seed) - calcu00666B(seed) + calcu01060A(seed));
</script>

<template>
  <div class="blk">comp00204: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(311 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(131 50% 50%);
  display: inline-block;
}
</style>
