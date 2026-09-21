<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00553B, calcu01189A, calcu01217A, calcu00198B, calcu00581B } from '../lib/index.js';

const seed = 44;
const total = computed(() => calcu00553B(seed) - calcu01189A(seed) + calcu01217A(seed) - calcu00198B(seed) + calcu00581B(seed));
</script>

<template>
  <div class="blk">comp00473: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(324 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(144 50% 50%);
  display: inline-block;
}
</style>
