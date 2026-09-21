<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01588A, calcu00350B, calcu00766A, calcu00933A, calcu01473B } from '../lib/index.js';

const seed = 36;
const total = computed(() => calcu01588A(seed) - calcu00350B(seed) + calcu00766A(seed) - calcu00933A(seed) + calcu01473B(seed));
</script>

<template>
  <div class="blk">comp00913: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(125 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(305 50% 50%);
  display: inline-block;
}
</style>
