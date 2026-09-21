<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01126B, calcu00627B, calcu01553B, calcu00329B, calcu00689A } from '../lib/index.js';

const seed = 7;
const total = computed(() => calcu01126B(seed) - calcu00627B(seed) + calcu01553B(seed) - calcu00329B(seed) + calcu00689A(seed));
</script>

<template>
  <div class="blk">comp01019: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(256 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(76 50% 50%);
  display: inline-block;
}
</style>
