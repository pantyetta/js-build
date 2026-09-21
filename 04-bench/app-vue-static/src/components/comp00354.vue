<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01353A, calcu00996B, calcu00174B, calcu00623A, calcu00790B } from '../lib/index.js';

const seed = 32;
const total = computed(() => calcu01353A(seed) - calcu00996B(seed) + calcu00174B(seed) - calcu00623A(seed) + calcu00790B(seed));
</script>

<template>
  <div class="blk">comp00354: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(268 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(88 50% 50%);
  display: inline-block;
}
</style>
