<template>
  <div
    class="py-4 p-st"
    :class="{
      'bg-light': !nightMode,
      'bg-dark2': nightMode,
      'text-light': nightMode,
    }"
  >
    <div class="container">
      <div
        class="text-center"
        data-aos="fade"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        <span
          class="title text-center"
          :class="{ pgray: !nightMode, 'text-light': nightMode }"
          >Portfolio.</span
        >
      </div>
      <hr
        width="50%"
        :class="{ pgray: !nightMode, 'bg-secondary': nightMode }"
      />

      <div class="row mt-2">
        <div
          v-for="(item, idx) in desgin_info"
          :key="idx"
          class="col-xl-4 col-md-6 col-sm-12 mb-4"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="500"
          :data-aos-delay="idx * 60"
        >
          <div
            class="pcard"
            :class="{ 'pcard-dark': nightMode, 'pcard-light': !nightMode }"
          >
            <div class="pcard-img" @click="showDesignModalFn(item)">
              <vueper-slides
                :dragging-distance="50"
                fixed-height="190px"
                :bullets="false"
                :arrows="true"
              >
                <vueper-slide
                  v-for="(slide, i) in item.pictures"
                  :key="i"
                  :image="slide.img"
                />
              </vueper-slides>
            </div>

            <div class="pcard-body">
              <div class="pcard-meta">
                <span class="pcard-category">{{ item.category }}</span>
                <span class="pcard-date">{{ item.date }}</span>
              </div>
              <div
                class="pcard-title"
                :class="{ 'text-light': nightMode }"
              >{{ item.name }}</div>
              <div class="pcard-subtitle">{{ item.title }}</div>

              <div class="pcard-tags">
                <span
                  class="ptag"
                  v-for="tech in item.technologies.slice(0, 4)"
                  :key="tech"
                  :class="{ 'ptag-dark': nightMode }"
                  >{{ tech }}</span
                >
                <span
                  v-if="item.technologies.length > 4"
                  class="ptag ptag-more"
                  :class="{ 'ptag-dark': nightMode }"
                  >+{{ item.technologies.length - 4 }}</span
                >
              </div>

              <div class="pcard-actions">
                <button
                  class="pbtn pbtn-outline"
                  :class="{ 'pbtn-outline-dark': nightMode }"
                  @click="showDesignModalFn(item)"
                >
                  Details
                </button>
                <button
                  v-if="item.visit"
                  class="pbtn pbtn-fill"
                  @click="open(item.visit)"
                >
                  Visit ↗
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <transition name="modal">
      <DesignModal
        :showModal="showDesignModal"
        @close="closeModal"
        v-if="showDesignModal"
        :portfolio="design_modal_info"
        :nightMode="nightMode"
      />
    </transition>
  </div>
</template>

<script>
import DesignModal from "./helpers/DesignModal";
import info from "../../info";

import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  name: "Portfolio",
  components: {
    VueperSlides,
    VueperSlide,
    DesignModal,
  },
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      desgin_info: info.portfolio_design,
      showDesignModal: false,
      design_modal_info: {},
    };
  },
  methods: {
    open(url) {
      window.open(url, "_blank");
    },
    closeModal() {
      this.showDesignModal = false;
      document.getElementsByTagName("body")[0].classList.remove("modal-open");
    },
    showDesignModalFn(item) {
      this.design_modal_info = item;
      this.showDesignModal = true;
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 30px;
  font-weight: 500;
}

/* Card */
.pcard {
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  border: 1px solid transparent;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.pcard-light {
  background-color: #ffffff;
  border-color: #e4e4e4;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
}

.pcard-light:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.11);
  border-color: #8585ad;
}

.pcard-dark {
  background-color: #1e2228;
  border-color: #2e3440;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.pcard-dark:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
  border-color: #8585ad;
}

/* Image area */
.pcard-img {
  cursor: pointer;
  flex-shrink: 0;
}

/deep/ .vueperslide {
  border-radius: 0 !important;
}
/deep/ .vueperslides__parallax-wrapper {
  border-radius: 0 !important;
}
/deep/ .vueperslides__arrow {
  outline: none !important;
  border: none;
  color: rgba(255,255,255,0.8);
  background: rgba(0,0,0,0.25);
  border-radius: 50%;
  width: 28px;
  height: 28px;
  font-size: 12px;
}

/* Body */
.pcard-body {
  padding: 14px 16px 16px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.pcard-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}

.pcard-category {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #8585ad;
  background-color: rgba(133, 133, 173, 0.1);
  border: 1px solid rgba(133, 133, 173, 0.25);
  padding: 2px 8px;
  border-radius: 20px;
}

.pcard-date {
  font-size: 12px;
  color: #999;
}

.pcard-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 2px;
  line-height: 1.3;
}

.pcard-subtitle {
  font-size: 13px;
  color: #999;
  margin-bottom: 10px;
}

/* Tags */
.pcard-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  flex: 1;
  align-content: flex-start;
}

.ptag {
  font-size: 11px;
  font-weight: 500;
  padding: 4px 10px;
  border-radius: 6px;
  background-color: #bbd4dd;
  color: #444;
  border: 1px solid #a8c4cf;
  line-height: 1.4;
  white-space: nowrap;
}

.ptag-dark {
  background-color: #3c4148;
  color: #ccc;
  border-color: #4a5058;
}

.ptag-more {
  background-color: transparent;
  color: #8585ad;
  border-color: rgba(133, 133, 173, 0.3);
}

/* Actions */
.pcard-actions {
  display: flex;
  gap: 8px;
  margin-top: 12px;
}

.pbtn {
  font-size: 13px;
  font-weight: 500;
  padding: 5px 16px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid transparent;
}

.pbtn-outline {
  background: transparent;
  border-color: #8585ad;
  color: #8585ad;
}

.pbtn-outline:hover {
  background-color: #8585ad;
  color: white;
}

.pbtn-outline-dark {
  border-color: #8585ad;
  color: #a0a0c8;
}

.pbtn-outline-dark:hover {
  background-color: #8585ad;
  color: white;
}

.pbtn-fill {
  background-color: transparent;
  border-color: #759CC9;
  color: #759CC9;
}

.pbtn-fill:hover {
  background-color: #759CC9;
  border-color: #759CC9;
  color: white;
}

/* Modal transition */
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
