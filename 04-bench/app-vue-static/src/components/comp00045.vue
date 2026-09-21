<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00571A, calcu01332A, calcu01296A, calcu01333B } from '../lib/index.js';

const seed = 30;
const total = computed(() => calcu00571A(seed) - calcu01332A(seed) + calcu01296A(seed) - calcu01333B(seed));
</script>

<template>
  <div class="blk">comp00045: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(37 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(217 50% 50%);
  display: inline-block;
}
</style>
