<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00212B, calcu00332B, calcu01197A, calcu00861B, calcu00897B } from '../lib/index.js';

const seed = 18;
const total = computed(() => calcu00212B(seed) - calcu00332B(seed) + calcu01197A(seed) - calcu00861B(seed) + calcu00897B(seed));
</script>

<template>
  <div class="blk">comp01177: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(120 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(300 50% 50%);
  display: inline-block;
}
</style>
