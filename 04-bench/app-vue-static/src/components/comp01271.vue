<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01353A, calcu00246B, calcu00575A } from '../lib/index.js';

const seed = 14;
const total = computed(() => calcu01353A(seed) - calcu00246B(seed) + calcu00575A(seed));
</script>

<template>
  <div class="blk">comp01271: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(326 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(146 50% 50%);
  display: inline-block;
}
</style>
