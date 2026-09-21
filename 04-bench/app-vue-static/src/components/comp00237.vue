<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00616B, calcu01197A, calcu00223B, calcu01130B, calcu00708A } from '../lib/index.js';

const seed = 20;
const total = computed(() => calcu00616B(seed) - calcu01197A(seed) + calcu00223B(seed) - calcu01130B(seed) + calcu00708A(seed));
</script>

<template>
  <div class="blk">comp00237: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(305 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(125 50% 50%);
  display: inline-block;
}
</style>
