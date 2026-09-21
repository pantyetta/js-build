<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01128B, calcu00192A, calcu00791A, calcu01315B, calcu00694B } from '../lib/index.js';

const seed = 1;
const total = computed(() => calcu01128B(seed) - calcu00192A(seed) + calcu00791A(seed) - calcu01315B(seed) + calcu00694B(seed));
</script>

<template>
  <div class="blk">comp00279: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(1 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(181 50% 50%);
  display: inline-block;
}
</style>
