<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01066B, calcu00796A, calcu00884B, calcu01266A } from '../lib/index.js';

const seed = 26;
const total = computed(() => calcu01066B(seed) - calcu00796A(seed) + calcu00884B(seed) - calcu01266A(seed));
</script>

<template>
  <div class="blk">comp00268: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(344 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(164 50% 50%);
  display: inline-block;
}
</style>
