<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01416B, calcu01541B, calcu01259B, calcu01063B, calcu00573A } from '../lib/index.js';

const seed = 7;
const total = computed(() => calcu01416B(seed) - calcu01541B(seed) + calcu01259B(seed) - calcu01063B(seed) + calcu00573A(seed));
</script>

<template>
  <div class="blk">comp01715: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(218 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(38 50% 50%);
  display: inline-block;
}
</style>
