<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00770B, calcu01005B, calcu01266A } from '../lib/index.js';

const seed = 17;
const total = computed(() => calcu00770B(seed) - calcu01005B(seed) + calcu01266A(seed));
</script>

<template>
  <div class="blk">comp00665: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(53 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(233 50% 50%);
  display: inline-block;
}
</style>
