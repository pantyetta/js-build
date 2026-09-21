<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00436A, calcu01445A, calcu01547B } from '../lib/index.js';

const seed = 23;
const total = computed(() => calcu00436A(seed) - calcu01445A(seed) + calcu01547B(seed));
</script>

<template>
  <div class="blk">comp00202: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(173 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(353 50% 50%);
  display: inline-block;
}
</style>
