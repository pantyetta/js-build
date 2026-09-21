<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01229B, calcu00768B, calcu00564B } from '../lib/index.js';

const seed = 1;
const total = computed(() => calcu01229B(seed) - calcu00768B(seed) + calcu00564B(seed));
</script>

<template>
  <div class="blk">comp01591: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(102 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(282 50% 50%);
  display: inline-block;
}
</style>
