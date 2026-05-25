<template>
  <div :class="{ 'bg-white': !nightMode, 'bg-dark': nightMode }" class="p-st">
    <div class="container py-4">
      <div
        class="text-center"
        data-aos="fade"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        <span
          class="title text-center"
          :class="{ pgray: !nightMode, 'text-light': nightMode }"
          >Skills.</span
        >
      </div>
      <hr
        width="50%"
        :class="{ pgray: !nightMode, 'bg-secondary': nightMode }"
      />
      <br />
      <div class="row">
        <div
          class="col-xl-4 col-md-6 col-sm-12 mb-4"
          v-for="(skill, idx) in skills"
          :key="skill.title"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="500"
          :data-aos-delay="idx * 80"
        >
          <div
            class="skill-card"
            :class="{ 'skill-card-dark': nightMode, 'skill-card-light': !nightMode }"
          >
            <div class="skill-card-header">
              <div class="skill-icon-wrap">
                <i :class="skill.icon"></i>
              </div>
              <div class="skill-title" :class="{ 'text-light': nightMode }">
                {{ skill.title }}
              </div>
            </div>
            <div class="skill-tags">
              <span
                class="skill-tag"
                v-for="item in skill.info"
                :key="item"
                :class="{ 'skill-tag-dark': nightMode, 'skill-tag-light': !nightMode }"
                >{{ item }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import info from "../../info";

export default {
  name: "Skills",
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      skills: info.skills,
    };
  },
};
</script>

<style scoped>
.title {
  font-size: 30px;
  font-weight: 500;
}

.skill-card {
  border-radius: 12px;
  padding: 20px;
  height: 100%;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.skill-card-light {
  background-color: #ffffff;
  border-color: #e0e0e0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
}

.skill-card-light:hover {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
  transform: translateY(-3px);
  border-color: #8585ad;
}

.skill-card-dark {
  background-color: #1a1a1a;
  border-color: #2e2e2e;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
}

.skill-card-dark:hover {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
  transform: translateY(-3px);
  border-color: #8585ad;
}

.skill-card-header {
  display: flex;
  align-items: center;
  margin-bottom: 14px;
}

.skill-icon-wrap {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background-color: rgba(133, 133, 173, 0.12);
  border: 1px solid rgba(133, 133, 173, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  flex-shrink: 0;
}

.skill-icon-wrap i,
.skill-icon-wrap .fa,
.skill-icon-wrap .fas,
.skill-icon-wrap .fab {
  color: #8585ad;
  font-size: 20px;
}

.skill-title {
  font-size: 17px;
  font-weight: 600;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.skill-tag {
  font-size: 12px;
  font-weight: 500;
  padding: 5px 12px;
  border-radius: 6px;
  transition: all 0.2s;
  line-height: 1.4;
  white-space: nowrap;
}

.skill-tag-light {
  background-color: #bbd4dd;
  color: #444;
  border: 1px solid #a8c4cf;
}

.skill-tag-light:hover {
  background-color: rgba(133, 133, 173, 0.18);
  border-color: rgba(133, 133, 173, 0.5);
  color: #8585ad;
}

.skill-tag-dark {
  background-color: #3c4148;
  color: #d0d0d0;
  border: 1px solid #4a5058;
}

.skill-tag-dark:hover {
  background-color: rgba(133, 133, 173, 0.2);
  border-color: rgba(133, 133, 173, 0.5);
  color: #a0a0c8;
}
</style>
