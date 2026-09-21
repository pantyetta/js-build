<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01568A, calcu01061A, calcu01580A } from '../lib/index.js';

const seed = 1;
const total = computed(() => calcu01568A(seed) - calcu01061A(seed) + calcu01580A(seed));
</script>

<template>
  <div class="blk">comp00544: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(64 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(244 50% 50%);
  display: inline-block;
}
</style>
