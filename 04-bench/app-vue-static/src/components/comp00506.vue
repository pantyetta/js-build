<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01146B, calcu01023A, calcu01269B, calcu00154A } from '../lib/index.js';

const seed = 34;
const total = computed(() => calcu01146B(seed) - calcu01023A(seed) + calcu01269B(seed) - calcu00154A(seed));
</script>

<template>
  <div class="blk">comp00506: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(354 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(174 50% 50%);
  display: inline-block;
}
</style>
