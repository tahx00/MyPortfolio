<template>
  <div class="radial-skill" ref="circle">
    <svg 
      class="progress-ring" 
      :width="computedSize" 
      :height="computedSize"
    >
      <circle
        class="progress-ring__background"
        :stroke="bgColor"
        :stroke-width="computedStroke"
        fill="transparent"
        :r="normalizedRadius"
        :cx="computedSize/2"
        :cy="computedSize/2"
      />
      <circle
        class="progress-ring__progress"
        :stroke="color"
        :stroke-width="computedStroke"
        fill="transparent"
        :r="normalizedRadius"
        :cx="computedSize/2"
        :cy="computedSize/2"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="animatedOffset"
        stroke-linecap="round"
      />
    </svg>
    <div class="skill-label">
      <span>{{ label }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "RadialProgress",
  props: {
    percentage: { type: Number, required: true },
    label: { type: String, required: true },
    color: { type: String, default: "#e04e69" }, 
    bgColor: { type: String, default: "#2D2D2D" } 
  },
  data() {
    return {
      animatedOffset: 0, // اللي هيتغير تدريجيًا
      animated: false
    };
  },
  computed: {
    computedSize() {
      return parseInt(getComputedStyle(document.documentElement).getPropertyValue("--radial-size")) || 200;
    },
    computedStroke() {
      return parseInt(getComputedStyle(document.documentElement).getPropertyValue("--radial-stroke")) || 18;
    },
    normalizedRadius() {
      return (this.computedSize - this.computedStroke) / 2;
    },
    circumference() {
      return this.normalizedRadius * 2 * Math.PI;
    },
    targetOffset() {
      return this.circumference - (this.percentage / 100) * this.circumference;
    }
  },
  mounted() {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        const entry = entries[0];
        if (entry.isIntersecting && !this.animated) {
          this.animateCircle();
          this.animated = true;
          observer.unobserve(this.$refs.circle);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(this.$refs.circle);
  },
  methods: {
    animateCircle() {
      let current = this.circumference; // يبدأ من 100% فاضي
      this.animatedOffset = current;

      const step = (this.circumference - this.targetOffset) / 60; // 60 خطوة ≈ 1 ثانية
      const interval = setInterval(() => {
        current -= step;
        if (current <= this.targetOffset) {
          current = this.targetOffset;
          clearInterval(interval);
        }
        this.animatedOffset = current;
      }, 16); // 60fps تقريبًا
    }
  }
};
</script>

<style>
.radial-skill {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .2rem;
  color: var(--white);
}

:root {
  --radial-size: 150px;
  --radial-stroke: 16;
}

.progress-ring {
  transform: rotate(-90deg);
}

.progress-ring__background {
  opacity: .07;
}

.skill-label {
  text-align: center;
    white-space: normal;   /* يخلي النص ينكسر */
  max-width: 90%;  
  height: 30%;

}
  .skill-label span {
  font-size: 1.5rem;
    white-space: normal;   /* يخلي النص ينكسر */
  max-width: 90%;  
}


@media (max-width: 768px) {
  :root {
    --radial-size: 120px;
    --radial-stroke: 13;
  }
.skill-label span {
  font-size: 1.1rem;
    white-space: normal;   /* يخلي النص ينكسر */
  max-width: 90%;  
}
}
</style>
