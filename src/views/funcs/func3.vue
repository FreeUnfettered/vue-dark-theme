<template>
  <div>
    <blockquote>
      <p><i class="fas fa-fw fa-list mx-r4" /> 密码生成对比</p>
    </blockquote>
    <el-row :gutter="32">
      <el-col :span="24">
        <el-card class="mb">
          <el-button type="primary"><i class="fas fa-fw fa-plus mx-r4" />新建任务</el-button>&nbsp;
          <el-button type="primary"><i class="fas fa-fw fa-stop-circle mx-r4" />停止</el-button>&nbsp;
          <el-button type="primary"><i class="fas fa-fw fa-redo mx-r4" />重置</el-button>&nbsp;
        </el-card>
        <el-card class="logs">
          <div slot="header">任务日志</div>
          <template style="width: 110px">
            <ul class="infinite-list" v-infinite-scroll="load" style="overflow: auto">
            <li v-for="i in count" class="infinite-list-item">{{ i }}</li>
            </ul>
          </template>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="32">
      <el-col :span="12">
        <el-card class="progress">
          <div slot="header">生成进度</div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="percent">
          <div slot="header">命中比例</div>
          <el-progress :percentage="line":format="format"></el-progress>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        line: 0,
        count: 0
      }
    },
    mounted(){
      this.getLineData()
    },
    methods: {
      format(percentage) {
        return percentage >= 100 ? '完成' : `${percentage}%`;
      },
      getLineData() {
        setInterval(() => {
          this.line += 2
          console.log(this.line)
        }, 200);
      },
      load() {
        this.count += 2
      }
    }
  };
</script>
