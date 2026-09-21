<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01418A, calcu01477A, calcu01370B } from '../lib/index.js';

const seed = 41;
const total = computed(() => calcu01418A(seed) - calcu01477A(seed) + calcu01370B(seed));
</script>

<template>
  <div class="blk">comp00518: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(223 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(43 50% 50%);
  display: inline-block;
}
</style>
