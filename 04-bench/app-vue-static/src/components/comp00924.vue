<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00211A, calcu00217B, calcu00910B, calcu00582B, calcu00164A } from '../lib/index.js';

const seed = 36;
const total = computed(() => calcu00211A(seed) - calcu00217B(seed) + calcu00910B(seed) - calcu00582B(seed) + calcu00164A(seed));
</script>

<template>
  <div class="blk">comp00924: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(315 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(135 50% 50%);
  display: inline-block;
}
</style>
