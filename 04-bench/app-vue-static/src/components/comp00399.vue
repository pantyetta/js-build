<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00608A, calcu00202A, calcu00656A } from '../lib/index.js';

const seed = 34;
const total = computed(() => calcu00608A(seed) - calcu00202A(seed) + calcu00656A(seed));
</script>

<template>
  <div class="blk">comp00399: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(183 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(3 50% 50%);
  display: inline-block;
}
</style>
