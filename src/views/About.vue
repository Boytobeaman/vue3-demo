<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const name = ref('');
const location = ref('');
const blog = ref('');
const loading = ref(false);

const fetchProductDetails = async () => {
  try {
    loading.value = true;
    const response = await axios.get('https://api.github.com/users/octocat'); // 替换为实际API地址
    name.value = response.data.name ;
    location.value = response.data.location;
    blog.value = response.data.blog;
  } catch (error) {
    console.error('Error fetching user details:', error);
  } finally{
    loading.value = false;
  }
};

onMounted(() => {
  fetchProductDetails();
});


import { Edit } from '@element-plus/icons-vue';
</script>  


<template>  
    <div>  
        <h1 class="text-rose-800 text-3xl">About</h1> 
        <p>Welcome to the About page!</p>  
        <div class="p-4">
            <div class="p-1">
                <el-text class="mx-1" type="info">Element button</el-text>
            </div>
            <el-button type="success">Success</el-button>
            <!-- <h2 class="text-5xl">Loading...  </h2> -->
            <div v-loading="loading" class="loading-icon">
                <div>
                    <div class="text-xl font-medium text-black">{{ name }}</div>
                    <p class="text-gray-500">{{ location }}</p>
                    <p class="text-gray-500">{{ blog }}</p>
                </div>
            </div>

            <el-icon><Plus /></el-icon>
            <Edit />
            <el-icon><Minus /></el-icon>

            <el-icon :size="20">
                <Edit />
            </el-icon>
            <Delete style="width: 1em; height: 1em; margin-right: 8px" />
            <Share style="width: 1em; height: 1em; margin-right: 8px" />
        </div>
    </div>  
</template>  

