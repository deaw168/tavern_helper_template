<template>
  <section class="section">
    <div class="section-header" @click="collapsed = !collapsed">
      <i class="fa-solid fa-face-smile section-icon emotion-icon"></i>
      <span class="section-label">情绪状态</span>
      <i
        class="fa-solid section-arrow"
        :class="collapsed ? 'fa-chevron-right' : 'fa-chevron-down'"
      ></i>
    </div>

    <div v-if="!collapsed" class="section-body">
      <div class="emotion-card">
        <div class="emotion-glow"></div>
        <i :class="moodIcon" class="emotion-face"></i>
        <span class="emotion-text">{{ emotionText || '平静' }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useDataStore } from '../store';

const store = useDataStore();
const collapsed = ref(false);

const emotionText = computed(() => store.data?.情绪?.当前情绪);

const moodIcon = computed(() => {
  const t = emotionText.value || '';
  if (t.includes('迷糊') || t.includes('困') || t.includes('梦')) return 'fa-solid fa-moon';
  if (t.includes('开心') || t.includes('笑') || t.includes('温馨')) return 'fa-solid fa-face-laugh';
  if (t.includes('难过') || t.includes('疲惫') || t.includes('累')) return 'fa-solid fa-face-tired';
  if (t.includes('害羞') || t.includes('脸红')) return 'fa-solid fa-face-grin-hearts';
  if (t.includes('生气') || t.includes('愤怒')) return 'fa-solid fa-face-angry';
  return 'fa-solid fa-face-smile';
});
</script>

<style lang="scss" scoped>
.section {
  border-bottom: 1px solid var(--c-border);

  &:last-child {
    border-bottom: none;
  }
}

.section-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  cursor: pointer;
  user-select: none;
  transition: background 0.15s;

  &:hover {
    background: var(--c-surface);
  }
}

.section-icon {
  font-size: 13px;
}

.emotion-icon {
  color: var(--c-emotion-accent);
}

.section-label {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--c-text-dim);
}

.section-arrow {
  margin-left: auto;
  font-size: 10px;
  color: var(--c-text-muted);
  transition: transform 0.2s;
}

.section-body {
  padding: 0 16px 12px;
  animation: slideDown 0.25s ease;
}

@keyframes slideDown {
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
}

.emotion-card {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  background: var(--c-surface-alt);
  border: 1px solid var(--c-border);
  border-radius: 10px;
  overflow: hidden;

  .emotion-glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 20% 50%, var(--c-emotion-accent) 0%, transparent 70%);
    opacity: 0.08;
    pointer-events: none;
  }
}

.emotion-face {
  font-size: 24px;
  color: var(--c-emotion-accent);
  z-index: 1;
}

.emotion-text {
  font-size: 14px;
  color: var(--c-text);
  line-height: 1.5;
  z-index: 1;
}
</style>
