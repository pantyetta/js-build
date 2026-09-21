<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00682A, calcu01465A, calcu00695A, calcu00318A, calcu01021B } from '../lib/index.js';

const seed = 40;
const total = computed(() => calcu00682A(seed) - calcu01465A(seed) + calcu00695A(seed) - calcu00318A(seed) + calcu01021B(seed));
</script>

<template>
  <div class="blk">comp01153: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(20 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(200 50% 50%);
  display: inline-block;
}
</style>
