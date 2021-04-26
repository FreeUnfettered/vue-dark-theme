<template>
  <div>
    <blockquote>
      <p style="font-size: 20px"><i class="fas fa-fw fa-list mx-r4" /> 密码生成对比</p>
    </blockquote>
    <el-row :gutter="20">
      <el-col :span="24">
        <el-card class="mb-13">
          <el-button type="primary"><i class="fas fa-fw fa-plus mx-r4" />新建任务</el-button>&nbsp;
          <el-button type="primary"><i class="fas fa-fw fa-stop-circle mx-r4" />停止</el-button>&nbsp;
          <el-button type="primary"><i class="fas fa-fw fa-redo mx-r4" />重置</el-button>&nbsp;
        </el-card>
        <el-card class="logs">
          <div slot="header" style="font-size: 15px">任务日志</div>
          <log-viewer :log="log" :loading="isLoading" style="height:100px; z-index:999; background-color:#121319;"/>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card class="progress">
          <div slot="header" style="font-size: 15px">生成进度</div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="percent">
          <div slot="header" style="font-size: 15px">命中比例</div>
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
        count: 0,
        log: 'Hashcat开始运行\ntest\ntest\ntest\ntest\ntest\ntest\ntest\ntest\ntest\ntest\ntest\ntest\ntest\ntest',
        isLoading: '正在运行中'
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
        }, 2000);
      },
      load() {
        this.count += 2
      }
    }
  };
</script>


<style land="scss" scoped>
.logs{
  margin-bottom: 10px;
}
</style>