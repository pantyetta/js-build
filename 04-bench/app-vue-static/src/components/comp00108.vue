<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00894B, calcu01542A, calcu00988A } from '../lib/index.js';

const seed = 47;
const total = computed(() => calcu00894B(seed) - calcu01542A(seed) + calcu00988A(seed));
</script>

<template>
  <div class="blk">comp00108: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(8 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(188 50% 50%);
  display: inline-block;
}
</style>
