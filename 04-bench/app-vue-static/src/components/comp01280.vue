<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00517B, calcu00075A, calcu01261A } from '../lib/index.js';

const seed = 37;
const total = computed(() => calcu00517B(seed) - calcu00075A(seed) + calcu01261A(seed));
</script>

<template>
  <div class="blk">comp01280: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(87 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(267 50% 50%);
  display: inline-block;
}
</style>
