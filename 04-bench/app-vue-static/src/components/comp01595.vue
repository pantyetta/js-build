<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01161A, calcu01127B, calcu01134B, calcu00218B, calcu00791B } from '../lib/index.js';

const seed = 23;
const total = computed(() => calcu01161A(seed) - calcu01127B(seed) + calcu01134B(seed) - calcu00218B(seed) + calcu00791B(seed));
</script>

<template>
  <div class="blk">comp01595: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(252 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(72 50% 50%);
  display: inline-block;
}
</style>
