<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01171B, calcu00591B, calcu00085B, calcu00824B, calcu00754B } from '../lib/index.js';

const seed = 17;
const total = computed(() => calcu01171B(seed) - calcu00591B(seed) + calcu00085B(seed) - calcu00824B(seed) + calcu00754B(seed));
</script>

<template>
  <div class="blk">comp00094: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(351 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(171 50% 50%);
  display: inline-block;
}
</style>
