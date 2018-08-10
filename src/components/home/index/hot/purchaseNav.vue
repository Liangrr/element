<template>
<div>
    <div class="purchaseNav">
        <ul class="nav">
            <li @click="goBreakfast('Breakfast')">{{headline1}}</li>
            <li @click="goBreakfast('AfternoonTea')">{{headline2}}</li>
            <li @click="goBreakfast('Supper')">{{headline3}}</li>
            <li @click="goBreakfast('NightSnack')">{{headline4}}</li>
        </ul>
    </div>

    <!-- <div class="population">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAjVBMVEUAAAD/elv/elv/e1z/f2L/elv/elz/elv/elz/e1z/elz/e13/e13/fF7/eVv/elv/eVv/elz/eV3/f17/hGX/h2n/elz/elz/e13/h2L/ior/eVv/eVz/elz/eVv/elv/elv/eVz/eV3/elz/el3/el//fFz/fVz/fl3/fmD/elz/elz/el3/e13/eVsODppWAAAALnRSTlMA+/VzFOndwKKFbExEK/Hu0nplGRAIxrEzCwTg27q0p5eOfF9UPDcvJSLNm5JdK4j6TgAAASBJREFUOMuFlFeWgzAMRW1674SQNpOeTHn7X15oxrGJ4f7pnCsjWcJEwnUNskiGSN8sSQEAO1+QrmgwH8snAdZ8YR467FnpgB5/xskpepIZyQHjpnR8jKQqJ4y59Ktw7iY41WdnHeONL7K+TJ0gwjtHw6L/snOmEEgTgAaio0Oiy4nz6TSmHIQtUuHzvihUrEbpB2rufBhqTnyqHNNlobhZO4xoaf0QC7QGSQNjFxKSQkCTpW3RRN8QMAdpyy75yu9+UlM1Dr7lKdb0J80kawP5e+EglaYwgnIFzl5eAW8IDYv39mQOy3Wmu34mnCLp0gp5u3Txp7TR4LLQQAv1iISuAZS1sqEArBuZYLgRknp8W6JTTT5RXpxjf1C1zwrCeQF8G2H9gWJB3AAAAABJRU5ErkJggg==" alt="">
        <p v-for="(item,index) in PopulationData" :key="index">
            {{item.population}}人正在抢购
        </p> 
    </div> -->
    <Breakfast v-if="skip == 'Breakfast'"></Breakfast>
    <AfternoonTea v-if="skip == 'AfternoonTea'"></AfternoonTea>
    <Supper v-if="skip == 'Supper'"></Supper>
    <NightSnack v-if="skip == 'NightSnack'"></NightSnack>
</div>
</template>

<script>
import { getPopulationData } from "@/services/purchase.js";

import Breakfast from "./breakfast.vue";
import AfternoonTea from "./afternoonTea.vue";
import Supper from "./supper.vue";
import NightSnack from "./nightSnack.vue";

export default {
  components: {
    Breakfast,
    AfternoonTea,
    Supper,
    NightSnack
  },
  data() {
    return {
      headline1: "早餐",
      headline2: "下午茶",
      headline3: "晚餐",
      headline4: "宵夜",
      skip: "Breakfast",
      PopulationData: []
    };
  },
  methods: {
    goBreakfast(purpose) {
      this.skip = purpose;
    },
    goAfternoonTea(purpose) {
      this.skip = purpose;
    },
    goSupper(purpose) {
      this.skip = purpose;
    },
    goNightSnack(purpose) {
      this.skip = purpose;
    }
  },
  mounted() {
    getPopulationData().then(response => {
        this.PopulationData.push(response[0]);
    });
  }
};
</script>

<style scoped>
.nav {
  height: 40px;
  padding-top: 6px;
  border-bottom: 4px solid #ccc;
  border-image: linear-gradient(#ccc, #f6f6f6) 100 10;
}
.nav > li {
  margin: 0 3px;
  width: 22%;
  text-align: center;
  background: #f6f6f6;
  float: left;
  padding: 8px 0;
  color: #666;
}
.nav > li:nth-child(1) {
  margin-left: 13px;
}
/* .population{
    position: absolute;
    bottom: 50px;
    left: 0;
    display: flex;
    height: 50px;
    background: #333;
    width: 100%;
} */
</style>
